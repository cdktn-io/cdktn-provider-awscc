# `rdsDbProxyTargetGroup` Submodule <a name="`rdsDbProxyTargetGroup` Submodule" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsDbProxyTargetGroup <a name="RdsDbProxyTargetGroup" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy_target_group awscc_rds_db_proxy_target_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer"></a>

```typescript
import { rdsDbProxyTargetGroup } from '@cdktn/provider-awscc'

new rdsDbProxyTargetGroup.RdsDbProxyTargetGroup(scope: Construct, id: string, config: RdsDbProxyTargetGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig">RdsDbProxyTargetGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig">RdsDbProxyTargetGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.putConnectionPoolConfigurationInfo">putConnectionPoolConfigurationInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.resetConnectionPoolConfigurationInfo">resetConnectionPoolConfigurationInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.resetDbClusterIdentifiers">resetDbClusterIdentifiers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.resetDbInstanceIdentifiers">resetDbInstanceIdentifiers</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConnectionPoolConfigurationInfo` <a name="putConnectionPoolConfigurationInfo" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.putConnectionPoolConfigurationInfo"></a>

```typescript
public putConnectionPoolConfigurationInfo(value: RdsDbProxyTargetGroupConnectionPoolConfigurationInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.putConnectionPoolConfigurationInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo">RdsDbProxyTargetGroupConnectionPoolConfigurationInfo</a>

---

##### `resetConnectionPoolConfigurationInfo` <a name="resetConnectionPoolConfigurationInfo" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.resetConnectionPoolConfigurationInfo"></a>

```typescript
public resetConnectionPoolConfigurationInfo(): void
```

##### `resetDbClusterIdentifiers` <a name="resetDbClusterIdentifiers" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.resetDbClusterIdentifiers"></a>

```typescript
public resetDbClusterIdentifiers(): void
```

##### `resetDbInstanceIdentifiers` <a name="resetDbInstanceIdentifiers" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.resetDbInstanceIdentifiers"></a>

```typescript
public resetDbInstanceIdentifiers(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RdsDbProxyTargetGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.isConstruct"></a>

```typescript
import { rdsDbProxyTargetGroup } from '@cdktn/provider-awscc'

rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.isTerraformElement"></a>

```typescript
import { rdsDbProxyTargetGroup } from '@cdktn/provider-awscc'

rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.isTerraformResource"></a>

```typescript
import { rdsDbProxyTargetGroup } from '@cdktn/provider-awscc'

rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.generateConfigForImport"></a>

```typescript
import { rdsDbProxyTargetGroup } from '@cdktn/provider-awscc'

rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a RdsDbProxyTargetGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RdsDbProxyTargetGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RdsDbProxyTargetGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy_target_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RdsDbProxyTargetGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.connectionPoolConfigurationInfo">connectionPoolConfigurationInfo</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference">RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.targetGroupArn">targetGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.connectionPoolConfigurationInfoInput">connectionPoolConfigurationInfoInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo">RdsDbProxyTargetGroupConnectionPoolConfigurationInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.dbClusterIdentifiersInput">dbClusterIdentifiersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.dbInstanceIdentifiersInput">dbInstanceIdentifiersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.dbProxyNameInput">dbProxyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.targetGroupNameInput">targetGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.dbClusterIdentifiers">dbClusterIdentifiers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.dbInstanceIdentifiers">dbInstanceIdentifiers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.dbProxyName">dbProxyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.targetGroupName">targetGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `connectionPoolConfigurationInfo`<sup>Required</sup> <a name="connectionPoolConfigurationInfo" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.connectionPoolConfigurationInfo"></a>

```typescript
public readonly connectionPoolConfigurationInfo: RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference">RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `targetGroupArn`<sup>Required</sup> <a name="targetGroupArn" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.targetGroupArn"></a>

```typescript
public readonly targetGroupArn: string;
```

- *Type:* string

---

##### `connectionPoolConfigurationInfoInput`<sup>Optional</sup> <a name="connectionPoolConfigurationInfoInput" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.connectionPoolConfigurationInfoInput"></a>

```typescript
public readonly connectionPoolConfigurationInfoInput: IResolvable | RdsDbProxyTargetGroupConnectionPoolConfigurationInfo;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo">RdsDbProxyTargetGroupConnectionPoolConfigurationInfo</a>

---

##### `dbClusterIdentifiersInput`<sup>Optional</sup> <a name="dbClusterIdentifiersInput" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.dbClusterIdentifiersInput"></a>

```typescript
public readonly dbClusterIdentifiersInput: string[];
```

- *Type:* string[]

---

##### `dbInstanceIdentifiersInput`<sup>Optional</sup> <a name="dbInstanceIdentifiersInput" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.dbInstanceIdentifiersInput"></a>

```typescript
public readonly dbInstanceIdentifiersInput: string[];
```

- *Type:* string[]

---

##### `dbProxyNameInput`<sup>Optional</sup> <a name="dbProxyNameInput" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.dbProxyNameInput"></a>

```typescript
public readonly dbProxyNameInput: string;
```

- *Type:* string

---

##### `targetGroupNameInput`<sup>Optional</sup> <a name="targetGroupNameInput" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.targetGroupNameInput"></a>

```typescript
public readonly targetGroupNameInput: string;
```

- *Type:* string

---

##### `dbClusterIdentifiers`<sup>Required</sup> <a name="dbClusterIdentifiers" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.dbClusterIdentifiers"></a>

```typescript
public readonly dbClusterIdentifiers: string[];
```

- *Type:* string[]

---

##### `dbInstanceIdentifiers`<sup>Required</sup> <a name="dbInstanceIdentifiers" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.dbInstanceIdentifiers"></a>

```typescript
public readonly dbInstanceIdentifiers: string[];
```

- *Type:* string[]

---

##### `dbProxyName`<sup>Required</sup> <a name="dbProxyName" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.dbProxyName"></a>

```typescript
public readonly dbProxyName: string;
```

- *Type:* string

---

##### `targetGroupName`<sup>Required</sup> <a name="targetGroupName" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.targetGroupName"></a>

```typescript
public readonly targetGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RdsDbProxyTargetGroupConfig <a name="RdsDbProxyTargetGroupConfig" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.Initializer"></a>

```typescript
import { rdsDbProxyTargetGroup } from '@cdktn/provider-awscc'

const rdsDbProxyTargetGroupConfig: rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.dbProxyName">dbProxyName</a></code> | <code>string</code> | The identifier for the proxy. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.targetGroupName">targetGroupName</a></code> | <code>string</code> | The identifier for the DBProxyTargetGroup. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.connectionPoolConfigurationInfo">connectionPoolConfigurationInfo</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo">RdsDbProxyTargetGroupConnectionPoolConfigurationInfo</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy_target_group#connection_pool_configuration_info RdsDbProxyTargetGroup#connection_pool_configuration_info}. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.dbClusterIdentifiers">dbClusterIdentifiers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy_target_group#db_cluster_identifiers RdsDbProxyTargetGroup#db_cluster_identifiers}. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.dbInstanceIdentifiers">dbInstanceIdentifiers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy_target_group#db_instance_identifiers RdsDbProxyTargetGroup#db_instance_identifiers}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dbProxyName`<sup>Required</sup> <a name="dbProxyName" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.dbProxyName"></a>

```typescript
public readonly dbProxyName: string;
```

- *Type:* string

The identifier for the proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy_target_group#db_proxy_name RdsDbProxyTargetGroup#db_proxy_name}

---

##### `targetGroupName`<sup>Required</sup> <a name="targetGroupName" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.targetGroupName"></a>

```typescript
public readonly targetGroupName: string;
```

- *Type:* string

The identifier for the DBProxyTargetGroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy_target_group#target_group_name RdsDbProxyTargetGroup#target_group_name}

---

##### `connectionPoolConfigurationInfo`<sup>Optional</sup> <a name="connectionPoolConfigurationInfo" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.connectionPoolConfigurationInfo"></a>

```typescript
public readonly connectionPoolConfigurationInfo: RdsDbProxyTargetGroupConnectionPoolConfigurationInfo;
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo">RdsDbProxyTargetGroupConnectionPoolConfigurationInfo</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy_target_group#connection_pool_configuration_info RdsDbProxyTargetGroup#connection_pool_configuration_info}.

---

##### `dbClusterIdentifiers`<sup>Optional</sup> <a name="dbClusterIdentifiers" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.dbClusterIdentifiers"></a>

```typescript
public readonly dbClusterIdentifiers: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy_target_group#db_cluster_identifiers RdsDbProxyTargetGroup#db_cluster_identifiers}.

---

##### `dbInstanceIdentifiers`<sup>Optional</sup> <a name="dbInstanceIdentifiers" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.dbInstanceIdentifiers"></a>

```typescript
public readonly dbInstanceIdentifiers: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy_target_group#db_instance_identifiers RdsDbProxyTargetGroup#db_instance_identifiers}.

---

### RdsDbProxyTargetGroupConnectionPoolConfigurationInfo <a name="RdsDbProxyTargetGroupConnectionPoolConfigurationInfo" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo.Initializer"></a>

```typescript
import { rdsDbProxyTargetGroup } from '@cdktn/provider-awscc'

const rdsDbProxyTargetGroupConnectionPoolConfigurationInfo: rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo.property.connectionBorrowTimeout">connectionBorrowTimeout</a></code> | <code>number</code> | The number of seconds for a proxy to wait for a connection to become available in the connection pool. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo.property.initQuery">initQuery</a></code> | <code>string</code> | One or more SQL statements for the proxy to run when opening each new database connection. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo.property.maxConnectionsPercent">maxConnectionsPercent</a></code> | <code>number</code> | The maximum size of the connection pool for each target in a target group. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo.property.maxIdleConnectionsPercent">maxIdleConnectionsPercent</a></code> | <code>number</code> | Controls how actively the proxy closes idle database connections in the connection pool. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo.property.sessionPinningFilters">sessionPinningFilters</a></code> | <code>string[]</code> | Each item in the list represents a class of SQL operations that normally cause all later statements in a session using a proxy to be pinned to the same underlying database connection. |

---

##### `connectionBorrowTimeout`<sup>Optional</sup> <a name="connectionBorrowTimeout" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo.property.connectionBorrowTimeout"></a>

```typescript
public readonly connectionBorrowTimeout: number;
```

- *Type:* number

The number of seconds for a proxy to wait for a connection to become available in the connection pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy_target_group#connection_borrow_timeout RdsDbProxyTargetGroup#connection_borrow_timeout}

---

##### `initQuery`<sup>Optional</sup> <a name="initQuery" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo.property.initQuery"></a>

```typescript
public readonly initQuery: string;
```

- *Type:* string

One or more SQL statements for the proxy to run when opening each new database connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy_target_group#init_query RdsDbProxyTargetGroup#init_query}

---

##### `maxConnectionsPercent`<sup>Optional</sup> <a name="maxConnectionsPercent" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo.property.maxConnectionsPercent"></a>

```typescript
public readonly maxConnectionsPercent: number;
```

- *Type:* number

The maximum size of the connection pool for each target in a target group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy_target_group#max_connections_percent RdsDbProxyTargetGroup#max_connections_percent}

---

##### `maxIdleConnectionsPercent`<sup>Optional</sup> <a name="maxIdleConnectionsPercent" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo.property.maxIdleConnectionsPercent"></a>

```typescript
public readonly maxIdleConnectionsPercent: number;
```

- *Type:* number

Controls how actively the proxy closes idle database connections in the connection pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy_target_group#max_idle_connections_percent RdsDbProxyTargetGroup#max_idle_connections_percent}

---

##### `sessionPinningFilters`<sup>Optional</sup> <a name="sessionPinningFilters" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo.property.sessionPinningFilters"></a>

```typescript
public readonly sessionPinningFilters: string[];
```

- *Type:* string[]

Each item in the list represents a class of SQL operations that normally cause all later statements in a session using a proxy to be pinned to the same underlying database connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy_target_group#session_pinning_filters RdsDbProxyTargetGroup#session_pinning_filters}

---

## Classes <a name="Classes" id="Classes"></a>

### RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference <a name="RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.Initializer"></a>

```typescript
import { rdsDbProxyTargetGroup } from '@cdktn/provider-awscc'

new rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.resetConnectionBorrowTimeout">resetConnectionBorrowTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.resetInitQuery">resetInitQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.resetMaxConnectionsPercent">resetMaxConnectionsPercent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.resetMaxIdleConnectionsPercent">resetMaxIdleConnectionsPercent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.resetSessionPinningFilters">resetSessionPinningFilters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectionBorrowTimeout` <a name="resetConnectionBorrowTimeout" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.resetConnectionBorrowTimeout"></a>

```typescript
public resetConnectionBorrowTimeout(): void
```

##### `resetInitQuery` <a name="resetInitQuery" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.resetInitQuery"></a>

```typescript
public resetInitQuery(): void
```

##### `resetMaxConnectionsPercent` <a name="resetMaxConnectionsPercent" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.resetMaxConnectionsPercent"></a>

```typescript
public resetMaxConnectionsPercent(): void
```

##### `resetMaxIdleConnectionsPercent` <a name="resetMaxIdleConnectionsPercent" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.resetMaxIdleConnectionsPercent"></a>

```typescript
public resetMaxIdleConnectionsPercent(): void
```

##### `resetSessionPinningFilters` <a name="resetSessionPinningFilters" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.resetSessionPinningFilters"></a>

```typescript
public resetSessionPinningFilters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.connectionBorrowTimeoutInput">connectionBorrowTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.initQueryInput">initQueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.maxConnectionsPercentInput">maxConnectionsPercentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.maxIdleConnectionsPercentInput">maxIdleConnectionsPercentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.sessionPinningFiltersInput">sessionPinningFiltersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.connectionBorrowTimeout">connectionBorrowTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.initQuery">initQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.maxConnectionsPercent">maxConnectionsPercent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.maxIdleConnectionsPercent">maxIdleConnectionsPercent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.sessionPinningFilters">sessionPinningFilters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo">RdsDbProxyTargetGroupConnectionPoolConfigurationInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectionBorrowTimeoutInput`<sup>Optional</sup> <a name="connectionBorrowTimeoutInput" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.connectionBorrowTimeoutInput"></a>

```typescript
public readonly connectionBorrowTimeoutInput: number;
```

- *Type:* number

---

##### `initQueryInput`<sup>Optional</sup> <a name="initQueryInput" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.initQueryInput"></a>

```typescript
public readonly initQueryInput: string;
```

- *Type:* string

---

##### `maxConnectionsPercentInput`<sup>Optional</sup> <a name="maxConnectionsPercentInput" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.maxConnectionsPercentInput"></a>

```typescript
public readonly maxConnectionsPercentInput: number;
```

- *Type:* number

---

##### `maxIdleConnectionsPercentInput`<sup>Optional</sup> <a name="maxIdleConnectionsPercentInput" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.maxIdleConnectionsPercentInput"></a>

```typescript
public readonly maxIdleConnectionsPercentInput: number;
```

- *Type:* number

---

##### `sessionPinningFiltersInput`<sup>Optional</sup> <a name="sessionPinningFiltersInput" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.sessionPinningFiltersInput"></a>

```typescript
public readonly sessionPinningFiltersInput: string[];
```

- *Type:* string[]

---

##### `connectionBorrowTimeout`<sup>Required</sup> <a name="connectionBorrowTimeout" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.connectionBorrowTimeout"></a>

```typescript
public readonly connectionBorrowTimeout: number;
```

- *Type:* number

---

##### `initQuery`<sup>Required</sup> <a name="initQuery" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.initQuery"></a>

```typescript
public readonly initQuery: string;
```

- *Type:* string

---

##### `maxConnectionsPercent`<sup>Required</sup> <a name="maxConnectionsPercent" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.maxConnectionsPercent"></a>

```typescript
public readonly maxConnectionsPercent: number;
```

- *Type:* number

---

##### `maxIdleConnectionsPercent`<sup>Required</sup> <a name="maxIdleConnectionsPercent" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.maxIdleConnectionsPercent"></a>

```typescript
public readonly maxIdleConnectionsPercent: number;
```

- *Type:* number

---

##### `sessionPinningFilters`<sup>Required</sup> <a name="sessionPinningFilters" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.sessionPinningFilters"></a>

```typescript
public readonly sessionPinningFilters: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RdsDbProxyTargetGroupConnectionPoolConfigurationInfo;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo">RdsDbProxyTargetGroupConnectionPoolConfigurationInfo</a>

---



