# `quicksightCustomPermissions` Submodule <a name="`quicksightCustomPermissions` Submodule" id="@cdktn/provider-awscc.quicksightCustomPermissions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightCustomPermissions <a name="QuicksightCustomPermissions" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions awscc_quicksight_custom_permissions}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer"></a>

```typescript
import { quicksightCustomPermissions } from '@cdktn/provider-awscc'

new quicksightCustomPermissions.QuicksightCustomPermissions(scope: Construct, id: string, config: QuicksightCustomPermissionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig">QuicksightCustomPermissionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig">QuicksightCustomPermissionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities">putCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.resetCapabilities">resetCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCapabilities` <a name="putCapabilities" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities"></a>

```typescript
public putCapabilities(value: QuicksightCustomPermissionsCapabilities): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities">QuicksightCustomPermissionsCapabilities</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putTags"></a>

```typescript
public putTags(value: IResolvable | QuicksightCustomPermissionsTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags">QuicksightCustomPermissionsTags</a>[]

---

##### `resetCapabilities` <a name="resetCapabilities" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.resetCapabilities"></a>

```typescript
public resetCapabilities(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a QuicksightCustomPermissions resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.isConstruct"></a>

```typescript
import { quicksightCustomPermissions } from '@cdktn/provider-awscc'

quicksightCustomPermissions.QuicksightCustomPermissions.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.isTerraformElement"></a>

```typescript
import { quicksightCustomPermissions } from '@cdktn/provider-awscc'

quicksightCustomPermissions.QuicksightCustomPermissions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.isTerraformResource"></a>

```typescript
import { quicksightCustomPermissions } from '@cdktn/provider-awscc'

quicksightCustomPermissions.QuicksightCustomPermissions.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.generateConfigForImport"></a>

```typescript
import { quicksightCustomPermissions } from '@cdktn/provider-awscc'

quicksightCustomPermissions.QuicksightCustomPermissions.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a QuicksightCustomPermissions resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the QuicksightCustomPermissions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing QuicksightCustomPermissions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the QuicksightCustomPermissions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.capabilities">capabilities</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference">QuicksightCustomPermissionsCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList">QuicksightCustomPermissionsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.awsAccountIdInput">awsAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.capabilitiesInput">capabilitiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities">QuicksightCustomPermissionsCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.customPermissionsNameInput">customPermissionsNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags">QuicksightCustomPermissionsTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.customPermissionsName">customPermissionsName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.capabilities"></a>

```typescript
public readonly capabilities: QuicksightCustomPermissionsCapabilitiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference">QuicksightCustomPermissionsCapabilitiesOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.tags"></a>

```typescript
public readonly tags: QuicksightCustomPermissionsTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList">QuicksightCustomPermissionsTagsList</a>

---

##### `awsAccountIdInput`<sup>Optional</sup> <a name="awsAccountIdInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.awsAccountIdInput"></a>

```typescript
public readonly awsAccountIdInput: string;
```

- *Type:* string

---

##### `capabilitiesInput`<sup>Optional</sup> <a name="capabilitiesInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.capabilitiesInput"></a>

```typescript
public readonly capabilitiesInput: IResolvable | QuicksightCustomPermissionsCapabilities;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities">QuicksightCustomPermissionsCapabilities</a>

---

##### `customPermissionsNameInput`<sup>Optional</sup> <a name="customPermissionsNameInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.customPermissionsNameInput"></a>

```typescript
public readonly customPermissionsNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | QuicksightCustomPermissionsTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags">QuicksightCustomPermissionsTags</a>[]

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

---

##### `customPermissionsName`<sup>Required</sup> <a name="customPermissionsName" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.customPermissionsName"></a>

```typescript
public readonly customPermissionsName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightCustomPermissionsCapabilities <a name="QuicksightCustomPermissionsCapabilities" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.Initializer"></a>

```typescript
import { quicksightCustomPermissions } from '@cdktn/provider-awscc'

const quicksightCustomPermissionsCapabilities: quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.accessAppsNativeDataStore">accessAppsNativeDataStore</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#access_apps_native_data_store QuicksightCustomPermissions#access_apps_native_data_store}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#action QuicksightCustomPermissions#action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.addOrRunAnomalyDetectionForAnalyses">addOrRunAnomalyDetectionForAnalyses</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#add_or_run_anomaly_detection_for_analyses QuicksightCustomPermissions#add_or_run_anomaly_detection_for_analyses}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.amazonBedrockArsAction">amazonBedrockArsAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#amazon_bedrock_ars_action QuicksightCustomPermissions#amazon_bedrock_ars_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.amazonBedrockFsAction">amazonBedrockFsAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#amazon_bedrock_fs_action QuicksightCustomPermissions#amazon_bedrock_fs_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.amazonBedrockKrsAction">amazonBedrockKrsAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#amazon_bedrock_krs_action QuicksightCustomPermissions#amazon_bedrock_krs_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.amazonSThreeAction">amazonSThreeAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#amazon_s_three_action QuicksightCustomPermissions#amazon_s_three_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.analysis">analysis</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#analysis QuicksightCustomPermissions#analysis}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.approveFlowShareRequests">approveFlowShareRequests</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#approve_flow_share_requests QuicksightCustomPermissions#approve_flow_share_requests}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.apps">apps</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#apps QuicksightCustomPermissions#apps}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.asanaAction">asanaAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#asana_action QuicksightCustomPermissions#asana_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.automate">automate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#automate QuicksightCustomPermissions#automate}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.bambooHrAction">bambooHrAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#bamboo_hr_action QuicksightCustomPermissions#bamboo_hr_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.boxAgentAction">boxAgentAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#box_agent_action QuicksightCustomPermissions#box_agent_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.buildCalculatedFieldWithQ">buildCalculatedFieldWithQ</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#build_calculated_field_with_q QuicksightCustomPermissions#build_calculated_field_with_q}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.canvaAgentAction">canvaAgentAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#canva_agent_action QuicksightCustomPermissions#canva_agent_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.chatAgent">chatAgent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#chat_agent QuicksightCustomPermissions#chat_agent}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.comprehendAction">comprehendAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#comprehend_action QuicksightCustomPermissions#comprehend_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.comprehendMedicalAction">comprehendMedicalAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#comprehend_medical_action QuicksightCustomPermissions#comprehend_medical_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.confluenceAction">confluenceAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#confluence_action QuicksightCustomPermissions#confluence_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateAmazonBedrockArsAction">createAndUpdateAmazonBedrockArsAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_amazon_bedrock_ars_action QuicksightCustomPermissions#create_and_update_amazon_bedrock_ars_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateAmazonBedrockFsAction">createAndUpdateAmazonBedrockFsAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_amazon_bedrock_fs_action QuicksightCustomPermissions#create_and_update_amazon_bedrock_fs_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateAmazonBedrockKrsAction">createAndUpdateAmazonBedrockKrsAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_amazon_bedrock_krs_action QuicksightCustomPermissions#create_and_update_amazon_bedrock_krs_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateAmazonSThreeAction">createAndUpdateAmazonSThreeAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_amazon_s_three_action QuicksightCustomPermissions#create_and_update_amazon_s_three_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateApps">createAndUpdateApps</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_apps QuicksightCustomPermissions#create_and_update_apps}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateAsanaAction">createAndUpdateAsanaAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_asana_action QuicksightCustomPermissions#create_and_update_asana_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateBambooHrAction">createAndUpdateBambooHrAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_bamboo_hr_action QuicksightCustomPermissions#create_and_update_bamboo_hr_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateBoxAgentAction">createAndUpdateBoxAgentAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_box_agent_action QuicksightCustomPermissions#create_and_update_box_agent_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateCanvaAgentAction">createAndUpdateCanvaAgentAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_canva_agent_action QuicksightCustomPermissions#create_and_update_canva_agent_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateComprehendAction">createAndUpdateComprehendAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_comprehend_action QuicksightCustomPermissions#create_and_update_comprehend_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateComprehendMedicalAction">createAndUpdateComprehendMedicalAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_comprehend_medical_action QuicksightCustomPermissions#create_and_update_comprehend_medical_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateConfluenceAction">createAndUpdateConfluenceAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_confluence_action QuicksightCustomPermissions#create_and_update_confluence_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateDashboardEmailReports">createAndUpdateDashboardEmailReports</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_dashboard_email_reports QuicksightCustomPermissions#create_and_update_dashboard_email_reports}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateDatasets">createAndUpdateDatasets</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_datasets QuicksightCustomPermissions#create_and_update_datasets}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateDataSources">createAndUpdateDataSources</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_data_sources QuicksightCustomPermissions#create_and_update_data_sources}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateFactSetAction">createAndUpdateFactSetAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_fact_set_action QuicksightCustomPermissions#create_and_update_fact_set_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateGenericHttpAction">createAndUpdateGenericHttpAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_generic_http_action QuicksightCustomPermissions#create_and_update_generic_http_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateGithubAction">createAndUpdateGithubAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_github_action QuicksightCustomPermissions#create_and_update_github_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateGoogleCalendarAction">createAndUpdateGoogleCalendarAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_google_calendar_action QuicksightCustomPermissions#create_and_update_google_calendar_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateHubspotAction">createAndUpdateHubspotAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_hubspot_action QuicksightCustomPermissions#create_and_update_hubspot_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateHuggingFaceAction">createAndUpdateHuggingFaceAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_hugging_face_action QuicksightCustomPermissions#create_and_update_hugging_face_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateIntercomAction">createAndUpdateIntercomAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_intercom_action QuicksightCustomPermissions#create_and_update_intercom_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateJiraAction">createAndUpdateJiraAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_jira_action QuicksightCustomPermissions#create_and_update_jira_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateKnowledgeBases">createAndUpdateKnowledgeBases</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_knowledge_bases QuicksightCustomPermissions#create_and_update_knowledge_bases}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateLinearAction">createAndUpdateLinearAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_linear_action QuicksightCustomPermissions#create_and_update_linear_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateMcpAction">createAndUpdateMcpAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_mcp_action QuicksightCustomPermissions#create_and_update_mcp_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateMondayAction">createAndUpdateMondayAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_monday_action QuicksightCustomPermissions#create_and_update_monday_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateMsExchangeAction">createAndUpdateMsExchangeAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_ms_exchange_action QuicksightCustomPermissions#create_and_update_ms_exchange_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateMsTeamsAction">createAndUpdateMsTeamsAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_ms_teams_action QuicksightCustomPermissions#create_and_update_ms_teams_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateNewRelicAction">createAndUpdateNewRelicAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_new_relic_action QuicksightCustomPermissions#create_and_update_new_relic_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateNotionAction">createAndUpdateNotionAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_notion_action QuicksightCustomPermissions#create_and_update_notion_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateOneDriveAction">createAndUpdateOneDriveAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_one_drive_action QuicksightCustomPermissions#create_and_update_one_drive_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateOpenApiAction">createAndUpdateOpenApiAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_open_api_action QuicksightCustomPermissions#create_and_update_open_api_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdatePagerDutyAction">createAndUpdatePagerDutyAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_pager_duty_action QuicksightCustomPermissions#create_and_update_pager_duty_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSalesforceAction">createAndUpdateSalesforceAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_salesforce_action QuicksightCustomPermissions#create_and_update_salesforce_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSandPGlobalEnergyAction">createAndUpdateSandPGlobalEnergyAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_sand_p_global_energy_action QuicksightCustomPermissions#create_and_update_sand_p_global_energy_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSandPgmiAction">createAndUpdateSandPgmiAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_sand_pgmi_action QuicksightCustomPermissions#create_and_update_sand_pgmi_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSapBillOfMaterialAction">createAndUpdateSapBillOfMaterialAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_sap_bill_of_material_action QuicksightCustomPermissions#create_and_update_sap_bill_of_material_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSapBusinessPartnerAction">createAndUpdateSapBusinessPartnerAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_sap_business_partner_action QuicksightCustomPermissions#create_and_update_sap_business_partner_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSapMaterialStockAction">createAndUpdateSapMaterialStockAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_sap_material_stock_action QuicksightCustomPermissions#create_and_update_sap_material_stock_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSapPhysicalInventoryAction">createAndUpdateSapPhysicalInventoryAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_sap_physical_inventory_action QuicksightCustomPermissions#create_and_update_sap_physical_inventory_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSapProductMasterDataAction">createAndUpdateSapProductMasterDataAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_sap_product_master_data_action QuicksightCustomPermissions#create_and_update_sap_product_master_data_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateServiceNowAction">createAndUpdateServiceNowAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_service_now_action QuicksightCustomPermissions#create_and_update_service_now_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSharePointAction">createAndUpdateSharePointAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_share_point_action QuicksightCustomPermissions#create_and_update_share_point_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSlackAction">createAndUpdateSlackAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_slack_action QuicksightCustomPermissions#create_and_update_slack_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSmartsheetAction">createAndUpdateSmartsheetAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_smartsheet_action QuicksightCustomPermissions#create_and_update_smartsheet_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateTextractAction">createAndUpdateTextractAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_textract_action QuicksightCustomPermissions#create_and_update_textract_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateThemes">createAndUpdateThemes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_themes QuicksightCustomPermissions#create_and_update_themes}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateThresholdAlerts">createAndUpdateThresholdAlerts</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_threshold_alerts QuicksightCustomPermissions#create_and_update_threshold_alerts}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateZendeskAction">createAndUpdateZendeskAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_zendesk_action QuicksightCustomPermissions#create_and_update_zendesk_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createChatAgents">createChatAgents</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_chat_agents QuicksightCustomPermissions#create_chat_agents}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createDashboardExecutiveSummaryWithQ">createDashboardExecutiveSummaryWithQ</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_dashboard_executive_summary_with_q QuicksightCustomPermissions#create_dashboard_executive_summary_with_q}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createSharedFolders">createSharedFolders</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_shared_folders QuicksightCustomPermissions#create_shared_folders}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createSpaces">createSpaces</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_spaces QuicksightCustomPermissions#create_spaces}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createSpiceDataset">createSpiceDataset</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_spice_dataset QuicksightCustomPermissions#create_spice_dataset}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.dashboard">dashboard</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#dashboard QuicksightCustomPermissions#dashboard}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.editVisualWithQ">editVisualWithQ</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#edit_visual_with_q QuicksightCustomPermissions#edit_visual_with_q}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToCsv">exportToCsv</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#export_to_csv QuicksightCustomPermissions#export_to_csv}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToCsvInScheduledReports">exportToCsvInScheduledReports</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#export_to_csv_in_scheduled_reports QuicksightCustomPermissions#export_to_csv_in_scheduled_reports}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToExcel">exportToExcel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#export_to_excel QuicksightCustomPermissions#export_to_excel}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToExcelInScheduledReports">exportToExcelInScheduledReports</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#export_to_excel_in_scheduled_reports QuicksightCustomPermissions#export_to_excel_in_scheduled_reports}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToPdf">exportToPdf</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#export_to_pdf QuicksightCustomPermissions#export_to_pdf}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToPdfInScheduledReports">exportToPdfInScheduledReports</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#export_to_pdf_in_scheduled_reports QuicksightCustomPermissions#export_to_pdf_in_scheduled_reports}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.extension">extension</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#extension QuicksightCustomPermissions#extension}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.factSetAction">factSetAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#fact_set_action QuicksightCustomPermissions#fact_set_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.flow">flow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#flow QuicksightCustomPermissions#flow}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.genericHttpAction">genericHttpAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#generic_http_action QuicksightCustomPermissions#generic_http_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.githubAction">githubAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#github_action QuicksightCustomPermissions#github_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.googleCalendarAction">googleCalendarAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#google_calendar_action QuicksightCustomPermissions#google_calendar_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.hubspotAction">hubspotAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#hubspot_action QuicksightCustomPermissions#hubspot_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.huggingFaceAction">huggingFaceAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#hugging_face_action QuicksightCustomPermissions#hugging_face_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.includeContentInScheduledReportsEmail">includeContentInScheduledReportsEmail</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#include_content_in_scheduled_reports_email QuicksightCustomPermissions#include_content_in_scheduled_reports_email}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.intercomAction">intercomAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#intercom_action QuicksightCustomPermissions#intercom_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.invokeAppsAiInference">invokeAppsAiInference</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#invoke_apps_ai_inference QuicksightCustomPermissions#invoke_apps_ai_inference}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.jiraAction">jiraAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#jira_action QuicksightCustomPermissions#jira_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.knowledgeBase">knowledgeBase</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#knowledge_base QuicksightCustomPermissions#knowledge_base}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.linearAction">linearAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#linear_action QuicksightCustomPermissions#linear_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.manageSharedFolders">manageSharedFolders</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#manage_shared_folders QuicksightCustomPermissions#manage_shared_folders}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.mcpAction">mcpAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#mcp_action QuicksightCustomPermissions#mcp_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.mondayAction">mondayAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#monday_action QuicksightCustomPermissions#monday_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.msExchangeAction">msExchangeAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#ms_exchange_action QuicksightCustomPermissions#ms_exchange_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.msTeamsAction">msTeamsAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#ms_teams_action QuicksightCustomPermissions#ms_teams_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.newRelicAction">newRelicAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#new_relic_action QuicksightCustomPermissions#new_relic_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.notionAction">notionAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#notion_action QuicksightCustomPermissions#notion_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.oneDriveAction">oneDriveAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#one_drive_action QuicksightCustomPermissions#one_drive_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.openApiAction">openApiAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#open_api_action QuicksightCustomPermissions#open_api_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.pagerDutyAction">pagerDutyAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#pager_duty_action QuicksightCustomPermissions#pager_duty_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.performFlowUiTask">performFlowUiTask</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#perform_flow_ui_task QuicksightCustomPermissions#perform_flow_ui_task}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.printReports">printReports</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#print_reports QuicksightCustomPermissions#print_reports}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.publishWithoutApproval">publishWithoutApproval</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#publish_without_approval QuicksightCustomPermissions#publish_without_approval}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.renameSharedFolders">renameSharedFolders</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#rename_shared_folders QuicksightCustomPermissions#rename_shared_folders}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.research">research</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#research QuicksightCustomPermissions#research}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.salesforceAction">salesforceAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#salesforce_action QuicksightCustomPermissions#salesforce_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sandPGlobalEnergyAction">sandPGlobalEnergyAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#sand_p_global_energy_action QuicksightCustomPermissions#sand_p_global_energy_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sandPgmiAction">sandPgmiAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#sand_pgmi_action QuicksightCustomPermissions#sand_pgmi_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sapBillOfMaterialAction">sapBillOfMaterialAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#sap_bill_of_material_action QuicksightCustomPermissions#sap_bill_of_material_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sapBusinessPartnerAction">sapBusinessPartnerAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#sap_business_partner_action QuicksightCustomPermissions#sap_business_partner_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sapMaterialStockAction">sapMaterialStockAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#sap_material_stock_action QuicksightCustomPermissions#sap_material_stock_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sapPhysicalInventoryAction">sapPhysicalInventoryAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#sap_physical_inventory_action QuicksightCustomPermissions#sap_physical_inventory_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sapProductMasterDataAction">sapProductMasterDataAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#sap_product_master_data_action QuicksightCustomPermissions#sap_product_master_data_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.serviceNowAction">serviceNowAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#service_now_action QuicksightCustomPermissions#service_now_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareAmazonBedrockArsAction">shareAmazonBedrockArsAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_amazon_bedrock_ars_action QuicksightCustomPermissions#share_amazon_bedrock_ars_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareAmazonBedrockFsAction">shareAmazonBedrockFsAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_amazon_bedrock_fs_action QuicksightCustomPermissions#share_amazon_bedrock_fs_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareAmazonBedrockKrsAction">shareAmazonBedrockKrsAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_amazon_bedrock_krs_action QuicksightCustomPermissions#share_amazon_bedrock_krs_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareAmazonSThreeAction">shareAmazonSThreeAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_amazon_s_three_action QuicksightCustomPermissions#share_amazon_s_three_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareAnalyses">shareAnalyses</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_analyses QuicksightCustomPermissions#share_analyses}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareApps">shareApps</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_apps QuicksightCustomPermissions#share_apps}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareAsanaAction">shareAsanaAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_asana_action QuicksightCustomPermissions#share_asana_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareBambooHrAction">shareBambooHrAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_bamboo_hr_action QuicksightCustomPermissions#share_bamboo_hr_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareBoxAgentAction">shareBoxAgentAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_box_agent_action QuicksightCustomPermissions#share_box_agent_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareCanvaAgentAction">shareCanvaAgentAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_canva_agent_action QuicksightCustomPermissions#share_canva_agent_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareChatAgents">shareChatAgents</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_chat_agents QuicksightCustomPermissions#share_chat_agents}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareComprehendAction">shareComprehendAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_comprehend_action QuicksightCustomPermissions#share_comprehend_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareComprehendMedicalAction">shareComprehendMedicalAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_comprehend_medical_action QuicksightCustomPermissions#share_comprehend_medical_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareConfluenceAction">shareConfluenceAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_confluence_action QuicksightCustomPermissions#share_confluence_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareDashboards">shareDashboards</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_dashboards QuicksightCustomPermissions#share_dashboards}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareDatasets">shareDatasets</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_datasets QuicksightCustomPermissions#share_datasets}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareDataSources">shareDataSources</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_data_sources QuicksightCustomPermissions#share_data_sources}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareFactSetAction">shareFactSetAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_fact_set_action QuicksightCustomPermissions#share_fact_set_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareGenericHttpAction">shareGenericHttpAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_generic_http_action QuicksightCustomPermissions#share_generic_http_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareGithubAction">shareGithubAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_github_action QuicksightCustomPermissions#share_github_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareGoogleCalendarAction">shareGoogleCalendarAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_google_calendar_action QuicksightCustomPermissions#share_google_calendar_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareHubspotAction">shareHubspotAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_hubspot_action QuicksightCustomPermissions#share_hubspot_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareHuggingFaceAction">shareHuggingFaceAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_hugging_face_action QuicksightCustomPermissions#share_hugging_face_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareIntercomAction">shareIntercomAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_intercom_action QuicksightCustomPermissions#share_intercom_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareJiraAction">shareJiraAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_jira_action QuicksightCustomPermissions#share_jira_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareKnowledgeBases">shareKnowledgeBases</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_knowledge_bases QuicksightCustomPermissions#share_knowledge_bases}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareLinearAction">shareLinearAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_linear_action QuicksightCustomPermissions#share_linear_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareMcpAction">shareMcpAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_mcp_action QuicksightCustomPermissions#share_mcp_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareMondayAction">shareMondayAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_monday_action QuicksightCustomPermissions#share_monday_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareMsExchangeAction">shareMsExchangeAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_ms_exchange_action QuicksightCustomPermissions#share_ms_exchange_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareMsTeamsAction">shareMsTeamsAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_ms_teams_action QuicksightCustomPermissions#share_ms_teams_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareNewRelicAction">shareNewRelicAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_new_relic_action QuicksightCustomPermissions#share_new_relic_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareNotionAction">shareNotionAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_notion_action QuicksightCustomPermissions#share_notion_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareOneDriveAction">shareOneDriveAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_one_drive_action QuicksightCustomPermissions#share_one_drive_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareOpenApiAction">shareOpenApiAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_open_api_action QuicksightCustomPermissions#share_open_api_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sharePagerDutyAction">sharePagerDutyAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_pager_duty_action QuicksightCustomPermissions#share_pager_duty_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sharePointAction">sharePointAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_point_action QuicksightCustomPermissions#share_point_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSalesforceAction">shareSalesforceAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_salesforce_action QuicksightCustomPermissions#share_salesforce_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSandPGlobalEnergyAction">shareSandPGlobalEnergyAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_sand_p_global_energy_action QuicksightCustomPermissions#share_sand_p_global_energy_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSandPgmiAction">shareSandPgmiAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_sand_pgmi_action QuicksightCustomPermissions#share_sand_pgmi_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSapBillOfMaterialAction">shareSapBillOfMaterialAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_sap_bill_of_material_action QuicksightCustomPermissions#share_sap_bill_of_material_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSapBusinessPartnerAction">shareSapBusinessPartnerAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_sap_business_partner_action QuicksightCustomPermissions#share_sap_business_partner_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSapMaterialStockAction">shareSapMaterialStockAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_sap_material_stock_action QuicksightCustomPermissions#share_sap_material_stock_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSapPhysicalInventoryAction">shareSapPhysicalInventoryAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_sap_physical_inventory_action QuicksightCustomPermissions#share_sap_physical_inventory_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSapProductMasterDataAction">shareSapProductMasterDataAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_sap_product_master_data_action QuicksightCustomPermissions#share_sap_product_master_data_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareServiceNowAction">shareServiceNowAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_service_now_action QuicksightCustomPermissions#share_service_now_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSharePointAction">shareSharePointAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_share_point_action QuicksightCustomPermissions#share_share_point_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSlackAction">shareSlackAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_slack_action QuicksightCustomPermissions#share_slack_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSmartsheetAction">shareSmartsheetAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_smartsheet_action QuicksightCustomPermissions#share_smartsheet_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSpaces">shareSpaces</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_spaces QuicksightCustomPermissions#share_spaces}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareTextractAction">shareTextractAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_textract_action QuicksightCustomPermissions#share_textract_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareZendeskAction">shareZendeskAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_zendesk_action QuicksightCustomPermissions#share_zendesk_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.slackAction">slackAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#slack_action QuicksightCustomPermissions#slack_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.smartsheetAction">smartsheetAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#smartsheet_action QuicksightCustomPermissions#smartsheet_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.space">space</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#space QuicksightCustomPermissions#space}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.subscribeDashboardEmailReports">subscribeDashboardEmailReports</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#subscribe_dashboard_email_reports QuicksightCustomPermissions#subscribe_dashboard_email_reports}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.textractAction">textractAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#textract_action QuicksightCustomPermissions#textract_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.topic">topic</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#topic QuicksightCustomPermissions#topic}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useAgentWebSearch">useAgentWebSearch</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_agent_web_search QuicksightCustomPermissions#use_agent_web_search}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useAmazonBedrockArsAction">useAmazonBedrockArsAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_amazon_bedrock_ars_action QuicksightCustomPermissions#use_amazon_bedrock_ars_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useAmazonBedrockFsAction">useAmazonBedrockFsAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_amazon_bedrock_fs_action QuicksightCustomPermissions#use_amazon_bedrock_fs_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useAmazonBedrockKrsAction">useAmazonBedrockKrsAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_amazon_bedrock_krs_action QuicksightCustomPermissions#use_amazon_bedrock_krs_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useAmazonSThreeAction">useAmazonSThreeAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_amazon_s_three_action QuicksightCustomPermissions#use_amazon_s_three_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useAsanaAction">useAsanaAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_asana_action QuicksightCustomPermissions#use_asana_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useBambooHrAction">useBambooHrAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_bamboo_hr_action QuicksightCustomPermissions#use_bamboo_hr_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useBedrockModels">useBedrockModels</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_bedrock_models QuicksightCustomPermissions#use_bedrock_models}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useBoxAgentAction">useBoxAgentAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_box_agent_action QuicksightCustomPermissions#use_box_agent_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useCanvaAgentAction">useCanvaAgentAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_canva_agent_action QuicksightCustomPermissions#use_canva_agent_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useComprehendAction">useComprehendAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_comprehend_action QuicksightCustomPermissions#use_comprehend_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useComprehendMedicalAction">useComprehendMedicalAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_comprehend_medical_action QuicksightCustomPermissions#use_comprehend_medical_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useConfluenceAction">useConfluenceAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_confluence_action QuicksightCustomPermissions#use_confluence_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useFactSetAction">useFactSetAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_fact_set_action QuicksightCustomPermissions#use_fact_set_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useGenericHttpAction">useGenericHttpAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_generic_http_action QuicksightCustomPermissions#use_generic_http_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useGithubAction">useGithubAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_github_action QuicksightCustomPermissions#use_github_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useGoogleCalendarAction">useGoogleCalendarAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_google_calendar_action QuicksightCustomPermissions#use_google_calendar_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useHubspotAction">useHubspotAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_hubspot_action QuicksightCustomPermissions#use_hubspot_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useHuggingFaceAction">useHuggingFaceAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_hugging_face_action QuicksightCustomPermissions#use_hugging_face_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useIntercomAction">useIntercomAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_intercom_action QuicksightCustomPermissions#use_intercom_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useJiraAction">useJiraAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_jira_action QuicksightCustomPermissions#use_jira_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useLinearAction">useLinearAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_linear_action QuicksightCustomPermissions#use_linear_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useMcpAction">useMcpAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_mcp_action QuicksightCustomPermissions#use_mcp_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useMondayAction">useMondayAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_monday_action QuicksightCustomPermissions#use_monday_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useMsExchangeAction">useMsExchangeAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_ms_exchange_action QuicksightCustomPermissions#use_ms_exchange_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useMsTeamsAction">useMsTeamsAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_ms_teams_action QuicksightCustomPermissions#use_ms_teams_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useNewRelicAction">useNewRelicAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_new_relic_action QuicksightCustomPermissions#use_new_relic_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useNotionAction">useNotionAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_notion_action QuicksightCustomPermissions#use_notion_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useOneDriveAction">useOneDriveAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_one_drive_action QuicksightCustomPermissions#use_one_drive_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useOpenApiAction">useOpenApiAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_open_api_action QuicksightCustomPermissions#use_open_api_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.usePagerDutyAction">usePagerDutyAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_pager_duty_action QuicksightCustomPermissions#use_pager_duty_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSalesforceAction">useSalesforceAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_salesforce_action QuicksightCustomPermissions#use_salesforce_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSandPGlobalEnergyAction">useSandPGlobalEnergyAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_sand_p_global_energy_action QuicksightCustomPermissions#use_sand_p_global_energy_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSandPgmiAction">useSandPgmiAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_sand_pgmi_action QuicksightCustomPermissions#use_sand_pgmi_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSapBillOfMaterialAction">useSapBillOfMaterialAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_sap_bill_of_material_action QuicksightCustomPermissions#use_sap_bill_of_material_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSapBusinessPartnerAction">useSapBusinessPartnerAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_sap_business_partner_action QuicksightCustomPermissions#use_sap_business_partner_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSapMaterialStockAction">useSapMaterialStockAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_sap_material_stock_action QuicksightCustomPermissions#use_sap_material_stock_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSapPhysicalInventoryAction">useSapPhysicalInventoryAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_sap_physical_inventory_action QuicksightCustomPermissions#use_sap_physical_inventory_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSapProductMasterDataAction">useSapProductMasterDataAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_sap_product_master_data_action QuicksightCustomPermissions#use_sap_product_master_data_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useServiceNowAction">useServiceNowAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_service_now_action QuicksightCustomPermissions#use_service_now_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSharePointAction">useSharePointAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_share_point_action QuicksightCustomPermissions#use_share_point_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSlackAction">useSlackAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_slack_action QuicksightCustomPermissions#use_slack_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSmartsheetAction">useSmartsheetAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_smartsheet_action QuicksightCustomPermissions#use_smartsheet_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useTextractAction">useTextractAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_textract_action QuicksightCustomPermissions#use_textract_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useZendeskAction">useZendeskAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_zendesk_action QuicksightCustomPermissions#use_zendesk_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.viewAccountSpiceCapacity">viewAccountSpiceCapacity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#view_account_spice_capacity QuicksightCustomPermissions#view_account_spice_capacity}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.zendeskAction">zendeskAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#zendesk_action QuicksightCustomPermissions#zendesk_action}. |

---

##### `accessAppsNativeDataStore`<sup>Optional</sup> <a name="accessAppsNativeDataStore" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.accessAppsNativeDataStore"></a>

```typescript
public readonly accessAppsNativeDataStore: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#access_apps_native_data_store QuicksightCustomPermissions#access_apps_native_data_store}.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#action QuicksightCustomPermissions#action}.

---

##### `addOrRunAnomalyDetectionForAnalyses`<sup>Optional</sup> <a name="addOrRunAnomalyDetectionForAnalyses" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.addOrRunAnomalyDetectionForAnalyses"></a>

```typescript
public readonly addOrRunAnomalyDetectionForAnalyses: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#add_or_run_anomaly_detection_for_analyses QuicksightCustomPermissions#add_or_run_anomaly_detection_for_analyses}.

---

##### `amazonBedrockArsAction`<sup>Optional</sup> <a name="amazonBedrockArsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.amazonBedrockArsAction"></a>

```typescript
public readonly amazonBedrockArsAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#amazon_bedrock_ars_action QuicksightCustomPermissions#amazon_bedrock_ars_action}.

---

##### `amazonBedrockFsAction`<sup>Optional</sup> <a name="amazonBedrockFsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.amazonBedrockFsAction"></a>

```typescript
public readonly amazonBedrockFsAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#amazon_bedrock_fs_action QuicksightCustomPermissions#amazon_bedrock_fs_action}.

---

##### `amazonBedrockKrsAction`<sup>Optional</sup> <a name="amazonBedrockKrsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.amazonBedrockKrsAction"></a>

```typescript
public readonly amazonBedrockKrsAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#amazon_bedrock_krs_action QuicksightCustomPermissions#amazon_bedrock_krs_action}.

---

##### `amazonSThreeAction`<sup>Optional</sup> <a name="amazonSThreeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.amazonSThreeAction"></a>

```typescript
public readonly amazonSThreeAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#amazon_s_three_action QuicksightCustomPermissions#amazon_s_three_action}.

---

##### `analysis`<sup>Optional</sup> <a name="analysis" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.analysis"></a>

```typescript
public readonly analysis: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#analysis QuicksightCustomPermissions#analysis}.

---

##### `approveFlowShareRequests`<sup>Optional</sup> <a name="approveFlowShareRequests" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.approveFlowShareRequests"></a>

```typescript
public readonly approveFlowShareRequests: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#approve_flow_share_requests QuicksightCustomPermissions#approve_flow_share_requests}.

---

##### `apps`<sup>Optional</sup> <a name="apps" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.apps"></a>

```typescript
public readonly apps: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#apps QuicksightCustomPermissions#apps}.

---

##### `asanaAction`<sup>Optional</sup> <a name="asanaAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.asanaAction"></a>

```typescript
public readonly asanaAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#asana_action QuicksightCustomPermissions#asana_action}.

---

##### `automate`<sup>Optional</sup> <a name="automate" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.automate"></a>

```typescript
public readonly automate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#automate QuicksightCustomPermissions#automate}.

---

##### `bambooHrAction`<sup>Optional</sup> <a name="bambooHrAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.bambooHrAction"></a>

```typescript
public readonly bambooHrAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#bamboo_hr_action QuicksightCustomPermissions#bamboo_hr_action}.

---

##### `boxAgentAction`<sup>Optional</sup> <a name="boxAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.boxAgentAction"></a>

```typescript
public readonly boxAgentAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#box_agent_action QuicksightCustomPermissions#box_agent_action}.

---

##### `buildCalculatedFieldWithQ`<sup>Optional</sup> <a name="buildCalculatedFieldWithQ" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.buildCalculatedFieldWithQ"></a>

```typescript
public readonly buildCalculatedFieldWithQ: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#build_calculated_field_with_q QuicksightCustomPermissions#build_calculated_field_with_q}.

---

##### `canvaAgentAction`<sup>Optional</sup> <a name="canvaAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.canvaAgentAction"></a>

```typescript
public readonly canvaAgentAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#canva_agent_action QuicksightCustomPermissions#canva_agent_action}.

---

##### `chatAgent`<sup>Optional</sup> <a name="chatAgent" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.chatAgent"></a>

```typescript
public readonly chatAgent: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#chat_agent QuicksightCustomPermissions#chat_agent}.

---

##### `comprehendAction`<sup>Optional</sup> <a name="comprehendAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.comprehendAction"></a>

```typescript
public readonly comprehendAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#comprehend_action QuicksightCustomPermissions#comprehend_action}.

---

##### `comprehendMedicalAction`<sup>Optional</sup> <a name="comprehendMedicalAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.comprehendMedicalAction"></a>

```typescript
public readonly comprehendMedicalAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#comprehend_medical_action QuicksightCustomPermissions#comprehend_medical_action}.

---

##### `confluenceAction`<sup>Optional</sup> <a name="confluenceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.confluenceAction"></a>

```typescript
public readonly confluenceAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#confluence_action QuicksightCustomPermissions#confluence_action}.

---

##### `createAndUpdateAmazonBedrockArsAction`<sup>Optional</sup> <a name="createAndUpdateAmazonBedrockArsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateAmazonBedrockArsAction"></a>

```typescript
public readonly createAndUpdateAmazonBedrockArsAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_amazon_bedrock_ars_action QuicksightCustomPermissions#create_and_update_amazon_bedrock_ars_action}.

---

##### `createAndUpdateAmazonBedrockFsAction`<sup>Optional</sup> <a name="createAndUpdateAmazonBedrockFsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateAmazonBedrockFsAction"></a>

```typescript
public readonly createAndUpdateAmazonBedrockFsAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_amazon_bedrock_fs_action QuicksightCustomPermissions#create_and_update_amazon_bedrock_fs_action}.

---

##### `createAndUpdateAmazonBedrockKrsAction`<sup>Optional</sup> <a name="createAndUpdateAmazonBedrockKrsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateAmazonBedrockKrsAction"></a>

```typescript
public readonly createAndUpdateAmazonBedrockKrsAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_amazon_bedrock_krs_action QuicksightCustomPermissions#create_and_update_amazon_bedrock_krs_action}.

---

##### `createAndUpdateAmazonSThreeAction`<sup>Optional</sup> <a name="createAndUpdateAmazonSThreeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateAmazonSThreeAction"></a>

```typescript
public readonly createAndUpdateAmazonSThreeAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_amazon_s_three_action QuicksightCustomPermissions#create_and_update_amazon_s_three_action}.

---

##### `createAndUpdateApps`<sup>Optional</sup> <a name="createAndUpdateApps" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateApps"></a>

```typescript
public readonly createAndUpdateApps: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_apps QuicksightCustomPermissions#create_and_update_apps}.

---

##### `createAndUpdateAsanaAction`<sup>Optional</sup> <a name="createAndUpdateAsanaAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateAsanaAction"></a>

```typescript
public readonly createAndUpdateAsanaAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_asana_action QuicksightCustomPermissions#create_and_update_asana_action}.

---

##### `createAndUpdateBambooHrAction`<sup>Optional</sup> <a name="createAndUpdateBambooHrAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateBambooHrAction"></a>

```typescript
public readonly createAndUpdateBambooHrAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_bamboo_hr_action QuicksightCustomPermissions#create_and_update_bamboo_hr_action}.

---

##### `createAndUpdateBoxAgentAction`<sup>Optional</sup> <a name="createAndUpdateBoxAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateBoxAgentAction"></a>

```typescript
public readonly createAndUpdateBoxAgentAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_box_agent_action QuicksightCustomPermissions#create_and_update_box_agent_action}.

---

##### `createAndUpdateCanvaAgentAction`<sup>Optional</sup> <a name="createAndUpdateCanvaAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateCanvaAgentAction"></a>

```typescript
public readonly createAndUpdateCanvaAgentAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_canva_agent_action QuicksightCustomPermissions#create_and_update_canva_agent_action}.

---

##### `createAndUpdateComprehendAction`<sup>Optional</sup> <a name="createAndUpdateComprehendAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateComprehendAction"></a>

```typescript
public readonly createAndUpdateComprehendAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_comprehend_action QuicksightCustomPermissions#create_and_update_comprehend_action}.

---

##### `createAndUpdateComprehendMedicalAction`<sup>Optional</sup> <a name="createAndUpdateComprehendMedicalAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateComprehendMedicalAction"></a>

```typescript
public readonly createAndUpdateComprehendMedicalAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_comprehend_medical_action QuicksightCustomPermissions#create_and_update_comprehend_medical_action}.

---

##### `createAndUpdateConfluenceAction`<sup>Optional</sup> <a name="createAndUpdateConfluenceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateConfluenceAction"></a>

```typescript
public readonly createAndUpdateConfluenceAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_confluence_action QuicksightCustomPermissions#create_and_update_confluence_action}.

---

##### `createAndUpdateDashboardEmailReports`<sup>Optional</sup> <a name="createAndUpdateDashboardEmailReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateDashboardEmailReports"></a>

```typescript
public readonly createAndUpdateDashboardEmailReports: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_dashboard_email_reports QuicksightCustomPermissions#create_and_update_dashboard_email_reports}.

---

##### `createAndUpdateDatasets`<sup>Optional</sup> <a name="createAndUpdateDatasets" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateDatasets"></a>

```typescript
public readonly createAndUpdateDatasets: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_datasets QuicksightCustomPermissions#create_and_update_datasets}.

---

##### `createAndUpdateDataSources`<sup>Optional</sup> <a name="createAndUpdateDataSources" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateDataSources"></a>

```typescript
public readonly createAndUpdateDataSources: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_data_sources QuicksightCustomPermissions#create_and_update_data_sources}.

---

##### `createAndUpdateFactSetAction`<sup>Optional</sup> <a name="createAndUpdateFactSetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateFactSetAction"></a>

```typescript
public readonly createAndUpdateFactSetAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_fact_set_action QuicksightCustomPermissions#create_and_update_fact_set_action}.

---

##### `createAndUpdateGenericHttpAction`<sup>Optional</sup> <a name="createAndUpdateGenericHttpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateGenericHttpAction"></a>

```typescript
public readonly createAndUpdateGenericHttpAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_generic_http_action QuicksightCustomPermissions#create_and_update_generic_http_action}.

---

##### `createAndUpdateGithubAction`<sup>Optional</sup> <a name="createAndUpdateGithubAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateGithubAction"></a>

```typescript
public readonly createAndUpdateGithubAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_github_action QuicksightCustomPermissions#create_and_update_github_action}.

---

##### `createAndUpdateGoogleCalendarAction`<sup>Optional</sup> <a name="createAndUpdateGoogleCalendarAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateGoogleCalendarAction"></a>

```typescript
public readonly createAndUpdateGoogleCalendarAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_google_calendar_action QuicksightCustomPermissions#create_and_update_google_calendar_action}.

---

##### `createAndUpdateHubspotAction`<sup>Optional</sup> <a name="createAndUpdateHubspotAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateHubspotAction"></a>

```typescript
public readonly createAndUpdateHubspotAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_hubspot_action QuicksightCustomPermissions#create_and_update_hubspot_action}.

---

##### `createAndUpdateHuggingFaceAction`<sup>Optional</sup> <a name="createAndUpdateHuggingFaceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateHuggingFaceAction"></a>

```typescript
public readonly createAndUpdateHuggingFaceAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_hugging_face_action QuicksightCustomPermissions#create_and_update_hugging_face_action}.

---

##### `createAndUpdateIntercomAction`<sup>Optional</sup> <a name="createAndUpdateIntercomAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateIntercomAction"></a>

```typescript
public readonly createAndUpdateIntercomAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_intercom_action QuicksightCustomPermissions#create_and_update_intercom_action}.

---

##### `createAndUpdateJiraAction`<sup>Optional</sup> <a name="createAndUpdateJiraAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateJiraAction"></a>

```typescript
public readonly createAndUpdateJiraAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_jira_action QuicksightCustomPermissions#create_and_update_jira_action}.

---

##### `createAndUpdateKnowledgeBases`<sup>Optional</sup> <a name="createAndUpdateKnowledgeBases" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateKnowledgeBases"></a>

```typescript
public readonly createAndUpdateKnowledgeBases: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_knowledge_bases QuicksightCustomPermissions#create_and_update_knowledge_bases}.

---

##### `createAndUpdateLinearAction`<sup>Optional</sup> <a name="createAndUpdateLinearAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateLinearAction"></a>

```typescript
public readonly createAndUpdateLinearAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_linear_action QuicksightCustomPermissions#create_and_update_linear_action}.

---

##### `createAndUpdateMcpAction`<sup>Optional</sup> <a name="createAndUpdateMcpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateMcpAction"></a>

```typescript
public readonly createAndUpdateMcpAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_mcp_action QuicksightCustomPermissions#create_and_update_mcp_action}.

---

##### `createAndUpdateMondayAction`<sup>Optional</sup> <a name="createAndUpdateMondayAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateMondayAction"></a>

```typescript
public readonly createAndUpdateMondayAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_monday_action QuicksightCustomPermissions#create_and_update_monday_action}.

---

##### `createAndUpdateMsExchangeAction`<sup>Optional</sup> <a name="createAndUpdateMsExchangeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateMsExchangeAction"></a>

```typescript
public readonly createAndUpdateMsExchangeAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_ms_exchange_action QuicksightCustomPermissions#create_and_update_ms_exchange_action}.

---

##### `createAndUpdateMsTeamsAction`<sup>Optional</sup> <a name="createAndUpdateMsTeamsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateMsTeamsAction"></a>

```typescript
public readonly createAndUpdateMsTeamsAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_ms_teams_action QuicksightCustomPermissions#create_and_update_ms_teams_action}.

---

##### `createAndUpdateNewRelicAction`<sup>Optional</sup> <a name="createAndUpdateNewRelicAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateNewRelicAction"></a>

```typescript
public readonly createAndUpdateNewRelicAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_new_relic_action QuicksightCustomPermissions#create_and_update_new_relic_action}.

---

##### `createAndUpdateNotionAction`<sup>Optional</sup> <a name="createAndUpdateNotionAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateNotionAction"></a>

```typescript
public readonly createAndUpdateNotionAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_notion_action QuicksightCustomPermissions#create_and_update_notion_action}.

---

##### `createAndUpdateOneDriveAction`<sup>Optional</sup> <a name="createAndUpdateOneDriveAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateOneDriveAction"></a>

```typescript
public readonly createAndUpdateOneDriveAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_one_drive_action QuicksightCustomPermissions#create_and_update_one_drive_action}.

---

##### `createAndUpdateOpenApiAction`<sup>Optional</sup> <a name="createAndUpdateOpenApiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateOpenApiAction"></a>

```typescript
public readonly createAndUpdateOpenApiAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_open_api_action QuicksightCustomPermissions#create_and_update_open_api_action}.

---

##### `createAndUpdatePagerDutyAction`<sup>Optional</sup> <a name="createAndUpdatePagerDutyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdatePagerDutyAction"></a>

```typescript
public readonly createAndUpdatePagerDutyAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_pager_duty_action QuicksightCustomPermissions#create_and_update_pager_duty_action}.

---

##### `createAndUpdateSalesforceAction`<sup>Optional</sup> <a name="createAndUpdateSalesforceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSalesforceAction"></a>

```typescript
public readonly createAndUpdateSalesforceAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_salesforce_action QuicksightCustomPermissions#create_and_update_salesforce_action}.

---

##### `createAndUpdateSandPGlobalEnergyAction`<sup>Optional</sup> <a name="createAndUpdateSandPGlobalEnergyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSandPGlobalEnergyAction"></a>

```typescript
public readonly createAndUpdateSandPGlobalEnergyAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_sand_p_global_energy_action QuicksightCustomPermissions#create_and_update_sand_p_global_energy_action}.

---

##### `createAndUpdateSandPgmiAction`<sup>Optional</sup> <a name="createAndUpdateSandPgmiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSandPgmiAction"></a>

```typescript
public readonly createAndUpdateSandPgmiAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_sand_pgmi_action QuicksightCustomPermissions#create_and_update_sand_pgmi_action}.

---

##### `createAndUpdateSapBillOfMaterialAction`<sup>Optional</sup> <a name="createAndUpdateSapBillOfMaterialAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSapBillOfMaterialAction"></a>

```typescript
public readonly createAndUpdateSapBillOfMaterialAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_sap_bill_of_material_action QuicksightCustomPermissions#create_and_update_sap_bill_of_material_action}.

---

##### `createAndUpdateSapBusinessPartnerAction`<sup>Optional</sup> <a name="createAndUpdateSapBusinessPartnerAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSapBusinessPartnerAction"></a>

```typescript
public readonly createAndUpdateSapBusinessPartnerAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_sap_business_partner_action QuicksightCustomPermissions#create_and_update_sap_business_partner_action}.

---

##### `createAndUpdateSapMaterialStockAction`<sup>Optional</sup> <a name="createAndUpdateSapMaterialStockAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSapMaterialStockAction"></a>

```typescript
public readonly createAndUpdateSapMaterialStockAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_sap_material_stock_action QuicksightCustomPermissions#create_and_update_sap_material_stock_action}.

---

##### `createAndUpdateSapPhysicalInventoryAction`<sup>Optional</sup> <a name="createAndUpdateSapPhysicalInventoryAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSapPhysicalInventoryAction"></a>

```typescript
public readonly createAndUpdateSapPhysicalInventoryAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_sap_physical_inventory_action QuicksightCustomPermissions#create_and_update_sap_physical_inventory_action}.

---

##### `createAndUpdateSapProductMasterDataAction`<sup>Optional</sup> <a name="createAndUpdateSapProductMasterDataAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSapProductMasterDataAction"></a>

```typescript
public readonly createAndUpdateSapProductMasterDataAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_sap_product_master_data_action QuicksightCustomPermissions#create_and_update_sap_product_master_data_action}.

---

##### `createAndUpdateServiceNowAction`<sup>Optional</sup> <a name="createAndUpdateServiceNowAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateServiceNowAction"></a>

```typescript
public readonly createAndUpdateServiceNowAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_service_now_action QuicksightCustomPermissions#create_and_update_service_now_action}.

---

##### `createAndUpdateSharePointAction`<sup>Optional</sup> <a name="createAndUpdateSharePointAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSharePointAction"></a>

```typescript
public readonly createAndUpdateSharePointAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_share_point_action QuicksightCustomPermissions#create_and_update_share_point_action}.

---

##### `createAndUpdateSlackAction`<sup>Optional</sup> <a name="createAndUpdateSlackAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSlackAction"></a>

```typescript
public readonly createAndUpdateSlackAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_slack_action QuicksightCustomPermissions#create_and_update_slack_action}.

---

##### `createAndUpdateSmartsheetAction`<sup>Optional</sup> <a name="createAndUpdateSmartsheetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSmartsheetAction"></a>

```typescript
public readonly createAndUpdateSmartsheetAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_smartsheet_action QuicksightCustomPermissions#create_and_update_smartsheet_action}.

---

##### `createAndUpdateTextractAction`<sup>Optional</sup> <a name="createAndUpdateTextractAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateTextractAction"></a>

```typescript
public readonly createAndUpdateTextractAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_textract_action QuicksightCustomPermissions#create_and_update_textract_action}.

---

##### `createAndUpdateThemes`<sup>Optional</sup> <a name="createAndUpdateThemes" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateThemes"></a>

```typescript
public readonly createAndUpdateThemes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_themes QuicksightCustomPermissions#create_and_update_themes}.

---

##### `createAndUpdateThresholdAlerts`<sup>Optional</sup> <a name="createAndUpdateThresholdAlerts" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateThresholdAlerts"></a>

```typescript
public readonly createAndUpdateThresholdAlerts: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_threshold_alerts QuicksightCustomPermissions#create_and_update_threshold_alerts}.

---

##### `createAndUpdateZendeskAction`<sup>Optional</sup> <a name="createAndUpdateZendeskAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateZendeskAction"></a>

```typescript
public readonly createAndUpdateZendeskAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_and_update_zendesk_action QuicksightCustomPermissions#create_and_update_zendesk_action}.

---

##### `createChatAgents`<sup>Optional</sup> <a name="createChatAgents" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createChatAgents"></a>

```typescript
public readonly createChatAgents: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_chat_agents QuicksightCustomPermissions#create_chat_agents}.

---

##### `createDashboardExecutiveSummaryWithQ`<sup>Optional</sup> <a name="createDashboardExecutiveSummaryWithQ" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createDashboardExecutiveSummaryWithQ"></a>

```typescript
public readonly createDashboardExecutiveSummaryWithQ: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_dashboard_executive_summary_with_q QuicksightCustomPermissions#create_dashboard_executive_summary_with_q}.

---

##### `createSharedFolders`<sup>Optional</sup> <a name="createSharedFolders" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createSharedFolders"></a>

```typescript
public readonly createSharedFolders: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_shared_folders QuicksightCustomPermissions#create_shared_folders}.

---

##### `createSpaces`<sup>Optional</sup> <a name="createSpaces" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createSpaces"></a>

```typescript
public readonly createSpaces: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_spaces QuicksightCustomPermissions#create_spaces}.

---

##### `createSpiceDataset`<sup>Optional</sup> <a name="createSpiceDataset" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createSpiceDataset"></a>

```typescript
public readonly createSpiceDataset: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#create_spice_dataset QuicksightCustomPermissions#create_spice_dataset}.

---

##### `dashboard`<sup>Optional</sup> <a name="dashboard" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.dashboard"></a>

```typescript
public readonly dashboard: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#dashboard QuicksightCustomPermissions#dashboard}.

---

##### `editVisualWithQ`<sup>Optional</sup> <a name="editVisualWithQ" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.editVisualWithQ"></a>

```typescript
public readonly editVisualWithQ: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#edit_visual_with_q QuicksightCustomPermissions#edit_visual_with_q}.

---

##### `exportToCsv`<sup>Optional</sup> <a name="exportToCsv" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToCsv"></a>

```typescript
public readonly exportToCsv: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#export_to_csv QuicksightCustomPermissions#export_to_csv}.

---

##### `exportToCsvInScheduledReports`<sup>Optional</sup> <a name="exportToCsvInScheduledReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToCsvInScheduledReports"></a>

```typescript
public readonly exportToCsvInScheduledReports: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#export_to_csv_in_scheduled_reports QuicksightCustomPermissions#export_to_csv_in_scheduled_reports}.

---

##### `exportToExcel`<sup>Optional</sup> <a name="exportToExcel" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToExcel"></a>

```typescript
public readonly exportToExcel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#export_to_excel QuicksightCustomPermissions#export_to_excel}.

---

##### `exportToExcelInScheduledReports`<sup>Optional</sup> <a name="exportToExcelInScheduledReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToExcelInScheduledReports"></a>

```typescript
public readonly exportToExcelInScheduledReports: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#export_to_excel_in_scheduled_reports QuicksightCustomPermissions#export_to_excel_in_scheduled_reports}.

---

##### `exportToPdf`<sup>Optional</sup> <a name="exportToPdf" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToPdf"></a>

```typescript
public readonly exportToPdf: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#export_to_pdf QuicksightCustomPermissions#export_to_pdf}.

---

##### `exportToPdfInScheduledReports`<sup>Optional</sup> <a name="exportToPdfInScheduledReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToPdfInScheduledReports"></a>

```typescript
public readonly exportToPdfInScheduledReports: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#export_to_pdf_in_scheduled_reports QuicksightCustomPermissions#export_to_pdf_in_scheduled_reports}.

---

##### `extension`<sup>Optional</sup> <a name="extension" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.extension"></a>

```typescript
public readonly extension: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#extension QuicksightCustomPermissions#extension}.

---

##### `factSetAction`<sup>Optional</sup> <a name="factSetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.factSetAction"></a>

```typescript
public readonly factSetAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#fact_set_action QuicksightCustomPermissions#fact_set_action}.

---

##### `flow`<sup>Optional</sup> <a name="flow" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.flow"></a>

```typescript
public readonly flow: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#flow QuicksightCustomPermissions#flow}.

---

##### `genericHttpAction`<sup>Optional</sup> <a name="genericHttpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.genericHttpAction"></a>

```typescript
public readonly genericHttpAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#generic_http_action QuicksightCustomPermissions#generic_http_action}.

---

##### `githubAction`<sup>Optional</sup> <a name="githubAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.githubAction"></a>

```typescript
public readonly githubAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#github_action QuicksightCustomPermissions#github_action}.

---

##### `googleCalendarAction`<sup>Optional</sup> <a name="googleCalendarAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.googleCalendarAction"></a>

```typescript
public readonly googleCalendarAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#google_calendar_action QuicksightCustomPermissions#google_calendar_action}.

---

##### `hubspotAction`<sup>Optional</sup> <a name="hubspotAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.hubspotAction"></a>

```typescript
public readonly hubspotAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#hubspot_action QuicksightCustomPermissions#hubspot_action}.

---

##### `huggingFaceAction`<sup>Optional</sup> <a name="huggingFaceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.huggingFaceAction"></a>

```typescript
public readonly huggingFaceAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#hugging_face_action QuicksightCustomPermissions#hugging_face_action}.

---

##### `includeContentInScheduledReportsEmail`<sup>Optional</sup> <a name="includeContentInScheduledReportsEmail" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.includeContentInScheduledReportsEmail"></a>

```typescript
public readonly includeContentInScheduledReportsEmail: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#include_content_in_scheduled_reports_email QuicksightCustomPermissions#include_content_in_scheduled_reports_email}.

---

##### `intercomAction`<sup>Optional</sup> <a name="intercomAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.intercomAction"></a>

```typescript
public readonly intercomAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#intercom_action QuicksightCustomPermissions#intercom_action}.

---

##### `invokeAppsAiInference`<sup>Optional</sup> <a name="invokeAppsAiInference" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.invokeAppsAiInference"></a>

```typescript
public readonly invokeAppsAiInference: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#invoke_apps_ai_inference QuicksightCustomPermissions#invoke_apps_ai_inference}.

---

##### `jiraAction`<sup>Optional</sup> <a name="jiraAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.jiraAction"></a>

```typescript
public readonly jiraAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#jira_action QuicksightCustomPermissions#jira_action}.

---

##### `knowledgeBase`<sup>Optional</sup> <a name="knowledgeBase" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.knowledgeBase"></a>

```typescript
public readonly knowledgeBase: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#knowledge_base QuicksightCustomPermissions#knowledge_base}.

---

##### `linearAction`<sup>Optional</sup> <a name="linearAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.linearAction"></a>

```typescript
public readonly linearAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#linear_action QuicksightCustomPermissions#linear_action}.

---

##### `manageSharedFolders`<sup>Optional</sup> <a name="manageSharedFolders" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.manageSharedFolders"></a>

```typescript
public readonly manageSharedFolders: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#manage_shared_folders QuicksightCustomPermissions#manage_shared_folders}.

---

##### `mcpAction`<sup>Optional</sup> <a name="mcpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.mcpAction"></a>

```typescript
public readonly mcpAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#mcp_action QuicksightCustomPermissions#mcp_action}.

---

##### `mondayAction`<sup>Optional</sup> <a name="mondayAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.mondayAction"></a>

```typescript
public readonly mondayAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#monday_action QuicksightCustomPermissions#monday_action}.

---

##### `msExchangeAction`<sup>Optional</sup> <a name="msExchangeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.msExchangeAction"></a>

```typescript
public readonly msExchangeAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#ms_exchange_action QuicksightCustomPermissions#ms_exchange_action}.

---

##### `msTeamsAction`<sup>Optional</sup> <a name="msTeamsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.msTeamsAction"></a>

```typescript
public readonly msTeamsAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#ms_teams_action QuicksightCustomPermissions#ms_teams_action}.

---

##### `newRelicAction`<sup>Optional</sup> <a name="newRelicAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.newRelicAction"></a>

```typescript
public readonly newRelicAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#new_relic_action QuicksightCustomPermissions#new_relic_action}.

---

##### `notionAction`<sup>Optional</sup> <a name="notionAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.notionAction"></a>

```typescript
public readonly notionAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#notion_action QuicksightCustomPermissions#notion_action}.

---

##### `oneDriveAction`<sup>Optional</sup> <a name="oneDriveAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.oneDriveAction"></a>

```typescript
public readonly oneDriveAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#one_drive_action QuicksightCustomPermissions#one_drive_action}.

---

##### `openApiAction`<sup>Optional</sup> <a name="openApiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.openApiAction"></a>

```typescript
public readonly openApiAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#open_api_action QuicksightCustomPermissions#open_api_action}.

---

##### `pagerDutyAction`<sup>Optional</sup> <a name="pagerDutyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.pagerDutyAction"></a>

```typescript
public readonly pagerDutyAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#pager_duty_action QuicksightCustomPermissions#pager_duty_action}.

---

##### `performFlowUiTask`<sup>Optional</sup> <a name="performFlowUiTask" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.performFlowUiTask"></a>

```typescript
public readonly performFlowUiTask: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#perform_flow_ui_task QuicksightCustomPermissions#perform_flow_ui_task}.

---

##### `printReports`<sup>Optional</sup> <a name="printReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.printReports"></a>

```typescript
public readonly printReports: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#print_reports QuicksightCustomPermissions#print_reports}.

---

##### `publishWithoutApproval`<sup>Optional</sup> <a name="publishWithoutApproval" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.publishWithoutApproval"></a>

```typescript
public readonly publishWithoutApproval: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#publish_without_approval QuicksightCustomPermissions#publish_without_approval}.

---

##### `renameSharedFolders`<sup>Optional</sup> <a name="renameSharedFolders" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.renameSharedFolders"></a>

```typescript
public readonly renameSharedFolders: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#rename_shared_folders QuicksightCustomPermissions#rename_shared_folders}.

---

##### `research`<sup>Optional</sup> <a name="research" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.research"></a>

```typescript
public readonly research: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#research QuicksightCustomPermissions#research}.

---

##### `salesforceAction`<sup>Optional</sup> <a name="salesforceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.salesforceAction"></a>

```typescript
public readonly salesforceAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#salesforce_action QuicksightCustomPermissions#salesforce_action}.

---

##### `sandPGlobalEnergyAction`<sup>Optional</sup> <a name="sandPGlobalEnergyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sandPGlobalEnergyAction"></a>

```typescript
public readonly sandPGlobalEnergyAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#sand_p_global_energy_action QuicksightCustomPermissions#sand_p_global_energy_action}.

---

##### `sandPgmiAction`<sup>Optional</sup> <a name="sandPgmiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sandPgmiAction"></a>

```typescript
public readonly sandPgmiAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#sand_pgmi_action QuicksightCustomPermissions#sand_pgmi_action}.

---

##### `sapBillOfMaterialAction`<sup>Optional</sup> <a name="sapBillOfMaterialAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sapBillOfMaterialAction"></a>

```typescript
public readonly sapBillOfMaterialAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#sap_bill_of_material_action QuicksightCustomPermissions#sap_bill_of_material_action}.

---

##### `sapBusinessPartnerAction`<sup>Optional</sup> <a name="sapBusinessPartnerAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sapBusinessPartnerAction"></a>

```typescript
public readonly sapBusinessPartnerAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#sap_business_partner_action QuicksightCustomPermissions#sap_business_partner_action}.

---

##### `sapMaterialStockAction`<sup>Optional</sup> <a name="sapMaterialStockAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sapMaterialStockAction"></a>

```typescript
public readonly sapMaterialStockAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#sap_material_stock_action QuicksightCustomPermissions#sap_material_stock_action}.

---

##### `sapPhysicalInventoryAction`<sup>Optional</sup> <a name="sapPhysicalInventoryAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sapPhysicalInventoryAction"></a>

```typescript
public readonly sapPhysicalInventoryAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#sap_physical_inventory_action QuicksightCustomPermissions#sap_physical_inventory_action}.

---

##### `sapProductMasterDataAction`<sup>Optional</sup> <a name="sapProductMasterDataAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sapProductMasterDataAction"></a>

```typescript
public readonly sapProductMasterDataAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#sap_product_master_data_action QuicksightCustomPermissions#sap_product_master_data_action}.

---

##### `serviceNowAction`<sup>Optional</sup> <a name="serviceNowAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.serviceNowAction"></a>

```typescript
public readonly serviceNowAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#service_now_action QuicksightCustomPermissions#service_now_action}.

---

##### `shareAmazonBedrockArsAction`<sup>Optional</sup> <a name="shareAmazonBedrockArsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareAmazonBedrockArsAction"></a>

```typescript
public readonly shareAmazonBedrockArsAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_amazon_bedrock_ars_action QuicksightCustomPermissions#share_amazon_bedrock_ars_action}.

---

##### `shareAmazonBedrockFsAction`<sup>Optional</sup> <a name="shareAmazonBedrockFsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareAmazonBedrockFsAction"></a>

```typescript
public readonly shareAmazonBedrockFsAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_amazon_bedrock_fs_action QuicksightCustomPermissions#share_amazon_bedrock_fs_action}.

---

##### `shareAmazonBedrockKrsAction`<sup>Optional</sup> <a name="shareAmazonBedrockKrsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareAmazonBedrockKrsAction"></a>

```typescript
public readonly shareAmazonBedrockKrsAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_amazon_bedrock_krs_action QuicksightCustomPermissions#share_amazon_bedrock_krs_action}.

---

##### `shareAmazonSThreeAction`<sup>Optional</sup> <a name="shareAmazonSThreeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareAmazonSThreeAction"></a>

```typescript
public readonly shareAmazonSThreeAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_amazon_s_three_action QuicksightCustomPermissions#share_amazon_s_three_action}.

---

##### `shareAnalyses`<sup>Optional</sup> <a name="shareAnalyses" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareAnalyses"></a>

```typescript
public readonly shareAnalyses: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_analyses QuicksightCustomPermissions#share_analyses}.

---

##### `shareApps`<sup>Optional</sup> <a name="shareApps" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareApps"></a>

```typescript
public readonly shareApps: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_apps QuicksightCustomPermissions#share_apps}.

---

##### `shareAsanaAction`<sup>Optional</sup> <a name="shareAsanaAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareAsanaAction"></a>

```typescript
public readonly shareAsanaAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_asana_action QuicksightCustomPermissions#share_asana_action}.

---

##### `shareBambooHrAction`<sup>Optional</sup> <a name="shareBambooHrAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareBambooHrAction"></a>

```typescript
public readonly shareBambooHrAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_bamboo_hr_action QuicksightCustomPermissions#share_bamboo_hr_action}.

---

##### `shareBoxAgentAction`<sup>Optional</sup> <a name="shareBoxAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareBoxAgentAction"></a>

```typescript
public readonly shareBoxAgentAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_box_agent_action QuicksightCustomPermissions#share_box_agent_action}.

---

##### `shareCanvaAgentAction`<sup>Optional</sup> <a name="shareCanvaAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareCanvaAgentAction"></a>

```typescript
public readonly shareCanvaAgentAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_canva_agent_action QuicksightCustomPermissions#share_canva_agent_action}.

---

##### `shareChatAgents`<sup>Optional</sup> <a name="shareChatAgents" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareChatAgents"></a>

```typescript
public readonly shareChatAgents: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_chat_agents QuicksightCustomPermissions#share_chat_agents}.

---

##### `shareComprehendAction`<sup>Optional</sup> <a name="shareComprehendAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareComprehendAction"></a>

```typescript
public readonly shareComprehendAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_comprehend_action QuicksightCustomPermissions#share_comprehend_action}.

---

##### `shareComprehendMedicalAction`<sup>Optional</sup> <a name="shareComprehendMedicalAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareComprehendMedicalAction"></a>

```typescript
public readonly shareComprehendMedicalAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_comprehend_medical_action QuicksightCustomPermissions#share_comprehend_medical_action}.

---

##### `shareConfluenceAction`<sup>Optional</sup> <a name="shareConfluenceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareConfluenceAction"></a>

```typescript
public readonly shareConfluenceAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_confluence_action QuicksightCustomPermissions#share_confluence_action}.

---

##### `shareDashboards`<sup>Optional</sup> <a name="shareDashboards" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareDashboards"></a>

```typescript
public readonly shareDashboards: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_dashboards QuicksightCustomPermissions#share_dashboards}.

---

##### `shareDatasets`<sup>Optional</sup> <a name="shareDatasets" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareDatasets"></a>

```typescript
public readonly shareDatasets: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_datasets QuicksightCustomPermissions#share_datasets}.

---

##### `shareDataSources`<sup>Optional</sup> <a name="shareDataSources" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareDataSources"></a>

```typescript
public readonly shareDataSources: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_data_sources QuicksightCustomPermissions#share_data_sources}.

---

##### `shareFactSetAction`<sup>Optional</sup> <a name="shareFactSetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareFactSetAction"></a>

```typescript
public readonly shareFactSetAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_fact_set_action QuicksightCustomPermissions#share_fact_set_action}.

---

##### `shareGenericHttpAction`<sup>Optional</sup> <a name="shareGenericHttpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareGenericHttpAction"></a>

```typescript
public readonly shareGenericHttpAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_generic_http_action QuicksightCustomPermissions#share_generic_http_action}.

---

##### `shareGithubAction`<sup>Optional</sup> <a name="shareGithubAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareGithubAction"></a>

```typescript
public readonly shareGithubAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_github_action QuicksightCustomPermissions#share_github_action}.

---

##### `shareGoogleCalendarAction`<sup>Optional</sup> <a name="shareGoogleCalendarAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareGoogleCalendarAction"></a>

```typescript
public readonly shareGoogleCalendarAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_google_calendar_action QuicksightCustomPermissions#share_google_calendar_action}.

---

##### `shareHubspotAction`<sup>Optional</sup> <a name="shareHubspotAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareHubspotAction"></a>

```typescript
public readonly shareHubspotAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_hubspot_action QuicksightCustomPermissions#share_hubspot_action}.

---

##### `shareHuggingFaceAction`<sup>Optional</sup> <a name="shareHuggingFaceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareHuggingFaceAction"></a>

```typescript
public readonly shareHuggingFaceAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_hugging_face_action QuicksightCustomPermissions#share_hugging_face_action}.

---

##### `shareIntercomAction`<sup>Optional</sup> <a name="shareIntercomAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareIntercomAction"></a>

```typescript
public readonly shareIntercomAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_intercom_action QuicksightCustomPermissions#share_intercom_action}.

---

##### `shareJiraAction`<sup>Optional</sup> <a name="shareJiraAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareJiraAction"></a>

```typescript
public readonly shareJiraAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_jira_action QuicksightCustomPermissions#share_jira_action}.

---

##### `shareKnowledgeBases`<sup>Optional</sup> <a name="shareKnowledgeBases" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareKnowledgeBases"></a>

```typescript
public readonly shareKnowledgeBases: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_knowledge_bases QuicksightCustomPermissions#share_knowledge_bases}.

---

##### `shareLinearAction`<sup>Optional</sup> <a name="shareLinearAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareLinearAction"></a>

```typescript
public readonly shareLinearAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_linear_action QuicksightCustomPermissions#share_linear_action}.

---

##### `shareMcpAction`<sup>Optional</sup> <a name="shareMcpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareMcpAction"></a>

```typescript
public readonly shareMcpAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_mcp_action QuicksightCustomPermissions#share_mcp_action}.

---

##### `shareMondayAction`<sup>Optional</sup> <a name="shareMondayAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareMondayAction"></a>

```typescript
public readonly shareMondayAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_monday_action QuicksightCustomPermissions#share_monday_action}.

---

##### `shareMsExchangeAction`<sup>Optional</sup> <a name="shareMsExchangeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareMsExchangeAction"></a>

```typescript
public readonly shareMsExchangeAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_ms_exchange_action QuicksightCustomPermissions#share_ms_exchange_action}.

---

##### `shareMsTeamsAction`<sup>Optional</sup> <a name="shareMsTeamsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareMsTeamsAction"></a>

```typescript
public readonly shareMsTeamsAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_ms_teams_action QuicksightCustomPermissions#share_ms_teams_action}.

---

##### `shareNewRelicAction`<sup>Optional</sup> <a name="shareNewRelicAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareNewRelicAction"></a>

```typescript
public readonly shareNewRelicAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_new_relic_action QuicksightCustomPermissions#share_new_relic_action}.

---

##### `shareNotionAction`<sup>Optional</sup> <a name="shareNotionAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareNotionAction"></a>

```typescript
public readonly shareNotionAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_notion_action QuicksightCustomPermissions#share_notion_action}.

---

##### `shareOneDriveAction`<sup>Optional</sup> <a name="shareOneDriveAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareOneDriveAction"></a>

```typescript
public readonly shareOneDriveAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_one_drive_action QuicksightCustomPermissions#share_one_drive_action}.

---

##### `shareOpenApiAction`<sup>Optional</sup> <a name="shareOpenApiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareOpenApiAction"></a>

```typescript
public readonly shareOpenApiAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_open_api_action QuicksightCustomPermissions#share_open_api_action}.

---

##### `sharePagerDutyAction`<sup>Optional</sup> <a name="sharePagerDutyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sharePagerDutyAction"></a>

```typescript
public readonly sharePagerDutyAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_pager_duty_action QuicksightCustomPermissions#share_pager_duty_action}.

---

##### `sharePointAction`<sup>Optional</sup> <a name="sharePointAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sharePointAction"></a>

```typescript
public readonly sharePointAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_point_action QuicksightCustomPermissions#share_point_action}.

---

##### `shareSalesforceAction`<sup>Optional</sup> <a name="shareSalesforceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSalesforceAction"></a>

```typescript
public readonly shareSalesforceAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_salesforce_action QuicksightCustomPermissions#share_salesforce_action}.

---

##### `shareSandPGlobalEnergyAction`<sup>Optional</sup> <a name="shareSandPGlobalEnergyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSandPGlobalEnergyAction"></a>

```typescript
public readonly shareSandPGlobalEnergyAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_sand_p_global_energy_action QuicksightCustomPermissions#share_sand_p_global_energy_action}.

---

##### `shareSandPgmiAction`<sup>Optional</sup> <a name="shareSandPgmiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSandPgmiAction"></a>

```typescript
public readonly shareSandPgmiAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_sand_pgmi_action QuicksightCustomPermissions#share_sand_pgmi_action}.

---

##### `shareSapBillOfMaterialAction`<sup>Optional</sup> <a name="shareSapBillOfMaterialAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSapBillOfMaterialAction"></a>

```typescript
public readonly shareSapBillOfMaterialAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_sap_bill_of_material_action QuicksightCustomPermissions#share_sap_bill_of_material_action}.

---

##### `shareSapBusinessPartnerAction`<sup>Optional</sup> <a name="shareSapBusinessPartnerAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSapBusinessPartnerAction"></a>

```typescript
public readonly shareSapBusinessPartnerAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_sap_business_partner_action QuicksightCustomPermissions#share_sap_business_partner_action}.

---

##### `shareSapMaterialStockAction`<sup>Optional</sup> <a name="shareSapMaterialStockAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSapMaterialStockAction"></a>

```typescript
public readonly shareSapMaterialStockAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_sap_material_stock_action QuicksightCustomPermissions#share_sap_material_stock_action}.

---

##### `shareSapPhysicalInventoryAction`<sup>Optional</sup> <a name="shareSapPhysicalInventoryAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSapPhysicalInventoryAction"></a>

```typescript
public readonly shareSapPhysicalInventoryAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_sap_physical_inventory_action QuicksightCustomPermissions#share_sap_physical_inventory_action}.

---

##### `shareSapProductMasterDataAction`<sup>Optional</sup> <a name="shareSapProductMasterDataAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSapProductMasterDataAction"></a>

```typescript
public readonly shareSapProductMasterDataAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_sap_product_master_data_action QuicksightCustomPermissions#share_sap_product_master_data_action}.

---

##### `shareServiceNowAction`<sup>Optional</sup> <a name="shareServiceNowAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareServiceNowAction"></a>

```typescript
public readonly shareServiceNowAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_service_now_action QuicksightCustomPermissions#share_service_now_action}.

---

##### `shareSharePointAction`<sup>Optional</sup> <a name="shareSharePointAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSharePointAction"></a>

```typescript
public readonly shareSharePointAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_share_point_action QuicksightCustomPermissions#share_share_point_action}.

---

##### `shareSlackAction`<sup>Optional</sup> <a name="shareSlackAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSlackAction"></a>

```typescript
public readonly shareSlackAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_slack_action QuicksightCustomPermissions#share_slack_action}.

---

##### `shareSmartsheetAction`<sup>Optional</sup> <a name="shareSmartsheetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSmartsheetAction"></a>

```typescript
public readonly shareSmartsheetAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_smartsheet_action QuicksightCustomPermissions#share_smartsheet_action}.

---

##### `shareSpaces`<sup>Optional</sup> <a name="shareSpaces" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSpaces"></a>

```typescript
public readonly shareSpaces: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_spaces QuicksightCustomPermissions#share_spaces}.

---

##### `shareTextractAction`<sup>Optional</sup> <a name="shareTextractAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareTextractAction"></a>

```typescript
public readonly shareTextractAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_textract_action QuicksightCustomPermissions#share_textract_action}.

---

##### `shareZendeskAction`<sup>Optional</sup> <a name="shareZendeskAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareZendeskAction"></a>

```typescript
public readonly shareZendeskAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#share_zendesk_action QuicksightCustomPermissions#share_zendesk_action}.

---

##### `slackAction`<sup>Optional</sup> <a name="slackAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.slackAction"></a>

```typescript
public readonly slackAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#slack_action QuicksightCustomPermissions#slack_action}.

---

##### `smartsheetAction`<sup>Optional</sup> <a name="smartsheetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.smartsheetAction"></a>

```typescript
public readonly smartsheetAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#smartsheet_action QuicksightCustomPermissions#smartsheet_action}.

---

##### `space`<sup>Optional</sup> <a name="space" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.space"></a>

```typescript
public readonly space: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#space QuicksightCustomPermissions#space}.

---

##### `subscribeDashboardEmailReports`<sup>Optional</sup> <a name="subscribeDashboardEmailReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.subscribeDashboardEmailReports"></a>

```typescript
public readonly subscribeDashboardEmailReports: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#subscribe_dashboard_email_reports QuicksightCustomPermissions#subscribe_dashboard_email_reports}.

---

##### `textractAction`<sup>Optional</sup> <a name="textractAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.textractAction"></a>

```typescript
public readonly textractAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#textract_action QuicksightCustomPermissions#textract_action}.

---

##### `topic`<sup>Optional</sup> <a name="topic" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#topic QuicksightCustomPermissions#topic}.

---

##### `useAgentWebSearch`<sup>Optional</sup> <a name="useAgentWebSearch" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useAgentWebSearch"></a>

```typescript
public readonly useAgentWebSearch: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_agent_web_search QuicksightCustomPermissions#use_agent_web_search}.

---

##### `useAmazonBedrockArsAction`<sup>Optional</sup> <a name="useAmazonBedrockArsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useAmazonBedrockArsAction"></a>

```typescript
public readonly useAmazonBedrockArsAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_amazon_bedrock_ars_action QuicksightCustomPermissions#use_amazon_bedrock_ars_action}.

---

##### `useAmazonBedrockFsAction`<sup>Optional</sup> <a name="useAmazonBedrockFsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useAmazonBedrockFsAction"></a>

```typescript
public readonly useAmazonBedrockFsAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_amazon_bedrock_fs_action QuicksightCustomPermissions#use_amazon_bedrock_fs_action}.

---

##### `useAmazonBedrockKrsAction`<sup>Optional</sup> <a name="useAmazonBedrockKrsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useAmazonBedrockKrsAction"></a>

```typescript
public readonly useAmazonBedrockKrsAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_amazon_bedrock_krs_action QuicksightCustomPermissions#use_amazon_bedrock_krs_action}.

---

##### `useAmazonSThreeAction`<sup>Optional</sup> <a name="useAmazonSThreeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useAmazonSThreeAction"></a>

```typescript
public readonly useAmazonSThreeAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_amazon_s_three_action QuicksightCustomPermissions#use_amazon_s_three_action}.

---

##### `useAsanaAction`<sup>Optional</sup> <a name="useAsanaAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useAsanaAction"></a>

```typescript
public readonly useAsanaAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_asana_action QuicksightCustomPermissions#use_asana_action}.

---

##### `useBambooHrAction`<sup>Optional</sup> <a name="useBambooHrAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useBambooHrAction"></a>

```typescript
public readonly useBambooHrAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_bamboo_hr_action QuicksightCustomPermissions#use_bamboo_hr_action}.

---

##### `useBedrockModels`<sup>Optional</sup> <a name="useBedrockModels" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useBedrockModels"></a>

```typescript
public readonly useBedrockModels: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_bedrock_models QuicksightCustomPermissions#use_bedrock_models}.

---

##### `useBoxAgentAction`<sup>Optional</sup> <a name="useBoxAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useBoxAgentAction"></a>

```typescript
public readonly useBoxAgentAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_box_agent_action QuicksightCustomPermissions#use_box_agent_action}.

---

##### `useCanvaAgentAction`<sup>Optional</sup> <a name="useCanvaAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useCanvaAgentAction"></a>

```typescript
public readonly useCanvaAgentAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_canva_agent_action QuicksightCustomPermissions#use_canva_agent_action}.

---

##### `useComprehendAction`<sup>Optional</sup> <a name="useComprehendAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useComprehendAction"></a>

```typescript
public readonly useComprehendAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_comprehend_action QuicksightCustomPermissions#use_comprehend_action}.

---

##### `useComprehendMedicalAction`<sup>Optional</sup> <a name="useComprehendMedicalAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useComprehendMedicalAction"></a>

```typescript
public readonly useComprehendMedicalAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_comprehend_medical_action QuicksightCustomPermissions#use_comprehend_medical_action}.

---

##### `useConfluenceAction`<sup>Optional</sup> <a name="useConfluenceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useConfluenceAction"></a>

```typescript
public readonly useConfluenceAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_confluence_action QuicksightCustomPermissions#use_confluence_action}.

---

##### `useFactSetAction`<sup>Optional</sup> <a name="useFactSetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useFactSetAction"></a>

```typescript
public readonly useFactSetAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_fact_set_action QuicksightCustomPermissions#use_fact_set_action}.

---

##### `useGenericHttpAction`<sup>Optional</sup> <a name="useGenericHttpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useGenericHttpAction"></a>

```typescript
public readonly useGenericHttpAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_generic_http_action QuicksightCustomPermissions#use_generic_http_action}.

---

##### `useGithubAction`<sup>Optional</sup> <a name="useGithubAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useGithubAction"></a>

```typescript
public readonly useGithubAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_github_action QuicksightCustomPermissions#use_github_action}.

---

##### `useGoogleCalendarAction`<sup>Optional</sup> <a name="useGoogleCalendarAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useGoogleCalendarAction"></a>

```typescript
public readonly useGoogleCalendarAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_google_calendar_action QuicksightCustomPermissions#use_google_calendar_action}.

---

##### `useHubspotAction`<sup>Optional</sup> <a name="useHubspotAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useHubspotAction"></a>

```typescript
public readonly useHubspotAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_hubspot_action QuicksightCustomPermissions#use_hubspot_action}.

---

##### `useHuggingFaceAction`<sup>Optional</sup> <a name="useHuggingFaceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useHuggingFaceAction"></a>

```typescript
public readonly useHuggingFaceAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_hugging_face_action QuicksightCustomPermissions#use_hugging_face_action}.

---

##### `useIntercomAction`<sup>Optional</sup> <a name="useIntercomAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useIntercomAction"></a>

```typescript
public readonly useIntercomAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_intercom_action QuicksightCustomPermissions#use_intercom_action}.

---

##### `useJiraAction`<sup>Optional</sup> <a name="useJiraAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useJiraAction"></a>

```typescript
public readonly useJiraAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_jira_action QuicksightCustomPermissions#use_jira_action}.

---

##### `useLinearAction`<sup>Optional</sup> <a name="useLinearAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useLinearAction"></a>

```typescript
public readonly useLinearAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_linear_action QuicksightCustomPermissions#use_linear_action}.

---

##### `useMcpAction`<sup>Optional</sup> <a name="useMcpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useMcpAction"></a>

```typescript
public readonly useMcpAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_mcp_action QuicksightCustomPermissions#use_mcp_action}.

---

##### `useMondayAction`<sup>Optional</sup> <a name="useMondayAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useMondayAction"></a>

```typescript
public readonly useMondayAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_monday_action QuicksightCustomPermissions#use_monday_action}.

---

##### `useMsExchangeAction`<sup>Optional</sup> <a name="useMsExchangeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useMsExchangeAction"></a>

```typescript
public readonly useMsExchangeAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_ms_exchange_action QuicksightCustomPermissions#use_ms_exchange_action}.

---

##### `useMsTeamsAction`<sup>Optional</sup> <a name="useMsTeamsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useMsTeamsAction"></a>

```typescript
public readonly useMsTeamsAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_ms_teams_action QuicksightCustomPermissions#use_ms_teams_action}.

---

##### `useNewRelicAction`<sup>Optional</sup> <a name="useNewRelicAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useNewRelicAction"></a>

```typescript
public readonly useNewRelicAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_new_relic_action QuicksightCustomPermissions#use_new_relic_action}.

---

##### `useNotionAction`<sup>Optional</sup> <a name="useNotionAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useNotionAction"></a>

```typescript
public readonly useNotionAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_notion_action QuicksightCustomPermissions#use_notion_action}.

---

##### `useOneDriveAction`<sup>Optional</sup> <a name="useOneDriveAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useOneDriveAction"></a>

```typescript
public readonly useOneDriveAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_one_drive_action QuicksightCustomPermissions#use_one_drive_action}.

---

##### `useOpenApiAction`<sup>Optional</sup> <a name="useOpenApiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useOpenApiAction"></a>

```typescript
public readonly useOpenApiAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_open_api_action QuicksightCustomPermissions#use_open_api_action}.

---

##### `usePagerDutyAction`<sup>Optional</sup> <a name="usePagerDutyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.usePagerDutyAction"></a>

```typescript
public readonly usePagerDutyAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_pager_duty_action QuicksightCustomPermissions#use_pager_duty_action}.

---

##### `useSalesforceAction`<sup>Optional</sup> <a name="useSalesforceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSalesforceAction"></a>

```typescript
public readonly useSalesforceAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_salesforce_action QuicksightCustomPermissions#use_salesforce_action}.

---

##### `useSandPGlobalEnergyAction`<sup>Optional</sup> <a name="useSandPGlobalEnergyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSandPGlobalEnergyAction"></a>

```typescript
public readonly useSandPGlobalEnergyAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_sand_p_global_energy_action QuicksightCustomPermissions#use_sand_p_global_energy_action}.

---

##### `useSandPgmiAction`<sup>Optional</sup> <a name="useSandPgmiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSandPgmiAction"></a>

```typescript
public readonly useSandPgmiAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_sand_pgmi_action QuicksightCustomPermissions#use_sand_pgmi_action}.

---

##### `useSapBillOfMaterialAction`<sup>Optional</sup> <a name="useSapBillOfMaterialAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSapBillOfMaterialAction"></a>

```typescript
public readonly useSapBillOfMaterialAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_sap_bill_of_material_action QuicksightCustomPermissions#use_sap_bill_of_material_action}.

---

##### `useSapBusinessPartnerAction`<sup>Optional</sup> <a name="useSapBusinessPartnerAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSapBusinessPartnerAction"></a>

```typescript
public readonly useSapBusinessPartnerAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_sap_business_partner_action QuicksightCustomPermissions#use_sap_business_partner_action}.

---

##### `useSapMaterialStockAction`<sup>Optional</sup> <a name="useSapMaterialStockAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSapMaterialStockAction"></a>

```typescript
public readonly useSapMaterialStockAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_sap_material_stock_action QuicksightCustomPermissions#use_sap_material_stock_action}.

---

##### `useSapPhysicalInventoryAction`<sup>Optional</sup> <a name="useSapPhysicalInventoryAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSapPhysicalInventoryAction"></a>

```typescript
public readonly useSapPhysicalInventoryAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_sap_physical_inventory_action QuicksightCustomPermissions#use_sap_physical_inventory_action}.

---

##### `useSapProductMasterDataAction`<sup>Optional</sup> <a name="useSapProductMasterDataAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSapProductMasterDataAction"></a>

```typescript
public readonly useSapProductMasterDataAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_sap_product_master_data_action QuicksightCustomPermissions#use_sap_product_master_data_action}.

---

##### `useServiceNowAction`<sup>Optional</sup> <a name="useServiceNowAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useServiceNowAction"></a>

```typescript
public readonly useServiceNowAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_service_now_action QuicksightCustomPermissions#use_service_now_action}.

---

##### `useSharePointAction`<sup>Optional</sup> <a name="useSharePointAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSharePointAction"></a>

```typescript
public readonly useSharePointAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_share_point_action QuicksightCustomPermissions#use_share_point_action}.

---

##### `useSlackAction`<sup>Optional</sup> <a name="useSlackAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSlackAction"></a>

```typescript
public readonly useSlackAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_slack_action QuicksightCustomPermissions#use_slack_action}.

---

##### `useSmartsheetAction`<sup>Optional</sup> <a name="useSmartsheetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSmartsheetAction"></a>

```typescript
public readonly useSmartsheetAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_smartsheet_action QuicksightCustomPermissions#use_smartsheet_action}.

---

##### `useTextractAction`<sup>Optional</sup> <a name="useTextractAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useTextractAction"></a>

```typescript
public readonly useTextractAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_textract_action QuicksightCustomPermissions#use_textract_action}.

---

##### `useZendeskAction`<sup>Optional</sup> <a name="useZendeskAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useZendeskAction"></a>

```typescript
public readonly useZendeskAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#use_zendesk_action QuicksightCustomPermissions#use_zendesk_action}.

---

##### `viewAccountSpiceCapacity`<sup>Optional</sup> <a name="viewAccountSpiceCapacity" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.viewAccountSpiceCapacity"></a>

```typescript
public readonly viewAccountSpiceCapacity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#view_account_spice_capacity QuicksightCustomPermissions#view_account_spice_capacity}.

---

##### `zendeskAction`<sup>Optional</sup> <a name="zendeskAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.zendeskAction"></a>

```typescript
public readonly zendeskAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#zendesk_action QuicksightCustomPermissions#zendesk_action}.

---

### QuicksightCustomPermissionsConfig <a name="QuicksightCustomPermissionsConfig" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.Initializer"></a>

```typescript
import { quicksightCustomPermissions } from '@cdktn/provider-awscc'

const quicksightCustomPermissionsConfig: quicksightCustomPermissions.QuicksightCustomPermissionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#aws_account_id QuicksightCustomPermissions#aws_account_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.customPermissionsName">customPermissionsName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#custom_permissions_name QuicksightCustomPermissions#custom_permissions_name}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.capabilities">capabilities</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities">QuicksightCustomPermissionsCapabilities</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#capabilities QuicksightCustomPermissions#capabilities}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags">QuicksightCustomPermissionsTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#tags QuicksightCustomPermissions#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#aws_account_id QuicksightCustomPermissions#aws_account_id}.

---

##### `customPermissionsName`<sup>Required</sup> <a name="customPermissionsName" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.customPermissionsName"></a>

```typescript
public readonly customPermissionsName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#custom_permissions_name QuicksightCustomPermissions#custom_permissions_name}.

---

##### `capabilities`<sup>Optional</sup> <a name="capabilities" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.capabilities"></a>

```typescript
public readonly capabilities: QuicksightCustomPermissionsCapabilities;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities">QuicksightCustomPermissionsCapabilities</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#capabilities QuicksightCustomPermissions#capabilities}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | QuicksightCustomPermissionsTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags">QuicksightCustomPermissionsTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#tags QuicksightCustomPermissions#tags}.

---

### QuicksightCustomPermissionsTags <a name="QuicksightCustomPermissionsTags" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags.Initializer"></a>

```typescript
import { quicksightCustomPermissions } from '@cdktn/provider-awscc'

const quicksightCustomPermissionsTags: quicksightCustomPermissions.QuicksightCustomPermissionsTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags.property.key">key</a></code> | <code>string</code> | <p>Tag key.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags.property.value">value</a></code> | <code>string</code> | <p>Tag value.</p>. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

<p>Tag key.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#key QuicksightCustomPermissions#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

<p>Tag value.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_custom_permissions#value QuicksightCustomPermissions#value}

---

## Classes <a name="Classes" id="Classes"></a>

### QuicksightCustomPermissionsCapabilitiesOutputReference <a name="QuicksightCustomPermissionsCapabilitiesOutputReference" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.Initializer"></a>

```typescript
import { quicksightCustomPermissions } from '@cdktn/provider-awscc'

new quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAccessAppsNativeDataStore">resetAccessAppsNativeDataStore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAddOrRunAnomalyDetectionForAnalyses">resetAddOrRunAnomalyDetectionForAnalyses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAmazonBedrockArsAction">resetAmazonBedrockArsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAmazonBedrockFsAction">resetAmazonBedrockFsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAmazonBedrockKrsAction">resetAmazonBedrockKrsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAmazonSThreeAction">resetAmazonSThreeAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAnalysis">resetAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetApproveFlowShareRequests">resetApproveFlowShareRequests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetApps">resetApps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAsanaAction">resetAsanaAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAutomate">resetAutomate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetBambooHrAction">resetBambooHrAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetBoxAgentAction">resetBoxAgentAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetBuildCalculatedFieldWithQ">resetBuildCalculatedFieldWithQ</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCanvaAgentAction">resetCanvaAgentAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetChatAgent">resetChatAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetComprehendAction">resetComprehendAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetComprehendMedicalAction">resetComprehendMedicalAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetConfluenceAction">resetConfluenceAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateAmazonBedrockArsAction">resetCreateAndUpdateAmazonBedrockArsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateAmazonBedrockFsAction">resetCreateAndUpdateAmazonBedrockFsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateAmazonBedrockKrsAction">resetCreateAndUpdateAmazonBedrockKrsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateAmazonSThreeAction">resetCreateAndUpdateAmazonSThreeAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateApps">resetCreateAndUpdateApps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateAsanaAction">resetCreateAndUpdateAsanaAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateBambooHrAction">resetCreateAndUpdateBambooHrAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateBoxAgentAction">resetCreateAndUpdateBoxAgentAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateCanvaAgentAction">resetCreateAndUpdateCanvaAgentAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateComprehendAction">resetCreateAndUpdateComprehendAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateComprehendMedicalAction">resetCreateAndUpdateComprehendMedicalAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateConfluenceAction">resetCreateAndUpdateConfluenceAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateDashboardEmailReports">resetCreateAndUpdateDashboardEmailReports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateDatasets">resetCreateAndUpdateDatasets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateDataSources">resetCreateAndUpdateDataSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateFactSetAction">resetCreateAndUpdateFactSetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateGenericHttpAction">resetCreateAndUpdateGenericHttpAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateGithubAction">resetCreateAndUpdateGithubAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateGoogleCalendarAction">resetCreateAndUpdateGoogleCalendarAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateHubspotAction">resetCreateAndUpdateHubspotAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateHuggingFaceAction">resetCreateAndUpdateHuggingFaceAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateIntercomAction">resetCreateAndUpdateIntercomAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateJiraAction">resetCreateAndUpdateJiraAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateKnowledgeBases">resetCreateAndUpdateKnowledgeBases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateLinearAction">resetCreateAndUpdateLinearAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateMcpAction">resetCreateAndUpdateMcpAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateMondayAction">resetCreateAndUpdateMondayAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateMsExchangeAction">resetCreateAndUpdateMsExchangeAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateMsTeamsAction">resetCreateAndUpdateMsTeamsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateNewRelicAction">resetCreateAndUpdateNewRelicAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateNotionAction">resetCreateAndUpdateNotionAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateOneDriveAction">resetCreateAndUpdateOneDriveAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateOpenApiAction">resetCreateAndUpdateOpenApiAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdatePagerDutyAction">resetCreateAndUpdatePagerDutyAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSalesforceAction">resetCreateAndUpdateSalesforceAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSandPGlobalEnergyAction">resetCreateAndUpdateSandPGlobalEnergyAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSandPgmiAction">resetCreateAndUpdateSandPgmiAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSapBillOfMaterialAction">resetCreateAndUpdateSapBillOfMaterialAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSapBusinessPartnerAction">resetCreateAndUpdateSapBusinessPartnerAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSapMaterialStockAction">resetCreateAndUpdateSapMaterialStockAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSapPhysicalInventoryAction">resetCreateAndUpdateSapPhysicalInventoryAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSapProductMasterDataAction">resetCreateAndUpdateSapProductMasterDataAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateServiceNowAction">resetCreateAndUpdateServiceNowAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSharePointAction">resetCreateAndUpdateSharePointAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSlackAction">resetCreateAndUpdateSlackAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSmartsheetAction">resetCreateAndUpdateSmartsheetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateTextractAction">resetCreateAndUpdateTextractAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateThemes">resetCreateAndUpdateThemes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateThresholdAlerts">resetCreateAndUpdateThresholdAlerts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateZendeskAction">resetCreateAndUpdateZendeskAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateChatAgents">resetCreateChatAgents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateDashboardExecutiveSummaryWithQ">resetCreateDashboardExecutiveSummaryWithQ</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateSharedFolders">resetCreateSharedFolders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateSpaces">resetCreateSpaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateSpiceDataset">resetCreateSpiceDataset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetDashboard">resetDashboard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetEditVisualWithQ">resetEditVisualWithQ</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToCsv">resetExportToCsv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToCsvInScheduledReports">resetExportToCsvInScheduledReports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToExcel">resetExportToExcel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToExcelInScheduledReports">resetExportToExcelInScheduledReports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToPdf">resetExportToPdf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToPdfInScheduledReports">resetExportToPdfInScheduledReports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExtension">resetExtension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetFactSetAction">resetFactSetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetFlow">resetFlow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetGenericHttpAction">resetGenericHttpAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetGithubAction">resetGithubAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetGoogleCalendarAction">resetGoogleCalendarAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetHubspotAction">resetHubspotAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetHuggingFaceAction">resetHuggingFaceAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetIncludeContentInScheduledReportsEmail">resetIncludeContentInScheduledReportsEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetIntercomAction">resetIntercomAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetInvokeAppsAiInference">resetInvokeAppsAiInference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetJiraAction">resetJiraAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetKnowledgeBase">resetKnowledgeBase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetLinearAction">resetLinearAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetManageSharedFolders">resetManageSharedFolders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetMcpAction">resetMcpAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetMondayAction">resetMondayAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetMsExchangeAction">resetMsExchangeAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetMsTeamsAction">resetMsTeamsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetNewRelicAction">resetNewRelicAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetNotionAction">resetNotionAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetOneDriveAction">resetOneDriveAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetOpenApiAction">resetOpenApiAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetPagerDutyAction">resetPagerDutyAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetPerformFlowUiTask">resetPerformFlowUiTask</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetPrintReports">resetPrintReports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetPublishWithoutApproval">resetPublishWithoutApproval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetRenameSharedFolders">resetRenameSharedFolders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetResearch">resetResearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSalesforceAction">resetSalesforceAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSandPGlobalEnergyAction">resetSandPGlobalEnergyAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSandPgmiAction">resetSandPgmiAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSapBillOfMaterialAction">resetSapBillOfMaterialAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSapBusinessPartnerAction">resetSapBusinessPartnerAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSapMaterialStockAction">resetSapMaterialStockAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSapPhysicalInventoryAction">resetSapPhysicalInventoryAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSapProductMasterDataAction">resetSapProductMasterDataAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetServiceNowAction">resetServiceNowAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareAmazonBedrockArsAction">resetShareAmazonBedrockArsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareAmazonBedrockFsAction">resetShareAmazonBedrockFsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareAmazonBedrockKrsAction">resetShareAmazonBedrockKrsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareAmazonSThreeAction">resetShareAmazonSThreeAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareAnalyses">resetShareAnalyses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareApps">resetShareApps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareAsanaAction">resetShareAsanaAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareBambooHrAction">resetShareBambooHrAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareBoxAgentAction">resetShareBoxAgentAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareCanvaAgentAction">resetShareCanvaAgentAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareChatAgents">resetShareChatAgents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareComprehendAction">resetShareComprehendAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareComprehendMedicalAction">resetShareComprehendMedicalAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareConfluenceAction">resetShareConfluenceAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareDashboards">resetShareDashboards</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareDatasets">resetShareDatasets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareDataSources">resetShareDataSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareFactSetAction">resetShareFactSetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareGenericHttpAction">resetShareGenericHttpAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareGithubAction">resetShareGithubAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareGoogleCalendarAction">resetShareGoogleCalendarAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareHubspotAction">resetShareHubspotAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareHuggingFaceAction">resetShareHuggingFaceAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareIntercomAction">resetShareIntercomAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareJiraAction">resetShareJiraAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareKnowledgeBases">resetShareKnowledgeBases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareLinearAction">resetShareLinearAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareMcpAction">resetShareMcpAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareMondayAction">resetShareMondayAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareMsExchangeAction">resetShareMsExchangeAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareMsTeamsAction">resetShareMsTeamsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareNewRelicAction">resetShareNewRelicAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareNotionAction">resetShareNotionAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareOneDriveAction">resetShareOneDriveAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareOpenApiAction">resetShareOpenApiAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSharePagerDutyAction">resetSharePagerDutyAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSharePointAction">resetSharePointAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSalesforceAction">resetShareSalesforceAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSandPGlobalEnergyAction">resetShareSandPGlobalEnergyAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSandPgmiAction">resetShareSandPgmiAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSapBillOfMaterialAction">resetShareSapBillOfMaterialAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSapBusinessPartnerAction">resetShareSapBusinessPartnerAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSapMaterialStockAction">resetShareSapMaterialStockAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSapPhysicalInventoryAction">resetShareSapPhysicalInventoryAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSapProductMasterDataAction">resetShareSapProductMasterDataAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareServiceNowAction">resetShareServiceNowAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSharePointAction">resetShareSharePointAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSlackAction">resetShareSlackAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSmartsheetAction">resetShareSmartsheetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSpaces">resetShareSpaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareTextractAction">resetShareTextractAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareZendeskAction">resetShareZendeskAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSlackAction">resetSlackAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSmartsheetAction">resetSmartsheetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSpace">resetSpace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSubscribeDashboardEmailReports">resetSubscribeDashboardEmailReports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetTextractAction">resetTextractAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetTopic">resetTopic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseAgentWebSearch">resetUseAgentWebSearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseAmazonBedrockArsAction">resetUseAmazonBedrockArsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseAmazonBedrockFsAction">resetUseAmazonBedrockFsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseAmazonBedrockKrsAction">resetUseAmazonBedrockKrsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseAmazonSThreeAction">resetUseAmazonSThreeAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseAsanaAction">resetUseAsanaAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseBambooHrAction">resetUseBambooHrAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseBedrockModels">resetUseBedrockModels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseBoxAgentAction">resetUseBoxAgentAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseCanvaAgentAction">resetUseCanvaAgentAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseComprehendAction">resetUseComprehendAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseComprehendMedicalAction">resetUseComprehendMedicalAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseConfluenceAction">resetUseConfluenceAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseFactSetAction">resetUseFactSetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseGenericHttpAction">resetUseGenericHttpAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseGithubAction">resetUseGithubAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseGoogleCalendarAction">resetUseGoogleCalendarAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseHubspotAction">resetUseHubspotAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseHuggingFaceAction">resetUseHuggingFaceAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseIntercomAction">resetUseIntercomAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseJiraAction">resetUseJiraAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseLinearAction">resetUseLinearAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseMcpAction">resetUseMcpAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseMondayAction">resetUseMondayAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseMsExchangeAction">resetUseMsExchangeAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseMsTeamsAction">resetUseMsTeamsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseNewRelicAction">resetUseNewRelicAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseNotionAction">resetUseNotionAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseOneDriveAction">resetUseOneDriveAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseOpenApiAction">resetUseOpenApiAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUsePagerDutyAction">resetUsePagerDutyAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSalesforceAction">resetUseSalesforceAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSandPGlobalEnergyAction">resetUseSandPGlobalEnergyAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSandPgmiAction">resetUseSandPgmiAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSapBillOfMaterialAction">resetUseSapBillOfMaterialAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSapBusinessPartnerAction">resetUseSapBusinessPartnerAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSapMaterialStockAction">resetUseSapMaterialStockAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSapPhysicalInventoryAction">resetUseSapPhysicalInventoryAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSapProductMasterDataAction">resetUseSapProductMasterDataAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseServiceNowAction">resetUseServiceNowAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSharePointAction">resetUseSharePointAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSlackAction">resetUseSlackAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSmartsheetAction">resetUseSmartsheetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseTextractAction">resetUseTextractAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseZendeskAction">resetUseZendeskAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetViewAccountSpiceCapacity">resetViewAccountSpiceCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetZendeskAction">resetZendeskAction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessAppsNativeDataStore` <a name="resetAccessAppsNativeDataStore" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAccessAppsNativeDataStore"></a>

```typescript
public resetAccessAppsNativeDataStore(): void
```

##### `resetAction` <a name="resetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetAddOrRunAnomalyDetectionForAnalyses` <a name="resetAddOrRunAnomalyDetectionForAnalyses" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAddOrRunAnomalyDetectionForAnalyses"></a>

```typescript
public resetAddOrRunAnomalyDetectionForAnalyses(): void
```

##### `resetAmazonBedrockArsAction` <a name="resetAmazonBedrockArsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAmazonBedrockArsAction"></a>

```typescript
public resetAmazonBedrockArsAction(): void
```

##### `resetAmazonBedrockFsAction` <a name="resetAmazonBedrockFsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAmazonBedrockFsAction"></a>

```typescript
public resetAmazonBedrockFsAction(): void
```

##### `resetAmazonBedrockKrsAction` <a name="resetAmazonBedrockKrsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAmazonBedrockKrsAction"></a>

```typescript
public resetAmazonBedrockKrsAction(): void
```

##### `resetAmazonSThreeAction` <a name="resetAmazonSThreeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAmazonSThreeAction"></a>

```typescript
public resetAmazonSThreeAction(): void
```

##### `resetAnalysis` <a name="resetAnalysis" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAnalysis"></a>

```typescript
public resetAnalysis(): void
```

##### `resetApproveFlowShareRequests` <a name="resetApproveFlowShareRequests" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetApproveFlowShareRequests"></a>

```typescript
public resetApproveFlowShareRequests(): void
```

##### `resetApps` <a name="resetApps" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetApps"></a>

```typescript
public resetApps(): void
```

##### `resetAsanaAction` <a name="resetAsanaAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAsanaAction"></a>

```typescript
public resetAsanaAction(): void
```

##### `resetAutomate` <a name="resetAutomate" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAutomate"></a>

```typescript
public resetAutomate(): void
```

##### `resetBambooHrAction` <a name="resetBambooHrAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetBambooHrAction"></a>

```typescript
public resetBambooHrAction(): void
```

##### `resetBoxAgentAction` <a name="resetBoxAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetBoxAgentAction"></a>

```typescript
public resetBoxAgentAction(): void
```

##### `resetBuildCalculatedFieldWithQ` <a name="resetBuildCalculatedFieldWithQ" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetBuildCalculatedFieldWithQ"></a>

```typescript
public resetBuildCalculatedFieldWithQ(): void
```

##### `resetCanvaAgentAction` <a name="resetCanvaAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCanvaAgentAction"></a>

```typescript
public resetCanvaAgentAction(): void
```

##### `resetChatAgent` <a name="resetChatAgent" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetChatAgent"></a>

```typescript
public resetChatAgent(): void
```

##### `resetComprehendAction` <a name="resetComprehendAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetComprehendAction"></a>

```typescript
public resetComprehendAction(): void
```

##### `resetComprehendMedicalAction` <a name="resetComprehendMedicalAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetComprehendMedicalAction"></a>

```typescript
public resetComprehendMedicalAction(): void
```

##### `resetConfluenceAction` <a name="resetConfluenceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetConfluenceAction"></a>

```typescript
public resetConfluenceAction(): void
```

##### `resetCreateAndUpdateAmazonBedrockArsAction` <a name="resetCreateAndUpdateAmazonBedrockArsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateAmazonBedrockArsAction"></a>

```typescript
public resetCreateAndUpdateAmazonBedrockArsAction(): void
```

##### `resetCreateAndUpdateAmazonBedrockFsAction` <a name="resetCreateAndUpdateAmazonBedrockFsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateAmazonBedrockFsAction"></a>

```typescript
public resetCreateAndUpdateAmazonBedrockFsAction(): void
```

##### `resetCreateAndUpdateAmazonBedrockKrsAction` <a name="resetCreateAndUpdateAmazonBedrockKrsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateAmazonBedrockKrsAction"></a>

```typescript
public resetCreateAndUpdateAmazonBedrockKrsAction(): void
```

##### `resetCreateAndUpdateAmazonSThreeAction` <a name="resetCreateAndUpdateAmazonSThreeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateAmazonSThreeAction"></a>

```typescript
public resetCreateAndUpdateAmazonSThreeAction(): void
```

##### `resetCreateAndUpdateApps` <a name="resetCreateAndUpdateApps" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateApps"></a>

```typescript
public resetCreateAndUpdateApps(): void
```

##### `resetCreateAndUpdateAsanaAction` <a name="resetCreateAndUpdateAsanaAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateAsanaAction"></a>

```typescript
public resetCreateAndUpdateAsanaAction(): void
```

##### `resetCreateAndUpdateBambooHrAction` <a name="resetCreateAndUpdateBambooHrAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateBambooHrAction"></a>

```typescript
public resetCreateAndUpdateBambooHrAction(): void
```

##### `resetCreateAndUpdateBoxAgentAction` <a name="resetCreateAndUpdateBoxAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateBoxAgentAction"></a>

```typescript
public resetCreateAndUpdateBoxAgentAction(): void
```

##### `resetCreateAndUpdateCanvaAgentAction` <a name="resetCreateAndUpdateCanvaAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateCanvaAgentAction"></a>

```typescript
public resetCreateAndUpdateCanvaAgentAction(): void
```

##### `resetCreateAndUpdateComprehendAction` <a name="resetCreateAndUpdateComprehendAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateComprehendAction"></a>

```typescript
public resetCreateAndUpdateComprehendAction(): void
```

##### `resetCreateAndUpdateComprehendMedicalAction` <a name="resetCreateAndUpdateComprehendMedicalAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateComprehendMedicalAction"></a>

```typescript
public resetCreateAndUpdateComprehendMedicalAction(): void
```

##### `resetCreateAndUpdateConfluenceAction` <a name="resetCreateAndUpdateConfluenceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateConfluenceAction"></a>

```typescript
public resetCreateAndUpdateConfluenceAction(): void
```

##### `resetCreateAndUpdateDashboardEmailReports` <a name="resetCreateAndUpdateDashboardEmailReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateDashboardEmailReports"></a>

```typescript
public resetCreateAndUpdateDashboardEmailReports(): void
```

##### `resetCreateAndUpdateDatasets` <a name="resetCreateAndUpdateDatasets" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateDatasets"></a>

```typescript
public resetCreateAndUpdateDatasets(): void
```

##### `resetCreateAndUpdateDataSources` <a name="resetCreateAndUpdateDataSources" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateDataSources"></a>

```typescript
public resetCreateAndUpdateDataSources(): void
```

##### `resetCreateAndUpdateFactSetAction` <a name="resetCreateAndUpdateFactSetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateFactSetAction"></a>

```typescript
public resetCreateAndUpdateFactSetAction(): void
```

##### `resetCreateAndUpdateGenericHttpAction` <a name="resetCreateAndUpdateGenericHttpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateGenericHttpAction"></a>

```typescript
public resetCreateAndUpdateGenericHttpAction(): void
```

##### `resetCreateAndUpdateGithubAction` <a name="resetCreateAndUpdateGithubAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateGithubAction"></a>

```typescript
public resetCreateAndUpdateGithubAction(): void
```

##### `resetCreateAndUpdateGoogleCalendarAction` <a name="resetCreateAndUpdateGoogleCalendarAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateGoogleCalendarAction"></a>

```typescript
public resetCreateAndUpdateGoogleCalendarAction(): void
```

##### `resetCreateAndUpdateHubspotAction` <a name="resetCreateAndUpdateHubspotAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateHubspotAction"></a>

```typescript
public resetCreateAndUpdateHubspotAction(): void
```

##### `resetCreateAndUpdateHuggingFaceAction` <a name="resetCreateAndUpdateHuggingFaceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateHuggingFaceAction"></a>

```typescript
public resetCreateAndUpdateHuggingFaceAction(): void
```

##### `resetCreateAndUpdateIntercomAction` <a name="resetCreateAndUpdateIntercomAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateIntercomAction"></a>

```typescript
public resetCreateAndUpdateIntercomAction(): void
```

##### `resetCreateAndUpdateJiraAction` <a name="resetCreateAndUpdateJiraAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateJiraAction"></a>

```typescript
public resetCreateAndUpdateJiraAction(): void
```

##### `resetCreateAndUpdateKnowledgeBases` <a name="resetCreateAndUpdateKnowledgeBases" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateKnowledgeBases"></a>

```typescript
public resetCreateAndUpdateKnowledgeBases(): void
```

##### `resetCreateAndUpdateLinearAction` <a name="resetCreateAndUpdateLinearAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateLinearAction"></a>

```typescript
public resetCreateAndUpdateLinearAction(): void
```

##### `resetCreateAndUpdateMcpAction` <a name="resetCreateAndUpdateMcpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateMcpAction"></a>

```typescript
public resetCreateAndUpdateMcpAction(): void
```

##### `resetCreateAndUpdateMondayAction` <a name="resetCreateAndUpdateMondayAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateMondayAction"></a>

```typescript
public resetCreateAndUpdateMondayAction(): void
```

##### `resetCreateAndUpdateMsExchangeAction` <a name="resetCreateAndUpdateMsExchangeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateMsExchangeAction"></a>

```typescript
public resetCreateAndUpdateMsExchangeAction(): void
```

##### `resetCreateAndUpdateMsTeamsAction` <a name="resetCreateAndUpdateMsTeamsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateMsTeamsAction"></a>

```typescript
public resetCreateAndUpdateMsTeamsAction(): void
```

##### `resetCreateAndUpdateNewRelicAction` <a name="resetCreateAndUpdateNewRelicAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateNewRelicAction"></a>

```typescript
public resetCreateAndUpdateNewRelicAction(): void
```

##### `resetCreateAndUpdateNotionAction` <a name="resetCreateAndUpdateNotionAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateNotionAction"></a>

```typescript
public resetCreateAndUpdateNotionAction(): void
```

##### `resetCreateAndUpdateOneDriveAction` <a name="resetCreateAndUpdateOneDriveAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateOneDriveAction"></a>

```typescript
public resetCreateAndUpdateOneDriveAction(): void
```

##### `resetCreateAndUpdateOpenApiAction` <a name="resetCreateAndUpdateOpenApiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateOpenApiAction"></a>

```typescript
public resetCreateAndUpdateOpenApiAction(): void
```

##### `resetCreateAndUpdatePagerDutyAction` <a name="resetCreateAndUpdatePagerDutyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdatePagerDutyAction"></a>

```typescript
public resetCreateAndUpdatePagerDutyAction(): void
```

##### `resetCreateAndUpdateSalesforceAction` <a name="resetCreateAndUpdateSalesforceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSalesforceAction"></a>

```typescript
public resetCreateAndUpdateSalesforceAction(): void
```

##### `resetCreateAndUpdateSandPGlobalEnergyAction` <a name="resetCreateAndUpdateSandPGlobalEnergyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSandPGlobalEnergyAction"></a>

```typescript
public resetCreateAndUpdateSandPGlobalEnergyAction(): void
```

##### `resetCreateAndUpdateSandPgmiAction` <a name="resetCreateAndUpdateSandPgmiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSandPgmiAction"></a>

```typescript
public resetCreateAndUpdateSandPgmiAction(): void
```

##### `resetCreateAndUpdateSapBillOfMaterialAction` <a name="resetCreateAndUpdateSapBillOfMaterialAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSapBillOfMaterialAction"></a>

```typescript
public resetCreateAndUpdateSapBillOfMaterialAction(): void
```

##### `resetCreateAndUpdateSapBusinessPartnerAction` <a name="resetCreateAndUpdateSapBusinessPartnerAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSapBusinessPartnerAction"></a>

```typescript
public resetCreateAndUpdateSapBusinessPartnerAction(): void
```

##### `resetCreateAndUpdateSapMaterialStockAction` <a name="resetCreateAndUpdateSapMaterialStockAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSapMaterialStockAction"></a>

```typescript
public resetCreateAndUpdateSapMaterialStockAction(): void
```

##### `resetCreateAndUpdateSapPhysicalInventoryAction` <a name="resetCreateAndUpdateSapPhysicalInventoryAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSapPhysicalInventoryAction"></a>

```typescript
public resetCreateAndUpdateSapPhysicalInventoryAction(): void
```

##### `resetCreateAndUpdateSapProductMasterDataAction` <a name="resetCreateAndUpdateSapProductMasterDataAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSapProductMasterDataAction"></a>

```typescript
public resetCreateAndUpdateSapProductMasterDataAction(): void
```

##### `resetCreateAndUpdateServiceNowAction` <a name="resetCreateAndUpdateServiceNowAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateServiceNowAction"></a>

```typescript
public resetCreateAndUpdateServiceNowAction(): void
```

##### `resetCreateAndUpdateSharePointAction` <a name="resetCreateAndUpdateSharePointAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSharePointAction"></a>

```typescript
public resetCreateAndUpdateSharePointAction(): void
```

##### `resetCreateAndUpdateSlackAction` <a name="resetCreateAndUpdateSlackAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSlackAction"></a>

```typescript
public resetCreateAndUpdateSlackAction(): void
```

##### `resetCreateAndUpdateSmartsheetAction` <a name="resetCreateAndUpdateSmartsheetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSmartsheetAction"></a>

```typescript
public resetCreateAndUpdateSmartsheetAction(): void
```

##### `resetCreateAndUpdateTextractAction` <a name="resetCreateAndUpdateTextractAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateTextractAction"></a>

```typescript
public resetCreateAndUpdateTextractAction(): void
```

##### `resetCreateAndUpdateThemes` <a name="resetCreateAndUpdateThemes" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateThemes"></a>

```typescript
public resetCreateAndUpdateThemes(): void
```

##### `resetCreateAndUpdateThresholdAlerts` <a name="resetCreateAndUpdateThresholdAlerts" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateThresholdAlerts"></a>

```typescript
public resetCreateAndUpdateThresholdAlerts(): void
```

##### `resetCreateAndUpdateZendeskAction` <a name="resetCreateAndUpdateZendeskAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateZendeskAction"></a>

```typescript
public resetCreateAndUpdateZendeskAction(): void
```

##### `resetCreateChatAgents` <a name="resetCreateChatAgents" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateChatAgents"></a>

```typescript
public resetCreateChatAgents(): void
```

##### `resetCreateDashboardExecutiveSummaryWithQ` <a name="resetCreateDashboardExecutiveSummaryWithQ" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateDashboardExecutiveSummaryWithQ"></a>

```typescript
public resetCreateDashboardExecutiveSummaryWithQ(): void
```

##### `resetCreateSharedFolders` <a name="resetCreateSharedFolders" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateSharedFolders"></a>

```typescript
public resetCreateSharedFolders(): void
```

##### `resetCreateSpaces` <a name="resetCreateSpaces" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateSpaces"></a>

```typescript
public resetCreateSpaces(): void
```

##### `resetCreateSpiceDataset` <a name="resetCreateSpiceDataset" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateSpiceDataset"></a>

```typescript
public resetCreateSpiceDataset(): void
```

##### `resetDashboard` <a name="resetDashboard" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetDashboard"></a>

```typescript
public resetDashboard(): void
```

##### `resetEditVisualWithQ` <a name="resetEditVisualWithQ" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetEditVisualWithQ"></a>

```typescript
public resetEditVisualWithQ(): void
```

##### `resetExportToCsv` <a name="resetExportToCsv" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToCsv"></a>

```typescript
public resetExportToCsv(): void
```

##### `resetExportToCsvInScheduledReports` <a name="resetExportToCsvInScheduledReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToCsvInScheduledReports"></a>

```typescript
public resetExportToCsvInScheduledReports(): void
```

##### `resetExportToExcel` <a name="resetExportToExcel" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToExcel"></a>

```typescript
public resetExportToExcel(): void
```

##### `resetExportToExcelInScheduledReports` <a name="resetExportToExcelInScheduledReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToExcelInScheduledReports"></a>

```typescript
public resetExportToExcelInScheduledReports(): void
```

##### `resetExportToPdf` <a name="resetExportToPdf" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToPdf"></a>

```typescript
public resetExportToPdf(): void
```

##### `resetExportToPdfInScheduledReports` <a name="resetExportToPdfInScheduledReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToPdfInScheduledReports"></a>

```typescript
public resetExportToPdfInScheduledReports(): void
```

##### `resetExtension` <a name="resetExtension" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExtension"></a>

```typescript
public resetExtension(): void
```

##### `resetFactSetAction` <a name="resetFactSetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetFactSetAction"></a>

```typescript
public resetFactSetAction(): void
```

##### `resetFlow` <a name="resetFlow" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetFlow"></a>

```typescript
public resetFlow(): void
```

##### `resetGenericHttpAction` <a name="resetGenericHttpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetGenericHttpAction"></a>

```typescript
public resetGenericHttpAction(): void
```

##### `resetGithubAction` <a name="resetGithubAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetGithubAction"></a>

```typescript
public resetGithubAction(): void
```

##### `resetGoogleCalendarAction` <a name="resetGoogleCalendarAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetGoogleCalendarAction"></a>

```typescript
public resetGoogleCalendarAction(): void
```

##### `resetHubspotAction` <a name="resetHubspotAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetHubspotAction"></a>

```typescript
public resetHubspotAction(): void
```

##### `resetHuggingFaceAction` <a name="resetHuggingFaceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetHuggingFaceAction"></a>

```typescript
public resetHuggingFaceAction(): void
```

##### `resetIncludeContentInScheduledReportsEmail` <a name="resetIncludeContentInScheduledReportsEmail" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetIncludeContentInScheduledReportsEmail"></a>

```typescript
public resetIncludeContentInScheduledReportsEmail(): void
```

##### `resetIntercomAction` <a name="resetIntercomAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetIntercomAction"></a>

```typescript
public resetIntercomAction(): void
```

##### `resetInvokeAppsAiInference` <a name="resetInvokeAppsAiInference" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetInvokeAppsAiInference"></a>

```typescript
public resetInvokeAppsAiInference(): void
```

##### `resetJiraAction` <a name="resetJiraAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetJiraAction"></a>

```typescript
public resetJiraAction(): void
```

##### `resetKnowledgeBase` <a name="resetKnowledgeBase" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetKnowledgeBase"></a>

```typescript
public resetKnowledgeBase(): void
```

##### `resetLinearAction` <a name="resetLinearAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetLinearAction"></a>

```typescript
public resetLinearAction(): void
```

##### `resetManageSharedFolders` <a name="resetManageSharedFolders" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetManageSharedFolders"></a>

```typescript
public resetManageSharedFolders(): void
```

##### `resetMcpAction` <a name="resetMcpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetMcpAction"></a>

```typescript
public resetMcpAction(): void
```

##### `resetMondayAction` <a name="resetMondayAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetMondayAction"></a>

```typescript
public resetMondayAction(): void
```

##### `resetMsExchangeAction` <a name="resetMsExchangeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetMsExchangeAction"></a>

```typescript
public resetMsExchangeAction(): void
```

##### `resetMsTeamsAction` <a name="resetMsTeamsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetMsTeamsAction"></a>

```typescript
public resetMsTeamsAction(): void
```

##### `resetNewRelicAction` <a name="resetNewRelicAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetNewRelicAction"></a>

```typescript
public resetNewRelicAction(): void
```

##### `resetNotionAction` <a name="resetNotionAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetNotionAction"></a>

```typescript
public resetNotionAction(): void
```

##### `resetOneDriveAction` <a name="resetOneDriveAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetOneDriveAction"></a>

```typescript
public resetOneDriveAction(): void
```

##### `resetOpenApiAction` <a name="resetOpenApiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetOpenApiAction"></a>

```typescript
public resetOpenApiAction(): void
```

##### `resetPagerDutyAction` <a name="resetPagerDutyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetPagerDutyAction"></a>

```typescript
public resetPagerDutyAction(): void
```

##### `resetPerformFlowUiTask` <a name="resetPerformFlowUiTask" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetPerformFlowUiTask"></a>

```typescript
public resetPerformFlowUiTask(): void
```

##### `resetPrintReports` <a name="resetPrintReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetPrintReports"></a>

```typescript
public resetPrintReports(): void
```

##### `resetPublishWithoutApproval` <a name="resetPublishWithoutApproval" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetPublishWithoutApproval"></a>

```typescript
public resetPublishWithoutApproval(): void
```

##### `resetRenameSharedFolders` <a name="resetRenameSharedFolders" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetRenameSharedFolders"></a>

```typescript
public resetRenameSharedFolders(): void
```

##### `resetResearch` <a name="resetResearch" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetResearch"></a>

```typescript
public resetResearch(): void
```

##### `resetSalesforceAction` <a name="resetSalesforceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSalesforceAction"></a>

```typescript
public resetSalesforceAction(): void
```

##### `resetSandPGlobalEnergyAction` <a name="resetSandPGlobalEnergyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSandPGlobalEnergyAction"></a>

```typescript
public resetSandPGlobalEnergyAction(): void
```

##### `resetSandPgmiAction` <a name="resetSandPgmiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSandPgmiAction"></a>

```typescript
public resetSandPgmiAction(): void
```

##### `resetSapBillOfMaterialAction` <a name="resetSapBillOfMaterialAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSapBillOfMaterialAction"></a>

```typescript
public resetSapBillOfMaterialAction(): void
```

##### `resetSapBusinessPartnerAction` <a name="resetSapBusinessPartnerAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSapBusinessPartnerAction"></a>

```typescript
public resetSapBusinessPartnerAction(): void
```

##### `resetSapMaterialStockAction` <a name="resetSapMaterialStockAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSapMaterialStockAction"></a>

```typescript
public resetSapMaterialStockAction(): void
```

##### `resetSapPhysicalInventoryAction` <a name="resetSapPhysicalInventoryAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSapPhysicalInventoryAction"></a>

```typescript
public resetSapPhysicalInventoryAction(): void
```

##### `resetSapProductMasterDataAction` <a name="resetSapProductMasterDataAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSapProductMasterDataAction"></a>

```typescript
public resetSapProductMasterDataAction(): void
```

##### `resetServiceNowAction` <a name="resetServiceNowAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetServiceNowAction"></a>

```typescript
public resetServiceNowAction(): void
```

##### `resetShareAmazonBedrockArsAction` <a name="resetShareAmazonBedrockArsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareAmazonBedrockArsAction"></a>

```typescript
public resetShareAmazonBedrockArsAction(): void
```

##### `resetShareAmazonBedrockFsAction` <a name="resetShareAmazonBedrockFsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareAmazonBedrockFsAction"></a>

```typescript
public resetShareAmazonBedrockFsAction(): void
```

##### `resetShareAmazonBedrockKrsAction` <a name="resetShareAmazonBedrockKrsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareAmazonBedrockKrsAction"></a>

```typescript
public resetShareAmazonBedrockKrsAction(): void
```

##### `resetShareAmazonSThreeAction` <a name="resetShareAmazonSThreeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareAmazonSThreeAction"></a>

```typescript
public resetShareAmazonSThreeAction(): void
```

##### `resetShareAnalyses` <a name="resetShareAnalyses" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareAnalyses"></a>

```typescript
public resetShareAnalyses(): void
```

##### `resetShareApps` <a name="resetShareApps" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareApps"></a>

```typescript
public resetShareApps(): void
```

##### `resetShareAsanaAction` <a name="resetShareAsanaAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareAsanaAction"></a>

```typescript
public resetShareAsanaAction(): void
```

##### `resetShareBambooHrAction` <a name="resetShareBambooHrAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareBambooHrAction"></a>

```typescript
public resetShareBambooHrAction(): void
```

##### `resetShareBoxAgentAction` <a name="resetShareBoxAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareBoxAgentAction"></a>

```typescript
public resetShareBoxAgentAction(): void
```

##### `resetShareCanvaAgentAction` <a name="resetShareCanvaAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareCanvaAgentAction"></a>

```typescript
public resetShareCanvaAgentAction(): void
```

##### `resetShareChatAgents` <a name="resetShareChatAgents" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareChatAgents"></a>

```typescript
public resetShareChatAgents(): void
```

##### `resetShareComprehendAction` <a name="resetShareComprehendAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareComprehendAction"></a>

```typescript
public resetShareComprehendAction(): void
```

##### `resetShareComprehendMedicalAction` <a name="resetShareComprehendMedicalAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareComprehendMedicalAction"></a>

```typescript
public resetShareComprehendMedicalAction(): void
```

##### `resetShareConfluenceAction` <a name="resetShareConfluenceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareConfluenceAction"></a>

```typescript
public resetShareConfluenceAction(): void
```

##### `resetShareDashboards` <a name="resetShareDashboards" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareDashboards"></a>

```typescript
public resetShareDashboards(): void
```

##### `resetShareDatasets` <a name="resetShareDatasets" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareDatasets"></a>

```typescript
public resetShareDatasets(): void
```

##### `resetShareDataSources` <a name="resetShareDataSources" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareDataSources"></a>

```typescript
public resetShareDataSources(): void
```

##### `resetShareFactSetAction` <a name="resetShareFactSetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareFactSetAction"></a>

```typescript
public resetShareFactSetAction(): void
```

##### `resetShareGenericHttpAction` <a name="resetShareGenericHttpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareGenericHttpAction"></a>

```typescript
public resetShareGenericHttpAction(): void
```

##### `resetShareGithubAction` <a name="resetShareGithubAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareGithubAction"></a>

```typescript
public resetShareGithubAction(): void
```

##### `resetShareGoogleCalendarAction` <a name="resetShareGoogleCalendarAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareGoogleCalendarAction"></a>

```typescript
public resetShareGoogleCalendarAction(): void
```

##### `resetShareHubspotAction` <a name="resetShareHubspotAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareHubspotAction"></a>

```typescript
public resetShareHubspotAction(): void
```

##### `resetShareHuggingFaceAction` <a name="resetShareHuggingFaceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareHuggingFaceAction"></a>

```typescript
public resetShareHuggingFaceAction(): void
```

##### `resetShareIntercomAction` <a name="resetShareIntercomAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareIntercomAction"></a>

```typescript
public resetShareIntercomAction(): void
```

##### `resetShareJiraAction` <a name="resetShareJiraAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareJiraAction"></a>

```typescript
public resetShareJiraAction(): void
```

##### `resetShareKnowledgeBases` <a name="resetShareKnowledgeBases" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareKnowledgeBases"></a>

```typescript
public resetShareKnowledgeBases(): void
```

##### `resetShareLinearAction` <a name="resetShareLinearAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareLinearAction"></a>

```typescript
public resetShareLinearAction(): void
```

##### `resetShareMcpAction` <a name="resetShareMcpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareMcpAction"></a>

```typescript
public resetShareMcpAction(): void
```

##### `resetShareMondayAction` <a name="resetShareMondayAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareMondayAction"></a>

```typescript
public resetShareMondayAction(): void
```

##### `resetShareMsExchangeAction` <a name="resetShareMsExchangeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareMsExchangeAction"></a>

```typescript
public resetShareMsExchangeAction(): void
```

##### `resetShareMsTeamsAction` <a name="resetShareMsTeamsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareMsTeamsAction"></a>

```typescript
public resetShareMsTeamsAction(): void
```

##### `resetShareNewRelicAction` <a name="resetShareNewRelicAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareNewRelicAction"></a>

```typescript
public resetShareNewRelicAction(): void
```

##### `resetShareNotionAction` <a name="resetShareNotionAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareNotionAction"></a>

```typescript
public resetShareNotionAction(): void
```

##### `resetShareOneDriveAction` <a name="resetShareOneDriveAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareOneDriveAction"></a>

```typescript
public resetShareOneDriveAction(): void
```

##### `resetShareOpenApiAction` <a name="resetShareOpenApiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareOpenApiAction"></a>

```typescript
public resetShareOpenApiAction(): void
```

##### `resetSharePagerDutyAction` <a name="resetSharePagerDutyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSharePagerDutyAction"></a>

```typescript
public resetSharePagerDutyAction(): void
```

##### `resetSharePointAction` <a name="resetSharePointAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSharePointAction"></a>

```typescript
public resetSharePointAction(): void
```

##### `resetShareSalesforceAction` <a name="resetShareSalesforceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSalesforceAction"></a>

```typescript
public resetShareSalesforceAction(): void
```

##### `resetShareSandPGlobalEnergyAction` <a name="resetShareSandPGlobalEnergyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSandPGlobalEnergyAction"></a>

```typescript
public resetShareSandPGlobalEnergyAction(): void
```

##### `resetShareSandPgmiAction` <a name="resetShareSandPgmiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSandPgmiAction"></a>

```typescript
public resetShareSandPgmiAction(): void
```

##### `resetShareSapBillOfMaterialAction` <a name="resetShareSapBillOfMaterialAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSapBillOfMaterialAction"></a>

```typescript
public resetShareSapBillOfMaterialAction(): void
```

##### `resetShareSapBusinessPartnerAction` <a name="resetShareSapBusinessPartnerAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSapBusinessPartnerAction"></a>

```typescript
public resetShareSapBusinessPartnerAction(): void
```

##### `resetShareSapMaterialStockAction` <a name="resetShareSapMaterialStockAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSapMaterialStockAction"></a>

```typescript
public resetShareSapMaterialStockAction(): void
```

##### `resetShareSapPhysicalInventoryAction` <a name="resetShareSapPhysicalInventoryAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSapPhysicalInventoryAction"></a>

```typescript
public resetShareSapPhysicalInventoryAction(): void
```

##### `resetShareSapProductMasterDataAction` <a name="resetShareSapProductMasterDataAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSapProductMasterDataAction"></a>

```typescript
public resetShareSapProductMasterDataAction(): void
```

##### `resetShareServiceNowAction` <a name="resetShareServiceNowAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareServiceNowAction"></a>

```typescript
public resetShareServiceNowAction(): void
```

##### `resetShareSharePointAction` <a name="resetShareSharePointAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSharePointAction"></a>

```typescript
public resetShareSharePointAction(): void
```

##### `resetShareSlackAction` <a name="resetShareSlackAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSlackAction"></a>

```typescript
public resetShareSlackAction(): void
```

##### `resetShareSmartsheetAction` <a name="resetShareSmartsheetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSmartsheetAction"></a>

```typescript
public resetShareSmartsheetAction(): void
```

##### `resetShareSpaces` <a name="resetShareSpaces" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSpaces"></a>

```typescript
public resetShareSpaces(): void
```

##### `resetShareTextractAction` <a name="resetShareTextractAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareTextractAction"></a>

```typescript
public resetShareTextractAction(): void
```

##### `resetShareZendeskAction` <a name="resetShareZendeskAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareZendeskAction"></a>

```typescript
public resetShareZendeskAction(): void
```

##### `resetSlackAction` <a name="resetSlackAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSlackAction"></a>

```typescript
public resetSlackAction(): void
```

##### `resetSmartsheetAction` <a name="resetSmartsheetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSmartsheetAction"></a>

```typescript
public resetSmartsheetAction(): void
```

##### `resetSpace` <a name="resetSpace" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSpace"></a>

```typescript
public resetSpace(): void
```

##### `resetSubscribeDashboardEmailReports` <a name="resetSubscribeDashboardEmailReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSubscribeDashboardEmailReports"></a>

```typescript
public resetSubscribeDashboardEmailReports(): void
```

##### `resetTextractAction` <a name="resetTextractAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetTextractAction"></a>

```typescript
public resetTextractAction(): void
```

##### `resetTopic` <a name="resetTopic" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetTopic"></a>

```typescript
public resetTopic(): void
```

##### `resetUseAgentWebSearch` <a name="resetUseAgentWebSearch" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseAgentWebSearch"></a>

```typescript
public resetUseAgentWebSearch(): void
```

##### `resetUseAmazonBedrockArsAction` <a name="resetUseAmazonBedrockArsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseAmazonBedrockArsAction"></a>

```typescript
public resetUseAmazonBedrockArsAction(): void
```

##### `resetUseAmazonBedrockFsAction` <a name="resetUseAmazonBedrockFsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseAmazonBedrockFsAction"></a>

```typescript
public resetUseAmazonBedrockFsAction(): void
```

##### `resetUseAmazonBedrockKrsAction` <a name="resetUseAmazonBedrockKrsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseAmazonBedrockKrsAction"></a>

```typescript
public resetUseAmazonBedrockKrsAction(): void
```

##### `resetUseAmazonSThreeAction` <a name="resetUseAmazonSThreeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseAmazonSThreeAction"></a>

```typescript
public resetUseAmazonSThreeAction(): void
```

##### `resetUseAsanaAction` <a name="resetUseAsanaAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseAsanaAction"></a>

```typescript
public resetUseAsanaAction(): void
```

##### `resetUseBambooHrAction` <a name="resetUseBambooHrAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseBambooHrAction"></a>

```typescript
public resetUseBambooHrAction(): void
```

##### `resetUseBedrockModels` <a name="resetUseBedrockModels" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseBedrockModels"></a>

```typescript
public resetUseBedrockModels(): void
```

##### `resetUseBoxAgentAction` <a name="resetUseBoxAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseBoxAgentAction"></a>

```typescript
public resetUseBoxAgentAction(): void
```

##### `resetUseCanvaAgentAction` <a name="resetUseCanvaAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseCanvaAgentAction"></a>

```typescript
public resetUseCanvaAgentAction(): void
```

##### `resetUseComprehendAction` <a name="resetUseComprehendAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseComprehendAction"></a>

```typescript
public resetUseComprehendAction(): void
```

##### `resetUseComprehendMedicalAction` <a name="resetUseComprehendMedicalAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseComprehendMedicalAction"></a>

```typescript
public resetUseComprehendMedicalAction(): void
```

##### `resetUseConfluenceAction` <a name="resetUseConfluenceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseConfluenceAction"></a>

```typescript
public resetUseConfluenceAction(): void
```

##### `resetUseFactSetAction` <a name="resetUseFactSetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseFactSetAction"></a>

```typescript
public resetUseFactSetAction(): void
```

##### `resetUseGenericHttpAction` <a name="resetUseGenericHttpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseGenericHttpAction"></a>

```typescript
public resetUseGenericHttpAction(): void
```

##### `resetUseGithubAction` <a name="resetUseGithubAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseGithubAction"></a>

```typescript
public resetUseGithubAction(): void
```

##### `resetUseGoogleCalendarAction` <a name="resetUseGoogleCalendarAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseGoogleCalendarAction"></a>

```typescript
public resetUseGoogleCalendarAction(): void
```

##### `resetUseHubspotAction` <a name="resetUseHubspotAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseHubspotAction"></a>

```typescript
public resetUseHubspotAction(): void
```

##### `resetUseHuggingFaceAction` <a name="resetUseHuggingFaceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseHuggingFaceAction"></a>

```typescript
public resetUseHuggingFaceAction(): void
```

##### `resetUseIntercomAction` <a name="resetUseIntercomAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseIntercomAction"></a>

```typescript
public resetUseIntercomAction(): void
```

##### `resetUseJiraAction` <a name="resetUseJiraAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseJiraAction"></a>

```typescript
public resetUseJiraAction(): void
```

##### `resetUseLinearAction` <a name="resetUseLinearAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseLinearAction"></a>

```typescript
public resetUseLinearAction(): void
```

##### `resetUseMcpAction` <a name="resetUseMcpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseMcpAction"></a>

```typescript
public resetUseMcpAction(): void
```

##### `resetUseMondayAction` <a name="resetUseMondayAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseMondayAction"></a>

```typescript
public resetUseMondayAction(): void
```

##### `resetUseMsExchangeAction` <a name="resetUseMsExchangeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseMsExchangeAction"></a>

```typescript
public resetUseMsExchangeAction(): void
```

##### `resetUseMsTeamsAction` <a name="resetUseMsTeamsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseMsTeamsAction"></a>

```typescript
public resetUseMsTeamsAction(): void
```

##### `resetUseNewRelicAction` <a name="resetUseNewRelicAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseNewRelicAction"></a>

```typescript
public resetUseNewRelicAction(): void
```

##### `resetUseNotionAction` <a name="resetUseNotionAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseNotionAction"></a>

```typescript
public resetUseNotionAction(): void
```

##### `resetUseOneDriveAction` <a name="resetUseOneDriveAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseOneDriveAction"></a>

```typescript
public resetUseOneDriveAction(): void
```

##### `resetUseOpenApiAction` <a name="resetUseOpenApiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseOpenApiAction"></a>

```typescript
public resetUseOpenApiAction(): void
```

##### `resetUsePagerDutyAction` <a name="resetUsePagerDutyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUsePagerDutyAction"></a>

```typescript
public resetUsePagerDutyAction(): void
```

##### `resetUseSalesforceAction` <a name="resetUseSalesforceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSalesforceAction"></a>

```typescript
public resetUseSalesforceAction(): void
```

##### `resetUseSandPGlobalEnergyAction` <a name="resetUseSandPGlobalEnergyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSandPGlobalEnergyAction"></a>

```typescript
public resetUseSandPGlobalEnergyAction(): void
```

##### `resetUseSandPgmiAction` <a name="resetUseSandPgmiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSandPgmiAction"></a>

```typescript
public resetUseSandPgmiAction(): void
```

##### `resetUseSapBillOfMaterialAction` <a name="resetUseSapBillOfMaterialAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSapBillOfMaterialAction"></a>

```typescript
public resetUseSapBillOfMaterialAction(): void
```

##### `resetUseSapBusinessPartnerAction` <a name="resetUseSapBusinessPartnerAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSapBusinessPartnerAction"></a>

```typescript
public resetUseSapBusinessPartnerAction(): void
```

##### `resetUseSapMaterialStockAction` <a name="resetUseSapMaterialStockAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSapMaterialStockAction"></a>

```typescript
public resetUseSapMaterialStockAction(): void
```

##### `resetUseSapPhysicalInventoryAction` <a name="resetUseSapPhysicalInventoryAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSapPhysicalInventoryAction"></a>

```typescript
public resetUseSapPhysicalInventoryAction(): void
```

##### `resetUseSapProductMasterDataAction` <a name="resetUseSapProductMasterDataAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSapProductMasterDataAction"></a>

```typescript
public resetUseSapProductMasterDataAction(): void
```

##### `resetUseServiceNowAction` <a name="resetUseServiceNowAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseServiceNowAction"></a>

```typescript
public resetUseServiceNowAction(): void
```

##### `resetUseSharePointAction` <a name="resetUseSharePointAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSharePointAction"></a>

```typescript
public resetUseSharePointAction(): void
```

##### `resetUseSlackAction` <a name="resetUseSlackAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSlackAction"></a>

```typescript
public resetUseSlackAction(): void
```

##### `resetUseSmartsheetAction` <a name="resetUseSmartsheetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSmartsheetAction"></a>

```typescript
public resetUseSmartsheetAction(): void
```

##### `resetUseTextractAction` <a name="resetUseTextractAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseTextractAction"></a>

```typescript
public resetUseTextractAction(): void
```

##### `resetUseZendeskAction` <a name="resetUseZendeskAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseZendeskAction"></a>

```typescript
public resetUseZendeskAction(): void
```

##### `resetViewAccountSpiceCapacity` <a name="resetViewAccountSpiceCapacity" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetViewAccountSpiceCapacity"></a>

```typescript
public resetViewAccountSpiceCapacity(): void
```

##### `resetZendeskAction` <a name="resetZendeskAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetZendeskAction"></a>

```typescript
public resetZendeskAction(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.accessAppsNativeDataStoreInput">accessAppsNativeDataStoreInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.addOrRunAnomalyDetectionForAnalysesInput">addOrRunAnomalyDetectionForAnalysesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockArsActionInput">amazonBedrockArsActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockFsActionInput">amazonBedrockFsActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockKrsActionInput">amazonBedrockKrsActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonSThreeActionInput">amazonSThreeActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.analysisInput">analysisInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.approveFlowShareRequestsInput">approveFlowShareRequestsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.appsInput">appsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.asanaActionInput">asanaActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.automateInput">automateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.bambooHrActionInput">bambooHrActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.boxAgentActionInput">boxAgentActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.buildCalculatedFieldWithQInput">buildCalculatedFieldWithQInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.canvaAgentActionInput">canvaAgentActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.chatAgentInput">chatAgentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.comprehendActionInput">comprehendActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.comprehendMedicalActionInput">comprehendMedicalActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.confluenceActionInput">confluenceActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockArsActionInput">createAndUpdateAmazonBedrockArsActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockFsActionInput">createAndUpdateAmazonBedrockFsActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockKrsActionInput">createAndUpdateAmazonBedrockKrsActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonSThreeActionInput">createAndUpdateAmazonSThreeActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAppsInput">createAndUpdateAppsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAsanaActionInput">createAndUpdateAsanaActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBambooHrActionInput">createAndUpdateBambooHrActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBoxAgentActionInput">createAndUpdateBoxAgentActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateCanvaAgentActionInput">createAndUpdateCanvaAgentActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateComprehendActionInput">createAndUpdateComprehendActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateComprehendMedicalActionInput">createAndUpdateComprehendMedicalActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateConfluenceActionInput">createAndUpdateConfluenceActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDashboardEmailReportsInput">createAndUpdateDashboardEmailReportsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDatasetsInput">createAndUpdateDatasetsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDataSourcesInput">createAndUpdateDataSourcesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateFactSetActionInput">createAndUpdateFactSetActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGenericHttpActionInput">createAndUpdateGenericHttpActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGithubActionInput">createAndUpdateGithubActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGoogleCalendarActionInput">createAndUpdateGoogleCalendarActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateHubspotActionInput">createAndUpdateHubspotActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateHuggingFaceActionInput">createAndUpdateHuggingFaceActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateIntercomActionInput">createAndUpdateIntercomActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateJiraActionInput">createAndUpdateJiraActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateKnowledgeBasesInput">createAndUpdateKnowledgeBasesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateLinearActionInput">createAndUpdateLinearActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMcpActionInput">createAndUpdateMcpActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMondayActionInput">createAndUpdateMondayActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMsExchangeActionInput">createAndUpdateMsExchangeActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMsTeamsActionInput">createAndUpdateMsTeamsActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateNewRelicActionInput">createAndUpdateNewRelicActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateNotionActionInput">createAndUpdateNotionActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateOneDriveActionInput">createAndUpdateOneDriveActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateOpenApiActionInput">createAndUpdateOpenApiActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdatePagerDutyActionInput">createAndUpdatePagerDutyActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSalesforceActionInput">createAndUpdateSalesforceActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSandPGlobalEnergyActionInput">createAndUpdateSandPGlobalEnergyActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSandPgmiActionInput">createAndUpdateSandPgmiActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapBillOfMaterialActionInput">createAndUpdateSapBillOfMaterialActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapBusinessPartnerActionInput">createAndUpdateSapBusinessPartnerActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapMaterialStockActionInput">createAndUpdateSapMaterialStockActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapPhysicalInventoryActionInput">createAndUpdateSapPhysicalInventoryActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapProductMasterDataActionInput">createAndUpdateSapProductMasterDataActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateServiceNowActionInput">createAndUpdateServiceNowActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSharePointActionInput">createAndUpdateSharePointActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSlackActionInput">createAndUpdateSlackActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSmartsheetActionInput">createAndUpdateSmartsheetActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateTextractActionInput">createAndUpdateTextractActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThemesInput">createAndUpdateThemesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThresholdAlertsInput">createAndUpdateThresholdAlertsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateZendeskActionInput">createAndUpdateZendeskActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createChatAgentsInput">createChatAgentsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createDashboardExecutiveSummaryWithQInput">createDashboardExecutiveSummaryWithQInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSharedFoldersInput">createSharedFoldersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSpacesInput">createSpacesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSpiceDatasetInput">createSpiceDatasetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.dashboardInput">dashboardInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.editVisualWithQInput">editVisualWithQInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsvInput">exportToCsvInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsvInScheduledReportsInput">exportToCsvInScheduledReportsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcelInput">exportToExcelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcelInScheduledReportsInput">exportToExcelInScheduledReportsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdfInput">exportToPdfInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdfInScheduledReportsInput">exportToPdfInScheduledReportsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.extensionInput">extensionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.factSetActionInput">factSetActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.flowInput">flowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.genericHttpActionInput">genericHttpActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.githubActionInput">githubActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.googleCalendarActionInput">googleCalendarActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.hubspotActionInput">hubspotActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.huggingFaceActionInput">huggingFaceActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.includeContentInScheduledReportsEmailInput">includeContentInScheduledReportsEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.intercomActionInput">intercomActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.invokeAppsAiInferenceInput">invokeAppsAiInferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.jiraActionInput">jiraActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.knowledgeBaseInput">knowledgeBaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.linearActionInput">linearActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.manageSharedFoldersInput">manageSharedFoldersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.mcpActionInput">mcpActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.mondayActionInput">mondayActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.msExchangeActionInput">msExchangeActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.msTeamsActionInput">msTeamsActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.newRelicActionInput">newRelicActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.notionActionInput">notionActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.oneDriveActionInput">oneDriveActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.openApiActionInput">openApiActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.pagerDutyActionInput">pagerDutyActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.performFlowUiTaskInput">performFlowUiTaskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.printReportsInput">printReportsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.publishWithoutApprovalInput">publishWithoutApprovalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.renameSharedFoldersInput">renameSharedFoldersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.researchInput">researchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.salesforceActionInput">salesforceActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sandPGlobalEnergyActionInput">sandPGlobalEnergyActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sandPgmiActionInput">sandPgmiActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapBillOfMaterialActionInput">sapBillOfMaterialActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapBusinessPartnerActionInput">sapBusinessPartnerActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapMaterialStockActionInput">sapMaterialStockActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapPhysicalInventoryActionInput">sapPhysicalInventoryActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapProductMasterDataActionInput">sapProductMasterDataActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.serviceNowActionInput">serviceNowActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockArsActionInput">shareAmazonBedrockArsActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockFsActionInput">shareAmazonBedrockFsActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockKrsActionInput">shareAmazonBedrockKrsActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonSThreeActionInput">shareAmazonSThreeActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAnalysesInput">shareAnalysesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAppsInput">shareAppsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAsanaActionInput">shareAsanaActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBambooHrActionInput">shareBambooHrActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBoxAgentActionInput">shareBoxAgentActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareCanvaAgentActionInput">shareCanvaAgentActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareChatAgentsInput">shareChatAgentsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareComprehendActionInput">shareComprehendActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareComprehendMedicalActionInput">shareComprehendMedicalActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareConfluenceActionInput">shareConfluenceActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDashboardsInput">shareDashboardsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDatasetsInput">shareDatasetsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDataSourcesInput">shareDataSourcesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareFactSetActionInput">shareFactSetActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGenericHttpActionInput">shareGenericHttpActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGithubActionInput">shareGithubActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGoogleCalendarActionInput">shareGoogleCalendarActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareHubspotActionInput">shareHubspotActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareHuggingFaceActionInput">shareHuggingFaceActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareIntercomActionInput">shareIntercomActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareJiraActionInput">shareJiraActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareKnowledgeBasesInput">shareKnowledgeBasesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareLinearActionInput">shareLinearActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMcpActionInput">shareMcpActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMondayActionInput">shareMondayActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMsExchangeActionInput">shareMsExchangeActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMsTeamsActionInput">shareMsTeamsActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareNewRelicActionInput">shareNewRelicActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareNotionActionInput">shareNotionActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOneDriveActionInput">shareOneDriveActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOpenApiActionInput">shareOpenApiActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePagerDutyActionInput">sharePagerDutyActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePointActionInput">sharePointActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSalesforceActionInput">shareSalesforceActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSandPGlobalEnergyActionInput">shareSandPGlobalEnergyActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSandPgmiActionInput">shareSandPgmiActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapBillOfMaterialActionInput">shareSapBillOfMaterialActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapBusinessPartnerActionInput">shareSapBusinessPartnerActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapMaterialStockActionInput">shareSapMaterialStockActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapPhysicalInventoryActionInput">shareSapPhysicalInventoryActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapProductMasterDataActionInput">shareSapProductMasterDataActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareServiceNowActionInput">shareServiceNowActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSharePointActionInput">shareSharePointActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSlackActionInput">shareSlackActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSmartsheetActionInput">shareSmartsheetActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSpacesInput">shareSpacesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareTextractActionInput">shareTextractActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareZendeskActionInput">shareZendeskActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.slackActionInput">slackActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.smartsheetActionInput">smartsheetActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.spaceInput">spaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.subscribeDashboardEmailReportsInput">subscribeDashboardEmailReportsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.textractActionInput">textractActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.topicInput">topicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAgentWebSearchInput">useAgentWebSearchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockArsActionInput">useAmazonBedrockArsActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockFsActionInput">useAmazonBedrockFsActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockKrsActionInput">useAmazonBedrockKrsActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonSThreeActionInput">useAmazonSThreeActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAsanaActionInput">useAsanaActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useBambooHrActionInput">useBambooHrActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useBedrockModelsInput">useBedrockModelsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useBoxAgentActionInput">useBoxAgentActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useCanvaAgentActionInput">useCanvaAgentActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useComprehendActionInput">useComprehendActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useComprehendMedicalActionInput">useComprehendMedicalActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useConfluenceActionInput">useConfluenceActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useFactSetActionInput">useFactSetActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useGenericHttpActionInput">useGenericHttpActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useGithubActionInput">useGithubActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useGoogleCalendarActionInput">useGoogleCalendarActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useHubspotActionInput">useHubspotActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useHuggingFaceActionInput">useHuggingFaceActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useIntercomActionInput">useIntercomActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useJiraActionInput">useJiraActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useLinearActionInput">useLinearActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMcpActionInput">useMcpActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMondayActionInput">useMondayActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMsExchangeActionInput">useMsExchangeActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMsTeamsActionInput">useMsTeamsActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useNewRelicActionInput">useNewRelicActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useNotionActionInput">useNotionActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useOneDriveActionInput">useOneDriveActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useOpenApiActionInput">useOpenApiActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.usePagerDutyActionInput">usePagerDutyActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSalesforceActionInput">useSalesforceActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSandPGlobalEnergyActionInput">useSandPGlobalEnergyActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSandPgmiActionInput">useSandPgmiActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapBillOfMaterialActionInput">useSapBillOfMaterialActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapBusinessPartnerActionInput">useSapBusinessPartnerActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapMaterialStockActionInput">useSapMaterialStockActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapPhysicalInventoryActionInput">useSapPhysicalInventoryActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapProductMasterDataActionInput">useSapProductMasterDataActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useServiceNowActionInput">useServiceNowActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSharePointActionInput">useSharePointActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSlackActionInput">useSlackActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSmartsheetActionInput">useSmartsheetActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useTextractActionInput">useTextractActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useZendeskActionInput">useZendeskActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.viewAccountSpiceCapacityInput">viewAccountSpiceCapacityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.zendeskActionInput">zendeskActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.accessAppsNativeDataStore">accessAppsNativeDataStore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.addOrRunAnomalyDetectionForAnalyses">addOrRunAnomalyDetectionForAnalyses</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockArsAction">amazonBedrockArsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockFsAction">amazonBedrockFsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockKrsAction">amazonBedrockKrsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonSThreeAction">amazonSThreeAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.analysis">analysis</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.approveFlowShareRequests">approveFlowShareRequests</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.apps">apps</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.asanaAction">asanaAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.automate">automate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.bambooHrAction">bambooHrAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.boxAgentAction">boxAgentAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.buildCalculatedFieldWithQ">buildCalculatedFieldWithQ</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.canvaAgentAction">canvaAgentAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.chatAgent">chatAgent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.comprehendAction">comprehendAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.comprehendMedicalAction">comprehendMedicalAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.confluenceAction">confluenceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockArsAction">createAndUpdateAmazonBedrockArsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockFsAction">createAndUpdateAmazonBedrockFsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockKrsAction">createAndUpdateAmazonBedrockKrsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonSThreeAction">createAndUpdateAmazonSThreeAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateApps">createAndUpdateApps</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAsanaAction">createAndUpdateAsanaAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBambooHrAction">createAndUpdateBambooHrAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBoxAgentAction">createAndUpdateBoxAgentAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateCanvaAgentAction">createAndUpdateCanvaAgentAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateComprehendAction">createAndUpdateComprehendAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateComprehendMedicalAction">createAndUpdateComprehendMedicalAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateConfluenceAction">createAndUpdateConfluenceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDashboardEmailReports">createAndUpdateDashboardEmailReports</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDatasets">createAndUpdateDatasets</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDataSources">createAndUpdateDataSources</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateFactSetAction">createAndUpdateFactSetAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGenericHttpAction">createAndUpdateGenericHttpAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGithubAction">createAndUpdateGithubAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGoogleCalendarAction">createAndUpdateGoogleCalendarAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateHubspotAction">createAndUpdateHubspotAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateHuggingFaceAction">createAndUpdateHuggingFaceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateIntercomAction">createAndUpdateIntercomAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateJiraAction">createAndUpdateJiraAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateKnowledgeBases">createAndUpdateKnowledgeBases</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateLinearAction">createAndUpdateLinearAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMcpAction">createAndUpdateMcpAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMondayAction">createAndUpdateMondayAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMsExchangeAction">createAndUpdateMsExchangeAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMsTeamsAction">createAndUpdateMsTeamsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateNewRelicAction">createAndUpdateNewRelicAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateNotionAction">createAndUpdateNotionAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateOneDriveAction">createAndUpdateOneDriveAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateOpenApiAction">createAndUpdateOpenApiAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdatePagerDutyAction">createAndUpdatePagerDutyAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSalesforceAction">createAndUpdateSalesforceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSandPGlobalEnergyAction">createAndUpdateSandPGlobalEnergyAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSandPgmiAction">createAndUpdateSandPgmiAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapBillOfMaterialAction">createAndUpdateSapBillOfMaterialAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapBusinessPartnerAction">createAndUpdateSapBusinessPartnerAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapMaterialStockAction">createAndUpdateSapMaterialStockAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapPhysicalInventoryAction">createAndUpdateSapPhysicalInventoryAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapProductMasterDataAction">createAndUpdateSapProductMasterDataAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateServiceNowAction">createAndUpdateServiceNowAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSharePointAction">createAndUpdateSharePointAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSlackAction">createAndUpdateSlackAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSmartsheetAction">createAndUpdateSmartsheetAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateTextractAction">createAndUpdateTextractAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThemes">createAndUpdateThemes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThresholdAlerts">createAndUpdateThresholdAlerts</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateZendeskAction">createAndUpdateZendeskAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createChatAgents">createChatAgents</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createDashboardExecutiveSummaryWithQ">createDashboardExecutiveSummaryWithQ</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSharedFolders">createSharedFolders</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSpaces">createSpaces</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSpiceDataset">createSpiceDataset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.dashboard">dashboard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.editVisualWithQ">editVisualWithQ</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsv">exportToCsv</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsvInScheduledReports">exportToCsvInScheduledReports</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcel">exportToExcel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcelInScheduledReports">exportToExcelInScheduledReports</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdf">exportToPdf</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdfInScheduledReports">exportToPdfInScheduledReports</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.extension">extension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.factSetAction">factSetAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.flow">flow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.genericHttpAction">genericHttpAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.githubAction">githubAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.googleCalendarAction">googleCalendarAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.hubspotAction">hubspotAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.huggingFaceAction">huggingFaceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.includeContentInScheduledReportsEmail">includeContentInScheduledReportsEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.intercomAction">intercomAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.invokeAppsAiInference">invokeAppsAiInference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.jiraAction">jiraAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.knowledgeBase">knowledgeBase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.linearAction">linearAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.manageSharedFolders">manageSharedFolders</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.mcpAction">mcpAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.mondayAction">mondayAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.msExchangeAction">msExchangeAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.msTeamsAction">msTeamsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.newRelicAction">newRelicAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.notionAction">notionAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.oneDriveAction">oneDriveAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.openApiAction">openApiAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.pagerDutyAction">pagerDutyAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.performFlowUiTask">performFlowUiTask</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.printReports">printReports</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.publishWithoutApproval">publishWithoutApproval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.renameSharedFolders">renameSharedFolders</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.research">research</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.salesforceAction">salesforceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sandPGlobalEnergyAction">sandPGlobalEnergyAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sandPgmiAction">sandPgmiAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapBillOfMaterialAction">sapBillOfMaterialAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapBusinessPartnerAction">sapBusinessPartnerAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapMaterialStockAction">sapMaterialStockAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapPhysicalInventoryAction">sapPhysicalInventoryAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapProductMasterDataAction">sapProductMasterDataAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.serviceNowAction">serviceNowAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockArsAction">shareAmazonBedrockArsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockFsAction">shareAmazonBedrockFsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockKrsAction">shareAmazonBedrockKrsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonSThreeAction">shareAmazonSThreeAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAnalyses">shareAnalyses</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareApps">shareApps</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAsanaAction">shareAsanaAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBambooHrAction">shareBambooHrAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBoxAgentAction">shareBoxAgentAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareCanvaAgentAction">shareCanvaAgentAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareChatAgents">shareChatAgents</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareComprehendAction">shareComprehendAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareComprehendMedicalAction">shareComprehendMedicalAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareConfluenceAction">shareConfluenceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDashboards">shareDashboards</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDatasets">shareDatasets</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDataSources">shareDataSources</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareFactSetAction">shareFactSetAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGenericHttpAction">shareGenericHttpAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGithubAction">shareGithubAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGoogleCalendarAction">shareGoogleCalendarAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareHubspotAction">shareHubspotAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareHuggingFaceAction">shareHuggingFaceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareIntercomAction">shareIntercomAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareJiraAction">shareJiraAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareKnowledgeBases">shareKnowledgeBases</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareLinearAction">shareLinearAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMcpAction">shareMcpAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMondayAction">shareMondayAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMsExchangeAction">shareMsExchangeAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMsTeamsAction">shareMsTeamsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareNewRelicAction">shareNewRelicAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareNotionAction">shareNotionAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOneDriveAction">shareOneDriveAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOpenApiAction">shareOpenApiAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePagerDutyAction">sharePagerDutyAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePointAction">sharePointAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSalesforceAction">shareSalesforceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSandPGlobalEnergyAction">shareSandPGlobalEnergyAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSandPgmiAction">shareSandPgmiAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapBillOfMaterialAction">shareSapBillOfMaterialAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapBusinessPartnerAction">shareSapBusinessPartnerAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapMaterialStockAction">shareSapMaterialStockAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapPhysicalInventoryAction">shareSapPhysicalInventoryAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapProductMasterDataAction">shareSapProductMasterDataAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareServiceNowAction">shareServiceNowAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSharePointAction">shareSharePointAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSlackAction">shareSlackAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSmartsheetAction">shareSmartsheetAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSpaces">shareSpaces</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareTextractAction">shareTextractAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareZendeskAction">shareZendeskAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.slackAction">slackAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.smartsheetAction">smartsheetAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.space">space</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.subscribeDashboardEmailReports">subscribeDashboardEmailReports</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.textractAction">textractAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.topic">topic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAgentWebSearch">useAgentWebSearch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockArsAction">useAmazonBedrockArsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockFsAction">useAmazonBedrockFsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockKrsAction">useAmazonBedrockKrsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonSThreeAction">useAmazonSThreeAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAsanaAction">useAsanaAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useBambooHrAction">useBambooHrAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useBedrockModels">useBedrockModels</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useBoxAgentAction">useBoxAgentAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useCanvaAgentAction">useCanvaAgentAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useComprehendAction">useComprehendAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useComprehendMedicalAction">useComprehendMedicalAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useConfluenceAction">useConfluenceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useFactSetAction">useFactSetAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useGenericHttpAction">useGenericHttpAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useGithubAction">useGithubAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useGoogleCalendarAction">useGoogleCalendarAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useHubspotAction">useHubspotAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useHuggingFaceAction">useHuggingFaceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useIntercomAction">useIntercomAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useJiraAction">useJiraAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useLinearAction">useLinearAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMcpAction">useMcpAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMondayAction">useMondayAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMsExchangeAction">useMsExchangeAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMsTeamsAction">useMsTeamsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useNewRelicAction">useNewRelicAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useNotionAction">useNotionAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useOneDriveAction">useOneDriveAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useOpenApiAction">useOpenApiAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.usePagerDutyAction">usePagerDutyAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSalesforceAction">useSalesforceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSandPGlobalEnergyAction">useSandPGlobalEnergyAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSandPgmiAction">useSandPgmiAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapBillOfMaterialAction">useSapBillOfMaterialAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapBusinessPartnerAction">useSapBusinessPartnerAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapMaterialStockAction">useSapMaterialStockAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapPhysicalInventoryAction">useSapPhysicalInventoryAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapProductMasterDataAction">useSapProductMasterDataAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useServiceNowAction">useServiceNowAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSharePointAction">useSharePointAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSlackAction">useSlackAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSmartsheetAction">useSmartsheetAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useTextractAction">useTextractAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useZendeskAction">useZendeskAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.viewAccountSpiceCapacity">viewAccountSpiceCapacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.zendeskAction">zendeskAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities">QuicksightCustomPermissionsCapabilities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessAppsNativeDataStoreInput`<sup>Optional</sup> <a name="accessAppsNativeDataStoreInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.accessAppsNativeDataStoreInput"></a>

```typescript
public readonly accessAppsNativeDataStoreInput: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `addOrRunAnomalyDetectionForAnalysesInput`<sup>Optional</sup> <a name="addOrRunAnomalyDetectionForAnalysesInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.addOrRunAnomalyDetectionForAnalysesInput"></a>

```typescript
public readonly addOrRunAnomalyDetectionForAnalysesInput: string;
```

- *Type:* string

---

##### `amazonBedrockArsActionInput`<sup>Optional</sup> <a name="amazonBedrockArsActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockArsActionInput"></a>

```typescript
public readonly amazonBedrockArsActionInput: string;
```

- *Type:* string

---

##### `amazonBedrockFsActionInput`<sup>Optional</sup> <a name="amazonBedrockFsActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockFsActionInput"></a>

```typescript
public readonly amazonBedrockFsActionInput: string;
```

- *Type:* string

---

##### `amazonBedrockKrsActionInput`<sup>Optional</sup> <a name="amazonBedrockKrsActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockKrsActionInput"></a>

```typescript
public readonly amazonBedrockKrsActionInput: string;
```

- *Type:* string

---

##### `amazonSThreeActionInput`<sup>Optional</sup> <a name="amazonSThreeActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonSThreeActionInput"></a>

```typescript
public readonly amazonSThreeActionInput: string;
```

- *Type:* string

---

##### `analysisInput`<sup>Optional</sup> <a name="analysisInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.analysisInput"></a>

```typescript
public readonly analysisInput: string;
```

- *Type:* string

---

##### `approveFlowShareRequestsInput`<sup>Optional</sup> <a name="approveFlowShareRequestsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.approveFlowShareRequestsInput"></a>

```typescript
public readonly approveFlowShareRequestsInput: string;
```

- *Type:* string

---

##### `appsInput`<sup>Optional</sup> <a name="appsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.appsInput"></a>

```typescript
public readonly appsInput: string;
```

- *Type:* string

---

##### `asanaActionInput`<sup>Optional</sup> <a name="asanaActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.asanaActionInput"></a>

```typescript
public readonly asanaActionInput: string;
```

- *Type:* string

---

##### `automateInput`<sup>Optional</sup> <a name="automateInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.automateInput"></a>

```typescript
public readonly automateInput: string;
```

- *Type:* string

---

##### `bambooHrActionInput`<sup>Optional</sup> <a name="bambooHrActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.bambooHrActionInput"></a>

```typescript
public readonly bambooHrActionInput: string;
```

- *Type:* string

---

##### `boxAgentActionInput`<sup>Optional</sup> <a name="boxAgentActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.boxAgentActionInput"></a>

```typescript
public readonly boxAgentActionInput: string;
```

- *Type:* string

---

##### `buildCalculatedFieldWithQInput`<sup>Optional</sup> <a name="buildCalculatedFieldWithQInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.buildCalculatedFieldWithQInput"></a>

```typescript
public readonly buildCalculatedFieldWithQInput: string;
```

- *Type:* string

---

##### `canvaAgentActionInput`<sup>Optional</sup> <a name="canvaAgentActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.canvaAgentActionInput"></a>

```typescript
public readonly canvaAgentActionInput: string;
```

- *Type:* string

---

##### `chatAgentInput`<sup>Optional</sup> <a name="chatAgentInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.chatAgentInput"></a>

```typescript
public readonly chatAgentInput: string;
```

- *Type:* string

---

##### `comprehendActionInput`<sup>Optional</sup> <a name="comprehendActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.comprehendActionInput"></a>

```typescript
public readonly comprehendActionInput: string;
```

- *Type:* string

---

##### `comprehendMedicalActionInput`<sup>Optional</sup> <a name="comprehendMedicalActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.comprehendMedicalActionInput"></a>

```typescript
public readonly comprehendMedicalActionInput: string;
```

- *Type:* string

---

##### `confluenceActionInput`<sup>Optional</sup> <a name="confluenceActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.confluenceActionInput"></a>

```typescript
public readonly confluenceActionInput: string;
```

- *Type:* string

---

##### `createAndUpdateAmazonBedrockArsActionInput`<sup>Optional</sup> <a name="createAndUpdateAmazonBedrockArsActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockArsActionInput"></a>

```typescript
public readonly createAndUpdateAmazonBedrockArsActionInput: string;
```

- *Type:* string

---

##### `createAndUpdateAmazonBedrockFsActionInput`<sup>Optional</sup> <a name="createAndUpdateAmazonBedrockFsActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockFsActionInput"></a>

```typescript
public readonly createAndUpdateAmazonBedrockFsActionInput: string;
```

- *Type:* string

---

##### `createAndUpdateAmazonBedrockKrsActionInput`<sup>Optional</sup> <a name="createAndUpdateAmazonBedrockKrsActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockKrsActionInput"></a>

```typescript
public readonly createAndUpdateAmazonBedrockKrsActionInput: string;
```

- *Type:* string

---

##### `createAndUpdateAmazonSThreeActionInput`<sup>Optional</sup> <a name="createAndUpdateAmazonSThreeActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonSThreeActionInput"></a>

```typescript
public readonly createAndUpdateAmazonSThreeActionInput: string;
```

- *Type:* string

---

##### `createAndUpdateAppsInput`<sup>Optional</sup> <a name="createAndUpdateAppsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAppsInput"></a>

```typescript
public readonly createAndUpdateAppsInput: string;
```

- *Type:* string

---

##### `createAndUpdateAsanaActionInput`<sup>Optional</sup> <a name="createAndUpdateAsanaActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAsanaActionInput"></a>

```typescript
public readonly createAndUpdateAsanaActionInput: string;
```

- *Type:* string

---

##### `createAndUpdateBambooHrActionInput`<sup>Optional</sup> <a name="createAndUpdateBambooHrActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBambooHrActionInput"></a>

```typescript
public readonly createAndUpdateBambooHrActionInput: string;
```

- *Type:* string

---

##### `createAndUpdateBoxAgentActionInput`<sup>Optional</sup> <a name="createAndUpdateBoxAgentActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBoxAgentActionInput"></a>

```typescript
public readonly createAndUpdateBoxAgentActionInput: string;
```

- *Type:* string

---

##### `createAndUpdateCanvaAgentActionInput`<sup>Optional</sup> <a name="createAndUpdateCanvaAgentActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateCanvaAgentActionInput"></a>

```typescript
public readonly createAndUpdateCanvaAgentActionInput: string;
```

- *Type:* string

---

##### `createAndUpdateComprehendActionInput`<sup>Optional</sup> <a name="createAndUpdateComprehendActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateComprehendActionInput"></a>

```typescript
public readonly createAndUpdateComprehendActionInput: string;
```

- *Type:* string

---

##### `createAndUpdateComprehendMedicalActionInput`<sup>Optional</sup> <a name="createAndUpdateComprehendMedicalActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateComprehendMedicalActionInput"></a>

```typescript
public readonly createAndUpdateComprehendMedicalActionInput: string;
```

- *Type:* string

---

##### `createAndUpdateConfluenceActionInput`<sup>Optional</sup> <a name="createAndUpdateConfluenceActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateConfluenceActionInput"></a>

```typescript
public readonly createAndUpdateConfluenceActionInput: string;
```

- *Type:* string

---

##### `createAndUpdateDashboardEmailReportsInput`<sup>Optional</sup> <a name="createAndUpdateDashboardEmailReportsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDashboardEmailReportsInput"></a>

```typescript
public readonly createAndUpdateDashboardEmailReportsInput: string;
```

- *Type:* string

---

##### `createAndUpdateDatasetsInput`<sup>Optional</sup> <a name="createAndUpdateDatasetsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDatasetsInput"></a>

```typescript
public readonly createAndUpdateDatasetsInput: string;
```

- *Type:* string

---

##### `createAndUpdateDataSourcesInput`<sup>Optional</sup> <a name="createAndUpdateDataSourcesInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDataSourcesInput"></a>

```typescript
public readonly createAndUpdateDataSourcesInput: string;
```

- *Type:* string

---

##### `createAndUpdateFactSetActionInput`<sup>Optional</sup> <a name="createAndUpdateFactSetActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateFactSetActionInput"></a>

```typescript
public readonly createAndUpdateFactSetActionInput: string;
```

- *Type:* string

---

##### `createAndUpdateGenericHttpActionInput`<sup>Optional</sup> <a name="createAndUpdateGenericHttpActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGenericHttpActionInput"></a>

```typescript
public readonly createAndUpdateGenericHttpActionInput: string;
```

- *Type:* string

---

##### `createAndUpdateGithubActionInput`<sup>Optional</sup> <a name="createAndUpdateGithubActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGithubActionInput"></a>

```typescript
public readonly createAndUpdateGithubActionInput: string;
```

- *Type:* string

---

##### `createAndUpdateGoogleCalendarActionInput`<sup>Optional</sup> <a name="createAndUpdateGoogleCalendarActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGoogleCalendarActionInput"></a>

```typescript
public readonly createAndUpdateGoogleCalendarActionInput: string;
```

- *Type:* string

---

##### `createAndUpdateHubspotActionInput`<sup>Optional</sup> <a name="createAndUpdateHubspotActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateHubspotActionInput"></a>

```typescript
public readonly createAndUpdateHubspotActionInput: string;
```

- *Type:* string

---

##### `createAndUpdateHuggingFaceActionInput`<sup>Optional</sup> <a name="createAndUpdateHuggingFaceActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateHuggingFaceActionInput"></a>

```typescript
public readonly createAndUpdateHuggingFaceActionInput: string;
```

- *Type:* string

---

##### `createAndUpdateIntercomActionInput`<sup>Optional</sup> <a name="createAndUpdateIntercomActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateIntercomActionInput"></a>

```typescript
public readonly createAndUpdateIntercomActionInput: string;
```

- *Type:* string

---

##### `createAndUpdateJiraActionInput`<sup>Optional</sup> <a name="createAndUpdateJiraActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateJiraActionInput"></a>

```typescript
public readonly createAndUpdateJiraActionInput: string;
```

- *Type:* string

---

##### `createAndUpdateKnowledgeBasesInput`<sup>Optional</sup> <a name="createAndUpdateKnowledgeBasesInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateKnowledgeBasesInput"></a>

```typescript
public readonly createAndUpdateKnowledgeBasesInput: string;
```

- *Type:* string

---

##### `createAndUpdateLinearActionInput`<sup>Optional</sup> <a name="createAndUpdateLinearActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateLinearActionInput"></a>

```typescript
public readonly createAndUpdateLinearActionInput: string;
```

- *Type:* string

---

##### `createAndUpdateMcpActionInput`<sup>Optional</sup> <a name="createAndUpdateMcpActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMcpActionInput"></a>

```typescript
public readonly createAndUpdateMcpActionInput: string;
```

- *Type:* string

---

##### `createAndUpdateMondayActionInput`<sup>Optional</sup> <a name="createAndUpdateMondayActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMondayActionInput"></a>

```typescript
public readonly createAndUpdateMondayActionInput: string;
```

- *Type:* string

---

##### `createAndUpdateMsExchangeActionInput`<sup>Optional</sup> <a name="createAndUpdateMsExchangeActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMsExchangeActionInput"></a>

```typescript
public readonly createAndUpdateMsExchangeActionInput: string;
```

- *Type:* string

---

##### `createAndUpdateMsTeamsActionInput`<sup>Optional</sup> <a name="createAndUpdateMsTeamsActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMsTeamsActionInput"></a>

```typescript
public readonly createAndUpdateMsTeamsActionInput: string;
```

- *Type:* string

---

##### `createAndUpdateNewRelicActionInput`<sup>Optional</sup> <a name="createAndUpdateNewRelicActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateNewRelicActionInput"></a>

```typescript
public readonly createAndUpdateNewRelicActionInput: string;
```

- *Type:* string

---

##### `createAndUpdateNotionActionInput`<sup>Optional</sup> <a name="createAndUpdateNotionActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateNotionActionInput"></a>

```typescript
public readonly createAndUpdateNotionActionInput: string;
```

- *Type:* string

---

##### `createAndUpdateOneDriveActionInput`<sup>Optional</sup> <a name="createAndUpdateOneDriveActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateOneDriveActionInput"></a>

```typescript
public readonly createAndUpdateOneDriveActionInput: string;
```

- *Type:* string

---

##### `createAndUpdateOpenApiActionInput`<sup>Optional</sup> <a name="createAndUpdateOpenApiActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateOpenApiActionInput"></a>

```typescript
public readonly createAndUpdateOpenApiActionInput: string;
```

- *Type:* string

---

##### `createAndUpdatePagerDutyActionInput`<sup>Optional</sup> <a name="createAndUpdatePagerDutyActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdatePagerDutyActionInput"></a>

```typescript
public readonly createAndUpdatePagerDutyActionInput: string;
```

- *Type:* string

---

##### `createAndUpdateSalesforceActionInput`<sup>Optional</sup> <a name="createAndUpdateSalesforceActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSalesforceActionInput"></a>

```typescript
public readonly createAndUpdateSalesforceActionInput: string;
```

- *Type:* string

---

##### `createAndUpdateSandPGlobalEnergyActionInput`<sup>Optional</sup> <a name="createAndUpdateSandPGlobalEnergyActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSandPGlobalEnergyActionInput"></a>

```typescript
public readonly createAndUpdateSandPGlobalEnergyActionInput: string;
```

- *Type:* string

---

##### `createAndUpdateSandPgmiActionInput`<sup>Optional</sup> <a name="createAndUpdateSandPgmiActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSandPgmiActionInput"></a>

```typescript
public readonly createAndUpdateSandPgmiActionInput: string;
```

- *Type:* string

---

##### `createAndUpdateSapBillOfMaterialActionInput`<sup>Optional</sup> <a name="createAndUpdateSapBillOfMaterialActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapBillOfMaterialActionInput"></a>

```typescript
public readonly createAndUpdateSapBillOfMaterialActionInput: string;
```

- *Type:* string

---

##### `createAndUpdateSapBusinessPartnerActionInput`<sup>Optional</sup> <a name="createAndUpdateSapBusinessPartnerActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapBusinessPartnerActionInput"></a>

```typescript
public readonly createAndUpdateSapBusinessPartnerActionInput: string;
```

- *Type:* string

---

##### `createAndUpdateSapMaterialStockActionInput`<sup>Optional</sup> <a name="createAndUpdateSapMaterialStockActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapMaterialStockActionInput"></a>

```typescript
public readonly createAndUpdateSapMaterialStockActionInput: string;
```

- *Type:* string

---

##### `createAndUpdateSapPhysicalInventoryActionInput`<sup>Optional</sup> <a name="createAndUpdateSapPhysicalInventoryActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapPhysicalInventoryActionInput"></a>

```typescript
public readonly createAndUpdateSapPhysicalInventoryActionInput: string;
```

- *Type:* string

---

##### `createAndUpdateSapProductMasterDataActionInput`<sup>Optional</sup> <a name="createAndUpdateSapProductMasterDataActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapProductMasterDataActionInput"></a>

```typescript
public readonly createAndUpdateSapProductMasterDataActionInput: string;
```

- *Type:* string

---

##### `createAndUpdateServiceNowActionInput`<sup>Optional</sup> <a name="createAndUpdateServiceNowActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateServiceNowActionInput"></a>

```typescript
public readonly createAndUpdateServiceNowActionInput: string;
```

- *Type:* string

---

##### `createAndUpdateSharePointActionInput`<sup>Optional</sup> <a name="createAndUpdateSharePointActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSharePointActionInput"></a>

```typescript
public readonly createAndUpdateSharePointActionInput: string;
```

- *Type:* string

---

##### `createAndUpdateSlackActionInput`<sup>Optional</sup> <a name="createAndUpdateSlackActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSlackActionInput"></a>

```typescript
public readonly createAndUpdateSlackActionInput: string;
```

- *Type:* string

---

##### `createAndUpdateSmartsheetActionInput`<sup>Optional</sup> <a name="createAndUpdateSmartsheetActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSmartsheetActionInput"></a>

```typescript
public readonly createAndUpdateSmartsheetActionInput: string;
```

- *Type:* string

---

##### `createAndUpdateTextractActionInput`<sup>Optional</sup> <a name="createAndUpdateTextractActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateTextractActionInput"></a>

```typescript
public readonly createAndUpdateTextractActionInput: string;
```

- *Type:* string

---

##### `createAndUpdateThemesInput`<sup>Optional</sup> <a name="createAndUpdateThemesInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThemesInput"></a>

```typescript
public readonly createAndUpdateThemesInput: string;
```

- *Type:* string

---

##### `createAndUpdateThresholdAlertsInput`<sup>Optional</sup> <a name="createAndUpdateThresholdAlertsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThresholdAlertsInput"></a>

```typescript
public readonly createAndUpdateThresholdAlertsInput: string;
```

- *Type:* string

---

##### `createAndUpdateZendeskActionInput`<sup>Optional</sup> <a name="createAndUpdateZendeskActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateZendeskActionInput"></a>

```typescript
public readonly createAndUpdateZendeskActionInput: string;
```

- *Type:* string

---

##### `createChatAgentsInput`<sup>Optional</sup> <a name="createChatAgentsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createChatAgentsInput"></a>

```typescript
public readonly createChatAgentsInput: string;
```

- *Type:* string

---

##### `createDashboardExecutiveSummaryWithQInput`<sup>Optional</sup> <a name="createDashboardExecutiveSummaryWithQInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createDashboardExecutiveSummaryWithQInput"></a>

```typescript
public readonly createDashboardExecutiveSummaryWithQInput: string;
```

- *Type:* string

---

##### `createSharedFoldersInput`<sup>Optional</sup> <a name="createSharedFoldersInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSharedFoldersInput"></a>

```typescript
public readonly createSharedFoldersInput: string;
```

- *Type:* string

---

##### `createSpacesInput`<sup>Optional</sup> <a name="createSpacesInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSpacesInput"></a>

```typescript
public readonly createSpacesInput: string;
```

- *Type:* string

---

##### `createSpiceDatasetInput`<sup>Optional</sup> <a name="createSpiceDatasetInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSpiceDatasetInput"></a>

```typescript
public readonly createSpiceDatasetInput: string;
```

- *Type:* string

---

##### `dashboardInput`<sup>Optional</sup> <a name="dashboardInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.dashboardInput"></a>

```typescript
public readonly dashboardInput: string;
```

- *Type:* string

---

##### `editVisualWithQInput`<sup>Optional</sup> <a name="editVisualWithQInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.editVisualWithQInput"></a>

```typescript
public readonly editVisualWithQInput: string;
```

- *Type:* string

---

##### `exportToCsvInput`<sup>Optional</sup> <a name="exportToCsvInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsvInput"></a>

```typescript
public readonly exportToCsvInput: string;
```

- *Type:* string

---

##### `exportToCsvInScheduledReportsInput`<sup>Optional</sup> <a name="exportToCsvInScheduledReportsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsvInScheduledReportsInput"></a>

```typescript
public readonly exportToCsvInScheduledReportsInput: string;
```

- *Type:* string

---

##### `exportToExcelInput`<sup>Optional</sup> <a name="exportToExcelInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcelInput"></a>

```typescript
public readonly exportToExcelInput: string;
```

- *Type:* string

---

##### `exportToExcelInScheduledReportsInput`<sup>Optional</sup> <a name="exportToExcelInScheduledReportsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcelInScheduledReportsInput"></a>

```typescript
public readonly exportToExcelInScheduledReportsInput: string;
```

- *Type:* string

---

##### `exportToPdfInput`<sup>Optional</sup> <a name="exportToPdfInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdfInput"></a>

```typescript
public readonly exportToPdfInput: string;
```

- *Type:* string

---

##### `exportToPdfInScheduledReportsInput`<sup>Optional</sup> <a name="exportToPdfInScheduledReportsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdfInScheduledReportsInput"></a>

```typescript
public readonly exportToPdfInScheduledReportsInput: string;
```

- *Type:* string

---

##### `extensionInput`<sup>Optional</sup> <a name="extensionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.extensionInput"></a>

```typescript
public readonly extensionInput: string;
```

- *Type:* string

---

##### `factSetActionInput`<sup>Optional</sup> <a name="factSetActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.factSetActionInput"></a>

```typescript
public readonly factSetActionInput: string;
```

- *Type:* string

---

##### `flowInput`<sup>Optional</sup> <a name="flowInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.flowInput"></a>

```typescript
public readonly flowInput: string;
```

- *Type:* string

---

##### `genericHttpActionInput`<sup>Optional</sup> <a name="genericHttpActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.genericHttpActionInput"></a>

```typescript
public readonly genericHttpActionInput: string;
```

- *Type:* string

---

##### `githubActionInput`<sup>Optional</sup> <a name="githubActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.githubActionInput"></a>

```typescript
public readonly githubActionInput: string;
```

- *Type:* string

---

##### `googleCalendarActionInput`<sup>Optional</sup> <a name="googleCalendarActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.googleCalendarActionInput"></a>

```typescript
public readonly googleCalendarActionInput: string;
```

- *Type:* string

---

##### `hubspotActionInput`<sup>Optional</sup> <a name="hubspotActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.hubspotActionInput"></a>

```typescript
public readonly hubspotActionInput: string;
```

- *Type:* string

---

##### `huggingFaceActionInput`<sup>Optional</sup> <a name="huggingFaceActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.huggingFaceActionInput"></a>

```typescript
public readonly huggingFaceActionInput: string;
```

- *Type:* string

---

##### `includeContentInScheduledReportsEmailInput`<sup>Optional</sup> <a name="includeContentInScheduledReportsEmailInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.includeContentInScheduledReportsEmailInput"></a>

```typescript
public readonly includeContentInScheduledReportsEmailInput: string;
```

- *Type:* string

---

##### `intercomActionInput`<sup>Optional</sup> <a name="intercomActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.intercomActionInput"></a>

```typescript
public readonly intercomActionInput: string;
```

- *Type:* string

---

##### `invokeAppsAiInferenceInput`<sup>Optional</sup> <a name="invokeAppsAiInferenceInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.invokeAppsAiInferenceInput"></a>

```typescript
public readonly invokeAppsAiInferenceInput: string;
```

- *Type:* string

---

##### `jiraActionInput`<sup>Optional</sup> <a name="jiraActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.jiraActionInput"></a>

```typescript
public readonly jiraActionInput: string;
```

- *Type:* string

---

##### `knowledgeBaseInput`<sup>Optional</sup> <a name="knowledgeBaseInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.knowledgeBaseInput"></a>

```typescript
public readonly knowledgeBaseInput: string;
```

- *Type:* string

---

##### `linearActionInput`<sup>Optional</sup> <a name="linearActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.linearActionInput"></a>

```typescript
public readonly linearActionInput: string;
```

- *Type:* string

---

##### `manageSharedFoldersInput`<sup>Optional</sup> <a name="manageSharedFoldersInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.manageSharedFoldersInput"></a>

```typescript
public readonly manageSharedFoldersInput: string;
```

- *Type:* string

---

##### `mcpActionInput`<sup>Optional</sup> <a name="mcpActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.mcpActionInput"></a>

```typescript
public readonly mcpActionInput: string;
```

- *Type:* string

---

##### `mondayActionInput`<sup>Optional</sup> <a name="mondayActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.mondayActionInput"></a>

```typescript
public readonly mondayActionInput: string;
```

- *Type:* string

---

##### `msExchangeActionInput`<sup>Optional</sup> <a name="msExchangeActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.msExchangeActionInput"></a>

```typescript
public readonly msExchangeActionInput: string;
```

- *Type:* string

---

##### `msTeamsActionInput`<sup>Optional</sup> <a name="msTeamsActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.msTeamsActionInput"></a>

```typescript
public readonly msTeamsActionInput: string;
```

- *Type:* string

---

##### `newRelicActionInput`<sup>Optional</sup> <a name="newRelicActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.newRelicActionInput"></a>

```typescript
public readonly newRelicActionInput: string;
```

- *Type:* string

---

##### `notionActionInput`<sup>Optional</sup> <a name="notionActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.notionActionInput"></a>

```typescript
public readonly notionActionInput: string;
```

- *Type:* string

---

##### `oneDriveActionInput`<sup>Optional</sup> <a name="oneDriveActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.oneDriveActionInput"></a>

```typescript
public readonly oneDriveActionInput: string;
```

- *Type:* string

---

##### `openApiActionInput`<sup>Optional</sup> <a name="openApiActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.openApiActionInput"></a>

```typescript
public readonly openApiActionInput: string;
```

- *Type:* string

---

##### `pagerDutyActionInput`<sup>Optional</sup> <a name="pagerDutyActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.pagerDutyActionInput"></a>

```typescript
public readonly pagerDutyActionInput: string;
```

- *Type:* string

---

##### `performFlowUiTaskInput`<sup>Optional</sup> <a name="performFlowUiTaskInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.performFlowUiTaskInput"></a>

```typescript
public readonly performFlowUiTaskInput: string;
```

- *Type:* string

---

##### `printReportsInput`<sup>Optional</sup> <a name="printReportsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.printReportsInput"></a>

```typescript
public readonly printReportsInput: string;
```

- *Type:* string

---

##### `publishWithoutApprovalInput`<sup>Optional</sup> <a name="publishWithoutApprovalInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.publishWithoutApprovalInput"></a>

```typescript
public readonly publishWithoutApprovalInput: string;
```

- *Type:* string

---

##### `renameSharedFoldersInput`<sup>Optional</sup> <a name="renameSharedFoldersInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.renameSharedFoldersInput"></a>

```typescript
public readonly renameSharedFoldersInput: string;
```

- *Type:* string

---

##### `researchInput`<sup>Optional</sup> <a name="researchInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.researchInput"></a>

```typescript
public readonly researchInput: string;
```

- *Type:* string

---

##### `salesforceActionInput`<sup>Optional</sup> <a name="salesforceActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.salesforceActionInput"></a>

```typescript
public readonly salesforceActionInput: string;
```

- *Type:* string

---

##### `sandPGlobalEnergyActionInput`<sup>Optional</sup> <a name="sandPGlobalEnergyActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sandPGlobalEnergyActionInput"></a>

```typescript
public readonly sandPGlobalEnergyActionInput: string;
```

- *Type:* string

---

##### `sandPgmiActionInput`<sup>Optional</sup> <a name="sandPgmiActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sandPgmiActionInput"></a>

```typescript
public readonly sandPgmiActionInput: string;
```

- *Type:* string

---

##### `sapBillOfMaterialActionInput`<sup>Optional</sup> <a name="sapBillOfMaterialActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapBillOfMaterialActionInput"></a>

```typescript
public readonly sapBillOfMaterialActionInput: string;
```

- *Type:* string

---

##### `sapBusinessPartnerActionInput`<sup>Optional</sup> <a name="sapBusinessPartnerActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapBusinessPartnerActionInput"></a>

```typescript
public readonly sapBusinessPartnerActionInput: string;
```

- *Type:* string

---

##### `sapMaterialStockActionInput`<sup>Optional</sup> <a name="sapMaterialStockActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapMaterialStockActionInput"></a>

```typescript
public readonly sapMaterialStockActionInput: string;
```

- *Type:* string

---

##### `sapPhysicalInventoryActionInput`<sup>Optional</sup> <a name="sapPhysicalInventoryActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapPhysicalInventoryActionInput"></a>

```typescript
public readonly sapPhysicalInventoryActionInput: string;
```

- *Type:* string

---

##### `sapProductMasterDataActionInput`<sup>Optional</sup> <a name="sapProductMasterDataActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapProductMasterDataActionInput"></a>

```typescript
public readonly sapProductMasterDataActionInput: string;
```

- *Type:* string

---

##### `serviceNowActionInput`<sup>Optional</sup> <a name="serviceNowActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.serviceNowActionInput"></a>

```typescript
public readonly serviceNowActionInput: string;
```

- *Type:* string

---

##### `shareAmazonBedrockArsActionInput`<sup>Optional</sup> <a name="shareAmazonBedrockArsActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockArsActionInput"></a>

```typescript
public readonly shareAmazonBedrockArsActionInput: string;
```

- *Type:* string

---

##### `shareAmazonBedrockFsActionInput`<sup>Optional</sup> <a name="shareAmazonBedrockFsActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockFsActionInput"></a>

```typescript
public readonly shareAmazonBedrockFsActionInput: string;
```

- *Type:* string

---

##### `shareAmazonBedrockKrsActionInput`<sup>Optional</sup> <a name="shareAmazonBedrockKrsActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockKrsActionInput"></a>

```typescript
public readonly shareAmazonBedrockKrsActionInput: string;
```

- *Type:* string

---

##### `shareAmazonSThreeActionInput`<sup>Optional</sup> <a name="shareAmazonSThreeActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonSThreeActionInput"></a>

```typescript
public readonly shareAmazonSThreeActionInput: string;
```

- *Type:* string

---

##### `shareAnalysesInput`<sup>Optional</sup> <a name="shareAnalysesInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAnalysesInput"></a>

```typescript
public readonly shareAnalysesInput: string;
```

- *Type:* string

---

##### `shareAppsInput`<sup>Optional</sup> <a name="shareAppsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAppsInput"></a>

```typescript
public readonly shareAppsInput: string;
```

- *Type:* string

---

##### `shareAsanaActionInput`<sup>Optional</sup> <a name="shareAsanaActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAsanaActionInput"></a>

```typescript
public readonly shareAsanaActionInput: string;
```

- *Type:* string

---

##### `shareBambooHrActionInput`<sup>Optional</sup> <a name="shareBambooHrActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBambooHrActionInput"></a>

```typescript
public readonly shareBambooHrActionInput: string;
```

- *Type:* string

---

##### `shareBoxAgentActionInput`<sup>Optional</sup> <a name="shareBoxAgentActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBoxAgentActionInput"></a>

```typescript
public readonly shareBoxAgentActionInput: string;
```

- *Type:* string

---

##### `shareCanvaAgentActionInput`<sup>Optional</sup> <a name="shareCanvaAgentActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareCanvaAgentActionInput"></a>

```typescript
public readonly shareCanvaAgentActionInput: string;
```

- *Type:* string

---

##### `shareChatAgentsInput`<sup>Optional</sup> <a name="shareChatAgentsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareChatAgentsInput"></a>

```typescript
public readonly shareChatAgentsInput: string;
```

- *Type:* string

---

##### `shareComprehendActionInput`<sup>Optional</sup> <a name="shareComprehendActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareComprehendActionInput"></a>

```typescript
public readonly shareComprehendActionInput: string;
```

- *Type:* string

---

##### `shareComprehendMedicalActionInput`<sup>Optional</sup> <a name="shareComprehendMedicalActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareComprehendMedicalActionInput"></a>

```typescript
public readonly shareComprehendMedicalActionInput: string;
```

- *Type:* string

---

##### `shareConfluenceActionInput`<sup>Optional</sup> <a name="shareConfluenceActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareConfluenceActionInput"></a>

```typescript
public readonly shareConfluenceActionInput: string;
```

- *Type:* string

---

##### `shareDashboardsInput`<sup>Optional</sup> <a name="shareDashboardsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDashboardsInput"></a>

```typescript
public readonly shareDashboardsInput: string;
```

- *Type:* string

---

##### `shareDatasetsInput`<sup>Optional</sup> <a name="shareDatasetsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDatasetsInput"></a>

```typescript
public readonly shareDatasetsInput: string;
```

- *Type:* string

---

##### `shareDataSourcesInput`<sup>Optional</sup> <a name="shareDataSourcesInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDataSourcesInput"></a>

```typescript
public readonly shareDataSourcesInput: string;
```

- *Type:* string

---

##### `shareFactSetActionInput`<sup>Optional</sup> <a name="shareFactSetActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareFactSetActionInput"></a>

```typescript
public readonly shareFactSetActionInput: string;
```

- *Type:* string

---

##### `shareGenericHttpActionInput`<sup>Optional</sup> <a name="shareGenericHttpActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGenericHttpActionInput"></a>

```typescript
public readonly shareGenericHttpActionInput: string;
```

- *Type:* string

---

##### `shareGithubActionInput`<sup>Optional</sup> <a name="shareGithubActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGithubActionInput"></a>

```typescript
public readonly shareGithubActionInput: string;
```

- *Type:* string

---

##### `shareGoogleCalendarActionInput`<sup>Optional</sup> <a name="shareGoogleCalendarActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGoogleCalendarActionInput"></a>

```typescript
public readonly shareGoogleCalendarActionInput: string;
```

- *Type:* string

---

##### `shareHubspotActionInput`<sup>Optional</sup> <a name="shareHubspotActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareHubspotActionInput"></a>

```typescript
public readonly shareHubspotActionInput: string;
```

- *Type:* string

---

##### `shareHuggingFaceActionInput`<sup>Optional</sup> <a name="shareHuggingFaceActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareHuggingFaceActionInput"></a>

```typescript
public readonly shareHuggingFaceActionInput: string;
```

- *Type:* string

---

##### `shareIntercomActionInput`<sup>Optional</sup> <a name="shareIntercomActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareIntercomActionInput"></a>

```typescript
public readonly shareIntercomActionInput: string;
```

- *Type:* string

---

##### `shareJiraActionInput`<sup>Optional</sup> <a name="shareJiraActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareJiraActionInput"></a>

```typescript
public readonly shareJiraActionInput: string;
```

- *Type:* string

---

##### `shareKnowledgeBasesInput`<sup>Optional</sup> <a name="shareKnowledgeBasesInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareKnowledgeBasesInput"></a>

```typescript
public readonly shareKnowledgeBasesInput: string;
```

- *Type:* string

---

##### `shareLinearActionInput`<sup>Optional</sup> <a name="shareLinearActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareLinearActionInput"></a>

```typescript
public readonly shareLinearActionInput: string;
```

- *Type:* string

---

##### `shareMcpActionInput`<sup>Optional</sup> <a name="shareMcpActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMcpActionInput"></a>

```typescript
public readonly shareMcpActionInput: string;
```

- *Type:* string

---

##### `shareMondayActionInput`<sup>Optional</sup> <a name="shareMondayActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMondayActionInput"></a>

```typescript
public readonly shareMondayActionInput: string;
```

- *Type:* string

---

##### `shareMsExchangeActionInput`<sup>Optional</sup> <a name="shareMsExchangeActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMsExchangeActionInput"></a>

```typescript
public readonly shareMsExchangeActionInput: string;
```

- *Type:* string

---

##### `shareMsTeamsActionInput`<sup>Optional</sup> <a name="shareMsTeamsActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMsTeamsActionInput"></a>

```typescript
public readonly shareMsTeamsActionInput: string;
```

- *Type:* string

---

##### `shareNewRelicActionInput`<sup>Optional</sup> <a name="shareNewRelicActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareNewRelicActionInput"></a>

```typescript
public readonly shareNewRelicActionInput: string;
```

- *Type:* string

---

##### `shareNotionActionInput`<sup>Optional</sup> <a name="shareNotionActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareNotionActionInput"></a>

```typescript
public readonly shareNotionActionInput: string;
```

- *Type:* string

---

##### `shareOneDriveActionInput`<sup>Optional</sup> <a name="shareOneDriveActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOneDriveActionInput"></a>

```typescript
public readonly shareOneDriveActionInput: string;
```

- *Type:* string

---

##### `shareOpenApiActionInput`<sup>Optional</sup> <a name="shareOpenApiActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOpenApiActionInput"></a>

```typescript
public readonly shareOpenApiActionInput: string;
```

- *Type:* string

---

##### `sharePagerDutyActionInput`<sup>Optional</sup> <a name="sharePagerDutyActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePagerDutyActionInput"></a>

```typescript
public readonly sharePagerDutyActionInput: string;
```

- *Type:* string

---

##### `sharePointActionInput`<sup>Optional</sup> <a name="sharePointActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePointActionInput"></a>

```typescript
public readonly sharePointActionInput: string;
```

- *Type:* string

---

##### `shareSalesforceActionInput`<sup>Optional</sup> <a name="shareSalesforceActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSalesforceActionInput"></a>

```typescript
public readonly shareSalesforceActionInput: string;
```

- *Type:* string

---

##### `shareSandPGlobalEnergyActionInput`<sup>Optional</sup> <a name="shareSandPGlobalEnergyActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSandPGlobalEnergyActionInput"></a>

```typescript
public readonly shareSandPGlobalEnergyActionInput: string;
```

- *Type:* string

---

##### `shareSandPgmiActionInput`<sup>Optional</sup> <a name="shareSandPgmiActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSandPgmiActionInput"></a>

```typescript
public readonly shareSandPgmiActionInput: string;
```

- *Type:* string

---

##### `shareSapBillOfMaterialActionInput`<sup>Optional</sup> <a name="shareSapBillOfMaterialActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapBillOfMaterialActionInput"></a>

```typescript
public readonly shareSapBillOfMaterialActionInput: string;
```

- *Type:* string

---

##### `shareSapBusinessPartnerActionInput`<sup>Optional</sup> <a name="shareSapBusinessPartnerActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapBusinessPartnerActionInput"></a>

```typescript
public readonly shareSapBusinessPartnerActionInput: string;
```

- *Type:* string

---

##### `shareSapMaterialStockActionInput`<sup>Optional</sup> <a name="shareSapMaterialStockActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapMaterialStockActionInput"></a>

```typescript
public readonly shareSapMaterialStockActionInput: string;
```

- *Type:* string

---

##### `shareSapPhysicalInventoryActionInput`<sup>Optional</sup> <a name="shareSapPhysicalInventoryActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapPhysicalInventoryActionInput"></a>

```typescript
public readonly shareSapPhysicalInventoryActionInput: string;
```

- *Type:* string

---

##### `shareSapProductMasterDataActionInput`<sup>Optional</sup> <a name="shareSapProductMasterDataActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapProductMasterDataActionInput"></a>

```typescript
public readonly shareSapProductMasterDataActionInput: string;
```

- *Type:* string

---

##### `shareServiceNowActionInput`<sup>Optional</sup> <a name="shareServiceNowActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareServiceNowActionInput"></a>

```typescript
public readonly shareServiceNowActionInput: string;
```

- *Type:* string

---

##### `shareSharePointActionInput`<sup>Optional</sup> <a name="shareSharePointActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSharePointActionInput"></a>

```typescript
public readonly shareSharePointActionInput: string;
```

- *Type:* string

---

##### `shareSlackActionInput`<sup>Optional</sup> <a name="shareSlackActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSlackActionInput"></a>

```typescript
public readonly shareSlackActionInput: string;
```

- *Type:* string

---

##### `shareSmartsheetActionInput`<sup>Optional</sup> <a name="shareSmartsheetActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSmartsheetActionInput"></a>

```typescript
public readonly shareSmartsheetActionInput: string;
```

- *Type:* string

---

##### `shareSpacesInput`<sup>Optional</sup> <a name="shareSpacesInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSpacesInput"></a>

```typescript
public readonly shareSpacesInput: string;
```

- *Type:* string

---

##### `shareTextractActionInput`<sup>Optional</sup> <a name="shareTextractActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareTextractActionInput"></a>

```typescript
public readonly shareTextractActionInput: string;
```

- *Type:* string

---

##### `shareZendeskActionInput`<sup>Optional</sup> <a name="shareZendeskActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareZendeskActionInput"></a>

```typescript
public readonly shareZendeskActionInput: string;
```

- *Type:* string

---

##### `slackActionInput`<sup>Optional</sup> <a name="slackActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.slackActionInput"></a>

```typescript
public readonly slackActionInput: string;
```

- *Type:* string

---

##### `smartsheetActionInput`<sup>Optional</sup> <a name="smartsheetActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.smartsheetActionInput"></a>

```typescript
public readonly smartsheetActionInput: string;
```

- *Type:* string

---

##### `spaceInput`<sup>Optional</sup> <a name="spaceInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.spaceInput"></a>

```typescript
public readonly spaceInput: string;
```

- *Type:* string

---

##### `subscribeDashboardEmailReportsInput`<sup>Optional</sup> <a name="subscribeDashboardEmailReportsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.subscribeDashboardEmailReportsInput"></a>

```typescript
public readonly subscribeDashboardEmailReportsInput: string;
```

- *Type:* string

---

##### `textractActionInput`<sup>Optional</sup> <a name="textractActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.textractActionInput"></a>

```typescript
public readonly textractActionInput: string;
```

- *Type:* string

---

##### `topicInput`<sup>Optional</sup> <a name="topicInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.topicInput"></a>

```typescript
public readonly topicInput: string;
```

- *Type:* string

---

##### `useAgentWebSearchInput`<sup>Optional</sup> <a name="useAgentWebSearchInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAgentWebSearchInput"></a>

```typescript
public readonly useAgentWebSearchInput: string;
```

- *Type:* string

---

##### `useAmazonBedrockArsActionInput`<sup>Optional</sup> <a name="useAmazonBedrockArsActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockArsActionInput"></a>

```typescript
public readonly useAmazonBedrockArsActionInput: string;
```

- *Type:* string

---

##### `useAmazonBedrockFsActionInput`<sup>Optional</sup> <a name="useAmazonBedrockFsActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockFsActionInput"></a>

```typescript
public readonly useAmazonBedrockFsActionInput: string;
```

- *Type:* string

---

##### `useAmazonBedrockKrsActionInput`<sup>Optional</sup> <a name="useAmazonBedrockKrsActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockKrsActionInput"></a>

```typescript
public readonly useAmazonBedrockKrsActionInput: string;
```

- *Type:* string

---

##### `useAmazonSThreeActionInput`<sup>Optional</sup> <a name="useAmazonSThreeActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonSThreeActionInput"></a>

```typescript
public readonly useAmazonSThreeActionInput: string;
```

- *Type:* string

---

##### `useAsanaActionInput`<sup>Optional</sup> <a name="useAsanaActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAsanaActionInput"></a>

```typescript
public readonly useAsanaActionInput: string;
```

- *Type:* string

---

##### `useBambooHrActionInput`<sup>Optional</sup> <a name="useBambooHrActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useBambooHrActionInput"></a>

```typescript
public readonly useBambooHrActionInput: string;
```

- *Type:* string

---

##### `useBedrockModelsInput`<sup>Optional</sup> <a name="useBedrockModelsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useBedrockModelsInput"></a>

```typescript
public readonly useBedrockModelsInput: string;
```

- *Type:* string

---

##### `useBoxAgentActionInput`<sup>Optional</sup> <a name="useBoxAgentActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useBoxAgentActionInput"></a>

```typescript
public readonly useBoxAgentActionInput: string;
```

- *Type:* string

---

##### `useCanvaAgentActionInput`<sup>Optional</sup> <a name="useCanvaAgentActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useCanvaAgentActionInput"></a>

```typescript
public readonly useCanvaAgentActionInput: string;
```

- *Type:* string

---

##### `useComprehendActionInput`<sup>Optional</sup> <a name="useComprehendActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useComprehendActionInput"></a>

```typescript
public readonly useComprehendActionInput: string;
```

- *Type:* string

---

##### `useComprehendMedicalActionInput`<sup>Optional</sup> <a name="useComprehendMedicalActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useComprehendMedicalActionInput"></a>

```typescript
public readonly useComprehendMedicalActionInput: string;
```

- *Type:* string

---

##### `useConfluenceActionInput`<sup>Optional</sup> <a name="useConfluenceActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useConfluenceActionInput"></a>

```typescript
public readonly useConfluenceActionInput: string;
```

- *Type:* string

---

##### `useFactSetActionInput`<sup>Optional</sup> <a name="useFactSetActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useFactSetActionInput"></a>

```typescript
public readonly useFactSetActionInput: string;
```

- *Type:* string

---

##### `useGenericHttpActionInput`<sup>Optional</sup> <a name="useGenericHttpActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useGenericHttpActionInput"></a>

```typescript
public readonly useGenericHttpActionInput: string;
```

- *Type:* string

---

##### `useGithubActionInput`<sup>Optional</sup> <a name="useGithubActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useGithubActionInput"></a>

```typescript
public readonly useGithubActionInput: string;
```

- *Type:* string

---

##### `useGoogleCalendarActionInput`<sup>Optional</sup> <a name="useGoogleCalendarActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useGoogleCalendarActionInput"></a>

```typescript
public readonly useGoogleCalendarActionInput: string;
```

- *Type:* string

---

##### `useHubspotActionInput`<sup>Optional</sup> <a name="useHubspotActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useHubspotActionInput"></a>

```typescript
public readonly useHubspotActionInput: string;
```

- *Type:* string

---

##### `useHuggingFaceActionInput`<sup>Optional</sup> <a name="useHuggingFaceActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useHuggingFaceActionInput"></a>

```typescript
public readonly useHuggingFaceActionInput: string;
```

- *Type:* string

---

##### `useIntercomActionInput`<sup>Optional</sup> <a name="useIntercomActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useIntercomActionInput"></a>

```typescript
public readonly useIntercomActionInput: string;
```

- *Type:* string

---

##### `useJiraActionInput`<sup>Optional</sup> <a name="useJiraActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useJiraActionInput"></a>

```typescript
public readonly useJiraActionInput: string;
```

- *Type:* string

---

##### `useLinearActionInput`<sup>Optional</sup> <a name="useLinearActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useLinearActionInput"></a>

```typescript
public readonly useLinearActionInput: string;
```

- *Type:* string

---

##### `useMcpActionInput`<sup>Optional</sup> <a name="useMcpActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMcpActionInput"></a>

```typescript
public readonly useMcpActionInput: string;
```

- *Type:* string

---

##### `useMondayActionInput`<sup>Optional</sup> <a name="useMondayActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMondayActionInput"></a>

```typescript
public readonly useMondayActionInput: string;
```

- *Type:* string

---

##### `useMsExchangeActionInput`<sup>Optional</sup> <a name="useMsExchangeActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMsExchangeActionInput"></a>

```typescript
public readonly useMsExchangeActionInput: string;
```

- *Type:* string

---

##### `useMsTeamsActionInput`<sup>Optional</sup> <a name="useMsTeamsActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMsTeamsActionInput"></a>

```typescript
public readonly useMsTeamsActionInput: string;
```

- *Type:* string

---

##### `useNewRelicActionInput`<sup>Optional</sup> <a name="useNewRelicActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useNewRelicActionInput"></a>

```typescript
public readonly useNewRelicActionInput: string;
```

- *Type:* string

---

##### `useNotionActionInput`<sup>Optional</sup> <a name="useNotionActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useNotionActionInput"></a>

```typescript
public readonly useNotionActionInput: string;
```

- *Type:* string

---

##### `useOneDriveActionInput`<sup>Optional</sup> <a name="useOneDriveActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useOneDriveActionInput"></a>

```typescript
public readonly useOneDriveActionInput: string;
```

- *Type:* string

---

##### `useOpenApiActionInput`<sup>Optional</sup> <a name="useOpenApiActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useOpenApiActionInput"></a>

```typescript
public readonly useOpenApiActionInput: string;
```

- *Type:* string

---

##### `usePagerDutyActionInput`<sup>Optional</sup> <a name="usePagerDutyActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.usePagerDutyActionInput"></a>

```typescript
public readonly usePagerDutyActionInput: string;
```

- *Type:* string

---

##### `useSalesforceActionInput`<sup>Optional</sup> <a name="useSalesforceActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSalesforceActionInput"></a>

```typescript
public readonly useSalesforceActionInput: string;
```

- *Type:* string

---

##### `useSandPGlobalEnergyActionInput`<sup>Optional</sup> <a name="useSandPGlobalEnergyActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSandPGlobalEnergyActionInput"></a>

```typescript
public readonly useSandPGlobalEnergyActionInput: string;
```

- *Type:* string

---

##### `useSandPgmiActionInput`<sup>Optional</sup> <a name="useSandPgmiActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSandPgmiActionInput"></a>

```typescript
public readonly useSandPgmiActionInput: string;
```

- *Type:* string

---

##### `useSapBillOfMaterialActionInput`<sup>Optional</sup> <a name="useSapBillOfMaterialActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapBillOfMaterialActionInput"></a>

```typescript
public readonly useSapBillOfMaterialActionInput: string;
```

- *Type:* string

---

##### `useSapBusinessPartnerActionInput`<sup>Optional</sup> <a name="useSapBusinessPartnerActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapBusinessPartnerActionInput"></a>

```typescript
public readonly useSapBusinessPartnerActionInput: string;
```

- *Type:* string

---

##### `useSapMaterialStockActionInput`<sup>Optional</sup> <a name="useSapMaterialStockActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapMaterialStockActionInput"></a>

```typescript
public readonly useSapMaterialStockActionInput: string;
```

- *Type:* string

---

##### `useSapPhysicalInventoryActionInput`<sup>Optional</sup> <a name="useSapPhysicalInventoryActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapPhysicalInventoryActionInput"></a>

```typescript
public readonly useSapPhysicalInventoryActionInput: string;
```

- *Type:* string

---

##### `useSapProductMasterDataActionInput`<sup>Optional</sup> <a name="useSapProductMasterDataActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapProductMasterDataActionInput"></a>

```typescript
public readonly useSapProductMasterDataActionInput: string;
```

- *Type:* string

---

##### `useServiceNowActionInput`<sup>Optional</sup> <a name="useServiceNowActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useServiceNowActionInput"></a>

```typescript
public readonly useServiceNowActionInput: string;
```

- *Type:* string

---

##### `useSharePointActionInput`<sup>Optional</sup> <a name="useSharePointActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSharePointActionInput"></a>

```typescript
public readonly useSharePointActionInput: string;
```

- *Type:* string

---

##### `useSlackActionInput`<sup>Optional</sup> <a name="useSlackActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSlackActionInput"></a>

```typescript
public readonly useSlackActionInput: string;
```

- *Type:* string

---

##### `useSmartsheetActionInput`<sup>Optional</sup> <a name="useSmartsheetActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSmartsheetActionInput"></a>

```typescript
public readonly useSmartsheetActionInput: string;
```

- *Type:* string

---

##### `useTextractActionInput`<sup>Optional</sup> <a name="useTextractActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useTextractActionInput"></a>

```typescript
public readonly useTextractActionInput: string;
```

- *Type:* string

---

##### `useZendeskActionInput`<sup>Optional</sup> <a name="useZendeskActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useZendeskActionInput"></a>

```typescript
public readonly useZendeskActionInput: string;
```

- *Type:* string

---

##### `viewAccountSpiceCapacityInput`<sup>Optional</sup> <a name="viewAccountSpiceCapacityInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.viewAccountSpiceCapacityInput"></a>

```typescript
public readonly viewAccountSpiceCapacityInput: string;
```

- *Type:* string

---

##### `zendeskActionInput`<sup>Optional</sup> <a name="zendeskActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.zendeskActionInput"></a>

```typescript
public readonly zendeskActionInput: string;
```

- *Type:* string

---

##### `accessAppsNativeDataStore`<sup>Required</sup> <a name="accessAppsNativeDataStore" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.accessAppsNativeDataStore"></a>

```typescript
public readonly accessAppsNativeDataStore: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `addOrRunAnomalyDetectionForAnalyses`<sup>Required</sup> <a name="addOrRunAnomalyDetectionForAnalyses" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.addOrRunAnomalyDetectionForAnalyses"></a>

```typescript
public readonly addOrRunAnomalyDetectionForAnalyses: string;
```

- *Type:* string

---

##### `amazonBedrockArsAction`<sup>Required</sup> <a name="amazonBedrockArsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockArsAction"></a>

```typescript
public readonly amazonBedrockArsAction: string;
```

- *Type:* string

---

##### `amazonBedrockFsAction`<sup>Required</sup> <a name="amazonBedrockFsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockFsAction"></a>

```typescript
public readonly amazonBedrockFsAction: string;
```

- *Type:* string

---

##### `amazonBedrockKrsAction`<sup>Required</sup> <a name="amazonBedrockKrsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockKrsAction"></a>

```typescript
public readonly amazonBedrockKrsAction: string;
```

- *Type:* string

---

##### `amazonSThreeAction`<sup>Required</sup> <a name="amazonSThreeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonSThreeAction"></a>

```typescript
public readonly amazonSThreeAction: string;
```

- *Type:* string

---

##### `analysis`<sup>Required</sup> <a name="analysis" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.analysis"></a>

```typescript
public readonly analysis: string;
```

- *Type:* string

---

##### `approveFlowShareRequests`<sup>Required</sup> <a name="approveFlowShareRequests" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.approveFlowShareRequests"></a>

```typescript
public readonly approveFlowShareRequests: string;
```

- *Type:* string

---

##### `apps`<sup>Required</sup> <a name="apps" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.apps"></a>

```typescript
public readonly apps: string;
```

- *Type:* string

---

##### `asanaAction`<sup>Required</sup> <a name="asanaAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.asanaAction"></a>

```typescript
public readonly asanaAction: string;
```

- *Type:* string

---

##### `automate`<sup>Required</sup> <a name="automate" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.automate"></a>

```typescript
public readonly automate: string;
```

- *Type:* string

---

##### `bambooHrAction`<sup>Required</sup> <a name="bambooHrAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.bambooHrAction"></a>

```typescript
public readonly bambooHrAction: string;
```

- *Type:* string

---

##### `boxAgentAction`<sup>Required</sup> <a name="boxAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.boxAgentAction"></a>

```typescript
public readonly boxAgentAction: string;
```

- *Type:* string

---

##### `buildCalculatedFieldWithQ`<sup>Required</sup> <a name="buildCalculatedFieldWithQ" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.buildCalculatedFieldWithQ"></a>

```typescript
public readonly buildCalculatedFieldWithQ: string;
```

- *Type:* string

---

##### `canvaAgentAction`<sup>Required</sup> <a name="canvaAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.canvaAgentAction"></a>

```typescript
public readonly canvaAgentAction: string;
```

- *Type:* string

---

##### `chatAgent`<sup>Required</sup> <a name="chatAgent" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.chatAgent"></a>

```typescript
public readonly chatAgent: string;
```

- *Type:* string

---

##### `comprehendAction`<sup>Required</sup> <a name="comprehendAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.comprehendAction"></a>

```typescript
public readonly comprehendAction: string;
```

- *Type:* string

---

##### `comprehendMedicalAction`<sup>Required</sup> <a name="comprehendMedicalAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.comprehendMedicalAction"></a>

```typescript
public readonly comprehendMedicalAction: string;
```

- *Type:* string

---

##### `confluenceAction`<sup>Required</sup> <a name="confluenceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.confluenceAction"></a>

```typescript
public readonly confluenceAction: string;
```

- *Type:* string

---

##### `createAndUpdateAmazonBedrockArsAction`<sup>Required</sup> <a name="createAndUpdateAmazonBedrockArsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockArsAction"></a>

```typescript
public readonly createAndUpdateAmazonBedrockArsAction: string;
```

- *Type:* string

---

##### `createAndUpdateAmazonBedrockFsAction`<sup>Required</sup> <a name="createAndUpdateAmazonBedrockFsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockFsAction"></a>

```typescript
public readonly createAndUpdateAmazonBedrockFsAction: string;
```

- *Type:* string

---

##### `createAndUpdateAmazonBedrockKrsAction`<sup>Required</sup> <a name="createAndUpdateAmazonBedrockKrsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockKrsAction"></a>

```typescript
public readonly createAndUpdateAmazonBedrockKrsAction: string;
```

- *Type:* string

---

##### `createAndUpdateAmazonSThreeAction`<sup>Required</sup> <a name="createAndUpdateAmazonSThreeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonSThreeAction"></a>

```typescript
public readonly createAndUpdateAmazonSThreeAction: string;
```

- *Type:* string

---

##### `createAndUpdateApps`<sup>Required</sup> <a name="createAndUpdateApps" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateApps"></a>

```typescript
public readonly createAndUpdateApps: string;
```

- *Type:* string

---

##### `createAndUpdateAsanaAction`<sup>Required</sup> <a name="createAndUpdateAsanaAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAsanaAction"></a>

```typescript
public readonly createAndUpdateAsanaAction: string;
```

- *Type:* string

---

##### `createAndUpdateBambooHrAction`<sup>Required</sup> <a name="createAndUpdateBambooHrAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBambooHrAction"></a>

```typescript
public readonly createAndUpdateBambooHrAction: string;
```

- *Type:* string

---

##### `createAndUpdateBoxAgentAction`<sup>Required</sup> <a name="createAndUpdateBoxAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBoxAgentAction"></a>

```typescript
public readonly createAndUpdateBoxAgentAction: string;
```

- *Type:* string

---

##### `createAndUpdateCanvaAgentAction`<sup>Required</sup> <a name="createAndUpdateCanvaAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateCanvaAgentAction"></a>

```typescript
public readonly createAndUpdateCanvaAgentAction: string;
```

- *Type:* string

---

##### `createAndUpdateComprehendAction`<sup>Required</sup> <a name="createAndUpdateComprehendAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateComprehendAction"></a>

```typescript
public readonly createAndUpdateComprehendAction: string;
```

- *Type:* string

---

##### `createAndUpdateComprehendMedicalAction`<sup>Required</sup> <a name="createAndUpdateComprehendMedicalAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateComprehendMedicalAction"></a>

```typescript
public readonly createAndUpdateComprehendMedicalAction: string;
```

- *Type:* string

---

##### `createAndUpdateConfluenceAction`<sup>Required</sup> <a name="createAndUpdateConfluenceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateConfluenceAction"></a>

```typescript
public readonly createAndUpdateConfluenceAction: string;
```

- *Type:* string

---

##### `createAndUpdateDashboardEmailReports`<sup>Required</sup> <a name="createAndUpdateDashboardEmailReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDashboardEmailReports"></a>

```typescript
public readonly createAndUpdateDashboardEmailReports: string;
```

- *Type:* string

---

##### `createAndUpdateDatasets`<sup>Required</sup> <a name="createAndUpdateDatasets" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDatasets"></a>

```typescript
public readonly createAndUpdateDatasets: string;
```

- *Type:* string

---

##### `createAndUpdateDataSources`<sup>Required</sup> <a name="createAndUpdateDataSources" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDataSources"></a>

```typescript
public readonly createAndUpdateDataSources: string;
```

- *Type:* string

---

##### `createAndUpdateFactSetAction`<sup>Required</sup> <a name="createAndUpdateFactSetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateFactSetAction"></a>

```typescript
public readonly createAndUpdateFactSetAction: string;
```

- *Type:* string

---

##### `createAndUpdateGenericHttpAction`<sup>Required</sup> <a name="createAndUpdateGenericHttpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGenericHttpAction"></a>

```typescript
public readonly createAndUpdateGenericHttpAction: string;
```

- *Type:* string

---

##### `createAndUpdateGithubAction`<sup>Required</sup> <a name="createAndUpdateGithubAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGithubAction"></a>

```typescript
public readonly createAndUpdateGithubAction: string;
```

- *Type:* string

---

##### `createAndUpdateGoogleCalendarAction`<sup>Required</sup> <a name="createAndUpdateGoogleCalendarAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGoogleCalendarAction"></a>

```typescript
public readonly createAndUpdateGoogleCalendarAction: string;
```

- *Type:* string

---

##### `createAndUpdateHubspotAction`<sup>Required</sup> <a name="createAndUpdateHubspotAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateHubspotAction"></a>

```typescript
public readonly createAndUpdateHubspotAction: string;
```

- *Type:* string

---

##### `createAndUpdateHuggingFaceAction`<sup>Required</sup> <a name="createAndUpdateHuggingFaceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateHuggingFaceAction"></a>

```typescript
public readonly createAndUpdateHuggingFaceAction: string;
```

- *Type:* string

---

##### `createAndUpdateIntercomAction`<sup>Required</sup> <a name="createAndUpdateIntercomAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateIntercomAction"></a>

```typescript
public readonly createAndUpdateIntercomAction: string;
```

- *Type:* string

---

##### `createAndUpdateJiraAction`<sup>Required</sup> <a name="createAndUpdateJiraAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateJiraAction"></a>

```typescript
public readonly createAndUpdateJiraAction: string;
```

- *Type:* string

---

##### `createAndUpdateKnowledgeBases`<sup>Required</sup> <a name="createAndUpdateKnowledgeBases" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateKnowledgeBases"></a>

```typescript
public readonly createAndUpdateKnowledgeBases: string;
```

- *Type:* string

---

##### `createAndUpdateLinearAction`<sup>Required</sup> <a name="createAndUpdateLinearAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateLinearAction"></a>

```typescript
public readonly createAndUpdateLinearAction: string;
```

- *Type:* string

---

##### `createAndUpdateMcpAction`<sup>Required</sup> <a name="createAndUpdateMcpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMcpAction"></a>

```typescript
public readonly createAndUpdateMcpAction: string;
```

- *Type:* string

---

##### `createAndUpdateMondayAction`<sup>Required</sup> <a name="createAndUpdateMondayAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMondayAction"></a>

```typescript
public readonly createAndUpdateMondayAction: string;
```

- *Type:* string

---

##### `createAndUpdateMsExchangeAction`<sup>Required</sup> <a name="createAndUpdateMsExchangeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMsExchangeAction"></a>

```typescript
public readonly createAndUpdateMsExchangeAction: string;
```

- *Type:* string

---

##### `createAndUpdateMsTeamsAction`<sup>Required</sup> <a name="createAndUpdateMsTeamsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMsTeamsAction"></a>

```typescript
public readonly createAndUpdateMsTeamsAction: string;
```

- *Type:* string

---

##### `createAndUpdateNewRelicAction`<sup>Required</sup> <a name="createAndUpdateNewRelicAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateNewRelicAction"></a>

```typescript
public readonly createAndUpdateNewRelicAction: string;
```

- *Type:* string

---

##### `createAndUpdateNotionAction`<sup>Required</sup> <a name="createAndUpdateNotionAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateNotionAction"></a>

```typescript
public readonly createAndUpdateNotionAction: string;
```

- *Type:* string

---

##### `createAndUpdateOneDriveAction`<sup>Required</sup> <a name="createAndUpdateOneDriveAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateOneDriveAction"></a>

```typescript
public readonly createAndUpdateOneDriveAction: string;
```

- *Type:* string

---

##### `createAndUpdateOpenApiAction`<sup>Required</sup> <a name="createAndUpdateOpenApiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateOpenApiAction"></a>

```typescript
public readonly createAndUpdateOpenApiAction: string;
```

- *Type:* string

---

##### `createAndUpdatePagerDutyAction`<sup>Required</sup> <a name="createAndUpdatePagerDutyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdatePagerDutyAction"></a>

```typescript
public readonly createAndUpdatePagerDutyAction: string;
```

- *Type:* string

---

##### `createAndUpdateSalesforceAction`<sup>Required</sup> <a name="createAndUpdateSalesforceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSalesforceAction"></a>

```typescript
public readonly createAndUpdateSalesforceAction: string;
```

- *Type:* string

---

##### `createAndUpdateSandPGlobalEnergyAction`<sup>Required</sup> <a name="createAndUpdateSandPGlobalEnergyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSandPGlobalEnergyAction"></a>

```typescript
public readonly createAndUpdateSandPGlobalEnergyAction: string;
```

- *Type:* string

---

##### `createAndUpdateSandPgmiAction`<sup>Required</sup> <a name="createAndUpdateSandPgmiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSandPgmiAction"></a>

```typescript
public readonly createAndUpdateSandPgmiAction: string;
```

- *Type:* string

---

##### `createAndUpdateSapBillOfMaterialAction`<sup>Required</sup> <a name="createAndUpdateSapBillOfMaterialAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapBillOfMaterialAction"></a>

```typescript
public readonly createAndUpdateSapBillOfMaterialAction: string;
```

- *Type:* string

---

##### `createAndUpdateSapBusinessPartnerAction`<sup>Required</sup> <a name="createAndUpdateSapBusinessPartnerAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapBusinessPartnerAction"></a>

```typescript
public readonly createAndUpdateSapBusinessPartnerAction: string;
```

- *Type:* string

---

##### `createAndUpdateSapMaterialStockAction`<sup>Required</sup> <a name="createAndUpdateSapMaterialStockAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapMaterialStockAction"></a>

```typescript
public readonly createAndUpdateSapMaterialStockAction: string;
```

- *Type:* string

---

##### `createAndUpdateSapPhysicalInventoryAction`<sup>Required</sup> <a name="createAndUpdateSapPhysicalInventoryAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapPhysicalInventoryAction"></a>

```typescript
public readonly createAndUpdateSapPhysicalInventoryAction: string;
```

- *Type:* string

---

##### `createAndUpdateSapProductMasterDataAction`<sup>Required</sup> <a name="createAndUpdateSapProductMasterDataAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapProductMasterDataAction"></a>

```typescript
public readonly createAndUpdateSapProductMasterDataAction: string;
```

- *Type:* string

---

##### `createAndUpdateServiceNowAction`<sup>Required</sup> <a name="createAndUpdateServiceNowAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateServiceNowAction"></a>

```typescript
public readonly createAndUpdateServiceNowAction: string;
```

- *Type:* string

---

##### `createAndUpdateSharePointAction`<sup>Required</sup> <a name="createAndUpdateSharePointAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSharePointAction"></a>

```typescript
public readonly createAndUpdateSharePointAction: string;
```

- *Type:* string

---

##### `createAndUpdateSlackAction`<sup>Required</sup> <a name="createAndUpdateSlackAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSlackAction"></a>

```typescript
public readonly createAndUpdateSlackAction: string;
```

- *Type:* string

---

##### `createAndUpdateSmartsheetAction`<sup>Required</sup> <a name="createAndUpdateSmartsheetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSmartsheetAction"></a>

```typescript
public readonly createAndUpdateSmartsheetAction: string;
```

- *Type:* string

---

##### `createAndUpdateTextractAction`<sup>Required</sup> <a name="createAndUpdateTextractAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateTextractAction"></a>

```typescript
public readonly createAndUpdateTextractAction: string;
```

- *Type:* string

---

##### `createAndUpdateThemes`<sup>Required</sup> <a name="createAndUpdateThemes" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThemes"></a>

```typescript
public readonly createAndUpdateThemes: string;
```

- *Type:* string

---

##### `createAndUpdateThresholdAlerts`<sup>Required</sup> <a name="createAndUpdateThresholdAlerts" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThresholdAlerts"></a>

```typescript
public readonly createAndUpdateThresholdAlerts: string;
```

- *Type:* string

---

##### `createAndUpdateZendeskAction`<sup>Required</sup> <a name="createAndUpdateZendeskAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateZendeskAction"></a>

```typescript
public readonly createAndUpdateZendeskAction: string;
```

- *Type:* string

---

##### `createChatAgents`<sup>Required</sup> <a name="createChatAgents" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createChatAgents"></a>

```typescript
public readonly createChatAgents: string;
```

- *Type:* string

---

##### `createDashboardExecutiveSummaryWithQ`<sup>Required</sup> <a name="createDashboardExecutiveSummaryWithQ" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createDashboardExecutiveSummaryWithQ"></a>

```typescript
public readonly createDashboardExecutiveSummaryWithQ: string;
```

- *Type:* string

---

##### `createSharedFolders`<sup>Required</sup> <a name="createSharedFolders" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSharedFolders"></a>

```typescript
public readonly createSharedFolders: string;
```

- *Type:* string

---

##### `createSpaces`<sup>Required</sup> <a name="createSpaces" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSpaces"></a>

```typescript
public readonly createSpaces: string;
```

- *Type:* string

---

##### `createSpiceDataset`<sup>Required</sup> <a name="createSpiceDataset" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSpiceDataset"></a>

```typescript
public readonly createSpiceDataset: string;
```

- *Type:* string

---

##### `dashboard`<sup>Required</sup> <a name="dashboard" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.dashboard"></a>

```typescript
public readonly dashboard: string;
```

- *Type:* string

---

##### `editVisualWithQ`<sup>Required</sup> <a name="editVisualWithQ" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.editVisualWithQ"></a>

```typescript
public readonly editVisualWithQ: string;
```

- *Type:* string

---

##### `exportToCsv`<sup>Required</sup> <a name="exportToCsv" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsv"></a>

```typescript
public readonly exportToCsv: string;
```

- *Type:* string

---

##### `exportToCsvInScheduledReports`<sup>Required</sup> <a name="exportToCsvInScheduledReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsvInScheduledReports"></a>

```typescript
public readonly exportToCsvInScheduledReports: string;
```

- *Type:* string

---

##### `exportToExcel`<sup>Required</sup> <a name="exportToExcel" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcel"></a>

```typescript
public readonly exportToExcel: string;
```

- *Type:* string

---

##### `exportToExcelInScheduledReports`<sup>Required</sup> <a name="exportToExcelInScheduledReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcelInScheduledReports"></a>

```typescript
public readonly exportToExcelInScheduledReports: string;
```

- *Type:* string

---

##### `exportToPdf`<sup>Required</sup> <a name="exportToPdf" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdf"></a>

```typescript
public readonly exportToPdf: string;
```

- *Type:* string

---

##### `exportToPdfInScheduledReports`<sup>Required</sup> <a name="exportToPdfInScheduledReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdfInScheduledReports"></a>

```typescript
public readonly exportToPdfInScheduledReports: string;
```

- *Type:* string

---

##### `extension`<sup>Required</sup> <a name="extension" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.extension"></a>

```typescript
public readonly extension: string;
```

- *Type:* string

---

##### `factSetAction`<sup>Required</sup> <a name="factSetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.factSetAction"></a>

```typescript
public readonly factSetAction: string;
```

- *Type:* string

---

##### `flow`<sup>Required</sup> <a name="flow" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.flow"></a>

```typescript
public readonly flow: string;
```

- *Type:* string

---

##### `genericHttpAction`<sup>Required</sup> <a name="genericHttpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.genericHttpAction"></a>

```typescript
public readonly genericHttpAction: string;
```

- *Type:* string

---

##### `githubAction`<sup>Required</sup> <a name="githubAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.githubAction"></a>

```typescript
public readonly githubAction: string;
```

- *Type:* string

---

##### `googleCalendarAction`<sup>Required</sup> <a name="googleCalendarAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.googleCalendarAction"></a>

```typescript
public readonly googleCalendarAction: string;
```

- *Type:* string

---

##### `hubspotAction`<sup>Required</sup> <a name="hubspotAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.hubspotAction"></a>

```typescript
public readonly hubspotAction: string;
```

- *Type:* string

---

##### `huggingFaceAction`<sup>Required</sup> <a name="huggingFaceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.huggingFaceAction"></a>

```typescript
public readonly huggingFaceAction: string;
```

- *Type:* string

---

##### `includeContentInScheduledReportsEmail`<sup>Required</sup> <a name="includeContentInScheduledReportsEmail" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.includeContentInScheduledReportsEmail"></a>

```typescript
public readonly includeContentInScheduledReportsEmail: string;
```

- *Type:* string

---

##### `intercomAction`<sup>Required</sup> <a name="intercomAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.intercomAction"></a>

```typescript
public readonly intercomAction: string;
```

- *Type:* string

---

##### `invokeAppsAiInference`<sup>Required</sup> <a name="invokeAppsAiInference" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.invokeAppsAiInference"></a>

```typescript
public readonly invokeAppsAiInference: string;
```

- *Type:* string

---

##### `jiraAction`<sup>Required</sup> <a name="jiraAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.jiraAction"></a>

```typescript
public readonly jiraAction: string;
```

- *Type:* string

---

##### `knowledgeBase`<sup>Required</sup> <a name="knowledgeBase" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.knowledgeBase"></a>

```typescript
public readonly knowledgeBase: string;
```

- *Type:* string

---

##### `linearAction`<sup>Required</sup> <a name="linearAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.linearAction"></a>

```typescript
public readonly linearAction: string;
```

- *Type:* string

---

##### `manageSharedFolders`<sup>Required</sup> <a name="manageSharedFolders" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.manageSharedFolders"></a>

```typescript
public readonly manageSharedFolders: string;
```

- *Type:* string

---

##### `mcpAction`<sup>Required</sup> <a name="mcpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.mcpAction"></a>

```typescript
public readonly mcpAction: string;
```

- *Type:* string

---

##### `mondayAction`<sup>Required</sup> <a name="mondayAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.mondayAction"></a>

```typescript
public readonly mondayAction: string;
```

- *Type:* string

---

##### `msExchangeAction`<sup>Required</sup> <a name="msExchangeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.msExchangeAction"></a>

```typescript
public readonly msExchangeAction: string;
```

- *Type:* string

---

##### `msTeamsAction`<sup>Required</sup> <a name="msTeamsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.msTeamsAction"></a>

```typescript
public readonly msTeamsAction: string;
```

- *Type:* string

---

##### `newRelicAction`<sup>Required</sup> <a name="newRelicAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.newRelicAction"></a>

```typescript
public readonly newRelicAction: string;
```

- *Type:* string

---

##### `notionAction`<sup>Required</sup> <a name="notionAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.notionAction"></a>

```typescript
public readonly notionAction: string;
```

- *Type:* string

---

##### `oneDriveAction`<sup>Required</sup> <a name="oneDriveAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.oneDriveAction"></a>

```typescript
public readonly oneDriveAction: string;
```

- *Type:* string

---

##### `openApiAction`<sup>Required</sup> <a name="openApiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.openApiAction"></a>

```typescript
public readonly openApiAction: string;
```

- *Type:* string

---

##### `pagerDutyAction`<sup>Required</sup> <a name="pagerDutyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.pagerDutyAction"></a>

```typescript
public readonly pagerDutyAction: string;
```

- *Type:* string

---

##### `performFlowUiTask`<sup>Required</sup> <a name="performFlowUiTask" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.performFlowUiTask"></a>

```typescript
public readonly performFlowUiTask: string;
```

- *Type:* string

---

##### `printReports`<sup>Required</sup> <a name="printReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.printReports"></a>

```typescript
public readonly printReports: string;
```

- *Type:* string

---

##### `publishWithoutApproval`<sup>Required</sup> <a name="publishWithoutApproval" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.publishWithoutApproval"></a>

```typescript
public readonly publishWithoutApproval: string;
```

- *Type:* string

---

##### `renameSharedFolders`<sup>Required</sup> <a name="renameSharedFolders" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.renameSharedFolders"></a>

```typescript
public readonly renameSharedFolders: string;
```

- *Type:* string

---

##### `research`<sup>Required</sup> <a name="research" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.research"></a>

```typescript
public readonly research: string;
```

- *Type:* string

---

##### `salesforceAction`<sup>Required</sup> <a name="salesforceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.salesforceAction"></a>

```typescript
public readonly salesforceAction: string;
```

- *Type:* string

---

##### `sandPGlobalEnergyAction`<sup>Required</sup> <a name="sandPGlobalEnergyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sandPGlobalEnergyAction"></a>

```typescript
public readonly sandPGlobalEnergyAction: string;
```

- *Type:* string

---

##### `sandPgmiAction`<sup>Required</sup> <a name="sandPgmiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sandPgmiAction"></a>

```typescript
public readonly sandPgmiAction: string;
```

- *Type:* string

---

##### `sapBillOfMaterialAction`<sup>Required</sup> <a name="sapBillOfMaterialAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapBillOfMaterialAction"></a>

```typescript
public readonly sapBillOfMaterialAction: string;
```

- *Type:* string

---

##### `sapBusinessPartnerAction`<sup>Required</sup> <a name="sapBusinessPartnerAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapBusinessPartnerAction"></a>

```typescript
public readonly sapBusinessPartnerAction: string;
```

- *Type:* string

---

##### `sapMaterialStockAction`<sup>Required</sup> <a name="sapMaterialStockAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapMaterialStockAction"></a>

```typescript
public readonly sapMaterialStockAction: string;
```

- *Type:* string

---

##### `sapPhysicalInventoryAction`<sup>Required</sup> <a name="sapPhysicalInventoryAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapPhysicalInventoryAction"></a>

```typescript
public readonly sapPhysicalInventoryAction: string;
```

- *Type:* string

---

##### `sapProductMasterDataAction`<sup>Required</sup> <a name="sapProductMasterDataAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapProductMasterDataAction"></a>

```typescript
public readonly sapProductMasterDataAction: string;
```

- *Type:* string

---

##### `serviceNowAction`<sup>Required</sup> <a name="serviceNowAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.serviceNowAction"></a>

```typescript
public readonly serviceNowAction: string;
```

- *Type:* string

---

##### `shareAmazonBedrockArsAction`<sup>Required</sup> <a name="shareAmazonBedrockArsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockArsAction"></a>

```typescript
public readonly shareAmazonBedrockArsAction: string;
```

- *Type:* string

---

##### `shareAmazonBedrockFsAction`<sup>Required</sup> <a name="shareAmazonBedrockFsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockFsAction"></a>

```typescript
public readonly shareAmazonBedrockFsAction: string;
```

- *Type:* string

---

##### `shareAmazonBedrockKrsAction`<sup>Required</sup> <a name="shareAmazonBedrockKrsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockKrsAction"></a>

```typescript
public readonly shareAmazonBedrockKrsAction: string;
```

- *Type:* string

---

##### `shareAmazonSThreeAction`<sup>Required</sup> <a name="shareAmazonSThreeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonSThreeAction"></a>

```typescript
public readonly shareAmazonSThreeAction: string;
```

- *Type:* string

---

##### `shareAnalyses`<sup>Required</sup> <a name="shareAnalyses" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAnalyses"></a>

```typescript
public readonly shareAnalyses: string;
```

- *Type:* string

---

##### `shareApps`<sup>Required</sup> <a name="shareApps" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareApps"></a>

```typescript
public readonly shareApps: string;
```

- *Type:* string

---

##### `shareAsanaAction`<sup>Required</sup> <a name="shareAsanaAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAsanaAction"></a>

```typescript
public readonly shareAsanaAction: string;
```

- *Type:* string

---

##### `shareBambooHrAction`<sup>Required</sup> <a name="shareBambooHrAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBambooHrAction"></a>

```typescript
public readonly shareBambooHrAction: string;
```

- *Type:* string

---

##### `shareBoxAgentAction`<sup>Required</sup> <a name="shareBoxAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBoxAgentAction"></a>

```typescript
public readonly shareBoxAgentAction: string;
```

- *Type:* string

---

##### `shareCanvaAgentAction`<sup>Required</sup> <a name="shareCanvaAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareCanvaAgentAction"></a>

```typescript
public readonly shareCanvaAgentAction: string;
```

- *Type:* string

---

##### `shareChatAgents`<sup>Required</sup> <a name="shareChatAgents" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareChatAgents"></a>

```typescript
public readonly shareChatAgents: string;
```

- *Type:* string

---

##### `shareComprehendAction`<sup>Required</sup> <a name="shareComprehendAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareComprehendAction"></a>

```typescript
public readonly shareComprehendAction: string;
```

- *Type:* string

---

##### `shareComprehendMedicalAction`<sup>Required</sup> <a name="shareComprehendMedicalAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareComprehendMedicalAction"></a>

```typescript
public readonly shareComprehendMedicalAction: string;
```

- *Type:* string

---

##### `shareConfluenceAction`<sup>Required</sup> <a name="shareConfluenceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareConfluenceAction"></a>

```typescript
public readonly shareConfluenceAction: string;
```

- *Type:* string

---

##### `shareDashboards`<sup>Required</sup> <a name="shareDashboards" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDashboards"></a>

```typescript
public readonly shareDashboards: string;
```

- *Type:* string

---

##### `shareDatasets`<sup>Required</sup> <a name="shareDatasets" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDatasets"></a>

```typescript
public readonly shareDatasets: string;
```

- *Type:* string

---

##### `shareDataSources`<sup>Required</sup> <a name="shareDataSources" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDataSources"></a>

```typescript
public readonly shareDataSources: string;
```

- *Type:* string

---

##### `shareFactSetAction`<sup>Required</sup> <a name="shareFactSetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareFactSetAction"></a>

```typescript
public readonly shareFactSetAction: string;
```

- *Type:* string

---

##### `shareGenericHttpAction`<sup>Required</sup> <a name="shareGenericHttpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGenericHttpAction"></a>

```typescript
public readonly shareGenericHttpAction: string;
```

- *Type:* string

---

##### `shareGithubAction`<sup>Required</sup> <a name="shareGithubAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGithubAction"></a>

```typescript
public readonly shareGithubAction: string;
```

- *Type:* string

---

##### `shareGoogleCalendarAction`<sup>Required</sup> <a name="shareGoogleCalendarAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGoogleCalendarAction"></a>

```typescript
public readonly shareGoogleCalendarAction: string;
```

- *Type:* string

---

##### `shareHubspotAction`<sup>Required</sup> <a name="shareHubspotAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareHubspotAction"></a>

```typescript
public readonly shareHubspotAction: string;
```

- *Type:* string

---

##### `shareHuggingFaceAction`<sup>Required</sup> <a name="shareHuggingFaceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareHuggingFaceAction"></a>

```typescript
public readonly shareHuggingFaceAction: string;
```

- *Type:* string

---

##### `shareIntercomAction`<sup>Required</sup> <a name="shareIntercomAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareIntercomAction"></a>

```typescript
public readonly shareIntercomAction: string;
```

- *Type:* string

---

##### `shareJiraAction`<sup>Required</sup> <a name="shareJiraAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareJiraAction"></a>

```typescript
public readonly shareJiraAction: string;
```

- *Type:* string

---

##### `shareKnowledgeBases`<sup>Required</sup> <a name="shareKnowledgeBases" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareKnowledgeBases"></a>

```typescript
public readonly shareKnowledgeBases: string;
```

- *Type:* string

---

##### `shareLinearAction`<sup>Required</sup> <a name="shareLinearAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareLinearAction"></a>

```typescript
public readonly shareLinearAction: string;
```

- *Type:* string

---

##### `shareMcpAction`<sup>Required</sup> <a name="shareMcpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMcpAction"></a>

```typescript
public readonly shareMcpAction: string;
```

- *Type:* string

---

##### `shareMondayAction`<sup>Required</sup> <a name="shareMondayAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMondayAction"></a>

```typescript
public readonly shareMondayAction: string;
```

- *Type:* string

---

##### `shareMsExchangeAction`<sup>Required</sup> <a name="shareMsExchangeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMsExchangeAction"></a>

```typescript
public readonly shareMsExchangeAction: string;
```

- *Type:* string

---

##### `shareMsTeamsAction`<sup>Required</sup> <a name="shareMsTeamsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMsTeamsAction"></a>

```typescript
public readonly shareMsTeamsAction: string;
```

- *Type:* string

---

##### `shareNewRelicAction`<sup>Required</sup> <a name="shareNewRelicAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareNewRelicAction"></a>

```typescript
public readonly shareNewRelicAction: string;
```

- *Type:* string

---

##### `shareNotionAction`<sup>Required</sup> <a name="shareNotionAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareNotionAction"></a>

```typescript
public readonly shareNotionAction: string;
```

- *Type:* string

---

##### `shareOneDriveAction`<sup>Required</sup> <a name="shareOneDriveAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOneDriveAction"></a>

```typescript
public readonly shareOneDriveAction: string;
```

- *Type:* string

---

##### `shareOpenApiAction`<sup>Required</sup> <a name="shareOpenApiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOpenApiAction"></a>

```typescript
public readonly shareOpenApiAction: string;
```

- *Type:* string

---

##### `sharePagerDutyAction`<sup>Required</sup> <a name="sharePagerDutyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePagerDutyAction"></a>

```typescript
public readonly sharePagerDutyAction: string;
```

- *Type:* string

---

##### `sharePointAction`<sup>Required</sup> <a name="sharePointAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePointAction"></a>

```typescript
public readonly sharePointAction: string;
```

- *Type:* string

---

##### `shareSalesforceAction`<sup>Required</sup> <a name="shareSalesforceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSalesforceAction"></a>

```typescript
public readonly shareSalesforceAction: string;
```

- *Type:* string

---

##### `shareSandPGlobalEnergyAction`<sup>Required</sup> <a name="shareSandPGlobalEnergyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSandPGlobalEnergyAction"></a>

```typescript
public readonly shareSandPGlobalEnergyAction: string;
```

- *Type:* string

---

##### `shareSandPgmiAction`<sup>Required</sup> <a name="shareSandPgmiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSandPgmiAction"></a>

```typescript
public readonly shareSandPgmiAction: string;
```

- *Type:* string

---

##### `shareSapBillOfMaterialAction`<sup>Required</sup> <a name="shareSapBillOfMaterialAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapBillOfMaterialAction"></a>

```typescript
public readonly shareSapBillOfMaterialAction: string;
```

- *Type:* string

---

##### `shareSapBusinessPartnerAction`<sup>Required</sup> <a name="shareSapBusinessPartnerAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapBusinessPartnerAction"></a>

```typescript
public readonly shareSapBusinessPartnerAction: string;
```

- *Type:* string

---

##### `shareSapMaterialStockAction`<sup>Required</sup> <a name="shareSapMaterialStockAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapMaterialStockAction"></a>

```typescript
public readonly shareSapMaterialStockAction: string;
```

- *Type:* string

---

##### `shareSapPhysicalInventoryAction`<sup>Required</sup> <a name="shareSapPhysicalInventoryAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapPhysicalInventoryAction"></a>

```typescript
public readonly shareSapPhysicalInventoryAction: string;
```

- *Type:* string

---

##### `shareSapProductMasterDataAction`<sup>Required</sup> <a name="shareSapProductMasterDataAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapProductMasterDataAction"></a>

```typescript
public readonly shareSapProductMasterDataAction: string;
```

- *Type:* string

---

##### `shareServiceNowAction`<sup>Required</sup> <a name="shareServiceNowAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareServiceNowAction"></a>

```typescript
public readonly shareServiceNowAction: string;
```

- *Type:* string

---

##### `shareSharePointAction`<sup>Required</sup> <a name="shareSharePointAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSharePointAction"></a>

```typescript
public readonly shareSharePointAction: string;
```

- *Type:* string

---

##### `shareSlackAction`<sup>Required</sup> <a name="shareSlackAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSlackAction"></a>

```typescript
public readonly shareSlackAction: string;
```

- *Type:* string

---

##### `shareSmartsheetAction`<sup>Required</sup> <a name="shareSmartsheetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSmartsheetAction"></a>

```typescript
public readonly shareSmartsheetAction: string;
```

- *Type:* string

---

##### `shareSpaces`<sup>Required</sup> <a name="shareSpaces" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSpaces"></a>

```typescript
public readonly shareSpaces: string;
```

- *Type:* string

---

##### `shareTextractAction`<sup>Required</sup> <a name="shareTextractAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareTextractAction"></a>

```typescript
public readonly shareTextractAction: string;
```

- *Type:* string

---

##### `shareZendeskAction`<sup>Required</sup> <a name="shareZendeskAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareZendeskAction"></a>

```typescript
public readonly shareZendeskAction: string;
```

- *Type:* string

---

##### `slackAction`<sup>Required</sup> <a name="slackAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.slackAction"></a>

```typescript
public readonly slackAction: string;
```

- *Type:* string

---

##### `smartsheetAction`<sup>Required</sup> <a name="smartsheetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.smartsheetAction"></a>

```typescript
public readonly smartsheetAction: string;
```

- *Type:* string

---

##### `space`<sup>Required</sup> <a name="space" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.space"></a>

```typescript
public readonly space: string;
```

- *Type:* string

---

##### `subscribeDashboardEmailReports`<sup>Required</sup> <a name="subscribeDashboardEmailReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.subscribeDashboardEmailReports"></a>

```typescript
public readonly subscribeDashboardEmailReports: string;
```

- *Type:* string

---

##### `textractAction`<sup>Required</sup> <a name="textractAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.textractAction"></a>

```typescript
public readonly textractAction: string;
```

- *Type:* string

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

---

##### `useAgentWebSearch`<sup>Required</sup> <a name="useAgentWebSearch" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAgentWebSearch"></a>

```typescript
public readonly useAgentWebSearch: string;
```

- *Type:* string

---

##### `useAmazonBedrockArsAction`<sup>Required</sup> <a name="useAmazonBedrockArsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockArsAction"></a>

```typescript
public readonly useAmazonBedrockArsAction: string;
```

- *Type:* string

---

##### `useAmazonBedrockFsAction`<sup>Required</sup> <a name="useAmazonBedrockFsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockFsAction"></a>

```typescript
public readonly useAmazonBedrockFsAction: string;
```

- *Type:* string

---

##### `useAmazonBedrockKrsAction`<sup>Required</sup> <a name="useAmazonBedrockKrsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockKrsAction"></a>

```typescript
public readonly useAmazonBedrockKrsAction: string;
```

- *Type:* string

---

##### `useAmazonSThreeAction`<sup>Required</sup> <a name="useAmazonSThreeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonSThreeAction"></a>

```typescript
public readonly useAmazonSThreeAction: string;
```

- *Type:* string

---

##### `useAsanaAction`<sup>Required</sup> <a name="useAsanaAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAsanaAction"></a>

```typescript
public readonly useAsanaAction: string;
```

- *Type:* string

---

##### `useBambooHrAction`<sup>Required</sup> <a name="useBambooHrAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useBambooHrAction"></a>

```typescript
public readonly useBambooHrAction: string;
```

- *Type:* string

---

##### `useBedrockModels`<sup>Required</sup> <a name="useBedrockModels" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useBedrockModels"></a>

```typescript
public readonly useBedrockModels: string;
```

- *Type:* string

---

##### `useBoxAgentAction`<sup>Required</sup> <a name="useBoxAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useBoxAgentAction"></a>

```typescript
public readonly useBoxAgentAction: string;
```

- *Type:* string

---

##### `useCanvaAgentAction`<sup>Required</sup> <a name="useCanvaAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useCanvaAgentAction"></a>

```typescript
public readonly useCanvaAgentAction: string;
```

- *Type:* string

---

##### `useComprehendAction`<sup>Required</sup> <a name="useComprehendAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useComprehendAction"></a>

```typescript
public readonly useComprehendAction: string;
```

- *Type:* string

---

##### `useComprehendMedicalAction`<sup>Required</sup> <a name="useComprehendMedicalAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useComprehendMedicalAction"></a>

```typescript
public readonly useComprehendMedicalAction: string;
```

- *Type:* string

---

##### `useConfluenceAction`<sup>Required</sup> <a name="useConfluenceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useConfluenceAction"></a>

```typescript
public readonly useConfluenceAction: string;
```

- *Type:* string

---

##### `useFactSetAction`<sup>Required</sup> <a name="useFactSetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useFactSetAction"></a>

```typescript
public readonly useFactSetAction: string;
```

- *Type:* string

---

##### `useGenericHttpAction`<sup>Required</sup> <a name="useGenericHttpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useGenericHttpAction"></a>

```typescript
public readonly useGenericHttpAction: string;
```

- *Type:* string

---

##### `useGithubAction`<sup>Required</sup> <a name="useGithubAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useGithubAction"></a>

```typescript
public readonly useGithubAction: string;
```

- *Type:* string

---

##### `useGoogleCalendarAction`<sup>Required</sup> <a name="useGoogleCalendarAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useGoogleCalendarAction"></a>

```typescript
public readonly useGoogleCalendarAction: string;
```

- *Type:* string

---

##### `useHubspotAction`<sup>Required</sup> <a name="useHubspotAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useHubspotAction"></a>

```typescript
public readonly useHubspotAction: string;
```

- *Type:* string

---

##### `useHuggingFaceAction`<sup>Required</sup> <a name="useHuggingFaceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useHuggingFaceAction"></a>

```typescript
public readonly useHuggingFaceAction: string;
```

- *Type:* string

---

##### `useIntercomAction`<sup>Required</sup> <a name="useIntercomAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useIntercomAction"></a>

```typescript
public readonly useIntercomAction: string;
```

- *Type:* string

---

##### `useJiraAction`<sup>Required</sup> <a name="useJiraAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useJiraAction"></a>

```typescript
public readonly useJiraAction: string;
```

- *Type:* string

---

##### `useLinearAction`<sup>Required</sup> <a name="useLinearAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useLinearAction"></a>

```typescript
public readonly useLinearAction: string;
```

- *Type:* string

---

##### `useMcpAction`<sup>Required</sup> <a name="useMcpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMcpAction"></a>

```typescript
public readonly useMcpAction: string;
```

- *Type:* string

---

##### `useMondayAction`<sup>Required</sup> <a name="useMondayAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMondayAction"></a>

```typescript
public readonly useMondayAction: string;
```

- *Type:* string

---

##### `useMsExchangeAction`<sup>Required</sup> <a name="useMsExchangeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMsExchangeAction"></a>

```typescript
public readonly useMsExchangeAction: string;
```

- *Type:* string

---

##### `useMsTeamsAction`<sup>Required</sup> <a name="useMsTeamsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMsTeamsAction"></a>

```typescript
public readonly useMsTeamsAction: string;
```

- *Type:* string

---

##### `useNewRelicAction`<sup>Required</sup> <a name="useNewRelicAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useNewRelicAction"></a>

```typescript
public readonly useNewRelicAction: string;
```

- *Type:* string

---

##### `useNotionAction`<sup>Required</sup> <a name="useNotionAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useNotionAction"></a>

```typescript
public readonly useNotionAction: string;
```

- *Type:* string

---

##### `useOneDriveAction`<sup>Required</sup> <a name="useOneDriveAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useOneDriveAction"></a>

```typescript
public readonly useOneDriveAction: string;
```

- *Type:* string

---

##### `useOpenApiAction`<sup>Required</sup> <a name="useOpenApiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useOpenApiAction"></a>

```typescript
public readonly useOpenApiAction: string;
```

- *Type:* string

---

##### `usePagerDutyAction`<sup>Required</sup> <a name="usePagerDutyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.usePagerDutyAction"></a>

```typescript
public readonly usePagerDutyAction: string;
```

- *Type:* string

---

##### `useSalesforceAction`<sup>Required</sup> <a name="useSalesforceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSalesforceAction"></a>

```typescript
public readonly useSalesforceAction: string;
```

- *Type:* string

---

##### `useSandPGlobalEnergyAction`<sup>Required</sup> <a name="useSandPGlobalEnergyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSandPGlobalEnergyAction"></a>

```typescript
public readonly useSandPGlobalEnergyAction: string;
```

- *Type:* string

---

##### `useSandPgmiAction`<sup>Required</sup> <a name="useSandPgmiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSandPgmiAction"></a>

```typescript
public readonly useSandPgmiAction: string;
```

- *Type:* string

---

##### `useSapBillOfMaterialAction`<sup>Required</sup> <a name="useSapBillOfMaterialAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapBillOfMaterialAction"></a>

```typescript
public readonly useSapBillOfMaterialAction: string;
```

- *Type:* string

---

##### `useSapBusinessPartnerAction`<sup>Required</sup> <a name="useSapBusinessPartnerAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapBusinessPartnerAction"></a>

```typescript
public readonly useSapBusinessPartnerAction: string;
```

- *Type:* string

---

##### `useSapMaterialStockAction`<sup>Required</sup> <a name="useSapMaterialStockAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapMaterialStockAction"></a>

```typescript
public readonly useSapMaterialStockAction: string;
```

- *Type:* string

---

##### `useSapPhysicalInventoryAction`<sup>Required</sup> <a name="useSapPhysicalInventoryAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapPhysicalInventoryAction"></a>

```typescript
public readonly useSapPhysicalInventoryAction: string;
```

- *Type:* string

---

##### `useSapProductMasterDataAction`<sup>Required</sup> <a name="useSapProductMasterDataAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapProductMasterDataAction"></a>

```typescript
public readonly useSapProductMasterDataAction: string;
```

- *Type:* string

---

##### `useServiceNowAction`<sup>Required</sup> <a name="useServiceNowAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useServiceNowAction"></a>

```typescript
public readonly useServiceNowAction: string;
```

- *Type:* string

---

##### `useSharePointAction`<sup>Required</sup> <a name="useSharePointAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSharePointAction"></a>

```typescript
public readonly useSharePointAction: string;
```

- *Type:* string

---

##### `useSlackAction`<sup>Required</sup> <a name="useSlackAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSlackAction"></a>

```typescript
public readonly useSlackAction: string;
```

- *Type:* string

---

##### `useSmartsheetAction`<sup>Required</sup> <a name="useSmartsheetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSmartsheetAction"></a>

```typescript
public readonly useSmartsheetAction: string;
```

- *Type:* string

---

##### `useTextractAction`<sup>Required</sup> <a name="useTextractAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useTextractAction"></a>

```typescript
public readonly useTextractAction: string;
```

- *Type:* string

---

##### `useZendeskAction`<sup>Required</sup> <a name="useZendeskAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useZendeskAction"></a>

```typescript
public readonly useZendeskAction: string;
```

- *Type:* string

---

##### `viewAccountSpiceCapacity`<sup>Required</sup> <a name="viewAccountSpiceCapacity" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.viewAccountSpiceCapacity"></a>

```typescript
public readonly viewAccountSpiceCapacity: string;
```

- *Type:* string

---

##### `zendeskAction`<sup>Required</sup> <a name="zendeskAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.zendeskAction"></a>

```typescript
public readonly zendeskAction: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightCustomPermissionsCapabilities;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities">QuicksightCustomPermissionsCapabilities</a>

---


### QuicksightCustomPermissionsTagsList <a name="QuicksightCustomPermissionsTagsList" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.Initializer"></a>

```typescript
import { quicksightCustomPermissions } from '@cdktn/provider-awscc'

new quicksightCustomPermissions.QuicksightCustomPermissionsTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.get"></a>

```typescript
public get(index: number): QuicksightCustomPermissionsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags">QuicksightCustomPermissionsTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightCustomPermissionsTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags">QuicksightCustomPermissionsTags</a>[]

---


### QuicksightCustomPermissionsTagsOutputReference <a name="QuicksightCustomPermissionsTagsOutputReference" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.Initializer"></a>

```typescript
import { quicksightCustomPermissions } from '@cdktn/provider-awscc'

new quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags">QuicksightCustomPermissionsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightCustomPermissionsTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags">QuicksightCustomPermissionsTags</a>

---



