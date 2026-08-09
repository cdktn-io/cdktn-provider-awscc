# `pcsCluster` Submodule <a name="`pcsCluster` Submodule" id="@cdktn/provider-awscc.pcsCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PcsCluster <a name="PcsCluster" id="@cdktn/provider-awscc.pcsCluster.PcsCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcs_cluster awscc_pcs_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.Initializer"></a>

```typescript
import { pcsCluster } from '@cdktn/provider-awscc'

new pcsCluster.PcsCluster(scope: Construct, id: string, config: PcsClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterConfig">PcsClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterConfig">PcsClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.putNetworking">putNetworking</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.putScheduler">putScheduler</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.putSlurmConfiguration">putSlurmConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.resetSlurmConfiguration">resetSlurmConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNetworking` <a name="putNetworking" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.putNetworking"></a>

```typescript
public putNetworking(value: PcsClusterNetworking): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.putNetworking.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworking">PcsClusterNetworking</a>

---

##### `putScheduler` <a name="putScheduler" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.putScheduler"></a>

```typescript
public putScheduler(value: PcsClusterScheduler): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.putScheduler.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterScheduler">PcsClusterScheduler</a>

---

##### `putSlurmConfiguration` <a name="putSlurmConfiguration" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.putSlurmConfiguration"></a>

```typescript
public putSlurmConfiguration(value: PcsClusterSlurmConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.putSlurmConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration">PcsClusterSlurmConfiguration</a>

---

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.resetName"></a>

```typescript
public resetName(): void
```

##### `resetSlurmConfiguration` <a name="resetSlurmConfiguration" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.resetSlurmConfiguration"></a>

```typescript
public resetSlurmConfiguration(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PcsCluster resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.isConstruct"></a>

```typescript
import { pcsCluster } from '@cdktn/provider-awscc'

pcsCluster.PcsCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.isTerraformElement"></a>

```typescript
import { pcsCluster } from '@cdktn/provider-awscc'

pcsCluster.PcsCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.isTerraformResource"></a>

```typescript
import { pcsCluster } from '@cdktn/provider-awscc'

pcsCluster.PcsCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.generateConfigForImport"></a>

```typescript
import { pcsCluster } from '@cdktn/provider-awscc'

pcsCluster.PcsCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a PcsCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PcsCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PcsCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcs_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PcsCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.endpoints">endpoints</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList">PcsClusterEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.errorInfo">errorInfo</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList">PcsClusterErrorInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.networking">networking</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference">PcsClusterNetworkingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.scheduler">scheduler</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference">PcsClusterSchedulerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.slurmConfiguration">slurmConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference">PcsClusterSlurmConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.networkingInput">networkingInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworking">PcsClusterNetworking</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.schedulerInput">schedulerInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterScheduler">PcsClusterScheduler</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.sizeInput">sizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.slurmConfigurationInput">slurmConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration">PcsClusterSlurmConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.size">size</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.endpoints"></a>

```typescript
public readonly endpoints: PcsClusterEndpointsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList">PcsClusterEndpointsList</a>

---

##### `errorInfo`<sup>Required</sup> <a name="errorInfo" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.errorInfo"></a>

```typescript
public readonly errorInfo: PcsClusterErrorInfoList;
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList">PcsClusterErrorInfoList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `networking`<sup>Required</sup> <a name="networking" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.networking"></a>

```typescript
public readonly networking: PcsClusterNetworkingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference">PcsClusterNetworkingOutputReference</a>

---

##### `scheduler`<sup>Required</sup> <a name="scheduler" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.scheduler"></a>

```typescript
public readonly scheduler: PcsClusterSchedulerOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference">PcsClusterSchedulerOutputReference</a>

---

##### `slurmConfiguration`<sup>Required</sup> <a name="slurmConfiguration" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.slurmConfiguration"></a>

```typescript
public readonly slurmConfiguration: PcsClusterSlurmConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference">PcsClusterSlurmConfigurationOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkingInput`<sup>Optional</sup> <a name="networkingInput" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.networkingInput"></a>

```typescript
public readonly networkingInput: IResolvable | PcsClusterNetworking;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworking">PcsClusterNetworking</a>

---

##### `schedulerInput`<sup>Optional</sup> <a name="schedulerInput" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.schedulerInput"></a>

```typescript
public readonly schedulerInput: IResolvable | PcsClusterScheduler;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterScheduler">PcsClusterScheduler</a>

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.sizeInput"></a>

```typescript
public readonly sizeInput: string;
```

- *Type:* string

---

##### `slurmConfigurationInput`<sup>Optional</sup> <a name="slurmConfigurationInput" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.slurmConfigurationInput"></a>

```typescript
public readonly slurmConfigurationInput: IResolvable | PcsClusterSlurmConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration">PcsClusterSlurmConfiguration</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.size"></a>

```typescript
public readonly size: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PcsClusterConfig <a name="PcsClusterConfig" id="@cdktn/provider-awscc.pcsCluster.PcsClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.Initializer"></a>

```typescript
import { pcsCluster } from '@cdktn/provider-awscc'

const pcsClusterConfig: pcsCluster.PcsClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.networking">networking</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworking">PcsClusterNetworking</a></code> | The networking configuration for the cluster's control plane. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.scheduler">scheduler</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterScheduler">PcsClusterScheduler</a></code> | The cluster management and job scheduling software associated with the cluster. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.size">size</a></code> | <code>string</code> | The size of the cluster. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.name">name</a></code> | <code>string</code> | The name that identifies the cluster. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.slurmConfiguration">slurmConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration">PcsClusterSlurmConfiguration</a></code> | Additional options related to the Slurm scheduler. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | 1 or more tags added to the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `networking`<sup>Required</sup> <a name="networking" id="@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.networking"></a>

```typescript
public readonly networking: PcsClusterNetworking;
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworking">PcsClusterNetworking</a>

The networking configuration for the cluster's control plane.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcs_cluster#networking PcsCluster#networking}

---

##### `scheduler`<sup>Required</sup> <a name="scheduler" id="@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.scheduler"></a>

```typescript
public readonly scheduler: PcsClusterScheduler;
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterScheduler">PcsClusterScheduler</a>

The cluster management and job scheduling software associated with the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcs_cluster#scheduler PcsCluster#scheduler}

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.size"></a>

```typescript
public readonly size: string;
```

- *Type:* string

The size of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcs_cluster#size PcsCluster#size}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name that identifies the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcs_cluster#name PcsCluster#name}

---

##### `slurmConfiguration`<sup>Optional</sup> <a name="slurmConfiguration" id="@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.slurmConfiguration"></a>

```typescript
public readonly slurmConfiguration: PcsClusterSlurmConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration">PcsClusterSlurmConfiguration</a>

Additional options related to the Slurm scheduler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcs_cluster#slurm_configuration PcsCluster#slurm_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

1 or more tags added to the resource.

Each tag consists of a tag key and tag value. The tag value is optional and can be an empty string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcs_cluster#tags PcsCluster#tags}

---

### PcsClusterEndpoints <a name="PcsClusterEndpoints" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpoints.Initializer"></a>

```typescript
import { pcsCluster } from '@cdktn/provider-awscc'

const pcsClusterEndpoints: pcsCluster.PcsClusterEndpoints = { ... }
```


### PcsClusterErrorInfo <a name="PcsClusterErrorInfo" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfo.Initializer"></a>

```typescript
import { pcsCluster } from '@cdktn/provider-awscc'

const pcsClusterErrorInfo: pcsCluster.PcsClusterErrorInfo = { ... }
```


### PcsClusterNetworking <a name="PcsClusterNetworking" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworking"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworking.Initializer"></a>

```typescript
import { pcsCluster } from '@cdktn/provider-awscc'

const pcsClusterNetworking: pcsCluster.PcsClusterNetworking = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworking.property.networkType">networkType</a></code> | <code>string</code> | The IP of the cluster (IPV4 or IPV6). |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworking.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | The list of security group IDs associated with the Elastic Network Interface (ENI) created in subnets. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworking.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | The list of subnet IDs where AWS PCS creates an Elastic Network Interface (ENI) to enable communication between managed controllers and AWS PCS resources. |

---

##### `networkType`<sup>Optional</sup> <a name="networkType" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworking.property.networkType"></a>

```typescript
public readonly networkType: string;
```

- *Type:* string

The IP of the cluster (IPV4 or IPV6).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcs_cluster#network_type PcsCluster#network_type}

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworking.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

The list of security group IDs associated with the Elastic Network Interface (ENI) created in subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcs_cluster#security_group_ids PcsCluster#security_group_ids}

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworking.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

The list of subnet IDs where AWS PCS creates an Elastic Network Interface (ENI) to enable communication between managed controllers and AWS PCS resources.

The subnet must have an available IP address, cannot reside in AWS Outposts, AWS Wavelength, or an AWS Local Zone. AWS PCS currently supports only 1 subnet in this list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcs_cluster#subnet_ids PcsCluster#subnet_ids}

---

### PcsClusterScheduler <a name="PcsClusterScheduler" id="@cdktn/provider-awscc.pcsCluster.PcsClusterScheduler"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsCluster.PcsClusterScheduler.Initializer"></a>

```typescript
import { pcsCluster } from '@cdktn/provider-awscc'

const pcsClusterScheduler: pcsCluster.PcsClusterScheduler = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterScheduler.property.type">type</a></code> | <code>string</code> | The software AWS PCS uses to manage cluster scaling and job scheduling. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterScheduler.property.version">version</a></code> | <code>string</code> | The version of the specified scheduling software that AWS PCS uses to manage cluster scaling and job scheduling. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.pcsCluster.PcsClusterScheduler.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The software AWS PCS uses to manage cluster scaling and job scheduling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcs_cluster#type PcsCluster#type}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.pcsCluster.PcsClusterScheduler.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The version of the specified scheduling software that AWS PCS uses to manage cluster scaling and job scheduling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcs_cluster#version PcsCluster#version}

---

### PcsClusterSlurmConfiguration <a name="PcsClusterSlurmConfiguration" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration.Initializer"></a>

```typescript
import { pcsCluster } from '@cdktn/provider-awscc'

const pcsClusterSlurmConfiguration: pcsCluster.PcsClusterSlurmConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration.property.accounting">accounting</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccounting">PcsClusterSlurmConfigurationAccounting</a></code> | The accounting configuration includes configurable settings for Slurm accounting. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration.property.authKey">authKey</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKey">PcsClusterSlurmConfigurationAuthKey</a></code> | The shared Slurm key for authentication, also known as the cluster secret. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration.property.cgroupCustomSettings">cgroupCustomSettings</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettings">PcsClusterSlurmConfigurationCgroupCustomSettings</a>[]</code> | Additional cgroup-specific configuration that directly maps to cgroup.conf settings. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration.property.jwtAuth">jwtAuth</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuth">PcsClusterSlurmConfigurationJwtAuth</a></code> | JWT authentication configuration for Slurm. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration.property.scaleDownIdleTimeInSeconds">scaleDownIdleTimeInSeconds</a></code> | <code>number</code> | The time before an idle node is scaled down. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration.property.slurmCustomSettings">slurmCustomSettings</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettings">PcsClusterSlurmConfigurationSlurmCustomSettings</a>[]</code> | Additional Slurm-specific configuration that directly maps to Slurm settings. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration.property.slurmdbdCustomSettings">slurmdbdCustomSettings</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettings">PcsClusterSlurmConfigurationSlurmdbdCustomSettings</a>[]</code> | Additional slurmdbd-specific configuration that directly maps to slurmdbd.conf settings. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration.property.slurmRest">slurmRest</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRest">PcsClusterSlurmConfigurationSlurmRest</a></code> | The SlurmRest configuration includes configurable settings for Slurm Rest. |

---

##### `accounting`<sup>Optional</sup> <a name="accounting" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration.property.accounting"></a>

```typescript
public readonly accounting: PcsClusterSlurmConfigurationAccounting;
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccounting">PcsClusterSlurmConfigurationAccounting</a>

The accounting configuration includes configurable settings for Slurm accounting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcs_cluster#accounting PcsCluster#accounting}

---

##### `authKey`<sup>Optional</sup> <a name="authKey" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration.property.authKey"></a>

```typescript
public readonly authKey: PcsClusterSlurmConfigurationAuthKey;
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKey">PcsClusterSlurmConfigurationAuthKey</a>

The shared Slurm key for authentication, also known as the cluster secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcs_cluster#auth_key PcsCluster#auth_key}

---

##### `cgroupCustomSettings`<sup>Optional</sup> <a name="cgroupCustomSettings" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration.property.cgroupCustomSettings"></a>

```typescript
public readonly cgroupCustomSettings: IResolvable | PcsClusterSlurmConfigurationCgroupCustomSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettings">PcsClusterSlurmConfigurationCgroupCustomSettings</a>[]

Additional cgroup-specific configuration that directly maps to cgroup.conf settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcs_cluster#cgroup_custom_settings PcsCluster#cgroup_custom_settings}

---

##### `jwtAuth`<sup>Optional</sup> <a name="jwtAuth" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration.property.jwtAuth"></a>

```typescript
public readonly jwtAuth: PcsClusterSlurmConfigurationJwtAuth;
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuth">PcsClusterSlurmConfigurationJwtAuth</a>

JWT authentication configuration for Slurm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcs_cluster#jwt_auth PcsCluster#jwt_auth}

---

##### `scaleDownIdleTimeInSeconds`<sup>Optional</sup> <a name="scaleDownIdleTimeInSeconds" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration.property.scaleDownIdleTimeInSeconds"></a>

```typescript
public readonly scaleDownIdleTimeInSeconds: number;
```

- *Type:* number

The time before an idle node is scaled down.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcs_cluster#scale_down_idle_time_in_seconds PcsCluster#scale_down_idle_time_in_seconds}

---

##### `slurmCustomSettings`<sup>Optional</sup> <a name="slurmCustomSettings" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration.property.slurmCustomSettings"></a>

```typescript
public readonly slurmCustomSettings: IResolvable | PcsClusterSlurmConfigurationSlurmCustomSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettings">PcsClusterSlurmConfigurationSlurmCustomSettings</a>[]

Additional Slurm-specific configuration that directly maps to Slurm settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcs_cluster#slurm_custom_settings PcsCluster#slurm_custom_settings}

---

##### `slurmdbdCustomSettings`<sup>Optional</sup> <a name="slurmdbdCustomSettings" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration.property.slurmdbdCustomSettings"></a>

```typescript
public readonly slurmdbdCustomSettings: IResolvable | PcsClusterSlurmConfigurationSlurmdbdCustomSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettings">PcsClusterSlurmConfigurationSlurmdbdCustomSettings</a>[]

Additional slurmdbd-specific configuration that directly maps to slurmdbd.conf settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcs_cluster#slurmdbd_custom_settings PcsCluster#slurmdbd_custom_settings}

---

##### `slurmRest`<sup>Optional</sup> <a name="slurmRest" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration.property.slurmRest"></a>

```typescript
public readonly slurmRest: PcsClusterSlurmConfigurationSlurmRest;
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRest">PcsClusterSlurmConfigurationSlurmRest</a>

The SlurmRest configuration includes configurable settings for Slurm Rest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcs_cluster#slurm_rest PcsCluster#slurm_rest}

---

### PcsClusterSlurmConfigurationAccounting <a name="PcsClusterSlurmConfigurationAccounting" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccounting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccounting.Initializer"></a>

```typescript
import { pcsCluster } from '@cdktn/provider-awscc'

const pcsClusterSlurmConfigurationAccounting: pcsCluster.PcsClusterSlurmConfigurationAccounting = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccounting.property.defaultPurgeTimeInDays">defaultPurgeTimeInDays</a></code> | <code>number</code> | The default value for all purge settings for `slurmdbd.conf`. For more information, see the [slurmdbd.conf documentation at SchedMD](https://slurm.schedmd.com/slurmdbd.conf.html). The default value is `-1`. A value of `-1` means there is no purge time and records persist as long as the cluster exists. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccounting.property.mode">mode</a></code> | <code>string</code> | The default value is `NONE`. A value of `STANDARD` means that Slurm accounting is enabled. |

---

##### `defaultPurgeTimeInDays`<sup>Optional</sup> <a name="defaultPurgeTimeInDays" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccounting.property.defaultPurgeTimeInDays"></a>

```typescript
public readonly defaultPurgeTimeInDays: number;
```

- *Type:* number

The default value for all purge settings for `slurmdbd.conf`. For more information, see the [slurmdbd.conf documentation at SchedMD](https://slurm.schedmd.com/slurmdbd.conf.html). The default value is `-1`. A value of `-1` means there is no purge time and records persist as long as the cluster exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcs_cluster#default_purge_time_in_days PcsCluster#default_purge_time_in_days}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccounting.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

The default value is `NONE`. A value of `STANDARD` means that Slurm accounting is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcs_cluster#mode PcsCluster#mode}

---

### PcsClusterSlurmConfigurationAuthKey <a name="PcsClusterSlurmConfigurationAuthKey" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKey.Initializer"></a>

```typescript
import { pcsCluster } from '@cdktn/provider-awscc'

const pcsClusterSlurmConfigurationAuthKey: pcsCluster.PcsClusterSlurmConfigurationAuthKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKey.property.secretArn">secretArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the the shared Slurm key. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKey.property.secretVersion">secretVersion</a></code> | <code>string</code> | The version of the shared Slurm key. |

---

##### `secretArn`<sup>Optional</sup> <a name="secretArn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKey.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the the shared Slurm key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcs_cluster#secret_arn PcsCluster#secret_arn}

---

##### `secretVersion`<sup>Optional</sup> <a name="secretVersion" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKey.property.secretVersion"></a>

```typescript
public readonly secretVersion: string;
```

- *Type:* string

The version of the shared Slurm key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcs_cluster#secret_version PcsCluster#secret_version}

---

### PcsClusterSlurmConfigurationCgroupCustomSettings <a name="PcsClusterSlurmConfigurationCgroupCustomSettings" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettings.Initializer"></a>

```typescript
import { pcsCluster } from '@cdktn/provider-awscc'

const pcsClusterSlurmConfigurationCgroupCustomSettings: pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettings.property.parameterName">parameterName</a></code> | <code>string</code> | The cgroup.conf parameter name. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettings.property.parameterValue">parameterValue</a></code> | <code>string</code> | The value for the cgroup.conf parameter. |

---

##### `parameterName`<sup>Optional</sup> <a name="parameterName" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettings.property.parameterName"></a>

```typescript
public readonly parameterName: string;
```

- *Type:* string

The cgroup.conf parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcs_cluster#parameter_name PcsCluster#parameter_name}

---

##### `parameterValue`<sup>Optional</sup> <a name="parameterValue" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettings.property.parameterValue"></a>

```typescript
public readonly parameterValue: string;
```

- *Type:* string

The value for the cgroup.conf parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcs_cluster#parameter_value PcsCluster#parameter_value}

---

### PcsClusterSlurmConfigurationJwtAuth <a name="PcsClusterSlurmConfigurationJwtAuth" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuth.Initializer"></a>

```typescript
import { pcsCluster } from '@cdktn/provider-awscc'

const pcsClusterSlurmConfigurationJwtAuth: pcsCluster.PcsClusterSlurmConfigurationJwtAuth = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuth.property.jwtKey">jwtKey</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKey">PcsClusterSlurmConfigurationJwtAuthJwtKey</a></code> | JWT key configuration. |

---

##### `jwtKey`<sup>Optional</sup> <a name="jwtKey" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuth.property.jwtKey"></a>

```typescript
public readonly jwtKey: PcsClusterSlurmConfigurationJwtAuthJwtKey;
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKey">PcsClusterSlurmConfigurationJwtAuthJwtKey</a>

JWT key configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcs_cluster#jwt_key PcsCluster#jwt_key}

---

### PcsClusterSlurmConfigurationJwtAuthJwtKey <a name="PcsClusterSlurmConfigurationJwtAuthJwtKey" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKey.Initializer"></a>

```typescript
import { pcsCluster } from '@cdktn/provider-awscc'

const pcsClusterSlurmConfigurationJwtAuthJwtKey: pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKey.property.secretArn">secretArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the JWT key secret. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKey.property.secretVersion">secretVersion</a></code> | <code>string</code> | The version of the JWT key secret. |

---

##### `secretArn`<sup>Optional</sup> <a name="secretArn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKey.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the JWT key secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcs_cluster#secret_arn PcsCluster#secret_arn}

---

##### `secretVersion`<sup>Optional</sup> <a name="secretVersion" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKey.property.secretVersion"></a>

```typescript
public readonly secretVersion: string;
```

- *Type:* string

The version of the JWT key secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcs_cluster#secret_version PcsCluster#secret_version}

---

### PcsClusterSlurmConfigurationSlurmCustomSettings <a name="PcsClusterSlurmConfigurationSlurmCustomSettings" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettings.Initializer"></a>

```typescript
import { pcsCluster } from '@cdktn/provider-awscc'

const pcsClusterSlurmConfigurationSlurmCustomSettings: pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettings.property.parameterName">parameterName</a></code> | <code>string</code> | AWS PCS supports configuration of the following Slurm parameters for clusters: Prolog, Epilog, and SelectTypeParameters. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettings.property.parameterValue">parameterValue</a></code> | <code>string</code> | The value for the configured Slurm setting. |

---

##### `parameterName`<sup>Optional</sup> <a name="parameterName" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettings.property.parameterName"></a>

```typescript
public readonly parameterName: string;
```

- *Type:* string

AWS PCS supports configuration of the following Slurm parameters for clusters: Prolog, Epilog, and SelectTypeParameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcs_cluster#parameter_name PcsCluster#parameter_name}

---

##### `parameterValue`<sup>Optional</sup> <a name="parameterValue" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettings.property.parameterValue"></a>

```typescript
public readonly parameterValue: string;
```

- *Type:* string

The value for the configured Slurm setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcs_cluster#parameter_value PcsCluster#parameter_value}

---

### PcsClusterSlurmConfigurationSlurmdbdCustomSettings <a name="PcsClusterSlurmConfigurationSlurmdbdCustomSettings" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettings.Initializer"></a>

```typescript
import { pcsCluster } from '@cdktn/provider-awscc'

const pcsClusterSlurmConfigurationSlurmdbdCustomSettings: pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettings.property.parameterName">parameterName</a></code> | <code>string</code> | The slurmdbd.conf parameter name. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettings.property.parameterValue">parameterValue</a></code> | <code>string</code> | The value for the slurmdbd.conf parameter. |

---

##### `parameterName`<sup>Optional</sup> <a name="parameterName" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettings.property.parameterName"></a>

```typescript
public readonly parameterName: string;
```

- *Type:* string

The slurmdbd.conf parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcs_cluster#parameter_name PcsCluster#parameter_name}

---

##### `parameterValue`<sup>Optional</sup> <a name="parameterValue" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettings.property.parameterValue"></a>

```typescript
public readonly parameterValue: string;
```

- *Type:* string

The value for the slurmdbd.conf parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcs_cluster#parameter_value PcsCluster#parameter_value}

---

### PcsClusterSlurmConfigurationSlurmRest <a name="PcsClusterSlurmConfigurationSlurmRest" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRest"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRest.Initializer"></a>

```typescript
import { pcsCluster } from '@cdktn/provider-awscc'

const pcsClusterSlurmConfigurationSlurmRest: pcsCluster.PcsClusterSlurmConfigurationSlurmRest = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRest.property.mode">mode</a></code> | <code>string</code> | The default value is `NONE`. A value of `STANDARD` means that Slurm Rest is enabled. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRest.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

The default value is `NONE`. A value of `STANDARD` means that Slurm Rest is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcs_cluster#mode PcsCluster#mode}

---

## Classes <a name="Classes" id="Classes"></a>

### PcsClusterEndpointsList <a name="PcsClusterEndpointsList" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.Initializer"></a>

```typescript
import { pcsCluster } from '@cdktn/provider-awscc'

new pcsCluster.PcsClusterEndpointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.get"></a>

```typescript
public get(index: number): PcsClusterEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### PcsClusterEndpointsOutputReference <a name="PcsClusterEndpointsOutputReference" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.Initializer"></a>

```typescript
import { pcsCluster } from '@cdktn/provider-awscc'

new pcsCluster.PcsClusterEndpointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.property.ipv6Address">ipv6Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.property.port">port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.property.privateIpAddress">privateIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.property.publicIpAddress">publicIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpoints">PcsClusterEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipv6Address`<sup>Required</sup> <a name="ipv6Address" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.property.ipv6Address"></a>

```typescript
public readonly ipv6Address: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.property.privateIpAddress"></a>

```typescript
public readonly privateIpAddress: string;
```

- *Type:* string

---

##### `publicIpAddress`<sup>Required</sup> <a name="publicIpAddress" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.property.publicIpAddress"></a>

```typescript
public readonly publicIpAddress: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PcsClusterEndpoints;
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpoints">PcsClusterEndpoints</a>

---


### PcsClusterErrorInfoList <a name="PcsClusterErrorInfoList" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.Initializer"></a>

```typescript
import { pcsCluster } from '@cdktn/provider-awscc'

new pcsCluster.PcsClusterErrorInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.get"></a>

```typescript
public get(index: number): PcsClusterErrorInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### PcsClusterErrorInfoOutputReference <a name="PcsClusterErrorInfoOutputReference" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.Initializer"></a>

```typescript
import { pcsCluster } from '@cdktn/provider-awscc'

new pcsCluster.PcsClusterErrorInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.property.code">code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfo">PcsClusterErrorInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.property.code"></a>

```typescript
public readonly code: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PcsClusterErrorInfo;
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfo">PcsClusterErrorInfo</a>

---


### PcsClusterNetworkingOutputReference <a name="PcsClusterNetworkingOutputReference" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.Initializer"></a>

```typescript
import { pcsCluster } from '@cdktn/provider-awscc'

new pcsCluster.PcsClusterNetworkingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.resetNetworkType">resetNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNetworkType` <a name="resetNetworkType" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.resetNetworkType"></a>

```typescript
public resetNetworkType(): void
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.resetSecurityGroupIds"></a>

```typescript
public resetSecurityGroupIds(): void
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.resetSubnetIds"></a>

```typescript
public resetSubnetIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.property.networkTypeInput">networkTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.property.networkType">networkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworking">PcsClusterNetworking</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `networkTypeInput`<sup>Optional</sup> <a name="networkTypeInput" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.property.networkTypeInput"></a>

```typescript
public readonly networkTypeInput: string;
```

- *Type:* string

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.property.networkType"></a>

```typescript
public readonly networkType: string;
```

- *Type:* string

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PcsClusterNetworking;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworking">PcsClusterNetworking</a>

---


### PcsClusterSchedulerOutputReference <a name="PcsClusterSchedulerOutputReference" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.Initializer"></a>

```typescript
import { pcsCluster } from '@cdktn/provider-awscc'

new pcsCluster.PcsClusterSchedulerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterScheduler">PcsClusterScheduler</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PcsClusterScheduler;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterScheduler">PcsClusterScheduler</a>

---


### PcsClusterSlurmConfigurationAccountingOutputReference <a name="PcsClusterSlurmConfigurationAccountingOutputReference" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.Initializer"></a>

```typescript
import { pcsCluster } from '@cdktn/provider-awscc'

new pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.resetDefaultPurgeTimeInDays">resetDefaultPurgeTimeInDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.resetMode">resetMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefaultPurgeTimeInDays` <a name="resetDefaultPurgeTimeInDays" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.resetDefaultPurgeTimeInDays"></a>

```typescript
public resetDefaultPurgeTimeInDays(): void
```

##### `resetMode` <a name="resetMode" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.property.defaultPurgeTimeInDaysInput">defaultPurgeTimeInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.property.defaultPurgeTimeInDays">defaultPurgeTimeInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccounting">PcsClusterSlurmConfigurationAccounting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultPurgeTimeInDaysInput`<sup>Optional</sup> <a name="defaultPurgeTimeInDaysInput" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.property.defaultPurgeTimeInDaysInput"></a>

```typescript
public readonly defaultPurgeTimeInDaysInput: number;
```

- *Type:* number

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `defaultPurgeTimeInDays`<sup>Required</sup> <a name="defaultPurgeTimeInDays" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.property.defaultPurgeTimeInDays"></a>

```typescript
public readonly defaultPurgeTimeInDays: number;
```

- *Type:* number

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PcsClusterSlurmConfigurationAccounting;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccounting">PcsClusterSlurmConfigurationAccounting</a>

---


### PcsClusterSlurmConfigurationAuthKeyOutputReference <a name="PcsClusterSlurmConfigurationAuthKeyOutputReference" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.Initializer"></a>

```typescript
import { pcsCluster } from '@cdktn/provider-awscc'

new pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.resetSecretArn">resetSecretArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.resetSecretVersion">resetSecretVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecretArn` <a name="resetSecretArn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.resetSecretArn"></a>

```typescript
public resetSecretArn(): void
```

##### `resetSecretVersion` <a name="resetSecretVersion" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.resetSecretVersion"></a>

```typescript
public resetSecretVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.property.secretArnInput">secretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.property.secretVersionInput">secretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.property.secretVersion">secretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKey">PcsClusterSlurmConfigurationAuthKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretArnInput`<sup>Optional</sup> <a name="secretArnInput" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.property.secretArnInput"></a>

```typescript
public readonly secretArnInput: string;
```

- *Type:* string

---

##### `secretVersionInput`<sup>Optional</sup> <a name="secretVersionInput" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.property.secretVersionInput"></a>

```typescript
public readonly secretVersionInput: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `secretVersion`<sup>Required</sup> <a name="secretVersion" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.property.secretVersion"></a>

```typescript
public readonly secretVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PcsClusterSlurmConfigurationAuthKey;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKey">PcsClusterSlurmConfigurationAuthKey</a>

---


### PcsClusterSlurmConfigurationCgroupCustomSettingsList <a name="PcsClusterSlurmConfigurationCgroupCustomSettingsList" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.Initializer"></a>

```typescript
import { pcsCluster } from '@cdktn/provider-awscc'

new pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.get"></a>

```typescript
public get(index: number): PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettings">PcsClusterSlurmConfigurationCgroupCustomSettings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PcsClusterSlurmConfigurationCgroupCustomSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettings">PcsClusterSlurmConfigurationCgroupCustomSettings</a>[]

---


### PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference <a name="PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.Initializer"></a>

```typescript
import { pcsCluster } from '@cdktn/provider-awscc'

new pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.resetParameterName">resetParameterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.resetParameterValue">resetParameterValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParameterName` <a name="resetParameterName" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.resetParameterName"></a>

```typescript
public resetParameterName(): void
```

##### `resetParameterValue` <a name="resetParameterValue" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.resetParameterValue"></a>

```typescript
public resetParameterValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.property.parameterNameInput">parameterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.property.parameterValueInput">parameterValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.property.parameterName">parameterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.property.parameterValue">parameterValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettings">PcsClusterSlurmConfigurationCgroupCustomSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parameterNameInput`<sup>Optional</sup> <a name="parameterNameInput" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.property.parameterNameInput"></a>

```typescript
public readonly parameterNameInput: string;
```

- *Type:* string

---

##### `parameterValueInput`<sup>Optional</sup> <a name="parameterValueInput" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.property.parameterValueInput"></a>

```typescript
public readonly parameterValueInput: string;
```

- *Type:* string

---

##### `parameterName`<sup>Required</sup> <a name="parameterName" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.property.parameterName"></a>

```typescript
public readonly parameterName: string;
```

- *Type:* string

---

##### `parameterValue`<sup>Required</sup> <a name="parameterValue" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.property.parameterValue"></a>

```typescript
public readonly parameterValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PcsClusterSlurmConfigurationCgroupCustomSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettings">PcsClusterSlurmConfigurationCgroupCustomSettings</a>

---


### PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference <a name="PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.Initializer"></a>

```typescript
import { pcsCluster } from '@cdktn/provider-awscc'

new pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.resetSecretArn">resetSecretArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.resetSecretVersion">resetSecretVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecretArn` <a name="resetSecretArn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.resetSecretArn"></a>

```typescript
public resetSecretArn(): void
```

##### `resetSecretVersion` <a name="resetSecretVersion" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.resetSecretVersion"></a>

```typescript
public resetSecretVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.property.secretArnInput">secretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.property.secretVersionInput">secretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.property.secretVersion">secretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKey">PcsClusterSlurmConfigurationJwtAuthJwtKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretArnInput`<sup>Optional</sup> <a name="secretArnInput" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.property.secretArnInput"></a>

```typescript
public readonly secretArnInput: string;
```

- *Type:* string

---

##### `secretVersionInput`<sup>Optional</sup> <a name="secretVersionInput" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.property.secretVersionInput"></a>

```typescript
public readonly secretVersionInput: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `secretVersion`<sup>Required</sup> <a name="secretVersion" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.property.secretVersion"></a>

```typescript
public readonly secretVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PcsClusterSlurmConfigurationJwtAuthJwtKey;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKey">PcsClusterSlurmConfigurationJwtAuthJwtKey</a>

---


### PcsClusterSlurmConfigurationJwtAuthOutputReference <a name="PcsClusterSlurmConfigurationJwtAuthOutputReference" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.Initializer"></a>

```typescript
import { pcsCluster } from '@cdktn/provider-awscc'

new pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.putJwtKey">putJwtKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.resetJwtKey">resetJwtKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putJwtKey` <a name="putJwtKey" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.putJwtKey"></a>

```typescript
public putJwtKey(value: PcsClusterSlurmConfigurationJwtAuthJwtKey): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.putJwtKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKey">PcsClusterSlurmConfigurationJwtAuthJwtKey</a>

---

##### `resetJwtKey` <a name="resetJwtKey" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.resetJwtKey"></a>

```typescript
public resetJwtKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.property.jwtKey">jwtKey</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference">PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.property.jwtKeyInput">jwtKeyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKey">PcsClusterSlurmConfigurationJwtAuthJwtKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuth">PcsClusterSlurmConfigurationJwtAuth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `jwtKey`<sup>Required</sup> <a name="jwtKey" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.property.jwtKey"></a>

```typescript
public readonly jwtKey: PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference">PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference</a>

---

##### `jwtKeyInput`<sup>Optional</sup> <a name="jwtKeyInput" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.property.jwtKeyInput"></a>

```typescript
public readonly jwtKeyInput: IResolvable | PcsClusterSlurmConfigurationJwtAuthJwtKey;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKey">PcsClusterSlurmConfigurationJwtAuthJwtKey</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PcsClusterSlurmConfigurationJwtAuth;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuth">PcsClusterSlurmConfigurationJwtAuth</a>

---


### PcsClusterSlurmConfigurationOutputReference <a name="PcsClusterSlurmConfigurationOutputReference" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.Initializer"></a>

```typescript
import { pcsCluster } from '@cdktn/provider-awscc'

new pcsCluster.PcsClusterSlurmConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.putAccounting">putAccounting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.putAuthKey">putAuthKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.putCgroupCustomSettings">putCgroupCustomSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.putJwtAuth">putJwtAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.putSlurmCustomSettings">putSlurmCustomSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.putSlurmdbdCustomSettings">putSlurmdbdCustomSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.putSlurmRest">putSlurmRest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.resetAccounting">resetAccounting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.resetAuthKey">resetAuthKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.resetCgroupCustomSettings">resetCgroupCustomSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.resetJwtAuth">resetJwtAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.resetScaleDownIdleTimeInSeconds">resetScaleDownIdleTimeInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.resetSlurmCustomSettings">resetSlurmCustomSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.resetSlurmdbdCustomSettings">resetSlurmdbdCustomSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.resetSlurmRest">resetSlurmRest</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAccounting` <a name="putAccounting" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.putAccounting"></a>

```typescript
public putAccounting(value: PcsClusterSlurmConfigurationAccounting): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.putAccounting.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccounting">PcsClusterSlurmConfigurationAccounting</a>

---

##### `putAuthKey` <a name="putAuthKey" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.putAuthKey"></a>

```typescript
public putAuthKey(value: PcsClusterSlurmConfigurationAuthKey): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.putAuthKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKey">PcsClusterSlurmConfigurationAuthKey</a>

---

##### `putCgroupCustomSettings` <a name="putCgroupCustomSettings" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.putCgroupCustomSettings"></a>

```typescript
public putCgroupCustomSettings(value: IResolvable | PcsClusterSlurmConfigurationCgroupCustomSettings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.putCgroupCustomSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettings">PcsClusterSlurmConfigurationCgroupCustomSettings</a>[]

---

##### `putJwtAuth` <a name="putJwtAuth" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.putJwtAuth"></a>

```typescript
public putJwtAuth(value: PcsClusterSlurmConfigurationJwtAuth): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.putJwtAuth.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuth">PcsClusterSlurmConfigurationJwtAuth</a>

---

##### `putSlurmCustomSettings` <a name="putSlurmCustomSettings" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.putSlurmCustomSettings"></a>

```typescript
public putSlurmCustomSettings(value: IResolvable | PcsClusterSlurmConfigurationSlurmCustomSettings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.putSlurmCustomSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettings">PcsClusterSlurmConfigurationSlurmCustomSettings</a>[]

---

##### `putSlurmdbdCustomSettings` <a name="putSlurmdbdCustomSettings" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.putSlurmdbdCustomSettings"></a>

```typescript
public putSlurmdbdCustomSettings(value: IResolvable | PcsClusterSlurmConfigurationSlurmdbdCustomSettings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.putSlurmdbdCustomSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettings">PcsClusterSlurmConfigurationSlurmdbdCustomSettings</a>[]

---

##### `putSlurmRest` <a name="putSlurmRest" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.putSlurmRest"></a>

```typescript
public putSlurmRest(value: PcsClusterSlurmConfigurationSlurmRest): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.putSlurmRest.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRest">PcsClusterSlurmConfigurationSlurmRest</a>

---

##### `resetAccounting` <a name="resetAccounting" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.resetAccounting"></a>

```typescript
public resetAccounting(): void
```

##### `resetAuthKey` <a name="resetAuthKey" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.resetAuthKey"></a>

```typescript
public resetAuthKey(): void
```

##### `resetCgroupCustomSettings` <a name="resetCgroupCustomSettings" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.resetCgroupCustomSettings"></a>

```typescript
public resetCgroupCustomSettings(): void
```

##### `resetJwtAuth` <a name="resetJwtAuth" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.resetJwtAuth"></a>

```typescript
public resetJwtAuth(): void
```

##### `resetScaleDownIdleTimeInSeconds` <a name="resetScaleDownIdleTimeInSeconds" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.resetScaleDownIdleTimeInSeconds"></a>

```typescript
public resetScaleDownIdleTimeInSeconds(): void
```

##### `resetSlurmCustomSettings` <a name="resetSlurmCustomSettings" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.resetSlurmCustomSettings"></a>

```typescript
public resetSlurmCustomSettings(): void
```

##### `resetSlurmdbdCustomSettings` <a name="resetSlurmdbdCustomSettings" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.resetSlurmdbdCustomSettings"></a>

```typescript
public resetSlurmdbdCustomSettings(): void
```

##### `resetSlurmRest` <a name="resetSlurmRest" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.resetSlurmRest"></a>

```typescript
public resetSlurmRest(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.accounting">accounting</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference">PcsClusterSlurmConfigurationAccountingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.authKey">authKey</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference">PcsClusterSlurmConfigurationAuthKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.cgroupCustomSettings">cgroupCustomSettings</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList">PcsClusterSlurmConfigurationCgroupCustomSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.jwtAuth">jwtAuth</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference">PcsClusterSlurmConfigurationJwtAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.slurmCustomSettings">slurmCustomSettings</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList">PcsClusterSlurmConfigurationSlurmCustomSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.slurmdbdCustomSettings">slurmdbdCustomSettings</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList">PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.slurmRest">slurmRest</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference">PcsClusterSlurmConfigurationSlurmRestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.accountingInput">accountingInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccounting">PcsClusterSlurmConfigurationAccounting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.authKeyInput">authKeyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKey">PcsClusterSlurmConfigurationAuthKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.cgroupCustomSettingsInput">cgroupCustomSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettings">PcsClusterSlurmConfigurationCgroupCustomSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.jwtAuthInput">jwtAuthInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuth">PcsClusterSlurmConfigurationJwtAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.scaleDownIdleTimeInSecondsInput">scaleDownIdleTimeInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.slurmCustomSettingsInput">slurmCustomSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettings">PcsClusterSlurmConfigurationSlurmCustomSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.slurmdbdCustomSettingsInput">slurmdbdCustomSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettings">PcsClusterSlurmConfigurationSlurmdbdCustomSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.slurmRestInput">slurmRestInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRest">PcsClusterSlurmConfigurationSlurmRest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.scaleDownIdleTimeInSeconds">scaleDownIdleTimeInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration">PcsClusterSlurmConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accounting`<sup>Required</sup> <a name="accounting" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.accounting"></a>

```typescript
public readonly accounting: PcsClusterSlurmConfigurationAccountingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference">PcsClusterSlurmConfigurationAccountingOutputReference</a>

---

##### `authKey`<sup>Required</sup> <a name="authKey" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.authKey"></a>

```typescript
public readonly authKey: PcsClusterSlurmConfigurationAuthKeyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference">PcsClusterSlurmConfigurationAuthKeyOutputReference</a>

---

##### `cgroupCustomSettings`<sup>Required</sup> <a name="cgroupCustomSettings" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.cgroupCustomSettings"></a>

```typescript
public readonly cgroupCustomSettings: PcsClusterSlurmConfigurationCgroupCustomSettingsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList">PcsClusterSlurmConfigurationCgroupCustomSettingsList</a>

---

##### `jwtAuth`<sup>Required</sup> <a name="jwtAuth" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.jwtAuth"></a>

```typescript
public readonly jwtAuth: PcsClusterSlurmConfigurationJwtAuthOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference">PcsClusterSlurmConfigurationJwtAuthOutputReference</a>

---

##### `slurmCustomSettings`<sup>Required</sup> <a name="slurmCustomSettings" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.slurmCustomSettings"></a>

```typescript
public readonly slurmCustomSettings: PcsClusterSlurmConfigurationSlurmCustomSettingsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList">PcsClusterSlurmConfigurationSlurmCustomSettingsList</a>

---

##### `slurmdbdCustomSettings`<sup>Required</sup> <a name="slurmdbdCustomSettings" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.slurmdbdCustomSettings"></a>

```typescript
public readonly slurmdbdCustomSettings: PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList">PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList</a>

---

##### `slurmRest`<sup>Required</sup> <a name="slurmRest" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.slurmRest"></a>

```typescript
public readonly slurmRest: PcsClusterSlurmConfigurationSlurmRestOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference">PcsClusterSlurmConfigurationSlurmRestOutputReference</a>

---

##### `accountingInput`<sup>Optional</sup> <a name="accountingInput" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.accountingInput"></a>

```typescript
public readonly accountingInput: IResolvable | PcsClusterSlurmConfigurationAccounting;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccounting">PcsClusterSlurmConfigurationAccounting</a>

---

##### `authKeyInput`<sup>Optional</sup> <a name="authKeyInput" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.authKeyInput"></a>

```typescript
public readonly authKeyInput: IResolvable | PcsClusterSlurmConfigurationAuthKey;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKey">PcsClusterSlurmConfigurationAuthKey</a>

---

##### `cgroupCustomSettingsInput`<sup>Optional</sup> <a name="cgroupCustomSettingsInput" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.cgroupCustomSettingsInput"></a>

```typescript
public readonly cgroupCustomSettingsInput: IResolvable | PcsClusterSlurmConfigurationCgroupCustomSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettings">PcsClusterSlurmConfigurationCgroupCustomSettings</a>[]

---

##### `jwtAuthInput`<sup>Optional</sup> <a name="jwtAuthInput" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.jwtAuthInput"></a>

```typescript
public readonly jwtAuthInput: IResolvable | PcsClusterSlurmConfigurationJwtAuth;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuth">PcsClusterSlurmConfigurationJwtAuth</a>

---

##### `scaleDownIdleTimeInSecondsInput`<sup>Optional</sup> <a name="scaleDownIdleTimeInSecondsInput" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.scaleDownIdleTimeInSecondsInput"></a>

```typescript
public readonly scaleDownIdleTimeInSecondsInput: number;
```

- *Type:* number

---

##### `slurmCustomSettingsInput`<sup>Optional</sup> <a name="slurmCustomSettingsInput" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.slurmCustomSettingsInput"></a>

```typescript
public readonly slurmCustomSettingsInput: IResolvable | PcsClusterSlurmConfigurationSlurmCustomSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettings">PcsClusterSlurmConfigurationSlurmCustomSettings</a>[]

---

##### `slurmdbdCustomSettingsInput`<sup>Optional</sup> <a name="slurmdbdCustomSettingsInput" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.slurmdbdCustomSettingsInput"></a>

```typescript
public readonly slurmdbdCustomSettingsInput: IResolvable | PcsClusterSlurmConfigurationSlurmdbdCustomSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettings">PcsClusterSlurmConfigurationSlurmdbdCustomSettings</a>[]

---

##### `slurmRestInput`<sup>Optional</sup> <a name="slurmRestInput" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.slurmRestInput"></a>

```typescript
public readonly slurmRestInput: IResolvable | PcsClusterSlurmConfigurationSlurmRest;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRest">PcsClusterSlurmConfigurationSlurmRest</a>

---

##### `scaleDownIdleTimeInSeconds`<sup>Required</sup> <a name="scaleDownIdleTimeInSeconds" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.scaleDownIdleTimeInSeconds"></a>

```typescript
public readonly scaleDownIdleTimeInSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PcsClusterSlurmConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration">PcsClusterSlurmConfiguration</a>

---


### PcsClusterSlurmConfigurationSlurmCustomSettingsList <a name="PcsClusterSlurmConfigurationSlurmCustomSettingsList" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.Initializer"></a>

```typescript
import { pcsCluster } from '@cdktn/provider-awscc'

new pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.get"></a>

```typescript
public get(index: number): PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettings">PcsClusterSlurmConfigurationSlurmCustomSettings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PcsClusterSlurmConfigurationSlurmCustomSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettings">PcsClusterSlurmConfigurationSlurmCustomSettings</a>[]

---


### PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference <a name="PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer"></a>

```typescript
import { pcsCluster } from '@cdktn/provider-awscc'

new pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.resetParameterName">resetParameterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.resetParameterValue">resetParameterValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParameterName` <a name="resetParameterName" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.resetParameterName"></a>

```typescript
public resetParameterName(): void
```

##### `resetParameterValue` <a name="resetParameterValue" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.resetParameterValue"></a>

```typescript
public resetParameterValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.property.parameterNameInput">parameterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.property.parameterValueInput">parameterValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.property.parameterName">parameterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.property.parameterValue">parameterValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettings">PcsClusterSlurmConfigurationSlurmCustomSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parameterNameInput`<sup>Optional</sup> <a name="parameterNameInput" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.property.parameterNameInput"></a>

```typescript
public readonly parameterNameInput: string;
```

- *Type:* string

---

##### `parameterValueInput`<sup>Optional</sup> <a name="parameterValueInput" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.property.parameterValueInput"></a>

```typescript
public readonly parameterValueInput: string;
```

- *Type:* string

---

##### `parameterName`<sup>Required</sup> <a name="parameterName" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.property.parameterName"></a>

```typescript
public readonly parameterName: string;
```

- *Type:* string

---

##### `parameterValue`<sup>Required</sup> <a name="parameterValue" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.property.parameterValue"></a>

```typescript
public readonly parameterValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PcsClusterSlurmConfigurationSlurmCustomSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettings">PcsClusterSlurmConfigurationSlurmCustomSettings</a>

---


### PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList <a name="PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.Initializer"></a>

```typescript
import { pcsCluster } from '@cdktn/provider-awscc'

new pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.get"></a>

```typescript
public get(index: number): PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettings">PcsClusterSlurmConfigurationSlurmdbdCustomSettings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PcsClusterSlurmConfigurationSlurmdbdCustomSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettings">PcsClusterSlurmConfigurationSlurmdbdCustomSettings</a>[]

---


### PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference <a name="PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.Initializer"></a>

```typescript
import { pcsCluster } from '@cdktn/provider-awscc'

new pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.resetParameterName">resetParameterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.resetParameterValue">resetParameterValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParameterName` <a name="resetParameterName" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.resetParameterName"></a>

```typescript
public resetParameterName(): void
```

##### `resetParameterValue` <a name="resetParameterValue" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.resetParameterValue"></a>

```typescript
public resetParameterValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.property.parameterNameInput">parameterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.property.parameterValueInput">parameterValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.property.parameterName">parameterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.property.parameterValue">parameterValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettings">PcsClusterSlurmConfigurationSlurmdbdCustomSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parameterNameInput`<sup>Optional</sup> <a name="parameterNameInput" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.property.parameterNameInput"></a>

```typescript
public readonly parameterNameInput: string;
```

- *Type:* string

---

##### `parameterValueInput`<sup>Optional</sup> <a name="parameterValueInput" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.property.parameterValueInput"></a>

```typescript
public readonly parameterValueInput: string;
```

- *Type:* string

---

##### `parameterName`<sup>Required</sup> <a name="parameterName" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.property.parameterName"></a>

```typescript
public readonly parameterName: string;
```

- *Type:* string

---

##### `parameterValue`<sup>Required</sup> <a name="parameterValue" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.property.parameterValue"></a>

```typescript
public readonly parameterValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PcsClusterSlurmConfigurationSlurmdbdCustomSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettings">PcsClusterSlurmConfigurationSlurmdbdCustomSettings</a>

---


### PcsClusterSlurmConfigurationSlurmRestOutputReference <a name="PcsClusterSlurmConfigurationSlurmRestOutputReference" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.Initializer"></a>

```typescript
import { pcsCluster } from '@cdktn/provider-awscc'

new pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.resetMode">resetMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMode` <a name="resetMode" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRest">PcsClusterSlurmConfigurationSlurmRest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PcsClusterSlurmConfigurationSlurmRest;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRest">PcsClusterSlurmConfigurationSlurmRest</a>

---



