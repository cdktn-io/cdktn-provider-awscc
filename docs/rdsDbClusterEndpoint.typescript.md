# `rdsDbClusterEndpoint` Submodule <a name="`rdsDbClusterEndpoint` Submodule" id="@cdktn/provider-awscc.rdsDbClusterEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsDbClusterEndpointA <a name="RdsDbClusterEndpointA" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint awscc_rds_db_cluster_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer"></a>

```typescript
import { rdsDbClusterEndpoint } from '@cdktn/provider-awscc'

new rdsDbClusterEndpoint.RdsDbClusterEndpointA(scope: Construct, id: string, config: RdsDbClusterEndpointAConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig">RdsDbClusterEndpointAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig">RdsDbClusterEndpointAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.resetExcludedMembers">resetExcludedMembers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.resetStaticMembers">resetStaticMembers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.putTags"></a>

```typescript
public putTags(value: IResolvable | RdsDbClusterEndpointTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags">RdsDbClusterEndpointTags</a>[]

---

##### `resetExcludedMembers` <a name="resetExcludedMembers" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.resetExcludedMembers"></a>

```typescript
public resetExcludedMembers(): void
```

##### `resetStaticMembers` <a name="resetStaticMembers" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.resetStaticMembers"></a>

```typescript
public resetStaticMembers(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RdsDbClusterEndpointA resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.isConstruct"></a>

```typescript
import { rdsDbClusterEndpoint } from '@cdktn/provider-awscc'

rdsDbClusterEndpoint.RdsDbClusterEndpointA.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.isTerraformElement"></a>

```typescript
import { rdsDbClusterEndpoint } from '@cdktn/provider-awscc'

rdsDbClusterEndpoint.RdsDbClusterEndpointA.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.isTerraformResource"></a>

```typescript
import { rdsDbClusterEndpoint } from '@cdktn/provider-awscc'

rdsDbClusterEndpoint.RdsDbClusterEndpointA.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.generateConfigForImport"></a>

```typescript
import { rdsDbClusterEndpoint } from '@cdktn/provider-awscc'

rdsDbClusterEndpoint.RdsDbClusterEndpointA.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a RdsDbClusterEndpointA resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RdsDbClusterEndpointA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RdsDbClusterEndpointA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RdsDbClusterEndpointA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dbClusterEndpointArn">dbClusterEndpointArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dbClusterEndpointResourceIdentifier">dbClusterEndpointResourceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.endpointType">endpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList">RdsDbClusterEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.customEndpointTypeInput">customEndpointTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dbClusterEndpointIdentifierInput">dbClusterEndpointIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dbClusterIdentifierInput">dbClusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.excludedMembersInput">excludedMembersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.staticMembersInput">staticMembersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags">RdsDbClusterEndpointTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.customEndpointType">customEndpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dbClusterEndpointIdentifier">dbClusterEndpointIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dbClusterIdentifier">dbClusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.excludedMembers">excludedMembers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.staticMembers">staticMembers</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dbClusterEndpointArn`<sup>Required</sup> <a name="dbClusterEndpointArn" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dbClusterEndpointArn"></a>

```typescript
public readonly dbClusterEndpointArn: string;
```

- *Type:* string

---

##### `dbClusterEndpointResourceIdentifier`<sup>Required</sup> <a name="dbClusterEndpointResourceIdentifier" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dbClusterEndpointResourceIdentifier"></a>

```typescript
public readonly dbClusterEndpointResourceIdentifier: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.endpointType"></a>

```typescript
public readonly endpointType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.tags"></a>

```typescript
public readonly tags: RdsDbClusterEndpointTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList">RdsDbClusterEndpointTagsList</a>

---

##### `customEndpointTypeInput`<sup>Optional</sup> <a name="customEndpointTypeInput" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.customEndpointTypeInput"></a>

```typescript
public readonly customEndpointTypeInput: string;
```

- *Type:* string

---

##### `dbClusterEndpointIdentifierInput`<sup>Optional</sup> <a name="dbClusterEndpointIdentifierInput" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dbClusterEndpointIdentifierInput"></a>

```typescript
public readonly dbClusterEndpointIdentifierInput: string;
```

- *Type:* string

---

##### `dbClusterIdentifierInput`<sup>Optional</sup> <a name="dbClusterIdentifierInput" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dbClusterIdentifierInput"></a>

```typescript
public readonly dbClusterIdentifierInput: string;
```

- *Type:* string

---

##### `excludedMembersInput`<sup>Optional</sup> <a name="excludedMembersInput" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.excludedMembersInput"></a>

```typescript
public readonly excludedMembersInput: string[];
```

- *Type:* string[]

---

##### `staticMembersInput`<sup>Optional</sup> <a name="staticMembersInput" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.staticMembersInput"></a>

```typescript
public readonly staticMembersInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | RdsDbClusterEndpointTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags">RdsDbClusterEndpointTags</a>[]

---

##### `customEndpointType`<sup>Required</sup> <a name="customEndpointType" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.customEndpointType"></a>

```typescript
public readonly customEndpointType: string;
```

- *Type:* string

---

##### `dbClusterEndpointIdentifier`<sup>Required</sup> <a name="dbClusterEndpointIdentifier" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dbClusterEndpointIdentifier"></a>

```typescript
public readonly dbClusterEndpointIdentifier: string;
```

- *Type:* string

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="dbClusterIdentifier" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dbClusterIdentifier"></a>

```typescript
public readonly dbClusterIdentifier: string;
```

- *Type:* string

---

##### `excludedMembers`<sup>Required</sup> <a name="excludedMembers" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.excludedMembers"></a>

```typescript
public readonly excludedMembers: string[];
```

- *Type:* string[]

---

##### `staticMembers`<sup>Required</sup> <a name="staticMembers" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.staticMembers"></a>

```typescript
public readonly staticMembers: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RdsDbClusterEndpointAConfig <a name="RdsDbClusterEndpointAConfig" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.Initializer"></a>

```typescript
import { rdsDbClusterEndpoint } from '@cdktn/provider-awscc'

const rdsDbClusterEndpointAConfig: rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.customEndpointType">customEndpointType</a></code> | <code>string</code> | The type of the custom endpoint. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.dbClusterEndpointIdentifier">dbClusterEndpointIdentifier</a></code> | <code>string</code> | The identifier to use for the new endpoint. This parameter is stored as a lowercase string. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.dbClusterIdentifier">dbClusterIdentifier</a></code> | <code>string</code> | The DB cluster identifier of the DB cluster associated with the endpoint. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.excludedMembers">excludedMembers</a></code> | <code>string[]</code> | List of DB instance identifiers that aren't part of the custom endpoint group. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.staticMembers">staticMembers</a></code> | <code>string[]</code> | List of DB instance identifiers that are part of the custom endpoint group. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags">RdsDbClusterEndpointTags</a>[]</code> | The tags to be assigned to the DB cluster endpoint. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `customEndpointType`<sup>Required</sup> <a name="customEndpointType" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.customEndpointType"></a>

```typescript
public readonly customEndpointType: string;
```

- *Type:* string

The type of the custom endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint#custom_endpoint_type RdsDbClusterEndpointA#custom_endpoint_type}

---

##### `dbClusterEndpointIdentifier`<sup>Required</sup> <a name="dbClusterEndpointIdentifier" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.dbClusterEndpointIdentifier"></a>

```typescript
public readonly dbClusterEndpointIdentifier: string;
```

- *Type:* string

The identifier to use for the new endpoint. This parameter is stored as a lowercase string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint#db_cluster_endpoint_identifier RdsDbClusterEndpointA#db_cluster_endpoint_identifier}

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="dbClusterIdentifier" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.dbClusterIdentifier"></a>

```typescript
public readonly dbClusterIdentifier: string;
```

- *Type:* string

The DB cluster identifier of the DB cluster associated with the endpoint.

This parameter is stored as a lowercase string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint#db_cluster_identifier RdsDbClusterEndpointA#db_cluster_identifier}

---

##### `excludedMembers`<sup>Optional</sup> <a name="excludedMembers" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.excludedMembers"></a>

```typescript
public readonly excludedMembers: string[];
```

- *Type:* string[]

List of DB instance identifiers that aren't part of the custom endpoint group.

All other eligible instances are reachable through the custom endpoint. Only relevant if the list of static members is empty. Once either member list is set, it can be changed or replaced by the other list, but both lists cannot be removed in place; removing them requires replacing the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint#excluded_members RdsDbClusterEndpointA#excluded_members}

---

##### `staticMembers`<sup>Optional</sup> <a name="staticMembers" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.staticMembers"></a>

```typescript
public readonly staticMembers: string[];
```

- *Type:* string[]

List of DB instance identifiers that are part of the custom endpoint group.

Once either member list is set, it can be changed or replaced by the other list, but both lists cannot be removed in place; removing them requires replacing the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint#static_members RdsDbClusterEndpointA#static_members}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | RdsDbClusterEndpointTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags">RdsDbClusterEndpointTags</a>[]

The tags to be assigned to the DB cluster endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint#tags RdsDbClusterEndpointA#tags}

---

### RdsDbClusterEndpointTags <a name="RdsDbClusterEndpointTags" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags.Initializer"></a>

```typescript
import { rdsDbClusterEndpoint } from '@cdktn/provider-awscc'

const rdsDbClusterEndpointTags: rdsDbClusterEndpoint.RdsDbClusterEndpointTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint#key RdsDbClusterEndpointA#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint#value RdsDbClusterEndpointA#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RdsDbClusterEndpointTagsList <a name="RdsDbClusterEndpointTagsList" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.Initializer"></a>

```typescript
import { rdsDbClusterEndpoint } from '@cdktn/provider-awscc'

new rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.get"></a>

```typescript
public get(index: number): RdsDbClusterEndpointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags">RdsDbClusterEndpointTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RdsDbClusterEndpointTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags">RdsDbClusterEndpointTags</a>[]

---


### RdsDbClusterEndpointTagsOutputReference <a name="RdsDbClusterEndpointTagsOutputReference" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.Initializer"></a>

```typescript
import { rdsDbClusterEndpoint } from '@cdktn/provider-awscc'

new rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags">RdsDbClusterEndpointTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RdsDbClusterEndpointTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags">RdsDbClusterEndpointTags</a>

---



