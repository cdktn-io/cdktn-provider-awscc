# `efsAccessPoint` Submodule <a name="`efsAccessPoint` Submodule" id="@cdktn/provider-awscc.efsAccessPoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EfsAccessPoint <a name="EfsAccessPoint" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/efs_access_point awscc_efs_access_point}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.Initializer"></a>

```typescript
import { efsAccessPoint } from '@cdktn/provider-awscc'

new efsAccessPoint.EfsAccessPoint(scope: Construct, id: string, config: EfsAccessPointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointConfig">EfsAccessPointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointConfig">EfsAccessPointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.putAccessPointTags">putAccessPointTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.putPosixUser">putPosixUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.putRootDirectory">putRootDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.resetAccessPointTags">resetAccessPointTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.resetClientToken">resetClientToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.resetPosixUser">resetPosixUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.resetRootDirectory">resetRootDirectory</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccessPointTags` <a name="putAccessPointTags" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.putAccessPointTags"></a>

```typescript
public putAccessPointTags(value: IResolvable | EfsAccessPointAccessPointTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.putAccessPointTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTags">EfsAccessPointAccessPointTags</a>[]

---

##### `putPosixUser` <a name="putPosixUser" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.putPosixUser"></a>

```typescript
public putPosixUser(value: EfsAccessPointPosixUser): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.putPosixUser.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUser">EfsAccessPointPosixUser</a>

---

##### `putRootDirectory` <a name="putRootDirectory" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.putRootDirectory"></a>

```typescript
public putRootDirectory(value: EfsAccessPointRootDirectory): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.putRootDirectory.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectory">EfsAccessPointRootDirectory</a>

---

##### `resetAccessPointTags` <a name="resetAccessPointTags" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.resetAccessPointTags"></a>

```typescript
public resetAccessPointTags(): void
```

##### `resetClientToken` <a name="resetClientToken" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.resetClientToken"></a>

```typescript
public resetClientToken(): void
```

##### `resetPosixUser` <a name="resetPosixUser" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.resetPosixUser"></a>

```typescript
public resetPosixUser(): void
```

##### `resetRootDirectory` <a name="resetRootDirectory" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.resetRootDirectory"></a>

```typescript
public resetRootDirectory(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a EfsAccessPoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.isConstruct"></a>

```typescript
import { efsAccessPoint } from '@cdktn/provider-awscc'

efsAccessPoint.EfsAccessPoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.isTerraformElement"></a>

```typescript
import { efsAccessPoint } from '@cdktn/provider-awscc'

efsAccessPoint.EfsAccessPoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.isTerraformResource"></a>

```typescript
import { efsAccessPoint } from '@cdktn/provider-awscc'

efsAccessPoint.EfsAccessPoint.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.generateConfigForImport"></a>

```typescript
import { efsAccessPoint } from '@cdktn/provider-awscc'

efsAccessPoint.EfsAccessPoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a EfsAccessPoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EfsAccessPoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EfsAccessPoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/efs_access_point#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EfsAccessPoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.accessPointId">accessPointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.accessPointTags">accessPointTags</a></code> | <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsList">EfsAccessPointAccessPointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.posixUser">posixUser</a></code> | <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference">EfsAccessPointPosixUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.rootDirectory">rootDirectory</a></code> | <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference">EfsAccessPointRootDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.accessPointTagsInput">accessPointTagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTags">EfsAccessPointAccessPointTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.clientTokenInput">clientTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.fileSystemIdInput">fileSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.posixUserInput">posixUserInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUser">EfsAccessPointPosixUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.rootDirectoryInput">rootDirectoryInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectory">EfsAccessPointRootDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.clientToken">clientToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accessPointId`<sup>Required</sup> <a name="accessPointId" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.accessPointId"></a>

```typescript
public readonly accessPointId: string;
```

- *Type:* string

---

##### `accessPointTags`<sup>Required</sup> <a name="accessPointTags" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.accessPointTags"></a>

```typescript
public readonly accessPointTags: EfsAccessPointAccessPointTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsList">EfsAccessPointAccessPointTagsList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `posixUser`<sup>Required</sup> <a name="posixUser" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.posixUser"></a>

```typescript
public readonly posixUser: EfsAccessPointPosixUserOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference">EfsAccessPointPosixUserOutputReference</a>

---

##### `rootDirectory`<sup>Required</sup> <a name="rootDirectory" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.rootDirectory"></a>

```typescript
public readonly rootDirectory: EfsAccessPointRootDirectoryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference">EfsAccessPointRootDirectoryOutputReference</a>

---

##### `accessPointTagsInput`<sup>Optional</sup> <a name="accessPointTagsInput" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.accessPointTagsInput"></a>

```typescript
public readonly accessPointTagsInput: IResolvable | EfsAccessPointAccessPointTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTags">EfsAccessPointAccessPointTags</a>[]

---

##### `clientTokenInput`<sup>Optional</sup> <a name="clientTokenInput" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.clientTokenInput"></a>

```typescript
public readonly clientTokenInput: string;
```

- *Type:* string

---

##### `fileSystemIdInput`<sup>Optional</sup> <a name="fileSystemIdInput" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.fileSystemIdInput"></a>

```typescript
public readonly fileSystemIdInput: string;
```

- *Type:* string

---

##### `posixUserInput`<sup>Optional</sup> <a name="posixUserInput" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.posixUserInput"></a>

```typescript
public readonly posixUserInput: IResolvable | EfsAccessPointPosixUser;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUser">EfsAccessPointPosixUser</a>

---

##### `rootDirectoryInput`<sup>Optional</sup> <a name="rootDirectoryInput" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.rootDirectoryInput"></a>

```typescript
public readonly rootDirectoryInput: IResolvable | EfsAccessPointRootDirectory;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectory">EfsAccessPointRootDirectory</a>

---

##### `clientToken`<sup>Required</sup> <a name="clientToken" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.clientToken"></a>

```typescript
public readonly clientToken: string;
```

- *Type:* string

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EfsAccessPointAccessPointTags <a name="EfsAccessPointAccessPointTags" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTags.Initializer"></a>

```typescript
import { efsAccessPoint } from '@cdktn/provider-awscc'

const efsAccessPointAccessPointTags: efsAccessPoint.EfsAccessPointAccessPointTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTags.property.key">key</a></code> | <code>string</code> | The tag key (String). The key can't start with ``aws:``. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTags.property.value">value</a></code> | <code>string</code> | The value of the tag key. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The tag key (String). The key can't start with ``aws:``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/efs_access_point#key EfsAccessPoint#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of the tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/efs_access_point#value EfsAccessPoint#value}

---

### EfsAccessPointConfig <a name="EfsAccessPointConfig" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointConfig.Initializer"></a>

```typescript
import { efsAccessPoint } from '@cdktn/provider-awscc'

const efsAccessPointConfig: efsAccessPoint.EfsAccessPointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointConfig.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | The ID of the EFS file system that the access point applies to. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointConfig.property.accessPointTags">accessPointTags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTags">EfsAccessPointAccessPointTags</a>[]</code> | An array of key-value pairs to apply to this resource.  For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html). |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointConfig.property.clientToken">clientToken</a></code> | <code>string</code> | The opaque string specified in the request to ensure idempotent creation. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointConfig.property.posixUser">posixUser</a></code> | <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUser">EfsAccessPointPosixUser</a></code> | The full POSIX identity, including the user ID, group ID, and secondary group IDs on the access point that is used for all file operations by NFS clients using the access point. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointConfig.property.rootDirectory">rootDirectory</a></code> | <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectory">EfsAccessPointRootDirectory</a></code> | The directory on the EFS file system that the access point exposes as the root directory to NFS clients using the access point. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointConfig.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

The ID of the EFS file system that the access point applies to.

Accepts only the ID format for input when specifying a file system, for example ``fs-0123456789abcedf2``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/efs_access_point#file_system_id EfsAccessPoint#file_system_id}

---

##### `accessPointTags`<sup>Optional</sup> <a name="accessPointTags" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointConfig.property.accessPointTags"></a>

```typescript
public readonly accessPointTags: IResolvable | EfsAccessPointAccessPointTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTags">EfsAccessPointAccessPointTags</a>[]

An array of key-value pairs to apply to this resource.  For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/efs_access_point#access_point_tags EfsAccessPoint#access_point_tags}

---

##### `clientToken`<sup>Optional</sup> <a name="clientToken" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointConfig.property.clientToken"></a>

```typescript
public readonly clientToken: string;
```

- *Type:* string

The opaque string specified in the request to ensure idempotent creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/efs_access_point#client_token EfsAccessPoint#client_token}

---

##### `posixUser`<sup>Optional</sup> <a name="posixUser" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointConfig.property.posixUser"></a>

```typescript
public readonly posixUser: EfsAccessPointPosixUser;
```

- *Type:* <a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUser">EfsAccessPointPosixUser</a>

The full POSIX identity, including the user ID, group ID, and secondary group IDs on the access point that is used for all file operations by NFS clients using the access point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/efs_access_point#posix_user EfsAccessPoint#posix_user}

---

##### `rootDirectory`<sup>Optional</sup> <a name="rootDirectory" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointConfig.property.rootDirectory"></a>

```typescript
public readonly rootDirectory: EfsAccessPointRootDirectory;
```

- *Type:* <a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectory">EfsAccessPointRootDirectory</a>

The directory on the EFS file system that the access point exposes as the root directory to NFS clients using the access point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/efs_access_point#root_directory EfsAccessPoint#root_directory}

---

### EfsAccessPointPosixUser <a name="EfsAccessPointPosixUser" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUser.Initializer"></a>

```typescript
import { efsAccessPoint } from '@cdktn/provider-awscc'

const efsAccessPointPosixUser: efsAccessPoint.EfsAccessPointPosixUser = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUser.property.gid">gid</a></code> | <code>string</code> | The POSIX group ID used for all file system operations using this access point. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUser.property.secondaryGids">secondaryGids</a></code> | <code>string[]</code> | Secondary POSIX group IDs used for all file system operations using this access point. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUser.property.uid">uid</a></code> | <code>string</code> | The POSIX user ID used for all file system operations using this access point. |

---

##### `gid`<sup>Optional</sup> <a name="gid" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUser.property.gid"></a>

```typescript
public readonly gid: string;
```

- *Type:* string

The POSIX group ID used for all file system operations using this access point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/efs_access_point#gid EfsAccessPoint#gid}

---

##### `secondaryGids`<sup>Optional</sup> <a name="secondaryGids" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUser.property.secondaryGids"></a>

```typescript
public readonly secondaryGids: string[];
```

- *Type:* string[]

Secondary POSIX group IDs used for all file system operations using this access point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/efs_access_point#secondary_gids EfsAccessPoint#secondary_gids}

---

##### `uid`<sup>Optional</sup> <a name="uid" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUser.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

The POSIX user ID used for all file system operations using this access point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/efs_access_point#uid EfsAccessPoint#uid}

---

### EfsAccessPointRootDirectory <a name="EfsAccessPointRootDirectory" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectory.Initializer"></a>

```typescript
import { efsAccessPoint } from '@cdktn/provider-awscc'

const efsAccessPointRootDirectory: efsAccessPoint.EfsAccessPointRootDirectory = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectory.property.creationInfo">creationInfo</a></code> | <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo">EfsAccessPointRootDirectoryCreationInfo</a></code> | (Optional) Specifies the POSIX IDs and permissions to apply to the access point's ``RootDirectory``. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectory.property.path">path</a></code> | <code>string</code> | Specifies the path on the EFS file system to expose as the root directory to NFS clients using the access point to access the EFS file system. |

---

##### `creationInfo`<sup>Optional</sup> <a name="creationInfo" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectory.property.creationInfo"></a>

```typescript
public readonly creationInfo: EfsAccessPointRootDirectoryCreationInfo;
```

- *Type:* <a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo">EfsAccessPointRootDirectoryCreationInfo</a>

(Optional) Specifies the POSIX IDs and permissions to apply to the access point's ``RootDirectory``.

If the ``RootDirectory`` > ``Path`` specified does not exist, EFS creates the root directory using the ``CreationInfo`` settings when a client connects to an access point. When specifying the ``CreationInfo``, you must provide values for all properties. 
  If you do not provide ``CreationInfo`` and the specified ``RootDirectory`` > ``Path`` does not exist, attempts to mount the file system using the access point will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/efs_access_point#creation_info EfsAccessPoint#creation_info}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectory.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Specifies the path on the EFS file system to expose as the root directory to NFS clients using the access point to access the EFS file system.

A path can have up to four subdirectories. If the specified path does not exist, you are required to provide the ``CreationInfo``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/efs_access_point#path EfsAccessPoint#path}

---

### EfsAccessPointRootDirectoryCreationInfo <a name="EfsAccessPointRootDirectoryCreationInfo" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo.Initializer"></a>

```typescript
import { efsAccessPoint } from '@cdktn/provider-awscc'

const efsAccessPointRootDirectoryCreationInfo: efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo.property.ownerGid">ownerGid</a></code> | <code>string</code> | Specifies the POSIX group ID to apply to the ``RootDirectory``. Accepts values from 0 to 2^32 (4294967295). |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo.property.ownerUid">ownerUid</a></code> | <code>string</code> | Specifies the POSIX user ID to apply to the ``RootDirectory``. Accepts values from 0 to 2^32 (4294967295). |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo.property.permissions">permissions</a></code> | <code>string</code> | Specifies the POSIX permissions to apply to the ``RootDirectory``, in the format of an octal number representing the file's mode bits. |

---

##### `ownerGid`<sup>Optional</sup> <a name="ownerGid" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo.property.ownerGid"></a>

```typescript
public readonly ownerGid: string;
```

- *Type:* string

Specifies the POSIX group ID to apply to the ``RootDirectory``. Accepts values from 0 to 2^32 (4294967295).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/efs_access_point#owner_gid EfsAccessPoint#owner_gid}

---

##### `ownerUid`<sup>Optional</sup> <a name="ownerUid" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo.property.ownerUid"></a>

```typescript
public readonly ownerUid: string;
```

- *Type:* string

Specifies the POSIX user ID to apply to the ``RootDirectory``. Accepts values from 0 to 2^32 (4294967295).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/efs_access_point#owner_uid EfsAccessPoint#owner_uid}

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo.property.permissions"></a>

```typescript
public readonly permissions: string;
```

- *Type:* string

Specifies the POSIX permissions to apply to the ``RootDirectory``, in the format of an octal number representing the file's mode bits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/efs_access_point#permissions EfsAccessPoint#permissions}

---

## Classes <a name="Classes" id="Classes"></a>

### EfsAccessPointAccessPointTagsList <a name="EfsAccessPointAccessPointTagsList" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsList.Initializer"></a>

```typescript
import { efsAccessPoint } from '@cdktn/provider-awscc'

new efsAccessPoint.EfsAccessPointAccessPointTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsList.get"></a>

```typescript
public get(index: number): EfsAccessPointAccessPointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTags">EfsAccessPointAccessPointTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EfsAccessPointAccessPointTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTags">EfsAccessPointAccessPointTags</a>[]

---


### EfsAccessPointAccessPointTagsOutputReference <a name="EfsAccessPointAccessPointTagsOutputReference" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.Initializer"></a>

```typescript
import { efsAccessPoint } from '@cdktn/provider-awscc'

new efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTags">EfsAccessPointAccessPointTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EfsAccessPointAccessPointTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTags">EfsAccessPointAccessPointTags</a>

---


### EfsAccessPointPosixUserOutputReference <a name="EfsAccessPointPosixUserOutputReference" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.Initializer"></a>

```typescript
import { efsAccessPoint } from '@cdktn/provider-awscc'

new efsAccessPoint.EfsAccessPointPosixUserOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.resetGid">resetGid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.resetSecondaryGids">resetSecondaryGids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.resetUid">resetUid</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGid` <a name="resetGid" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.resetGid"></a>

```typescript
public resetGid(): void
```

##### `resetSecondaryGids` <a name="resetSecondaryGids" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.resetSecondaryGids"></a>

```typescript
public resetSecondaryGids(): void
```

##### `resetUid` <a name="resetUid" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.resetUid"></a>

```typescript
public resetUid(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.gidInput">gidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.secondaryGidsInput">secondaryGidsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.uidInput">uidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.gid">gid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.secondaryGids">secondaryGids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUser">EfsAccessPointPosixUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gidInput`<sup>Optional</sup> <a name="gidInput" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.gidInput"></a>

```typescript
public readonly gidInput: string;
```

- *Type:* string

---

##### `secondaryGidsInput`<sup>Optional</sup> <a name="secondaryGidsInput" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.secondaryGidsInput"></a>

```typescript
public readonly secondaryGidsInput: string[];
```

- *Type:* string[]

---

##### `uidInput`<sup>Optional</sup> <a name="uidInput" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.uidInput"></a>

```typescript
public readonly uidInput: string;
```

- *Type:* string

---

##### `gid`<sup>Required</sup> <a name="gid" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.gid"></a>

```typescript
public readonly gid: string;
```

- *Type:* string

---

##### `secondaryGids`<sup>Required</sup> <a name="secondaryGids" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.secondaryGids"></a>

```typescript
public readonly secondaryGids: string[];
```

- *Type:* string[]

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EfsAccessPointPosixUser;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUser">EfsAccessPointPosixUser</a>

---


### EfsAccessPointRootDirectoryCreationInfoOutputReference <a name="EfsAccessPointRootDirectoryCreationInfoOutputReference" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.Initializer"></a>

```typescript
import { efsAccessPoint } from '@cdktn/provider-awscc'

new efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.resetOwnerGid">resetOwnerGid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.resetOwnerUid">resetOwnerUid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.resetPermissions">resetPermissions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOwnerGid` <a name="resetOwnerGid" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.resetOwnerGid"></a>

```typescript
public resetOwnerGid(): void
```

##### `resetOwnerUid` <a name="resetOwnerUid" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.resetOwnerUid"></a>

```typescript
public resetOwnerUid(): void
```

##### `resetPermissions` <a name="resetPermissions" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.resetPermissions"></a>

```typescript
public resetPermissions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.ownerGidInput">ownerGidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.ownerUidInput">ownerUidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.permissionsInput">permissionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.ownerGid">ownerGid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.ownerUid">ownerUid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.permissions">permissions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo">EfsAccessPointRootDirectoryCreationInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ownerGidInput`<sup>Optional</sup> <a name="ownerGidInput" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.ownerGidInput"></a>

```typescript
public readonly ownerGidInput: string;
```

- *Type:* string

---

##### `ownerUidInput`<sup>Optional</sup> <a name="ownerUidInput" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.ownerUidInput"></a>

```typescript
public readonly ownerUidInput: string;
```

- *Type:* string

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.permissionsInput"></a>

```typescript
public readonly permissionsInput: string;
```

- *Type:* string

---

##### `ownerGid`<sup>Required</sup> <a name="ownerGid" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.ownerGid"></a>

```typescript
public readonly ownerGid: string;
```

- *Type:* string

---

##### `ownerUid`<sup>Required</sup> <a name="ownerUid" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.ownerUid"></a>

```typescript
public readonly ownerUid: string;
```

- *Type:* string

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.permissions"></a>

```typescript
public readonly permissions: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EfsAccessPointRootDirectoryCreationInfo;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo">EfsAccessPointRootDirectoryCreationInfo</a>

---


### EfsAccessPointRootDirectoryOutputReference <a name="EfsAccessPointRootDirectoryOutputReference" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.Initializer"></a>

```typescript
import { efsAccessPoint } from '@cdktn/provider-awscc'

new efsAccessPoint.EfsAccessPointRootDirectoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.putCreationInfo">putCreationInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.resetCreationInfo">resetCreationInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCreationInfo` <a name="putCreationInfo" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.putCreationInfo"></a>

```typescript
public putCreationInfo(value: EfsAccessPointRootDirectoryCreationInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.putCreationInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo">EfsAccessPointRootDirectoryCreationInfo</a>

---

##### `resetCreationInfo` <a name="resetCreationInfo" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.resetCreationInfo"></a>

```typescript
public resetCreationInfo(): void
```

##### `resetPath` <a name="resetPath" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.creationInfo">creationInfo</a></code> | <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference">EfsAccessPointRootDirectoryCreationInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.creationInfoInput">creationInfoInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo">EfsAccessPointRootDirectoryCreationInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectory">EfsAccessPointRootDirectory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `creationInfo`<sup>Required</sup> <a name="creationInfo" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.creationInfo"></a>

```typescript
public readonly creationInfo: EfsAccessPointRootDirectoryCreationInfoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference">EfsAccessPointRootDirectoryCreationInfoOutputReference</a>

---

##### `creationInfoInput`<sup>Optional</sup> <a name="creationInfoInput" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.creationInfoInput"></a>

```typescript
public readonly creationInfoInput: IResolvable | EfsAccessPointRootDirectoryCreationInfo;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo">EfsAccessPointRootDirectoryCreationInfo</a>

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EfsAccessPointRootDirectory;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectory">EfsAccessPointRootDirectory</a>

---



