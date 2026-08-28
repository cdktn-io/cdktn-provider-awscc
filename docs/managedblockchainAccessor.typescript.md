# `managedblockchainAccessor` Submodule <a name="`managedblockchainAccessor` Submodule" id="@cdktn/provider-awscc.managedblockchainAccessor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedblockchainAccessor <a name="ManagedblockchainAccessor" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/managedblockchain_accessor awscc_managedblockchain_accessor}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.Initializer"></a>

```typescript
import { managedblockchainAccessor } from '@cdktn/provider-awscc'

new managedblockchainAccessor.ManagedblockchainAccessor(scope: Construct, id: string, config: ManagedblockchainAccessorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorConfig">ManagedblockchainAccessorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorConfig">ManagedblockchainAccessorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.resetNetworkType">resetNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.putTags"></a>

```typescript
public putTags(value: IResolvable | ManagedblockchainAccessorTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTags">ManagedblockchainAccessorTags</a>[]

---

##### `resetNetworkType` <a name="resetNetworkType" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.resetNetworkType"></a>

```typescript
public resetNetworkType(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ManagedblockchainAccessor resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.isConstruct"></a>

```typescript
import { managedblockchainAccessor } from '@cdktn/provider-awscc'

managedblockchainAccessor.ManagedblockchainAccessor.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.isTerraformElement"></a>

```typescript
import { managedblockchainAccessor } from '@cdktn/provider-awscc'

managedblockchainAccessor.ManagedblockchainAccessor.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.isTerraformResource"></a>

```typescript
import { managedblockchainAccessor } from '@cdktn/provider-awscc'

managedblockchainAccessor.ManagedblockchainAccessor.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.generateConfigForImport"></a>

```typescript
import { managedblockchainAccessor } from '@cdktn/provider-awscc'

managedblockchainAccessor.ManagedblockchainAccessor.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ManagedblockchainAccessor resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ManagedblockchainAccessor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ManagedblockchainAccessor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/managedblockchain_accessor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ManagedblockchainAccessor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.accessorId">accessorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.billingToken">billingToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.creationDate">creationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsList">ManagedblockchainAccessorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.accessorTypeInput">accessorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.networkTypeInput">networkTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTags">ManagedblockchainAccessorTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.accessorType">accessorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.networkType">networkType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accessorId`<sup>Required</sup> <a name="accessorId" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.accessorId"></a>

```typescript
public readonly accessorId: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `billingToken`<sup>Required</sup> <a name="billingToken" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.billingToken"></a>

```typescript
public readonly billingToken: string;
```

- *Type:* string

---

##### `creationDate`<sup>Required</sup> <a name="creationDate" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.creationDate"></a>

```typescript
public readonly creationDate: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.tags"></a>

```typescript
public readonly tags: ManagedblockchainAccessorTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsList">ManagedblockchainAccessorTagsList</a>

---

##### `accessorTypeInput`<sup>Optional</sup> <a name="accessorTypeInput" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.accessorTypeInput"></a>

```typescript
public readonly accessorTypeInput: string;
```

- *Type:* string

---

##### `networkTypeInput`<sup>Optional</sup> <a name="networkTypeInput" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.networkTypeInput"></a>

```typescript
public readonly networkTypeInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | ManagedblockchainAccessorTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTags">ManagedblockchainAccessorTags</a>[]

---

##### `accessorType`<sup>Required</sup> <a name="accessorType" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.accessorType"></a>

```typescript
public readonly accessorType: string;
```

- *Type:* string

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.networkType"></a>

```typescript
public readonly networkType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedblockchainAccessorConfig <a name="ManagedblockchainAccessorConfig" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorConfig.Initializer"></a>

```typescript
import { managedblockchainAccessor } from '@cdktn/provider-awscc'

const managedblockchainAccessorConfig: managedblockchainAccessor.ManagedblockchainAccessorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorConfig.property.accessorType">accessorType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/managedblockchain_accessor#accessor_type ManagedblockchainAccessor#accessor_type}. |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorConfig.property.networkType">networkType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/managedblockchain_accessor#network_type ManagedblockchainAccessor#network_type}. |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTags">ManagedblockchainAccessorTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accessorType`<sup>Required</sup> <a name="accessorType" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorConfig.property.accessorType"></a>

```typescript
public readonly accessorType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/managedblockchain_accessor#accessor_type ManagedblockchainAccessor#accessor_type}.

---

##### `networkType`<sup>Optional</sup> <a name="networkType" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorConfig.property.networkType"></a>

```typescript
public readonly networkType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/managedblockchain_accessor#network_type ManagedblockchainAccessor#network_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | ManagedblockchainAccessorTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTags">ManagedblockchainAccessorTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/managedblockchain_accessor#tags ManagedblockchainAccessor#tags}

---

### ManagedblockchainAccessorTags <a name="ManagedblockchainAccessorTags" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTags.Initializer"></a>

```typescript
import { managedblockchainAccessor } from '@cdktn/provider-awscc'

const managedblockchainAccessorTags: managedblockchainAccessor.ManagedblockchainAccessorTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/managedblockchain_accessor#key ManagedblockchainAccessor#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/managedblockchain_accessor#value ManagedblockchainAccessor#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedblockchainAccessorTagsList <a name="ManagedblockchainAccessorTagsList" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsList.Initializer"></a>

```typescript
import { managedblockchainAccessor } from '@cdktn/provider-awscc'

new managedblockchainAccessor.ManagedblockchainAccessorTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsList.get"></a>

```typescript
public get(index: number): ManagedblockchainAccessorTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTags">ManagedblockchainAccessorTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedblockchainAccessorTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTags">ManagedblockchainAccessorTags</a>[]

---


### ManagedblockchainAccessorTagsOutputReference <a name="ManagedblockchainAccessorTagsOutputReference" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.Initializer"></a>

```typescript
import { managedblockchainAccessor } from '@cdktn/provider-awscc'

new managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTags">ManagedblockchainAccessorTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedblockchainAccessorTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTags">ManagedblockchainAccessorTags</a>

---



