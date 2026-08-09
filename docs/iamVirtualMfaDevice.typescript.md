# `iamVirtualMfaDevice` Submodule <a name="`iamVirtualMfaDevice` Submodule" id="@cdktn/provider-awscc.iamVirtualMfaDevice"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamVirtualMfaDevice <a name="IamVirtualMfaDevice" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iam_virtual_mfa_device awscc_iam_virtual_mfa_device}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.Initializer"></a>

```typescript
import { iamVirtualMfaDevice } from '@cdktn/provider-awscc'

new iamVirtualMfaDevice.IamVirtualMfaDevice(scope: Construct, id: string, config: IamVirtualMfaDeviceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig">IamVirtualMfaDeviceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig">IamVirtualMfaDeviceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.resetVirtualMfaDeviceName">resetVirtualMfaDeviceName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.putTags"></a>

```typescript
public putTags(value: IResolvable | IamVirtualMfaDeviceTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTags">IamVirtualMfaDeviceTags</a>[]

---

##### `resetPath` <a name="resetPath" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetVirtualMfaDeviceName` <a name="resetVirtualMfaDeviceName" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.resetVirtualMfaDeviceName"></a>

```typescript
public resetVirtualMfaDeviceName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IamVirtualMfaDevice resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.isConstruct"></a>

```typescript
import { iamVirtualMfaDevice } from '@cdktn/provider-awscc'

iamVirtualMfaDevice.IamVirtualMfaDevice.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.isTerraformElement"></a>

```typescript
import { iamVirtualMfaDevice } from '@cdktn/provider-awscc'

iamVirtualMfaDevice.IamVirtualMfaDevice.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.isTerraformResource"></a>

```typescript
import { iamVirtualMfaDevice } from '@cdktn/provider-awscc'

iamVirtualMfaDevice.IamVirtualMfaDevice.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.generateConfigForImport"></a>

```typescript
import { iamVirtualMfaDevice } from '@cdktn/provider-awscc'

iamVirtualMfaDevice.IamVirtualMfaDevice.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IamVirtualMfaDevice resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IamVirtualMfaDevice to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IamVirtualMfaDevice that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iam_virtual_mfa_device#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IamVirtualMfaDevice to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.property.serialNumber">serialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsList">IamVirtualMfaDeviceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTags">IamVirtualMfaDeviceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.property.usersInput">usersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.property.virtualMfaDeviceNameInput">virtualMfaDeviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.property.users">users</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.property.virtualMfaDeviceName">virtualMfaDeviceName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.property.serialNumber"></a>

```typescript
public readonly serialNumber: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.property.tags"></a>

```typescript
public readonly tags: IamVirtualMfaDeviceTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsList">IamVirtualMfaDeviceTagsList</a>

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | IamVirtualMfaDeviceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTags">IamVirtualMfaDeviceTags</a>[]

---

##### `usersInput`<sup>Optional</sup> <a name="usersInput" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.property.usersInput"></a>

```typescript
public readonly usersInput: string[];
```

- *Type:* string[]

---

##### `virtualMfaDeviceNameInput`<sup>Optional</sup> <a name="virtualMfaDeviceNameInput" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.property.virtualMfaDeviceNameInput"></a>

```typescript
public readonly virtualMfaDeviceNameInput: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.property.users"></a>

```typescript
public readonly users: string[];
```

- *Type:* string[]

---

##### `virtualMfaDeviceName`<sup>Required</sup> <a name="virtualMfaDeviceName" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.property.virtualMfaDeviceName"></a>

```typescript
public readonly virtualMfaDeviceName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDevice.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IamVirtualMfaDeviceConfig <a name="IamVirtualMfaDeviceConfig" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.Initializer"></a>

```typescript
import { iamVirtualMfaDevice } from '@cdktn/provider-awscc'

const iamVirtualMfaDeviceConfig: iamVirtualMfaDevice.IamVirtualMfaDeviceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.users">users</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iam_virtual_mfa_device#users IamVirtualMfaDevice#users}. |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iam_virtual_mfa_device#path IamVirtualMfaDevice#path}. |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTags">IamVirtualMfaDeviceTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iam_virtual_mfa_device#tags IamVirtualMfaDevice#tags}. |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.virtualMfaDeviceName">virtualMfaDeviceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iam_virtual_mfa_device#virtual_mfa_device_name IamVirtualMfaDevice#virtual_mfa_device_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.users"></a>

```typescript
public readonly users: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iam_virtual_mfa_device#users IamVirtualMfaDevice#users}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iam_virtual_mfa_device#path IamVirtualMfaDevice#path}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | IamVirtualMfaDeviceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTags">IamVirtualMfaDeviceTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iam_virtual_mfa_device#tags IamVirtualMfaDevice#tags}.

---

##### `virtualMfaDeviceName`<sup>Optional</sup> <a name="virtualMfaDeviceName" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.virtualMfaDeviceName"></a>

```typescript
public readonly virtualMfaDeviceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iam_virtual_mfa_device#virtual_mfa_device_name IamVirtualMfaDevice#virtual_mfa_device_name}.

---

### IamVirtualMfaDeviceTags <a name="IamVirtualMfaDeviceTags" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTags.Initializer"></a>

```typescript
import { iamVirtualMfaDevice } from '@cdktn/provider-awscc'

const iamVirtualMfaDeviceTags: iamVirtualMfaDevice.IamVirtualMfaDeviceTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iam_virtual_mfa_device#key IamVirtualMfaDevice#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iam_virtual_mfa_device#value IamVirtualMfaDevice#value}

---

## Classes <a name="Classes" id="Classes"></a>

### IamVirtualMfaDeviceTagsList <a name="IamVirtualMfaDeviceTagsList" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsList.Initializer"></a>

```typescript
import { iamVirtualMfaDevice } from '@cdktn/provider-awscc'

new iamVirtualMfaDevice.IamVirtualMfaDeviceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsList.get"></a>

```typescript
public get(index: number): IamVirtualMfaDeviceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTags">IamVirtualMfaDeviceTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IamVirtualMfaDeviceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTags">IamVirtualMfaDeviceTags</a>[]

---


### IamVirtualMfaDeviceTagsOutputReference <a name="IamVirtualMfaDeviceTagsOutputReference" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsOutputReference.Initializer"></a>

```typescript
import { iamVirtualMfaDevice } from '@cdktn/provider-awscc'

new iamVirtualMfaDevice.IamVirtualMfaDeviceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTags">IamVirtualMfaDeviceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IamVirtualMfaDeviceTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iamVirtualMfaDevice.IamVirtualMfaDeviceTags">IamVirtualMfaDeviceTags</a>

---



