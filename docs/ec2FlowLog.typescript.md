# `ec2FlowLog` Submodule <a name="`ec2FlowLog` Submodule" id="@cdktn/provider-awscc.ec2FlowLog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2FlowLog <a name="Ec2FlowLog" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log awscc_ec2_flow_log}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer"></a>

```typescript
import { ec2FlowLog } from '@cdktn/provider-awscc'

new ec2FlowLog.Ec2FlowLog(scope: Construct, id: string, config: Ec2FlowLogConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig">Ec2FlowLogConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig">Ec2FlowLogConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.putDestinationOptions">putDestinationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.putTagFieldSpecifications">putTagFieldSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetDeliverCrossAccountRole">resetDeliverCrossAccountRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetDeliverLogsPermissionArn">resetDeliverLogsPermissionArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetDestinationOptions">resetDestinationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetLogDestination">resetLogDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetLogDestinationType">resetLogDestinationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetLogFormat">resetLogFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetLogGroupName">resetLogGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetMaxAggregationInterval">resetMaxAggregationInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetTagFieldSpecifications">resetTagFieldSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetTrafficType">resetTrafficType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDestinationOptions` <a name="putDestinationOptions" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.putDestinationOptions"></a>

```typescript
public putDestinationOptions(value: Ec2FlowLogDestinationOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.putDestinationOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptions">Ec2FlowLogDestinationOptions</a>

---

##### `putTagFieldSpecifications` <a name="putTagFieldSpecifications" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.putTagFieldSpecifications"></a>

```typescript
public putTagFieldSpecifications(value: IResolvable | Ec2FlowLogTagFieldSpecifications[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.putTagFieldSpecifications.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecifications">Ec2FlowLogTagFieldSpecifications</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.putTags"></a>

```typescript
public putTags(value: IResolvable | Ec2FlowLogTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTags">Ec2FlowLogTags</a>[]

---

##### `resetDeliverCrossAccountRole` <a name="resetDeliverCrossAccountRole" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetDeliverCrossAccountRole"></a>

```typescript
public resetDeliverCrossAccountRole(): void
```

##### `resetDeliverLogsPermissionArn` <a name="resetDeliverLogsPermissionArn" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetDeliverLogsPermissionArn"></a>

```typescript
public resetDeliverLogsPermissionArn(): void
```

##### `resetDestinationOptions` <a name="resetDestinationOptions" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetDestinationOptions"></a>

```typescript
public resetDestinationOptions(): void
```

##### `resetLogDestination` <a name="resetLogDestination" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetLogDestination"></a>

```typescript
public resetLogDestination(): void
```

##### `resetLogDestinationType` <a name="resetLogDestinationType" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetLogDestinationType"></a>

```typescript
public resetLogDestinationType(): void
```

##### `resetLogFormat` <a name="resetLogFormat" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetLogFormat"></a>

```typescript
public resetLogFormat(): void
```

##### `resetLogGroupName` <a name="resetLogGroupName" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetLogGroupName"></a>

```typescript
public resetLogGroupName(): void
```

##### `resetMaxAggregationInterval` <a name="resetMaxAggregationInterval" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetMaxAggregationInterval"></a>

```typescript
public resetMaxAggregationInterval(): void
```

##### `resetTagFieldSpecifications` <a name="resetTagFieldSpecifications" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetTagFieldSpecifications"></a>

```typescript
public resetTagFieldSpecifications(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTrafficType` <a name="resetTrafficType" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetTrafficType"></a>

```typescript
public resetTrafficType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2FlowLog resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.isConstruct"></a>

```typescript
import { ec2FlowLog } from '@cdktn/provider-awscc'

ec2FlowLog.Ec2FlowLog.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.isTerraformElement"></a>

```typescript
import { ec2FlowLog } from '@cdktn/provider-awscc'

ec2FlowLog.Ec2FlowLog.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.isTerraformResource"></a>

```typescript
import { ec2FlowLog } from '@cdktn/provider-awscc'

ec2FlowLog.Ec2FlowLog.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.generateConfigForImport"></a>

```typescript
import { ec2FlowLog } from '@cdktn/provider-awscc'

ec2FlowLog.Ec2FlowLog.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Ec2FlowLog resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2FlowLog to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2FlowLog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2FlowLog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.destinationOptions">destinationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference">Ec2FlowLogDestinationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.flowLogId">flowLogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.tagFieldSpecifications">tagFieldSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList">Ec2FlowLogTagFieldSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList">Ec2FlowLogTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.deliverCrossAccountRoleInput">deliverCrossAccountRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.deliverLogsPermissionArnInput">deliverLogsPermissionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.destinationOptionsInput">destinationOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptions">Ec2FlowLogDestinationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.logDestinationInput">logDestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.logDestinationTypeInput">logDestinationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.logFormatInput">logFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.logGroupNameInput">logGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.maxAggregationIntervalInput">maxAggregationIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.resourceIdInput">resourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.tagFieldSpecificationsInput">tagFieldSpecificationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecifications">Ec2FlowLogTagFieldSpecifications</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTags">Ec2FlowLogTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.trafficTypeInput">trafficTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.deliverCrossAccountRole">deliverCrossAccountRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.deliverLogsPermissionArn">deliverLogsPermissionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.logDestination">logDestination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.logDestinationType">logDestinationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.logFormat">logFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.logGroupName">logGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.maxAggregationInterval">maxAggregationInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.trafficType">trafficType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `destinationOptions`<sup>Required</sup> <a name="destinationOptions" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.destinationOptions"></a>

```typescript
public readonly destinationOptions: Ec2FlowLogDestinationOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference">Ec2FlowLogDestinationOptionsOutputReference</a>

---

##### `flowLogId`<sup>Required</sup> <a name="flowLogId" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.flowLogId"></a>

```typescript
public readonly flowLogId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tagFieldSpecifications`<sup>Required</sup> <a name="tagFieldSpecifications" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.tagFieldSpecifications"></a>

```typescript
public readonly tagFieldSpecifications: Ec2FlowLogTagFieldSpecificationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList">Ec2FlowLogTagFieldSpecificationsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.tags"></a>

```typescript
public readonly tags: Ec2FlowLogTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList">Ec2FlowLogTagsList</a>

---

##### `deliverCrossAccountRoleInput`<sup>Optional</sup> <a name="deliverCrossAccountRoleInput" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.deliverCrossAccountRoleInput"></a>

```typescript
public readonly deliverCrossAccountRoleInput: string;
```

- *Type:* string

---

##### `deliverLogsPermissionArnInput`<sup>Optional</sup> <a name="deliverLogsPermissionArnInput" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.deliverLogsPermissionArnInput"></a>

```typescript
public readonly deliverLogsPermissionArnInput: string;
```

- *Type:* string

---

##### `destinationOptionsInput`<sup>Optional</sup> <a name="destinationOptionsInput" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.destinationOptionsInput"></a>

```typescript
public readonly destinationOptionsInput: IResolvable | Ec2FlowLogDestinationOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptions">Ec2FlowLogDestinationOptions</a>

---

##### `logDestinationInput`<sup>Optional</sup> <a name="logDestinationInput" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.logDestinationInput"></a>

```typescript
public readonly logDestinationInput: string;
```

- *Type:* string

---

##### `logDestinationTypeInput`<sup>Optional</sup> <a name="logDestinationTypeInput" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.logDestinationTypeInput"></a>

```typescript
public readonly logDestinationTypeInput: string;
```

- *Type:* string

---

##### `logFormatInput`<sup>Optional</sup> <a name="logFormatInput" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.logFormatInput"></a>

```typescript
public readonly logFormatInput: string;
```

- *Type:* string

---

##### `logGroupNameInput`<sup>Optional</sup> <a name="logGroupNameInput" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.logGroupNameInput"></a>

```typescript
public readonly logGroupNameInput: string;
```

- *Type:* string

---

##### `maxAggregationIntervalInput`<sup>Optional</sup> <a name="maxAggregationIntervalInput" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.maxAggregationIntervalInput"></a>

```typescript
public readonly maxAggregationIntervalInput: number;
```

- *Type:* number

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.resourceIdInput"></a>

```typescript
public readonly resourceIdInput: string;
```

- *Type:* string

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `tagFieldSpecificationsInput`<sup>Optional</sup> <a name="tagFieldSpecificationsInput" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.tagFieldSpecificationsInput"></a>

```typescript
public readonly tagFieldSpecificationsInput: IResolvable | Ec2FlowLogTagFieldSpecifications[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecifications">Ec2FlowLogTagFieldSpecifications</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | Ec2FlowLogTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTags">Ec2FlowLogTags</a>[]

---

##### `trafficTypeInput`<sup>Optional</sup> <a name="trafficTypeInput" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.trafficTypeInput"></a>

```typescript
public readonly trafficTypeInput: string;
```

- *Type:* string

---

##### `deliverCrossAccountRole`<sup>Required</sup> <a name="deliverCrossAccountRole" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.deliverCrossAccountRole"></a>

```typescript
public readonly deliverCrossAccountRole: string;
```

- *Type:* string

---

##### `deliverLogsPermissionArn`<sup>Required</sup> <a name="deliverLogsPermissionArn" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.deliverLogsPermissionArn"></a>

```typescript
public readonly deliverLogsPermissionArn: string;
```

- *Type:* string

---

##### `logDestination`<sup>Required</sup> <a name="logDestination" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.logDestination"></a>

```typescript
public readonly logDestination: string;
```

- *Type:* string

---

##### `logDestinationType`<sup>Required</sup> <a name="logDestinationType" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.logDestinationType"></a>

```typescript
public readonly logDestinationType: string;
```

- *Type:* string

---

##### `logFormat`<sup>Required</sup> <a name="logFormat" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.logFormat"></a>

```typescript
public readonly logFormat: string;
```

- *Type:* string

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.logGroupName"></a>

```typescript
public readonly logGroupName: string;
```

- *Type:* string

---

##### `maxAggregationInterval`<sup>Required</sup> <a name="maxAggregationInterval" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.maxAggregationInterval"></a>

```typescript
public readonly maxAggregationInterval: number;
```

- *Type:* number

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `trafficType`<sup>Required</sup> <a name="trafficType" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.trafficType"></a>

```typescript
public readonly trafficType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2FlowLogConfig <a name="Ec2FlowLogConfig" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.Initializer"></a>

```typescript
import { ec2FlowLog } from '@cdktn/provider-awscc'

const ec2FlowLogConfig: ec2FlowLog.Ec2FlowLogConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.resourceId">resourceId</a></code> | <code>string</code> | The ID of the subnet, network interface, or VPC for which you want to create a flow log. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.resourceType">resourceType</a></code> | <code>string</code> | The type of resource for which to create the flow log. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.deliverCrossAccountRole">deliverCrossAccountRole</a></code> | <code>string</code> | The ARN of the IAM role that allows Amazon EC2 to publish flow logs across accounts. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.deliverLogsPermissionArn">deliverLogsPermissionArn</a></code> | <code>string</code> | The ARN for the IAM role that permits Amazon EC2 to publish flow logs to a CloudWatch Logs log group in your account. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.destinationOptions">destinationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptions">Ec2FlowLogDestinationOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#destination_options Ec2FlowLog#destination_options}. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.logDestination">logDestination</a></code> | <code>string</code> | Specifies the destination to which the flow log data is to be published. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.logDestinationType">logDestinationType</a></code> | <code>string</code> | Specifies the type of destination to which the flow log data is to be published. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.logFormat">logFormat</a></code> | <code>string</code> | The fields to include in the flow log record, in the order in which they should appear. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.logGroupName">logGroupName</a></code> | <code>string</code> | The name of a new or existing CloudWatch Logs log group where Amazon EC2 publishes your flow logs. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.maxAggregationInterval">maxAggregationInterval</a></code> | <code>number</code> | The maximum interval of time during which a flow of packets is captured and aggregated into a flow log record. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.tagFieldSpecifications">tagFieldSpecifications</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecifications">Ec2FlowLogTagFieldSpecifications</a>[]</code> | The resource types and associated tags for EC2 resources associated with the EC2 Tags feature for log enrichment. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTags">Ec2FlowLogTags</a>[]</code> | The tags to apply to the flow logs. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.trafficType">trafficType</a></code> | <code>string</code> | The type of traffic to log. You can log traffic that the resource accepts or rejects, or all traffic. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ID of the subnet, network interface, or VPC for which you want to create a flow log.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#resource_id Ec2FlowLog#resource_id}

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

The type of resource for which to create the flow log.

For example, if you specified a VPC ID for the ResourceId property, specify VPC for this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#resource_type Ec2FlowLog#resource_type}

---

##### `deliverCrossAccountRole`<sup>Optional</sup> <a name="deliverCrossAccountRole" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.deliverCrossAccountRole"></a>

```typescript
public readonly deliverCrossAccountRole: string;
```

- *Type:* string

The ARN of the IAM role that allows Amazon EC2 to publish flow logs across accounts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#deliver_cross_account_role Ec2FlowLog#deliver_cross_account_role}

---

##### `deliverLogsPermissionArn`<sup>Optional</sup> <a name="deliverLogsPermissionArn" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.deliverLogsPermissionArn"></a>

```typescript
public readonly deliverLogsPermissionArn: string;
```

- *Type:* string

The ARN for the IAM role that permits Amazon EC2 to publish flow logs to a CloudWatch Logs log group in your account.

If you specify LogDestinationType as s3 or kinesis-data-firehose, do not specify DeliverLogsPermissionArn or LogGroupName.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#deliver_logs_permission_arn Ec2FlowLog#deliver_logs_permission_arn}

---

##### `destinationOptions`<sup>Optional</sup> <a name="destinationOptions" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.destinationOptions"></a>

```typescript
public readonly destinationOptions: Ec2FlowLogDestinationOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptions">Ec2FlowLogDestinationOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#destination_options Ec2FlowLog#destination_options}.

---

##### `logDestination`<sup>Optional</sup> <a name="logDestination" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.logDestination"></a>

```typescript
public readonly logDestination: string;
```

- *Type:* string

Specifies the destination to which the flow log data is to be published.

Flow log data can be published to a CloudWatch Logs log group, an Amazon S3 bucket, or a Kinesis Firehose stream. The value specified for this parameter depends on the value specified for LogDestinationType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#log_destination Ec2FlowLog#log_destination}

---

##### `logDestinationType`<sup>Optional</sup> <a name="logDestinationType" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.logDestinationType"></a>

```typescript
public readonly logDestinationType: string;
```

- *Type:* string

Specifies the type of destination to which the flow log data is to be published.

Flow log data can be published to CloudWatch Logs or Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#log_destination_type Ec2FlowLog#log_destination_type}

---

##### `logFormat`<sup>Optional</sup> <a name="logFormat" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.logFormat"></a>

```typescript
public readonly logFormat: string;
```

- *Type:* string

The fields to include in the flow log record, in the order in which they should appear.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#log_format Ec2FlowLog#log_format}

---

##### `logGroupName`<sup>Optional</sup> <a name="logGroupName" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.logGroupName"></a>

```typescript
public readonly logGroupName: string;
```

- *Type:* string

The name of a new or existing CloudWatch Logs log group where Amazon EC2 publishes your flow logs.

If you specify LogDestinationType as s3 or kinesis-data-firehose, do not specify DeliverLogsPermissionArn or LogGroupName.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#log_group_name Ec2FlowLog#log_group_name}

---

##### `maxAggregationInterval`<sup>Optional</sup> <a name="maxAggregationInterval" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.maxAggregationInterval"></a>

```typescript
public readonly maxAggregationInterval: number;
```

- *Type:* number

The maximum interval of time during which a flow of packets is captured and aggregated into a flow log record.

You can specify 60 seconds (1 minute) or 600 seconds (10 minutes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#max_aggregation_interval Ec2FlowLog#max_aggregation_interval}

---

##### `tagFieldSpecifications`<sup>Optional</sup> <a name="tagFieldSpecifications" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.tagFieldSpecifications"></a>

```typescript
public readonly tagFieldSpecifications: IResolvable | Ec2FlowLogTagFieldSpecifications[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecifications">Ec2FlowLogTagFieldSpecifications</a>[]

The resource types and associated tags for EC2 resources associated with the EC2 Tags feature for log enrichment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#tag_field_specifications Ec2FlowLog#tag_field_specifications}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | Ec2FlowLogTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTags">Ec2FlowLogTags</a>[]

The tags to apply to the flow logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#tags Ec2FlowLog#tags}

---

##### `trafficType`<sup>Optional</sup> <a name="trafficType" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.trafficType"></a>

```typescript
public readonly trafficType: string;
```

- *Type:* string

The type of traffic to log. You can log traffic that the resource accepts or rejects, or all traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#traffic_type Ec2FlowLog#traffic_type}

---

### Ec2FlowLogDestinationOptions <a name="Ec2FlowLogDestinationOptions" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptions.Initializer"></a>

```typescript
import { ec2FlowLog } from '@cdktn/provider-awscc'

const ec2FlowLogDestinationOptions: ec2FlowLog.Ec2FlowLogDestinationOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptions.property.fileFormat">fileFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#file_format Ec2FlowLog#file_format}. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptions.property.hiveCompatiblePartitions">hiveCompatiblePartitions</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#hive_compatible_partitions Ec2FlowLog#hive_compatible_partitions}. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptions.property.perHourPartition">perHourPartition</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#per_hour_partition Ec2FlowLog#per_hour_partition}. |

---

##### `fileFormat`<sup>Optional</sup> <a name="fileFormat" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptions.property.fileFormat"></a>

```typescript
public readonly fileFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#file_format Ec2FlowLog#file_format}.

---

##### `hiveCompatiblePartitions`<sup>Optional</sup> <a name="hiveCompatiblePartitions" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptions.property.hiveCompatiblePartitions"></a>

```typescript
public readonly hiveCompatiblePartitions: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#hive_compatible_partitions Ec2FlowLog#hive_compatible_partitions}.

---

##### `perHourPartition`<sup>Optional</sup> <a name="perHourPartition" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptions.property.perHourPartition"></a>

```typescript
public readonly perHourPartition: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#per_hour_partition Ec2FlowLog#per_hour_partition}.

---

### Ec2FlowLogTagFieldSpecifications <a name="Ec2FlowLogTagFieldSpecifications" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecifications.Initializer"></a>

```typescript
import { ec2FlowLog } from '@cdktn/provider-awscc'

const ec2FlowLogTagFieldSpecifications: ec2FlowLog.Ec2FlowLogTagFieldSpecifications = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecifications.property.resourceType">resourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#resource_type Ec2FlowLog#resource_type}. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecifications.property.tagKeys">tagKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#tag_keys Ec2FlowLog#tag_keys}. |

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecifications.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#resource_type Ec2FlowLog#resource_type}.

---

##### `tagKeys`<sup>Optional</sup> <a name="tagKeys" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecifications.property.tagKeys"></a>

```typescript
public readonly tagKeys: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#tag_keys Ec2FlowLog#tag_keys}.

---

### Ec2FlowLogTags <a name="Ec2FlowLogTags" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTags.Initializer"></a>

```typescript
import { ec2FlowLog } from '@cdktn/provider-awscc'

const ec2FlowLogTags: ec2FlowLog.Ec2FlowLogTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#key Ec2FlowLog#key}. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#value Ec2FlowLog#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#key Ec2FlowLog#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#value Ec2FlowLog#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2FlowLogDestinationOptionsOutputReference <a name="Ec2FlowLogDestinationOptionsOutputReference" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.Initializer"></a>

```typescript
import { ec2FlowLog } from '@cdktn/provider-awscc'

new ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.resetFileFormat">resetFileFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.resetHiveCompatiblePartitions">resetHiveCompatiblePartitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.resetPerHourPartition">resetPerHourPartition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFileFormat` <a name="resetFileFormat" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.resetFileFormat"></a>

```typescript
public resetFileFormat(): void
```

##### `resetHiveCompatiblePartitions` <a name="resetHiveCompatiblePartitions" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.resetHiveCompatiblePartitions"></a>

```typescript
public resetHiveCompatiblePartitions(): void
```

##### `resetPerHourPartition` <a name="resetPerHourPartition" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.resetPerHourPartition"></a>

```typescript
public resetPerHourPartition(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.fileFormatInput">fileFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.hiveCompatiblePartitionsInput">hiveCompatiblePartitionsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.perHourPartitionInput">perHourPartitionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.fileFormat">fileFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.hiveCompatiblePartitions">hiveCompatiblePartitions</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.perHourPartition">perHourPartition</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptions">Ec2FlowLogDestinationOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fileFormatInput`<sup>Optional</sup> <a name="fileFormatInput" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.fileFormatInput"></a>

```typescript
public readonly fileFormatInput: string;
```

- *Type:* string

---

##### `hiveCompatiblePartitionsInput`<sup>Optional</sup> <a name="hiveCompatiblePartitionsInput" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.hiveCompatiblePartitionsInput"></a>

```typescript
public readonly hiveCompatiblePartitionsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `perHourPartitionInput`<sup>Optional</sup> <a name="perHourPartitionInput" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.perHourPartitionInput"></a>

```typescript
public readonly perHourPartitionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `fileFormat`<sup>Required</sup> <a name="fileFormat" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.fileFormat"></a>

```typescript
public readonly fileFormat: string;
```

- *Type:* string

---

##### `hiveCompatiblePartitions`<sup>Required</sup> <a name="hiveCompatiblePartitions" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.hiveCompatiblePartitions"></a>

```typescript
public readonly hiveCompatiblePartitions: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `perHourPartition`<sup>Required</sup> <a name="perHourPartition" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.perHourPartition"></a>

```typescript
public readonly perHourPartition: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2FlowLogDestinationOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptions">Ec2FlowLogDestinationOptions</a>

---


### Ec2FlowLogTagFieldSpecificationsList <a name="Ec2FlowLogTagFieldSpecificationsList" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.Initializer"></a>

```typescript
import { ec2FlowLog } from '@cdktn/provider-awscc'

new ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.get"></a>

```typescript
public get(index: number): Ec2FlowLogTagFieldSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecifications">Ec2FlowLogTagFieldSpecifications</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2FlowLogTagFieldSpecifications[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecifications">Ec2FlowLogTagFieldSpecifications</a>[]

---


### Ec2FlowLogTagFieldSpecificationsOutputReference <a name="Ec2FlowLogTagFieldSpecificationsOutputReference" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.Initializer"></a>

```typescript
import { ec2FlowLog } from '@cdktn/provider-awscc'

new ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.resetResourceType">resetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.resetTagKeys">resetTagKeys</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResourceType` <a name="resetResourceType" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.resetResourceType"></a>

```typescript
public resetResourceType(): void
```

##### `resetTagKeys` <a name="resetTagKeys" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.resetTagKeys"></a>

```typescript
public resetTagKeys(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.property.tagKeysInput">tagKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.property.tagKeys">tagKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecifications">Ec2FlowLogTagFieldSpecifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `tagKeysInput`<sup>Optional</sup> <a name="tagKeysInput" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.property.tagKeysInput"></a>

```typescript
public readonly tagKeysInput: string[];
```

- *Type:* string[]

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `tagKeys`<sup>Required</sup> <a name="tagKeys" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.property.tagKeys"></a>

```typescript
public readonly tagKeys: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2FlowLogTagFieldSpecifications;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecifications">Ec2FlowLogTagFieldSpecifications</a>

---


### Ec2FlowLogTagsList <a name="Ec2FlowLogTagsList" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.Initializer"></a>

```typescript
import { ec2FlowLog } from '@cdktn/provider-awscc'

new ec2FlowLog.Ec2FlowLogTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.get"></a>

```typescript
public get(index: number): Ec2FlowLogTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTags">Ec2FlowLogTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2FlowLogTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTags">Ec2FlowLogTags</a>[]

---


### Ec2FlowLogTagsOutputReference <a name="Ec2FlowLogTagsOutputReference" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.Initializer"></a>

```typescript
import { ec2FlowLog } from '@cdktn/provider-awscc'

new ec2FlowLog.Ec2FlowLogTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTags">Ec2FlowLogTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2FlowLogTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTags">Ec2FlowLogTags</a>

---



