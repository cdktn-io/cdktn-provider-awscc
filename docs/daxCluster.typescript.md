# `daxCluster` Submodule <a name="`daxCluster` Submodule" id="@cdktn/provider-awscc.daxCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DaxCluster <a name="DaxCluster" id="@cdktn/provider-awscc.daxCluster.DaxCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster awscc_dax_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.daxCluster.DaxCluster.Initializer"></a>

```typescript
import { daxCluster } from '@cdktn/provider-awscc'

new daxCluster.DaxCluster(scope: Construct, id: string, config: DaxClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig">DaxClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.daxCluster.DaxCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.daxCluster.DaxCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.daxCluster.DaxCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig">DaxClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.putSseSpecification">putSseSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.resetAvailabilityZones">resetAvailabilityZones</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.resetClusterEndpointEncryptionType">resetClusterEndpointEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.resetClusterName">resetClusterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.resetNetworkType">resetNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.resetNotificationTopicArn">resetNotificationTopicArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.resetParameterGroupName">resetParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.resetPreferredMaintenanceWindow">resetPreferredMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.resetSseSpecification">resetSseSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.resetSubnetGroupName">resetSubnetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.daxCluster.DaxCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.daxCluster.DaxCluster.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.daxCluster.DaxCluster.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.daxCluster.DaxCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.daxCluster.DaxCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.daxCluster.DaxCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.daxCluster.DaxCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.daxCluster.DaxCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.daxCluster.DaxCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.daxCluster.DaxCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.daxCluster.DaxCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.daxCluster.DaxCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.daxCluster.DaxCluster.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.daxCluster.DaxCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.daxCluster.DaxCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.daxCluster.DaxCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.daxCluster.DaxCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.daxCluster.DaxCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.daxCluster.DaxCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.daxCluster.DaxCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.daxCluster.DaxCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.daxCluster.DaxCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.daxCluster.DaxCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.daxCluster.DaxCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.daxCluster.DaxCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.daxCluster.DaxCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.daxCluster.DaxCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.daxCluster.DaxCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.daxCluster.DaxCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.daxCluster.DaxCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.daxCluster.DaxCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.daxCluster.DaxCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.daxCluster.DaxCluster.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.daxCluster.DaxCluster.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.daxCluster.DaxCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.daxCluster.DaxCluster.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.daxCluster.DaxCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.daxCluster.DaxCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.daxCluster.DaxCluster.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.daxCluster.DaxCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.daxCluster.DaxCluster.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.daxCluster.DaxCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.daxCluster.DaxCluster.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.daxCluster.DaxCluster.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.daxCluster.DaxCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSseSpecification` <a name="putSseSpecification" id="@cdktn/provider-awscc.daxCluster.DaxCluster.putSseSpecification"></a>

```typescript
public putSseSpecification(value: DaxClusterSseSpecification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.daxCluster.DaxCluster.putSseSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecification">DaxClusterSseSpecification</a>

---

##### `resetAvailabilityZones` <a name="resetAvailabilityZones" id="@cdktn/provider-awscc.daxCluster.DaxCluster.resetAvailabilityZones"></a>

```typescript
public resetAvailabilityZones(): void
```

##### `resetClusterEndpointEncryptionType` <a name="resetClusterEndpointEncryptionType" id="@cdktn/provider-awscc.daxCluster.DaxCluster.resetClusterEndpointEncryptionType"></a>

```typescript
public resetClusterEndpointEncryptionType(): void
```

##### `resetClusterName` <a name="resetClusterName" id="@cdktn/provider-awscc.daxCluster.DaxCluster.resetClusterName"></a>

```typescript
public resetClusterName(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.daxCluster.DaxCluster.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetNetworkType` <a name="resetNetworkType" id="@cdktn/provider-awscc.daxCluster.DaxCluster.resetNetworkType"></a>

```typescript
public resetNetworkType(): void
```

##### `resetNotificationTopicArn` <a name="resetNotificationTopicArn" id="@cdktn/provider-awscc.daxCluster.DaxCluster.resetNotificationTopicArn"></a>

```typescript
public resetNotificationTopicArn(): void
```

##### `resetParameterGroupName` <a name="resetParameterGroupName" id="@cdktn/provider-awscc.daxCluster.DaxCluster.resetParameterGroupName"></a>

```typescript
public resetParameterGroupName(): void
```

##### `resetPreferredMaintenanceWindow` <a name="resetPreferredMaintenanceWindow" id="@cdktn/provider-awscc.daxCluster.DaxCluster.resetPreferredMaintenanceWindow"></a>

```typescript
public resetPreferredMaintenanceWindow(): void
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.daxCluster.DaxCluster.resetSecurityGroupIds"></a>

```typescript
public resetSecurityGroupIds(): void
```

##### `resetSseSpecification` <a name="resetSseSpecification" id="@cdktn/provider-awscc.daxCluster.DaxCluster.resetSseSpecification"></a>

```typescript
public resetSseSpecification(): void
```

##### `resetSubnetGroupName` <a name="resetSubnetGroupName" id="@cdktn/provider-awscc.daxCluster.DaxCluster.resetSubnetGroupName"></a>

```typescript
public resetSubnetGroupName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.daxCluster.DaxCluster.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DaxCluster resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.daxCluster.DaxCluster.isConstruct"></a>

```typescript
import { daxCluster } from '@cdktn/provider-awscc'

daxCluster.DaxCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.daxCluster.DaxCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.daxCluster.DaxCluster.isTerraformElement"></a>

```typescript
import { daxCluster } from '@cdktn/provider-awscc'

daxCluster.DaxCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.daxCluster.DaxCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.daxCluster.DaxCluster.isTerraformResource"></a>

```typescript
import { daxCluster } from '@cdktn/provider-awscc'

daxCluster.DaxCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.daxCluster.DaxCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.daxCluster.DaxCluster.generateConfigForImport"></a>

```typescript
import { daxCluster } from '@cdktn/provider-awscc'

daxCluster.DaxCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DaxCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.daxCluster.DaxCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.daxCluster.DaxCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DaxCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.daxCluster.DaxCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DaxCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.daxCluster.DaxCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DaxCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.clusterDiscoveryEndpoint">clusterDiscoveryEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.clusterDiscoveryEndpointUrl">clusterDiscoveryEndpointUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.sseSpecification">sseSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference">DaxClusterSseSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.availabilityZonesInput">availabilityZonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.clusterEndpointEncryptionTypeInput">clusterEndpointEncryptionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.clusterNameInput">clusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.iamRoleArnInput">iamRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.networkTypeInput">networkTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.nodeTypeInput">nodeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.notificationTopicArnInput">notificationTopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.parameterGroupNameInput">parameterGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.preferredMaintenanceWindowInput">preferredMaintenanceWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.replicationFactorInput">replicationFactorInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.sseSpecificationInput">sseSpecificationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecification">DaxClusterSseSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.subnetGroupNameInput">subnetGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.tagsInput">tagsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.clusterEndpointEncryptionType">clusterEndpointEncryptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.clusterName">clusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.iamRoleArn">iamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.networkType">networkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.nodeType">nodeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.notificationTopicArn">notificationTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.parameterGroupName">parameterGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.replicationFactor">replicationFactor</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.subnetGroupName">subnetGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.tags">tags</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `clusterDiscoveryEndpoint`<sup>Required</sup> <a name="clusterDiscoveryEndpoint" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.clusterDiscoveryEndpoint"></a>

```typescript
public readonly clusterDiscoveryEndpoint: string;
```

- *Type:* string

---

##### `clusterDiscoveryEndpointUrl`<sup>Required</sup> <a name="clusterDiscoveryEndpointUrl" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.clusterDiscoveryEndpointUrl"></a>

```typescript
public readonly clusterDiscoveryEndpointUrl: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `sseSpecification`<sup>Required</sup> <a name="sseSpecification" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.sseSpecification"></a>

```typescript
public readonly sseSpecification: DaxClusterSseSpecificationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference">DaxClusterSseSpecificationOutputReference</a>

---

##### `availabilityZonesInput`<sup>Optional</sup> <a name="availabilityZonesInput" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.availabilityZonesInput"></a>

```typescript
public readonly availabilityZonesInput: string[];
```

- *Type:* string[]

---

##### `clusterEndpointEncryptionTypeInput`<sup>Optional</sup> <a name="clusterEndpointEncryptionTypeInput" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.clusterEndpointEncryptionTypeInput"></a>

```typescript
public readonly clusterEndpointEncryptionTypeInput: string;
```

- *Type:* string

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.clusterNameInput"></a>

```typescript
public readonly clusterNameInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `iamRoleArnInput`<sup>Optional</sup> <a name="iamRoleArnInput" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.iamRoleArnInput"></a>

```typescript
public readonly iamRoleArnInput: string;
```

- *Type:* string

---

##### `networkTypeInput`<sup>Optional</sup> <a name="networkTypeInput" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.networkTypeInput"></a>

```typescript
public readonly networkTypeInput: string;
```

- *Type:* string

---

##### `nodeTypeInput`<sup>Optional</sup> <a name="nodeTypeInput" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.nodeTypeInput"></a>

```typescript
public readonly nodeTypeInput: string;
```

- *Type:* string

---

##### `notificationTopicArnInput`<sup>Optional</sup> <a name="notificationTopicArnInput" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.notificationTopicArnInput"></a>

```typescript
public readonly notificationTopicArnInput: string;
```

- *Type:* string

---

##### `parameterGroupNameInput`<sup>Optional</sup> <a name="parameterGroupNameInput" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.parameterGroupNameInput"></a>

```typescript
public readonly parameterGroupNameInput: string;
```

- *Type:* string

---

##### `preferredMaintenanceWindowInput`<sup>Optional</sup> <a name="preferredMaintenanceWindowInput" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.preferredMaintenanceWindowInput"></a>

```typescript
public readonly preferredMaintenanceWindowInput: string;
```

- *Type:* string

---

##### `replicationFactorInput`<sup>Optional</sup> <a name="replicationFactorInput" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.replicationFactorInput"></a>

```typescript
public readonly replicationFactorInput: number;
```

- *Type:* number

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `sseSpecificationInput`<sup>Optional</sup> <a name="sseSpecificationInput" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.sseSpecificationInput"></a>

```typescript
public readonly sseSpecificationInput: IResolvable | DaxClusterSseSpecification;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecification">DaxClusterSseSpecification</a>

---

##### `subnetGroupNameInput`<sup>Optional</sup> <a name="subnetGroupNameInput" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.subnetGroupNameInput"></a>

```typescript
public readonly subnetGroupNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.tagsInput"></a>

```typescript
public readonly tagsInput: string;
```

- *Type:* string

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

---

##### `clusterEndpointEncryptionType`<sup>Required</sup> <a name="clusterEndpointEncryptionType" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.clusterEndpointEncryptionType"></a>

```typescript
public readonly clusterEndpointEncryptionType: string;
```

- *Type:* string

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.iamRoleArn"></a>

```typescript
public readonly iamRoleArn: string;
```

- *Type:* string

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.networkType"></a>

```typescript
public readonly networkType: string;
```

- *Type:* string

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.nodeType"></a>

```typescript
public readonly nodeType: string;
```

- *Type:* string

---

##### `notificationTopicArn`<sup>Required</sup> <a name="notificationTopicArn" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.notificationTopicArn"></a>

```typescript
public readonly notificationTopicArn: string;
```

- *Type:* string

---

##### `parameterGroupName`<sup>Required</sup> <a name="parameterGroupName" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.parameterGroupName"></a>

```typescript
public readonly parameterGroupName: string;
```

- *Type:* string

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="preferredMaintenanceWindow" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.preferredMaintenanceWindow"></a>

```typescript
public readonly preferredMaintenanceWindow: string;
```

- *Type:* string

---

##### `replicationFactor`<sup>Required</sup> <a name="replicationFactor" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.replicationFactor"></a>

```typescript
public readonly replicationFactor: number;
```

- *Type:* number

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetGroupName`<sup>Required</sup> <a name="subnetGroupName" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.subnetGroupName"></a>

```typescript
public readonly subnetGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.tags"></a>

```typescript
public readonly tags: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DaxClusterConfig <a name="DaxClusterConfig" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.Initializer"></a>

```typescript
import { daxCluster } from '@cdktn/provider-awscc'

const daxClusterConfig: daxCluster.DaxClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.iamRoleArn">iamRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#iam_role_arn DaxCluster#iam_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.nodeType">nodeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#node_type DaxCluster#node_type}. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.replicationFactor">replicationFactor</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#replication_factor DaxCluster#replication_factor}. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#availability_zones DaxCluster#availability_zones}. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.clusterEndpointEncryptionType">clusterEndpointEncryptionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#cluster_endpoint_encryption_type DaxCluster#cluster_endpoint_encryption_type}. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.clusterName">clusterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#cluster_name DaxCluster#cluster_name}. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#description DaxCluster#description}. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.networkType">networkType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#network_type DaxCluster#network_type}. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.notificationTopicArn">notificationTopicArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#notification_topic_arn DaxCluster#notification_topic_arn}. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.parameterGroupName">parameterGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#parameter_group_name DaxCluster#parameter_group_name}. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#preferred_maintenance_window DaxCluster#preferred_maintenance_window}. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#security_group_ids DaxCluster#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.sseSpecification">sseSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecification">DaxClusterSseSpecification</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#sse_specification DaxCluster#sse_specification}. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.subnetGroupName">subnetGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#subnet_group_name DaxCluster#subnet_group_name}. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.tags">tags</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#tags DaxCluster#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.iamRoleArn"></a>

```typescript
public readonly iamRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#iam_role_arn DaxCluster#iam_role_arn}.

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.nodeType"></a>

```typescript
public readonly nodeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#node_type DaxCluster#node_type}.

---

##### `replicationFactor`<sup>Required</sup> <a name="replicationFactor" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.replicationFactor"></a>

```typescript
public readonly replicationFactor: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#replication_factor DaxCluster#replication_factor}.

---

##### `availabilityZones`<sup>Optional</sup> <a name="availabilityZones" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#availability_zones DaxCluster#availability_zones}.

---

##### `clusterEndpointEncryptionType`<sup>Optional</sup> <a name="clusterEndpointEncryptionType" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.clusterEndpointEncryptionType"></a>

```typescript
public readonly clusterEndpointEncryptionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#cluster_endpoint_encryption_type DaxCluster#cluster_endpoint_encryption_type}.

---

##### `clusterName`<sup>Optional</sup> <a name="clusterName" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#cluster_name DaxCluster#cluster_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#description DaxCluster#description}.

---

##### `networkType`<sup>Optional</sup> <a name="networkType" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.networkType"></a>

```typescript
public readonly networkType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#network_type DaxCluster#network_type}.

---

##### `notificationTopicArn`<sup>Optional</sup> <a name="notificationTopicArn" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.notificationTopicArn"></a>

```typescript
public readonly notificationTopicArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#notification_topic_arn DaxCluster#notification_topic_arn}.

---

##### `parameterGroupName`<sup>Optional</sup> <a name="parameterGroupName" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.parameterGroupName"></a>

```typescript
public readonly parameterGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#parameter_group_name DaxCluster#parameter_group_name}.

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="preferredMaintenanceWindow" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.preferredMaintenanceWindow"></a>

```typescript
public readonly preferredMaintenanceWindow: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#preferred_maintenance_window DaxCluster#preferred_maintenance_window}.

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#security_group_ids DaxCluster#security_group_ids}.

---

##### `sseSpecification`<sup>Optional</sup> <a name="sseSpecification" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.sseSpecification"></a>

```typescript
public readonly sseSpecification: DaxClusterSseSpecification;
```

- *Type:* <a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecification">DaxClusterSseSpecification</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#sse_specification DaxCluster#sse_specification}.

---

##### `subnetGroupName`<sup>Optional</sup> <a name="subnetGroupName" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.subnetGroupName"></a>

```typescript
public readonly subnetGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#subnet_group_name DaxCluster#subnet_group_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.tags"></a>

```typescript
public readonly tags: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#tags DaxCluster#tags}.

---

### DaxClusterSseSpecification <a name="DaxClusterSseSpecification" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecification.Initializer"></a>

```typescript
import { daxCluster } from '@cdktn/provider-awscc'

const daxClusterSseSpecification: daxCluster.DaxClusterSseSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecification.property.sseEnabled">sseEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#sse_enabled DaxCluster#sse_enabled}. |

---

##### `sseEnabled`<sup>Optional</sup> <a name="sseEnabled" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecification.property.sseEnabled"></a>

```typescript
public readonly sseEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#sse_enabled DaxCluster#sse_enabled}.

---

## Classes <a name="Classes" id="Classes"></a>

### DaxClusterSseSpecificationOutputReference <a name="DaxClusterSseSpecificationOutputReference" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.Initializer"></a>

```typescript
import { daxCluster } from '@cdktn/provider-awscc'

new daxCluster.DaxClusterSseSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.resetSseEnabled">resetSseEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSseEnabled` <a name="resetSseEnabled" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.resetSseEnabled"></a>

```typescript
public resetSseEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.property.sseEnabledInput">sseEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.property.sseEnabled">sseEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecification">DaxClusterSseSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sseEnabledInput`<sup>Optional</sup> <a name="sseEnabledInput" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.property.sseEnabledInput"></a>

```typescript
public readonly sseEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `sseEnabled`<sup>Required</sup> <a name="sseEnabled" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.property.sseEnabled"></a>

```typescript
public readonly sseEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DaxClusterSseSpecification;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecification">DaxClusterSseSpecification</a>

---



