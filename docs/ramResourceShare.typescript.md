# `ramResourceShare` Submodule <a name="`ramResourceShare` Submodule" id="@cdktn/provider-awscc.ramResourceShare"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RamResourceShare <a name="RamResourceShare" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ram_resource_share awscc_ram_resource_share}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer"></a>

```typescript
import { ramResourceShare } from '@cdktn/provider-awscc'

new ramResourceShare.RamResourceShare(scope: Construct, id: string, config: RamResourceShareConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig">RamResourceShareConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig">RamResourceShareConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.putResourceShareConfiguration">putResourceShareConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.resetAllowExternalPrincipals">resetAllowExternalPrincipals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.resetPermissionArns">resetPermissionArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.resetPrincipals">resetPrincipals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.resetResourceArns">resetResourceArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.resetResourceShareConfiguration">resetResourceShareConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.resetSources">resetSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putResourceShareConfiguration` <a name="putResourceShareConfiguration" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.putResourceShareConfiguration"></a>

```typescript
public putResourceShareConfiguration(value: RamResourceShareResourceShareConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.putResourceShareConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfiguration">RamResourceShareResourceShareConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.putTags"></a>

```typescript
public putTags(value: IResolvable | RamResourceShareTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTags">RamResourceShareTags</a>[]

---

##### `resetAllowExternalPrincipals` <a name="resetAllowExternalPrincipals" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.resetAllowExternalPrincipals"></a>

```typescript
public resetAllowExternalPrincipals(): void
```

##### `resetPermissionArns` <a name="resetPermissionArns" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.resetPermissionArns"></a>

```typescript
public resetPermissionArns(): void
```

##### `resetPrincipals` <a name="resetPrincipals" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.resetPrincipals"></a>

```typescript
public resetPrincipals(): void
```

##### `resetResourceArns` <a name="resetResourceArns" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.resetResourceArns"></a>

```typescript
public resetResourceArns(): void
```

##### `resetResourceShareConfiguration` <a name="resetResourceShareConfiguration" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.resetResourceShareConfiguration"></a>

```typescript
public resetResourceShareConfiguration(): void
```

##### `resetSources` <a name="resetSources" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.resetSources"></a>

```typescript
public resetSources(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RamResourceShare resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.isConstruct"></a>

```typescript
import { ramResourceShare } from '@cdktn/provider-awscc'

ramResourceShare.RamResourceShare.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.isTerraformElement"></a>

```typescript
import { ramResourceShare } from '@cdktn/provider-awscc'

ramResourceShare.RamResourceShare.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.isTerraformResource"></a>

```typescript
import { ramResourceShare } from '@cdktn/provider-awscc'

ramResourceShare.RamResourceShare.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.generateConfigForImport"></a>

```typescript
import { ramResourceShare } from '@cdktn/provider-awscc'

ramResourceShare.RamResourceShare.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a RamResourceShare resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RamResourceShare to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RamResourceShare that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ram_resource_share#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RamResourceShare to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.featureSet">featureSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.owningAccountId">owningAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.resourceShareConfiguration">resourceShareConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference">RamResourceShareResourceShareConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList">RamResourceShareTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.allowExternalPrincipalsInput">allowExternalPrincipalsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.permissionArnsInput">permissionArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.principalsInput">principalsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.resourceArnsInput">resourceArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.resourceShareConfigurationInput">resourceShareConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfiguration">RamResourceShareResourceShareConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.sourcesInput">sourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTags">RamResourceShareTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.allowExternalPrincipals">allowExternalPrincipals</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.permissionArns">permissionArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.principals">principals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.resourceArns">resourceArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.sources">sources</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `featureSet`<sup>Required</sup> <a name="featureSet" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.featureSet"></a>

```typescript
public readonly featureSet: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.lastUpdatedTime"></a>

```typescript
public readonly lastUpdatedTime: string;
```

- *Type:* string

---

##### `owningAccountId`<sup>Required</sup> <a name="owningAccountId" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.owningAccountId"></a>

```typescript
public readonly owningAccountId: string;
```

- *Type:* string

---

##### `resourceShareConfiguration`<sup>Required</sup> <a name="resourceShareConfiguration" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.resourceShareConfiguration"></a>

```typescript
public readonly resourceShareConfiguration: RamResourceShareResourceShareConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference">RamResourceShareResourceShareConfigurationOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.tags"></a>

```typescript
public readonly tags: RamResourceShareTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList">RamResourceShareTagsList</a>

---

##### `allowExternalPrincipalsInput`<sup>Optional</sup> <a name="allowExternalPrincipalsInput" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.allowExternalPrincipalsInput"></a>

```typescript
public readonly allowExternalPrincipalsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `permissionArnsInput`<sup>Optional</sup> <a name="permissionArnsInput" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.permissionArnsInput"></a>

```typescript
public readonly permissionArnsInput: string[];
```

- *Type:* string[]

---

##### `principalsInput`<sup>Optional</sup> <a name="principalsInput" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.principalsInput"></a>

```typescript
public readonly principalsInput: string[];
```

- *Type:* string[]

---

##### `resourceArnsInput`<sup>Optional</sup> <a name="resourceArnsInput" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.resourceArnsInput"></a>

```typescript
public readonly resourceArnsInput: string[];
```

- *Type:* string[]

---

##### `resourceShareConfigurationInput`<sup>Optional</sup> <a name="resourceShareConfigurationInput" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.resourceShareConfigurationInput"></a>

```typescript
public readonly resourceShareConfigurationInput: IResolvable | RamResourceShareResourceShareConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfiguration">RamResourceShareResourceShareConfiguration</a>

---

##### `sourcesInput`<sup>Optional</sup> <a name="sourcesInput" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.sourcesInput"></a>

```typescript
public readonly sourcesInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | RamResourceShareTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTags">RamResourceShareTags</a>[]

---

##### `allowExternalPrincipals`<sup>Required</sup> <a name="allowExternalPrincipals" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.allowExternalPrincipals"></a>

```typescript
public readonly allowExternalPrincipals: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `permissionArns`<sup>Required</sup> <a name="permissionArns" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.permissionArns"></a>

```typescript
public readonly permissionArns: string[];
```

- *Type:* string[]

---

##### `principals`<sup>Required</sup> <a name="principals" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.principals"></a>

```typescript
public readonly principals: string[];
```

- *Type:* string[]

---

##### `resourceArns`<sup>Required</sup> <a name="resourceArns" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.resourceArns"></a>

```typescript
public readonly resourceArns: string[];
```

- *Type:* string[]

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.sources"></a>

```typescript
public readonly sources: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RamResourceShareConfig <a name="RamResourceShareConfig" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.Initializer"></a>

```typescript
import { ramResourceShare } from '@cdktn/provider-awscc'

const ramResourceShareConfig: ramResourceShare.RamResourceShareConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.name">name</a></code> | <code>string</code> | Specifies the name of the resource share. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.allowExternalPrincipals">allowExternalPrincipals</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether principals outside your organization in AWS Organizations can be associated with a resource share. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.permissionArns">permissionArns</a></code> | <code>string[]</code> | Specifies the [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the AWS RAM permission to associate with the resource share. If you do not specify an ARN for the permission, AWS RAM automatically attaches the default version of the permission for each resource type. You can associate only one permission with each resource type included in the resource share. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.principals">principals</a></code> | <code>string[]</code> | Specifies the principals to associate with the resource share. The possible values are:. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.resourceArns">resourceArns</a></code> | <code>string[]</code> | Specifies a list of one or more ARNs of the resources to associate with the resource share. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.resourceShareConfiguration">resourceShareConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfiguration">RamResourceShareResourceShareConfiguration</a></code> | Specifies the configuration for the resource share. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.sources">sources</a></code> | <code>string[]</code> | Specifies from which source accounts the service principal has access to the resources in this resource share. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTags">RamResourceShareTags</a>[]</code> | Specifies one or more tags to attach to the resource share itself. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the name of the resource share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ram_resource_share#name RamResourceShare#name}

---

##### `allowExternalPrincipals`<sup>Optional</sup> <a name="allowExternalPrincipals" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.allowExternalPrincipals"></a>

```typescript
public readonly allowExternalPrincipals: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether principals outside your organization in AWS Organizations can be associated with a resource share.

A value of `true` lets you share with individual AWS accounts that are not in your organization. A value of `false` only has meaning if your account is a member of an AWS Organization. The default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ram_resource_share#allow_external_principals RamResourceShare#allow_external_principals}

---

##### `permissionArns`<sup>Optional</sup> <a name="permissionArns" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.permissionArns"></a>

```typescript
public readonly permissionArns: string[];
```

- *Type:* string[]

Specifies the [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the AWS RAM permission to associate with the resource share. If you do not specify an ARN for the permission, AWS RAM automatically attaches the default version of the permission for each resource type. You can associate only one permission with each resource type included in the resource share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ram_resource_share#permission_arns RamResourceShare#permission_arns}

---

##### `principals`<sup>Optional</sup> <a name="principals" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.principals"></a>

```typescript
public readonly principals: string[];
```

- *Type:* string[]

Specifies the principals to associate with the resource share. The possible values are:.

An AWS account ID

- An Amazon Resource Name (ARN) of an organization in AWS Organizations

- An ARN of an organizational unit (OU) in AWS Organizations

- An ARN of an IAM role

- An ARN of an IAM user

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ram_resource_share#principals RamResourceShare#principals}

---

##### `resourceArns`<sup>Optional</sup> <a name="resourceArns" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.resourceArns"></a>

```typescript
public readonly resourceArns: string[];
```

- *Type:* string[]

Specifies a list of one or more ARNs of the resources to associate with the resource share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ram_resource_share#resource_arns RamResourceShare#resource_arns}

---

##### `resourceShareConfiguration`<sup>Optional</sup> <a name="resourceShareConfiguration" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.resourceShareConfiguration"></a>

```typescript
public readonly resourceShareConfiguration: RamResourceShareResourceShareConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfiguration">RamResourceShareResourceShareConfiguration</a>

Specifies the configuration for the resource share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ram_resource_share#resource_share_configuration RamResourceShare#resource_share_configuration}

---

##### `sources`<sup>Optional</sup> <a name="sources" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.sources"></a>

```typescript
public readonly sources: string[];
```

- *Type:* string[]

Specifies from which source accounts the service principal has access to the resources in this resource share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ram_resource_share#sources RamResourceShare#sources}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | RamResourceShareTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTags">RamResourceShareTags</a>[]

Specifies one or more tags to attach to the resource share itself.

It doesn't attach the tags to the resources associated with the resource share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ram_resource_share#tags RamResourceShare#tags}

---

### RamResourceShareResourceShareConfiguration <a name="RamResourceShareResourceShareConfiguration" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfiguration.Initializer"></a>

```typescript
import { ramResourceShare } from '@cdktn/provider-awscc'

const ramResourceShareResourceShareConfiguration: ramResourceShare.RamResourceShareResourceShareConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfiguration.property.exclusiveAccountAccess">exclusiveAccountAccess</a></code> | <code>boolean \| cdktn.IResolvable</code> | The resource share restricts access to an account. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfiguration.property.retainSharingOnAccountLeaveOrganization">retainSharingOnAccountLeaveOrganization</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether the consumer account retains access to the resource share after leaving the organization. |

---

##### `exclusiveAccountAccess`<sup>Optional</sup> <a name="exclusiveAccountAccess" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfiguration.property.exclusiveAccountAccess"></a>

```typescript
public readonly exclusiveAccountAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

The resource share restricts access to an account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ram_resource_share#exclusive_account_access RamResourceShare#exclusive_account_access}

---

##### `retainSharingOnAccountLeaveOrganization`<sup>Optional</sup> <a name="retainSharingOnAccountLeaveOrganization" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfiguration.property.retainSharingOnAccountLeaveOrganization"></a>

```typescript
public readonly retainSharingOnAccountLeaveOrganization: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether the consumer account retains access to the resource share after leaving the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ram_resource_share#retain_sharing_on_account_leave_organization RamResourceShare#retain_sharing_on_account_leave_organization}

---

### RamResourceShareTags <a name="RamResourceShareTags" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTags.Initializer"></a>

```typescript
import { ramResourceShare } from '@cdktn/provider-awscc'

const ramResourceShareTags: ramResourceShare.RamResourceShareTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ram_resource_share#key RamResourceShare#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ram_resource_share#value RamResourceShare#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RamResourceShareResourceShareConfigurationOutputReference <a name="RamResourceShareResourceShareConfigurationOutputReference" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.Initializer"></a>

```typescript
import { ramResourceShare } from '@cdktn/provider-awscc'

new ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.resetExclusiveAccountAccess">resetExclusiveAccountAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.resetRetainSharingOnAccountLeaveOrganization">resetRetainSharingOnAccountLeaveOrganization</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExclusiveAccountAccess` <a name="resetExclusiveAccountAccess" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.resetExclusiveAccountAccess"></a>

```typescript
public resetExclusiveAccountAccess(): void
```

##### `resetRetainSharingOnAccountLeaveOrganization` <a name="resetRetainSharingOnAccountLeaveOrganization" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.resetRetainSharingOnAccountLeaveOrganization"></a>

```typescript
public resetRetainSharingOnAccountLeaveOrganization(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.property.exclusiveAccountAccessInput">exclusiveAccountAccessInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.property.retainSharingOnAccountLeaveOrganizationInput">retainSharingOnAccountLeaveOrganizationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.property.exclusiveAccountAccess">exclusiveAccountAccess</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.property.retainSharingOnAccountLeaveOrganization">retainSharingOnAccountLeaveOrganization</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfiguration">RamResourceShareResourceShareConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exclusiveAccountAccessInput`<sup>Optional</sup> <a name="exclusiveAccountAccessInput" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.property.exclusiveAccountAccessInput"></a>

```typescript
public readonly exclusiveAccountAccessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `retainSharingOnAccountLeaveOrganizationInput`<sup>Optional</sup> <a name="retainSharingOnAccountLeaveOrganizationInput" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.property.retainSharingOnAccountLeaveOrganizationInput"></a>

```typescript
public readonly retainSharingOnAccountLeaveOrganizationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `exclusiveAccountAccess`<sup>Required</sup> <a name="exclusiveAccountAccess" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.property.exclusiveAccountAccess"></a>

```typescript
public readonly exclusiveAccountAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `retainSharingOnAccountLeaveOrganization`<sup>Required</sup> <a name="retainSharingOnAccountLeaveOrganization" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.property.retainSharingOnAccountLeaveOrganization"></a>

```typescript
public readonly retainSharingOnAccountLeaveOrganization: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RamResourceShareResourceShareConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfiguration">RamResourceShareResourceShareConfiguration</a>

---


### RamResourceShareTagsList <a name="RamResourceShareTagsList" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.Initializer"></a>

```typescript
import { ramResourceShare } from '@cdktn/provider-awscc'

new ramResourceShare.RamResourceShareTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.get"></a>

```typescript
public get(index: number): RamResourceShareTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTags">RamResourceShareTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RamResourceShareTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTags">RamResourceShareTags</a>[]

---


### RamResourceShareTagsOutputReference <a name="RamResourceShareTagsOutputReference" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.Initializer"></a>

```typescript
import { ramResourceShare } from '@cdktn/provider-awscc'

new ramResourceShare.RamResourceShareTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTags">RamResourceShareTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RamResourceShareTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTags">RamResourceShareTags</a>

---



