# `codedeployDeploymentGroup` Submodule <a name="`codedeployDeploymentGroup` Submodule" id="@cdktn/provider-awscc.codedeployDeploymentGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodedeployDeploymentGroup <a name="CodedeployDeploymentGroup" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group awscc_codedeploy_deployment_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

new codedeployDeploymentGroup.CodedeployDeploymentGroup(scope: Construct, id: string, config: CodedeployDeploymentGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig">CodedeployDeploymentGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig">CodedeployDeploymentGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putAlarmConfiguration">putAlarmConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putAutoRollbackConfiguration">putAutoRollbackConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putBlueGreenDeploymentConfiguration">putBlueGreenDeploymentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putDeployment">putDeployment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putDeploymentStyle">putDeploymentStyle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putEc2TagFilters">putEc2TagFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putEc2TagSet">putEc2TagSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putEcsServices">putEcsServices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putLoadBalancerInfo">putLoadBalancerInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putOnPremisesInstanceTagFilters">putOnPremisesInstanceTagFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putOnPremisesTagSet">putOnPremisesTagSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putTriggerConfigurations">putTriggerConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetAlarmConfiguration">resetAlarmConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetAutoRollbackConfiguration">resetAutoRollbackConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetAutoScalingGroups">resetAutoScalingGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetBlueGreenDeploymentConfiguration">resetBlueGreenDeploymentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetDeployment">resetDeployment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetDeploymentConfigName">resetDeploymentConfigName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetDeploymentGroupName">resetDeploymentGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetDeploymentStyle">resetDeploymentStyle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetEc2TagFilters">resetEc2TagFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetEc2TagSet">resetEc2TagSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetEcsServices">resetEcsServices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetLoadBalancerInfo">resetLoadBalancerInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetOnPremisesInstanceTagFilters">resetOnPremisesInstanceTagFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetOnPremisesTagSet">resetOnPremisesTagSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetOutdatedInstancesStrategy">resetOutdatedInstancesStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetTerminationHookEnabled">resetTerminationHookEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetTriggerConfigurations">resetTriggerConfigurations</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAlarmConfiguration` <a name="putAlarmConfiguration" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putAlarmConfiguration"></a>

```typescript
public putAlarmConfiguration(value: CodedeployDeploymentGroupAlarmConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putAlarmConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration">CodedeployDeploymentGroupAlarmConfiguration</a>

---

##### `putAutoRollbackConfiguration` <a name="putAutoRollbackConfiguration" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putAutoRollbackConfiguration"></a>

```typescript
public putAutoRollbackConfiguration(value: CodedeployDeploymentGroupAutoRollbackConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putAutoRollbackConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration">CodedeployDeploymentGroupAutoRollbackConfiguration</a>

---

##### `putBlueGreenDeploymentConfiguration` <a name="putBlueGreenDeploymentConfiguration" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putBlueGreenDeploymentConfiguration"></a>

```typescript
public putBlueGreenDeploymentConfiguration(value: CodedeployDeploymentGroupBlueGreenDeploymentConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putBlueGreenDeploymentConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfiguration">CodedeployDeploymentGroupBlueGreenDeploymentConfiguration</a>

---

##### `putDeployment` <a name="putDeployment" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putDeployment"></a>

```typescript
public putDeployment(value: CodedeployDeploymentGroupDeployment): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putDeployment.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeployment">CodedeployDeploymentGroupDeployment</a>

---

##### `putDeploymentStyle` <a name="putDeploymentStyle" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putDeploymentStyle"></a>

```typescript
public putDeploymentStyle(value: CodedeployDeploymentGroupDeploymentStyle): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putDeploymentStyle.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle">CodedeployDeploymentGroupDeploymentStyle</a>

---

##### `putEc2TagFilters` <a name="putEc2TagFilters" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putEc2TagFilters"></a>

```typescript
public putEc2TagFilters(value: IResolvable | CodedeployDeploymentGroupEc2TagFilters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putEc2TagFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilters">CodedeployDeploymentGroupEc2TagFilters</a>[]

---

##### `putEc2TagSet` <a name="putEc2TagSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putEc2TagSet"></a>

```typescript
public putEc2TagSet(value: CodedeployDeploymentGroupEc2TagSet): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putEc2TagSet.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet">CodedeployDeploymentGroupEc2TagSet</a>

---

##### `putEcsServices` <a name="putEcsServices" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putEcsServices"></a>

```typescript
public putEcsServices(value: IResolvable | CodedeployDeploymentGroupEcsServices[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putEcsServices.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServices">CodedeployDeploymentGroupEcsServices</a>[]

---

##### `putLoadBalancerInfo` <a name="putLoadBalancerInfo" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putLoadBalancerInfo"></a>

```typescript
public putLoadBalancerInfo(value: CodedeployDeploymentGroupLoadBalancerInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putLoadBalancerInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo">CodedeployDeploymentGroupLoadBalancerInfo</a>

---

##### `putOnPremisesInstanceTagFilters` <a name="putOnPremisesInstanceTagFilters" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putOnPremisesInstanceTagFilters"></a>

```typescript
public putOnPremisesInstanceTagFilters(value: IResolvable | CodedeployDeploymentGroupOnPremisesInstanceTagFilters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putOnPremisesInstanceTagFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilters">CodedeployDeploymentGroupOnPremisesInstanceTagFilters</a>[]

---

##### `putOnPremisesTagSet` <a name="putOnPremisesTagSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putOnPremisesTagSet"></a>

```typescript
public putOnPremisesTagSet(value: CodedeployDeploymentGroupOnPremisesTagSet): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putOnPremisesTagSet.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSet">CodedeployDeploymentGroupOnPremisesTagSet</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putTags"></a>

```typescript
public putTags(value: IResolvable | CodedeployDeploymentGroupTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTags">CodedeployDeploymentGroupTags</a>[]

---

##### `putTriggerConfigurations` <a name="putTriggerConfigurations" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putTriggerConfigurations"></a>

```typescript
public putTriggerConfigurations(value: IResolvable | CodedeployDeploymentGroupTriggerConfigurations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putTriggerConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurations">CodedeployDeploymentGroupTriggerConfigurations</a>[]

---

##### `resetAlarmConfiguration` <a name="resetAlarmConfiguration" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetAlarmConfiguration"></a>

```typescript
public resetAlarmConfiguration(): void
```

##### `resetAutoRollbackConfiguration` <a name="resetAutoRollbackConfiguration" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetAutoRollbackConfiguration"></a>

```typescript
public resetAutoRollbackConfiguration(): void
```

##### `resetAutoScalingGroups` <a name="resetAutoScalingGroups" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetAutoScalingGroups"></a>

```typescript
public resetAutoScalingGroups(): void
```

##### `resetBlueGreenDeploymentConfiguration` <a name="resetBlueGreenDeploymentConfiguration" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetBlueGreenDeploymentConfiguration"></a>

```typescript
public resetBlueGreenDeploymentConfiguration(): void
```

##### `resetDeployment` <a name="resetDeployment" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetDeployment"></a>

```typescript
public resetDeployment(): void
```

##### `resetDeploymentConfigName` <a name="resetDeploymentConfigName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetDeploymentConfigName"></a>

```typescript
public resetDeploymentConfigName(): void
```

##### `resetDeploymentGroupName` <a name="resetDeploymentGroupName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetDeploymentGroupName"></a>

```typescript
public resetDeploymentGroupName(): void
```

##### `resetDeploymentStyle` <a name="resetDeploymentStyle" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetDeploymentStyle"></a>

```typescript
public resetDeploymentStyle(): void
```

##### `resetEc2TagFilters` <a name="resetEc2TagFilters" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetEc2TagFilters"></a>

```typescript
public resetEc2TagFilters(): void
```

##### `resetEc2TagSet` <a name="resetEc2TagSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetEc2TagSet"></a>

```typescript
public resetEc2TagSet(): void
```

##### `resetEcsServices` <a name="resetEcsServices" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetEcsServices"></a>

```typescript
public resetEcsServices(): void
```

##### `resetLoadBalancerInfo` <a name="resetLoadBalancerInfo" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetLoadBalancerInfo"></a>

```typescript
public resetLoadBalancerInfo(): void
```

##### `resetOnPremisesInstanceTagFilters` <a name="resetOnPremisesInstanceTagFilters" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetOnPremisesInstanceTagFilters"></a>

```typescript
public resetOnPremisesInstanceTagFilters(): void
```

##### `resetOnPremisesTagSet` <a name="resetOnPremisesTagSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetOnPremisesTagSet"></a>

```typescript
public resetOnPremisesTagSet(): void
```

##### `resetOutdatedInstancesStrategy` <a name="resetOutdatedInstancesStrategy" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetOutdatedInstancesStrategy"></a>

```typescript
public resetOutdatedInstancesStrategy(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTerminationHookEnabled` <a name="resetTerminationHookEnabled" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetTerminationHookEnabled"></a>

```typescript
public resetTerminationHookEnabled(): void
```

##### `resetTriggerConfigurations` <a name="resetTriggerConfigurations" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetTriggerConfigurations"></a>

```typescript
public resetTriggerConfigurations(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CodedeployDeploymentGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.isConstruct"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

codedeployDeploymentGroup.CodedeployDeploymentGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.isTerraformElement"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

codedeployDeploymentGroup.CodedeployDeploymentGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.isTerraformResource"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

codedeployDeploymentGroup.CodedeployDeploymentGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.generateConfigForImport"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

codedeployDeploymentGroup.CodedeployDeploymentGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CodedeployDeploymentGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CodedeployDeploymentGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CodedeployDeploymentGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CodedeployDeploymentGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.alarmConfiguration">alarmConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference">CodedeployDeploymentGroupAlarmConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.autoRollbackConfiguration">autoRollbackConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference">CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.blueGreenDeploymentConfiguration">blueGreenDeploymentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deployment">deployment</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference">CodedeployDeploymentGroupDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentStyle">deploymentStyle</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference">CodedeployDeploymentGroupDeploymentStyleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ec2TagFilters">ec2TagFilters</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList">CodedeployDeploymentGroupEc2TagFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ec2TagSet">ec2TagSet</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference">CodedeployDeploymentGroupEc2TagSetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ecsServices">ecsServices</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList">CodedeployDeploymentGroupEcsServicesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.loadBalancerInfo">loadBalancerInfo</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference">CodedeployDeploymentGroupLoadBalancerInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.onPremisesInstanceTagFilters">onPremisesInstanceTagFilters</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList">CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.onPremisesTagSet">onPremisesTagSet</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference">CodedeployDeploymentGroupOnPremisesTagSetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList">CodedeployDeploymentGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.triggerConfigurations">triggerConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList">CodedeployDeploymentGroupTriggerConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.alarmConfigurationInput">alarmConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration">CodedeployDeploymentGroupAlarmConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.applicationNameInput">applicationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.autoRollbackConfigurationInput">autoRollbackConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration">CodedeployDeploymentGroupAutoRollbackConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.autoScalingGroupsInput">autoScalingGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.blueGreenDeploymentConfigurationInput">blueGreenDeploymentConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfiguration">CodedeployDeploymentGroupBlueGreenDeploymentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentConfigNameInput">deploymentConfigNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentGroupNameInput">deploymentGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentInput">deploymentInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeployment">CodedeployDeploymentGroupDeployment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentStyleInput">deploymentStyleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle">CodedeployDeploymentGroupDeploymentStyle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ec2TagFiltersInput">ec2TagFiltersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilters">CodedeployDeploymentGroupEc2TagFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ec2TagSetInput">ec2TagSetInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet">CodedeployDeploymentGroupEc2TagSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ecsServicesInput">ecsServicesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServices">CodedeployDeploymentGroupEcsServices</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.loadBalancerInfoInput">loadBalancerInfoInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo">CodedeployDeploymentGroupLoadBalancerInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.onPremisesInstanceTagFiltersInput">onPremisesInstanceTagFiltersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilters">CodedeployDeploymentGroupOnPremisesInstanceTagFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.onPremisesTagSetInput">onPremisesTagSetInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSet">CodedeployDeploymentGroupOnPremisesTagSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.outdatedInstancesStrategyInput">outdatedInstancesStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.serviceRoleArnInput">serviceRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTags">CodedeployDeploymentGroupTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.terminationHookEnabledInput">terminationHookEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.triggerConfigurationsInput">triggerConfigurationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurations">CodedeployDeploymentGroupTriggerConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.applicationName">applicationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.autoScalingGroups">autoScalingGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentConfigName">deploymentConfigName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentGroupName">deploymentGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.outdatedInstancesStrategy">outdatedInstancesStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.serviceRoleArn">serviceRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.terminationHookEnabled">terminationHookEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `alarmConfiguration`<sup>Required</sup> <a name="alarmConfiguration" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.alarmConfiguration"></a>

```typescript
public readonly alarmConfiguration: CodedeployDeploymentGroupAlarmConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference">CodedeployDeploymentGroupAlarmConfigurationOutputReference</a>

---

##### `autoRollbackConfiguration`<sup>Required</sup> <a name="autoRollbackConfiguration" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.autoRollbackConfiguration"></a>

```typescript
public readonly autoRollbackConfiguration: CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference">CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference</a>

---

##### `blueGreenDeploymentConfiguration`<sup>Required</sup> <a name="blueGreenDeploymentConfiguration" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.blueGreenDeploymentConfiguration"></a>

```typescript
public readonly blueGreenDeploymentConfiguration: CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference</a>

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deployment"></a>

```typescript
public readonly deployment: CodedeployDeploymentGroupDeploymentOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference">CodedeployDeploymentGroupDeploymentOutputReference</a>

---

##### `deploymentStyle`<sup>Required</sup> <a name="deploymentStyle" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentStyle"></a>

```typescript
public readonly deploymentStyle: CodedeployDeploymentGroupDeploymentStyleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference">CodedeployDeploymentGroupDeploymentStyleOutputReference</a>

---

##### `ec2TagFilters`<sup>Required</sup> <a name="ec2TagFilters" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ec2TagFilters"></a>

```typescript
public readonly ec2TagFilters: CodedeployDeploymentGroupEc2TagFiltersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList">CodedeployDeploymentGroupEc2TagFiltersList</a>

---

##### `ec2TagSet`<sup>Required</sup> <a name="ec2TagSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ec2TagSet"></a>

```typescript
public readonly ec2TagSet: CodedeployDeploymentGroupEc2TagSetOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference">CodedeployDeploymentGroupEc2TagSetOutputReference</a>

---

##### `ecsServices`<sup>Required</sup> <a name="ecsServices" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ecsServices"></a>

```typescript
public readonly ecsServices: CodedeployDeploymentGroupEcsServicesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList">CodedeployDeploymentGroupEcsServicesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `loadBalancerInfo`<sup>Required</sup> <a name="loadBalancerInfo" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.loadBalancerInfo"></a>

```typescript
public readonly loadBalancerInfo: CodedeployDeploymentGroupLoadBalancerInfoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference">CodedeployDeploymentGroupLoadBalancerInfoOutputReference</a>

---

##### `onPremisesInstanceTagFilters`<sup>Required</sup> <a name="onPremisesInstanceTagFilters" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.onPremisesInstanceTagFilters"></a>

```typescript
public readonly onPremisesInstanceTagFilters: CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList">CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList</a>

---

##### `onPremisesTagSet`<sup>Required</sup> <a name="onPremisesTagSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.onPremisesTagSet"></a>

```typescript
public readonly onPremisesTagSet: CodedeployDeploymentGroupOnPremisesTagSetOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference">CodedeployDeploymentGroupOnPremisesTagSetOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.tags"></a>

```typescript
public readonly tags: CodedeployDeploymentGroupTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList">CodedeployDeploymentGroupTagsList</a>

---

##### `triggerConfigurations`<sup>Required</sup> <a name="triggerConfigurations" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.triggerConfigurations"></a>

```typescript
public readonly triggerConfigurations: CodedeployDeploymentGroupTriggerConfigurationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList">CodedeployDeploymentGroupTriggerConfigurationsList</a>

---

##### `alarmConfigurationInput`<sup>Optional</sup> <a name="alarmConfigurationInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.alarmConfigurationInput"></a>

```typescript
public readonly alarmConfigurationInput: IResolvable | CodedeployDeploymentGroupAlarmConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration">CodedeployDeploymentGroupAlarmConfiguration</a>

---

##### `applicationNameInput`<sup>Optional</sup> <a name="applicationNameInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.applicationNameInput"></a>

```typescript
public readonly applicationNameInput: string;
```

- *Type:* string

---

##### `autoRollbackConfigurationInput`<sup>Optional</sup> <a name="autoRollbackConfigurationInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.autoRollbackConfigurationInput"></a>

```typescript
public readonly autoRollbackConfigurationInput: IResolvable | CodedeployDeploymentGroupAutoRollbackConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration">CodedeployDeploymentGroupAutoRollbackConfiguration</a>

---

##### `autoScalingGroupsInput`<sup>Optional</sup> <a name="autoScalingGroupsInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.autoScalingGroupsInput"></a>

```typescript
public readonly autoScalingGroupsInput: string[];
```

- *Type:* string[]

---

##### `blueGreenDeploymentConfigurationInput`<sup>Optional</sup> <a name="blueGreenDeploymentConfigurationInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.blueGreenDeploymentConfigurationInput"></a>

```typescript
public readonly blueGreenDeploymentConfigurationInput: IResolvable | CodedeployDeploymentGroupBlueGreenDeploymentConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfiguration">CodedeployDeploymentGroupBlueGreenDeploymentConfiguration</a>

---

##### `deploymentConfigNameInput`<sup>Optional</sup> <a name="deploymentConfigNameInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentConfigNameInput"></a>

```typescript
public readonly deploymentConfigNameInput: string;
```

- *Type:* string

---

##### `deploymentGroupNameInput`<sup>Optional</sup> <a name="deploymentGroupNameInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentGroupNameInput"></a>

```typescript
public readonly deploymentGroupNameInput: string;
```

- *Type:* string

---

##### `deploymentInput`<sup>Optional</sup> <a name="deploymentInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentInput"></a>

```typescript
public readonly deploymentInput: IResolvable | CodedeployDeploymentGroupDeployment;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeployment">CodedeployDeploymentGroupDeployment</a>

---

##### `deploymentStyleInput`<sup>Optional</sup> <a name="deploymentStyleInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentStyleInput"></a>

```typescript
public readonly deploymentStyleInput: IResolvable | CodedeployDeploymentGroupDeploymentStyle;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle">CodedeployDeploymentGroupDeploymentStyle</a>

---

##### `ec2TagFiltersInput`<sup>Optional</sup> <a name="ec2TagFiltersInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ec2TagFiltersInput"></a>

```typescript
public readonly ec2TagFiltersInput: IResolvable | CodedeployDeploymentGroupEc2TagFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilters">CodedeployDeploymentGroupEc2TagFilters</a>[]

---

##### `ec2TagSetInput`<sup>Optional</sup> <a name="ec2TagSetInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ec2TagSetInput"></a>

```typescript
public readonly ec2TagSetInput: IResolvable | CodedeployDeploymentGroupEc2TagSet;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet">CodedeployDeploymentGroupEc2TagSet</a>

---

##### `ecsServicesInput`<sup>Optional</sup> <a name="ecsServicesInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ecsServicesInput"></a>

```typescript
public readonly ecsServicesInput: IResolvable | CodedeployDeploymentGroupEcsServices[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServices">CodedeployDeploymentGroupEcsServices</a>[]

---

##### `loadBalancerInfoInput`<sup>Optional</sup> <a name="loadBalancerInfoInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.loadBalancerInfoInput"></a>

```typescript
public readonly loadBalancerInfoInput: IResolvable | CodedeployDeploymentGroupLoadBalancerInfo;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo">CodedeployDeploymentGroupLoadBalancerInfo</a>

---

##### `onPremisesInstanceTagFiltersInput`<sup>Optional</sup> <a name="onPremisesInstanceTagFiltersInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.onPremisesInstanceTagFiltersInput"></a>

```typescript
public readonly onPremisesInstanceTagFiltersInput: IResolvable | CodedeployDeploymentGroupOnPremisesInstanceTagFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilters">CodedeployDeploymentGroupOnPremisesInstanceTagFilters</a>[]

---

##### `onPremisesTagSetInput`<sup>Optional</sup> <a name="onPremisesTagSetInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.onPremisesTagSetInput"></a>

```typescript
public readonly onPremisesTagSetInput: IResolvable | CodedeployDeploymentGroupOnPremisesTagSet;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSet">CodedeployDeploymentGroupOnPremisesTagSet</a>

---

##### `outdatedInstancesStrategyInput`<sup>Optional</sup> <a name="outdatedInstancesStrategyInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.outdatedInstancesStrategyInput"></a>

```typescript
public readonly outdatedInstancesStrategyInput: string;
```

- *Type:* string

---

##### `serviceRoleArnInput`<sup>Optional</sup> <a name="serviceRoleArnInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.serviceRoleArnInput"></a>

```typescript
public readonly serviceRoleArnInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | CodedeployDeploymentGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTags">CodedeployDeploymentGroupTags</a>[]

---

##### `terminationHookEnabledInput`<sup>Optional</sup> <a name="terminationHookEnabledInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.terminationHookEnabledInput"></a>

```typescript
public readonly terminationHookEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `triggerConfigurationsInput`<sup>Optional</sup> <a name="triggerConfigurationsInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.triggerConfigurationsInput"></a>

```typescript
public readonly triggerConfigurationsInput: IResolvable | CodedeployDeploymentGroupTriggerConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurations">CodedeployDeploymentGroupTriggerConfigurations</a>[]

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.applicationName"></a>

```typescript
public readonly applicationName: string;
```

- *Type:* string

---

##### `autoScalingGroups`<sup>Required</sup> <a name="autoScalingGroups" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.autoScalingGroups"></a>

```typescript
public readonly autoScalingGroups: string[];
```

- *Type:* string[]

---

##### `deploymentConfigName`<sup>Required</sup> <a name="deploymentConfigName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentConfigName"></a>

```typescript
public readonly deploymentConfigName: string;
```

- *Type:* string

---

##### `deploymentGroupName`<sup>Required</sup> <a name="deploymentGroupName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentGroupName"></a>

```typescript
public readonly deploymentGroupName: string;
```

- *Type:* string

---

##### `outdatedInstancesStrategy`<sup>Required</sup> <a name="outdatedInstancesStrategy" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.outdatedInstancesStrategy"></a>

```typescript
public readonly outdatedInstancesStrategy: string;
```

- *Type:* string

---

##### `serviceRoleArn`<sup>Required</sup> <a name="serviceRoleArn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.serviceRoleArn"></a>

```typescript
public readonly serviceRoleArn: string;
```

- *Type:* string

---

##### `terminationHookEnabled`<sup>Required</sup> <a name="terminationHookEnabled" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.terminationHookEnabled"></a>

```typescript
public readonly terminationHookEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CodedeployDeploymentGroupAlarmConfiguration <a name="CodedeployDeploymentGroupAlarmConfiguration" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

const codedeployDeploymentGroupAlarmConfiguration: codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration.property.alarms">alarms</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarms">CodedeployDeploymentGroupAlarmConfigurationAlarms</a>[]</code> | A list of alarms configured for the deployment or deployment group. A maximum of 10 alarms can be added. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether the alarm configuration is enabled. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration.property.ignorePollAlarmFailure">ignorePollAlarmFailure</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether a deployment should continue if information about the current state of alarms cannot be retrieved from Amazon CloudWatch. |

---

##### `alarms`<sup>Optional</sup> <a name="alarms" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration.property.alarms"></a>

```typescript
public readonly alarms: IResolvable | CodedeployDeploymentGroupAlarmConfigurationAlarms[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarms">CodedeployDeploymentGroupAlarmConfigurationAlarms</a>[]

A list of alarms configured for the deployment or deployment group. A maximum of 10 alarms can be added.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#alarms CodedeployDeploymentGroup#alarms}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether the alarm configuration is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#enabled CodedeployDeploymentGroup#enabled}

---

##### `ignorePollAlarmFailure`<sup>Optional</sup> <a name="ignorePollAlarmFailure" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration.property.ignorePollAlarmFailure"></a>

```typescript
public readonly ignorePollAlarmFailure: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether a deployment should continue if information about the current state of alarms cannot be retrieved from Amazon CloudWatch.

The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#ignore_poll_alarm_failure CodedeployDeploymentGroup#ignore_poll_alarm_failure}

---

### CodedeployDeploymentGroupAlarmConfigurationAlarms <a name="CodedeployDeploymentGroupAlarmConfigurationAlarms" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarms.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

const codedeployDeploymentGroupAlarmConfigurationAlarms: codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarms = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarms.property.name">name</a></code> | <code>string</code> | The name of the alarm. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarms.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the alarm.

Maximum length is 255 characters. Each alarm name can be used only once in a list of alarms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#name CodedeployDeploymentGroup#name}

---

### CodedeployDeploymentGroupAutoRollbackConfiguration <a name="CodedeployDeploymentGroupAutoRollbackConfiguration" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

const codedeployDeploymentGroupAutoRollbackConfiguration: codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether a defined automatic rollback configuration is currently enabled. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration.property.events">events</a></code> | <code>string[]</code> | The event type or types that trigger a rollback. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether a defined automatic rollback configuration is currently enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#enabled CodedeployDeploymentGroup#enabled}

---

##### `events`<sup>Optional</sup> <a name="events" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration.property.events"></a>

```typescript
public readonly events: string[];
```

- *Type:* string[]

The event type or types that trigger a rollback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#events CodedeployDeploymentGroup#events}

---

### CodedeployDeploymentGroupBlueGreenDeploymentConfiguration <a name="CodedeployDeploymentGroupBlueGreenDeploymentConfiguration" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfiguration.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

const codedeployDeploymentGroupBlueGreenDeploymentConfiguration: codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfiguration.property.deploymentReadyOption">deploymentReadyOption</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption</a></code> | Information about the action to take when newly provisioned instances are ready to receive traffic in a blue/green deployment. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfiguration.property.greenFleetProvisioningOption">greenFleetProvisioningOption</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption</a></code> | Information about how instances are provisioned for a replacement environment in a blue/green deployment. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfiguration.property.terminateBlueInstancesOnDeploymentSuccess">terminateBlueInstancesOnDeploymentSuccess</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess</a></code> | Information about whether to terminate instances in the original fleet during a blue/green deployment. |

---

##### `deploymentReadyOption`<sup>Optional</sup> <a name="deploymentReadyOption" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfiguration.property.deploymentReadyOption"></a>

```typescript
public readonly deploymentReadyOption: CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption;
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption</a>

Information about the action to take when newly provisioned instances are ready to receive traffic in a blue/green deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#deployment_ready_option CodedeployDeploymentGroup#deployment_ready_option}

---

##### `greenFleetProvisioningOption`<sup>Optional</sup> <a name="greenFleetProvisioningOption" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfiguration.property.greenFleetProvisioningOption"></a>

```typescript
public readonly greenFleetProvisioningOption: CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption;
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption</a>

Information about how instances are provisioned for a replacement environment in a blue/green deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#green_fleet_provisioning_option CodedeployDeploymentGroup#green_fleet_provisioning_option}

---

##### `terminateBlueInstancesOnDeploymentSuccess`<sup>Optional</sup> <a name="terminateBlueInstancesOnDeploymentSuccess" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfiguration.property.terminateBlueInstancesOnDeploymentSuccess"></a>

```typescript
public readonly terminateBlueInstancesOnDeploymentSuccess: CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess;
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess</a>

Information about whether to terminate instances in the original fleet during a blue/green deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#terminate_blue_instances_on_deployment_success CodedeployDeploymentGroup#terminate_blue_instances_on_deployment_success}

---

### CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption <a name="CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

const codedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption: codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption.property.actionOnTimeout">actionOnTimeout</a></code> | <code>string</code> | Information about when to reroute traffic from an original environment to a replacement environment in a blue/green deployment. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption.property.waitTimeInMinutes">waitTimeInMinutes</a></code> | <code>number</code> | The number of minutes to wait before the status of a blue/green deployment is changed to Stopped if rerouting is not started manually. |

---

##### `actionOnTimeout`<sup>Optional</sup> <a name="actionOnTimeout" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption.property.actionOnTimeout"></a>

```typescript
public readonly actionOnTimeout: string;
```

- *Type:* string

Information about when to reroute traffic from an original environment to a replacement environment in a blue/green deployment.

CONTINUE_DEPLOYMENT: Register new instances with the load balancer immediately after the new application revision is installed on the instances in the replacement environment. STOP_DEPLOYMENT: Do not register new instances with a load balancer unless traffic rerouting is started using ContinueDeployment . If traffic rerouting is not started before the end of the specified wait period, the deployment status is changed to Stopped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#action_on_timeout CodedeployDeploymentGroup#action_on_timeout}

---

##### `waitTimeInMinutes`<sup>Optional</sup> <a name="waitTimeInMinutes" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption.property.waitTimeInMinutes"></a>

```typescript
public readonly waitTimeInMinutes: number;
```

- *Type:* number

The number of minutes to wait before the status of a blue/green deployment is changed to Stopped if rerouting is not started manually.

Applies only to the STOP_DEPLOYMENT option for actionOnTimeout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#wait_time_in_minutes CodedeployDeploymentGroup#wait_time_in_minutes}

---

### CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption <a name="CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

const codedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption: codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption.property.action">action</a></code> | <code>string</code> | The method used to add instances to a replacement environment. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

The method used to add instances to a replacement environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#action CodedeployDeploymentGroup#action}

---

### CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess <a name="CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

const codedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess: codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess.property.action">action</a></code> | <code>string</code> | The action to take on instances in the original environment after a successful blue/green deployment. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess.property.terminationWaitTimeInMinutes">terminationWaitTimeInMinutes</a></code> | <code>number</code> | For an Amazon EC2 deployment, the number of minutes to wait after a successful blue/green deployment before terminating instances from the original environment. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

The action to take on instances in the original environment after a successful blue/green deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#action CodedeployDeploymentGroup#action}

---

##### `terminationWaitTimeInMinutes`<sup>Optional</sup> <a name="terminationWaitTimeInMinutes" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess.property.terminationWaitTimeInMinutes"></a>

```typescript
public readonly terminationWaitTimeInMinutes: number;
```

- *Type:* number

For an Amazon EC2 deployment, the number of minutes to wait after a successful blue/green deployment before terminating instances from the original environment.

For an Amazon ECS deployment, the number of minutes before deleting the original (blue) task set. During an Amazon ECS deployment, CodeDeploy shifts traffic from the original (blue) task set to a replacement (green) task set. The maximum setting is 2880 minutes (2 days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#termination_wait_time_in_minutes CodedeployDeploymentGroup#termination_wait_time_in_minutes}

---

### CodedeployDeploymentGroupConfig <a name="CodedeployDeploymentGroupConfig" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

const codedeployDeploymentGroupConfig: codedeployDeploymentGroup.CodedeployDeploymentGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.applicationName">applicationName</a></code> | <code>string</code> | The name of an existing CodeDeploy application to associate this deployment group with. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.serviceRoleArn">serviceRoleArn</a></code> | <code>string</code> | A service role Amazon Resource Name (ARN) that grants CodeDeploy permission to make calls to AWS services on your behalf. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.alarmConfiguration">alarmConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration">CodedeployDeploymentGroupAlarmConfiguration</a></code> | Information about the Amazon CloudWatch alarms that are associated with the deployment group. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.autoRollbackConfiguration">autoRollbackConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration">CodedeployDeploymentGroupAutoRollbackConfiguration</a></code> | Information about the automatic rollback configuration that is associated with the deployment group. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.autoScalingGroups">autoScalingGroups</a></code> | <code>string[]</code> | A list of associated Auto Scaling groups that CodeDeploy automatically deploys revisions to when new instances are created. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.blueGreenDeploymentConfiguration">blueGreenDeploymentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfiguration">CodedeployDeploymentGroupBlueGreenDeploymentConfiguration</a></code> | Information about blue/green deployment options for a deployment group. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.deployment">deployment</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeployment">CodedeployDeploymentGroupDeployment</a></code> | The application revision to deploy to this deployment group. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.deploymentConfigName">deploymentConfigName</a></code> | <code>string</code> | A deployment configuration name or a predefined configuration name. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.deploymentGroupName">deploymentGroupName</a></code> | <code>string</code> | A name for the deployment group. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.deploymentStyle">deploymentStyle</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle">CodedeployDeploymentGroupDeploymentStyle</a></code> | Attributes that determine the type of deployment to run and whether to route deployment traffic behind a load balancer. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.ec2TagFilters">ec2TagFilters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilters">CodedeployDeploymentGroupEc2TagFilters</a>[]</code> | The Amazon EC2 tags that are already applied to Amazon EC2 instances that you want to include in the deployment group. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.ec2TagSet">ec2TagSet</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet">CodedeployDeploymentGroupEc2TagSet</a></code> | Information about groups of tags applied to Amazon EC2 instances. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.ecsServices">ecsServices</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServices">CodedeployDeploymentGroupEcsServices</a>[]</code> | The target Amazon ECS services in the deployment group. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.loadBalancerInfo">loadBalancerInfo</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo">CodedeployDeploymentGroupLoadBalancerInfo</a></code> | Information about the load balancer to use in a deployment. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.onPremisesInstanceTagFilters">onPremisesInstanceTagFilters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilters">CodedeployDeploymentGroupOnPremisesInstanceTagFilters</a>[]</code> | The on-premises instance tags already applied to on-premises instances that you want to include in the deployment group. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.onPremisesTagSet">onPremisesTagSet</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSet">CodedeployDeploymentGroupOnPremisesTagSet</a></code> | Information about groups of tags applied to on-premises instances. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.outdatedInstancesStrategy">outdatedInstancesStrategy</a></code> | <code>string</code> | Indicates what happens when new Amazon EC2 instances are launched mid-deployment and do not receive the deployed application revision. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTags">CodedeployDeploymentGroupTags</a>[]</code> | The metadata that you apply to CodeDeploy deployment groups to help you organize and categorize them. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.terminationHookEnabled">terminationHookEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether the deployment group was configured to have CodeDeploy install a termination hook into an Auto Scaling group. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.triggerConfigurations">triggerConfigurations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurations">CodedeployDeploymentGroupTriggerConfigurations</a>[]</code> | Information about triggers associated with the deployment group. Duplicates are not allowed. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.applicationName"></a>

```typescript
public readonly applicationName: string;
```

- *Type:* string

The name of an existing CodeDeploy application to associate this deployment group with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#application_name CodedeployDeploymentGroup#application_name}

---

##### `serviceRoleArn`<sup>Required</sup> <a name="serviceRoleArn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.serviceRoleArn"></a>

```typescript
public readonly serviceRoleArn: string;
```

- *Type:* string

A service role Amazon Resource Name (ARN) that grants CodeDeploy permission to make calls to AWS services on your behalf.

For more information, see 'Create a Service Role for AWS CodeDeploy' in the AWS CodeDeploy User Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#service_role_arn CodedeployDeploymentGroup#service_role_arn}

---

##### `alarmConfiguration`<sup>Optional</sup> <a name="alarmConfiguration" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.alarmConfiguration"></a>

```typescript
public readonly alarmConfiguration: CodedeployDeploymentGroupAlarmConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration">CodedeployDeploymentGroupAlarmConfiguration</a>

Information about the Amazon CloudWatch alarms that are associated with the deployment group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#alarm_configuration CodedeployDeploymentGroup#alarm_configuration}

---

##### `autoRollbackConfiguration`<sup>Optional</sup> <a name="autoRollbackConfiguration" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.autoRollbackConfiguration"></a>

```typescript
public readonly autoRollbackConfiguration: CodedeployDeploymentGroupAutoRollbackConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration">CodedeployDeploymentGroupAutoRollbackConfiguration</a>

Information about the automatic rollback configuration that is associated with the deployment group.

If you specify this property, don't specify the Deployment property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#auto_rollback_configuration CodedeployDeploymentGroup#auto_rollback_configuration}

---

##### `autoScalingGroups`<sup>Optional</sup> <a name="autoScalingGroups" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.autoScalingGroups"></a>

```typescript
public readonly autoScalingGroups: string[];
```

- *Type:* string[]

A list of associated Auto Scaling groups that CodeDeploy automatically deploys revisions to when new instances are created.

Duplicates are not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#auto_scaling_groups CodedeployDeploymentGroup#auto_scaling_groups}

---

##### `blueGreenDeploymentConfiguration`<sup>Optional</sup> <a name="blueGreenDeploymentConfiguration" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.blueGreenDeploymentConfiguration"></a>

```typescript
public readonly blueGreenDeploymentConfiguration: CodedeployDeploymentGroupBlueGreenDeploymentConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfiguration">CodedeployDeploymentGroupBlueGreenDeploymentConfiguration</a>

Information about blue/green deployment options for a deployment group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#blue_green_deployment_configuration CodedeployDeploymentGroup#blue_green_deployment_configuration}

---

##### `deployment`<sup>Optional</sup> <a name="deployment" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.deployment"></a>

```typescript
public readonly deployment: CodedeployDeploymentGroupDeployment;
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeployment">CodedeployDeploymentGroupDeployment</a>

The application revision to deploy to this deployment group.

If you specify this property, your target application revision is deployed as soon as the provisioning process is complete. If you specify this property, don't specify the AutoRollbackConfiguration property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#deployment CodedeployDeploymentGroup#deployment}

---

##### `deploymentConfigName`<sup>Optional</sup> <a name="deploymentConfigName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.deploymentConfigName"></a>

```typescript
public readonly deploymentConfigName: string;
```

- *Type:* string

A deployment configuration name or a predefined configuration name.

With predefined configurations, you can deploy application revisions to one instance at a time (CodeDeployDefault.OneAtATime), half of the instances at a time (CodeDeployDefault.HalfAtATime), or all the instances at once (CodeDeployDefault.AllAtOnce).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#deployment_config_name CodedeployDeploymentGroup#deployment_config_name}

---

##### `deploymentGroupName`<sup>Optional</sup> <a name="deploymentGroupName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.deploymentGroupName"></a>

```typescript
public readonly deploymentGroupName: string;
```

- *Type:* string

A name for the deployment group.

If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the deployment group name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#deployment_group_name CodedeployDeploymentGroup#deployment_group_name}

---

##### `deploymentStyle`<sup>Optional</sup> <a name="deploymentStyle" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.deploymentStyle"></a>

```typescript
public readonly deploymentStyle: CodedeployDeploymentGroupDeploymentStyle;
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle">CodedeployDeploymentGroupDeploymentStyle</a>

Attributes that determine the type of deployment to run and whether to route deployment traffic behind a load balancer.

If you specify this property with a blue/green deployment type, don't specify the AutoScalingGroups, LoadBalancerInfo, or Deployment properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#deployment_style CodedeployDeploymentGroup#deployment_style}

---

##### `ec2TagFilters`<sup>Optional</sup> <a name="ec2TagFilters" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.ec2TagFilters"></a>

```typescript
public readonly ec2TagFilters: IResolvable | CodedeployDeploymentGroupEc2TagFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilters">CodedeployDeploymentGroupEc2TagFilters</a>[]

The Amazon EC2 tags that are already applied to Amazon EC2 instances that you want to include in the deployment group.

CodeDeploy includes all Amazon EC2 instances identified by any of the tags you specify in this deployment group. Duplicates are not allowed. You can specify EC2TagFilters or Ec2TagSet, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#ec_2_tag_filters CodedeployDeploymentGroup#ec_2_tag_filters}

---

##### `ec2TagSet`<sup>Optional</sup> <a name="ec2TagSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.ec2TagSet"></a>

```typescript
public readonly ec2TagSet: CodedeployDeploymentGroupEc2TagSet;
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet">CodedeployDeploymentGroupEc2TagSet</a>

Information about groups of tags applied to Amazon EC2 instances.

Use when the deployment group includes only Amazon EC2 instances identified by all the tag groups. Cannot be used in the same call as ec2TagFilter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#ec_2_tag_set CodedeployDeploymentGroup#ec_2_tag_set}

---

##### `ecsServices`<sup>Optional</sup> <a name="ecsServices" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.ecsServices"></a>

```typescript
public readonly ecsServices: IResolvable | CodedeployDeploymentGroupEcsServices[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServices">CodedeployDeploymentGroupEcsServices</a>[]

The target Amazon ECS services in the deployment group.

This applies only to deployment groups that use the Amazon ECS compute platform. A target Amazon ECS service is specified as an Amazon ECS cluster and service name pair using the format <clustername>:<servicename>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#ecs_services CodedeployDeploymentGroup#ecs_services}

---

##### `loadBalancerInfo`<sup>Optional</sup> <a name="loadBalancerInfo" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.loadBalancerInfo"></a>

```typescript
public readonly loadBalancerInfo: CodedeployDeploymentGroupLoadBalancerInfo;
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo">CodedeployDeploymentGroupLoadBalancerInfo</a>

Information about the load balancer to use in a deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#load_balancer_info CodedeployDeploymentGroup#load_balancer_info}

---

##### `onPremisesInstanceTagFilters`<sup>Optional</sup> <a name="onPremisesInstanceTagFilters" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.onPremisesInstanceTagFilters"></a>

```typescript
public readonly onPremisesInstanceTagFilters: IResolvable | CodedeployDeploymentGroupOnPremisesInstanceTagFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilters">CodedeployDeploymentGroupOnPremisesInstanceTagFilters</a>[]

The on-premises instance tags already applied to on-premises instances that you want to include in the deployment group.

CodeDeploy includes all on-premises instances identified by any of the tags you specify in this deployment group. Duplicates are not allowed. You can specify OnPremisesInstanceTagFilters or OnPremisesInstanceTagSet, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#on_premises_instance_tag_filters CodedeployDeploymentGroup#on_premises_instance_tag_filters}

---

##### `onPremisesTagSet`<sup>Optional</sup> <a name="onPremisesTagSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.onPremisesTagSet"></a>

```typescript
public readonly onPremisesTagSet: CodedeployDeploymentGroupOnPremisesTagSet;
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSet">CodedeployDeploymentGroupOnPremisesTagSet</a>

Information about groups of tags applied to on-premises instances.

The deployment group includes only on-premises instances identified by all the tag groups. You can specify OnPremisesInstanceTagFilters or OnPremisesInstanceTagSet, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#on_premises_tag_set CodedeployDeploymentGroup#on_premises_tag_set}

---

##### `outdatedInstancesStrategy`<sup>Optional</sup> <a name="outdatedInstancesStrategy" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.outdatedInstancesStrategy"></a>

```typescript
public readonly outdatedInstancesStrategy: string;
```

- *Type:* string

Indicates what happens when new Amazon EC2 instances are launched mid-deployment and do not receive the deployed application revision.

If this option is set to UPDATE or is unspecified, CodeDeploy initiates one or more 'auto-update outdated instances' deployments to apply the deployed application revision to the new Amazon EC2 instances. If this option is set to IGNORE, CodeDeploy does not initiate a deployment to update the new Amazon EC2 instances. This may result in instances having different revisions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#outdated_instances_strategy CodedeployDeploymentGroup#outdated_instances_strategy}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | CodedeployDeploymentGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTags">CodedeployDeploymentGroupTags</a>[]

The metadata that you apply to CodeDeploy deployment groups to help you organize and categorize them.

Each tag consists of a key and an optional value, both of which you define.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#tags CodedeployDeploymentGroup#tags}

---

##### `terminationHookEnabled`<sup>Optional</sup> <a name="terminationHookEnabled" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.terminationHookEnabled"></a>

```typescript
public readonly terminationHookEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether the deployment group was configured to have CodeDeploy install a termination hook into an Auto Scaling group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#termination_hook_enabled CodedeployDeploymentGroup#termination_hook_enabled}

---

##### `triggerConfigurations`<sup>Optional</sup> <a name="triggerConfigurations" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.triggerConfigurations"></a>

```typescript
public readonly triggerConfigurations: IResolvable | CodedeployDeploymentGroupTriggerConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurations">CodedeployDeploymentGroupTriggerConfigurations</a>[]

Information about triggers associated with the deployment group. Duplicates are not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#trigger_configurations CodedeployDeploymentGroup#trigger_configurations}

---

### CodedeployDeploymentGroupDeployment <a name="CodedeployDeploymentGroupDeployment" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeployment.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

const codedeployDeploymentGroupDeployment: codedeployDeploymentGroup.CodedeployDeploymentGroupDeployment = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeployment.property.description">description</a></code> | <code>string</code> | A description of the deployment. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeployment.property.ignoreApplicationStopFailures">ignoreApplicationStopFailures</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, then if an ApplicationStop, BeforeBlockTraffic, or AfterBlockTraffic deployment lifecycle event to an instance fails, then the deployment continues to the next deployment lifecycle event. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeployment.property.revision">revision</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevision">CodedeployDeploymentGroupDeploymentRevision</a></code> | Information about the location of stored application artifacts and the service from which to retrieve them. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeployment.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#description CodedeployDeploymentGroup#description}

---

##### `ignoreApplicationStopFailures`<sup>Optional</sup> <a name="ignoreApplicationStopFailures" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeployment.property.ignoreApplicationStopFailures"></a>

```typescript
public readonly ignoreApplicationStopFailures: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, then if an ApplicationStop, BeforeBlockTraffic, or AfterBlockTraffic deployment lifecycle event to an instance fails, then the deployment continues to the next deployment lifecycle event.

If false or not specified, then if a lifecycle event fails during a deployment to an instance, that deployment fails. If deployment to that instance is part of an overall deployment and the number of healthy hosts is not less than the minimum number of healthy hosts, then a deployment to the next instance is attempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#ignore_application_stop_failures CodedeployDeploymentGroup#ignore_application_stop_failures}

---

##### `revision`<sup>Optional</sup> <a name="revision" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeployment.property.revision"></a>

```typescript
public readonly revision: CodedeployDeploymentGroupDeploymentRevision;
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevision">CodedeployDeploymentGroupDeploymentRevision</a>

Information about the location of stored application artifacts and the service from which to retrieve them.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#revision CodedeployDeploymentGroup#revision}

---

### CodedeployDeploymentGroupDeploymentRevision <a name="CodedeployDeploymentGroupDeploymentRevision" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevision"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevision.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

const codedeployDeploymentGroupDeploymentRevision: codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevision = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevision.property.gitHubLocation">gitHubLocation</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocation">CodedeployDeploymentGroupDeploymentRevisionGitHubLocation</a></code> | Specifies the location of an application revision that is stored in GitHub. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevision.property.revisionType">revisionType</a></code> | <code>string</code> | The type of application revision. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevision.property.s3Location">s3Location</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location">CodedeployDeploymentGroupDeploymentRevisionS3Location</a></code> | Information about the location of application artifacts stored in Amazon S3. |

---

##### `gitHubLocation`<sup>Optional</sup> <a name="gitHubLocation" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevision.property.gitHubLocation"></a>

```typescript
public readonly gitHubLocation: CodedeployDeploymentGroupDeploymentRevisionGitHubLocation;
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocation">CodedeployDeploymentGroupDeploymentRevisionGitHubLocation</a>

Specifies the location of an application revision that is stored in GitHub.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#git_hub_location CodedeployDeploymentGroup#git_hub_location}

---

##### `revisionType`<sup>Optional</sup> <a name="revisionType" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevision.property.revisionType"></a>

```typescript
public readonly revisionType: string;
```

- *Type:* string

The type of application revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#revision_type CodedeployDeploymentGroup#revision_type}

---

##### `s3Location`<sup>Optional</sup> <a name="s3Location" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevision.property.s3Location"></a>

```typescript
public readonly s3Location: CodedeployDeploymentGroupDeploymentRevisionS3Location;
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location">CodedeployDeploymentGroupDeploymentRevisionS3Location</a>

Information about the location of application artifacts stored in Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#s3_location CodedeployDeploymentGroup#s3_location}

---

### CodedeployDeploymentGroupDeploymentRevisionGitHubLocation <a name="CodedeployDeploymentGroupDeploymentRevisionGitHubLocation" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocation.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

const codedeployDeploymentGroupDeploymentRevisionGitHubLocation: codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocation.property.commitId">commitId</a></code> | <code>string</code> | The SHA1 commit ID of the GitHub commit that represents the bundled artifacts for the application revision. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocation.property.repository">repository</a></code> | <code>string</code> | The GitHub account and repository pair that stores the application revision to be deployed. |

---

##### `commitId`<sup>Optional</sup> <a name="commitId" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocation.property.commitId"></a>

```typescript
public readonly commitId: string;
```

- *Type:* string

The SHA1 commit ID of the GitHub commit that represents the bundled artifacts for the application revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#commit_id CodedeployDeploymentGroup#commit_id}

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocation.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The GitHub account and repository pair that stores the application revision to be deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#repository CodedeployDeploymentGroup#repository}

---

### CodedeployDeploymentGroupDeploymentRevisionS3Location <a name="CodedeployDeploymentGroupDeploymentRevisionS3Location" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

const codedeployDeploymentGroupDeploymentRevisionS3Location: codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location.property.bucket">bucket</a></code> | <code>string</code> | The name of the Amazon S3 bucket where the application revision is stored. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location.property.bundleType">bundleType</a></code> | <code>string</code> | The file type of the application revision. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location.property.eTag">eTag</a></code> | <code>string</code> | The ETag of the Amazon S3 object that represents the bundled artifacts for the application revision. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location.property.key">key</a></code> | <code>string</code> | The name of the Amazon S3 object that represents the bundled artifacts for the application revision. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location.property.version">version</a></code> | <code>string</code> | A specific version of the Amazon S3 object that represents the bundled artifacts for the application revision. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

The name of the Amazon S3 bucket where the application revision is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#bucket CodedeployDeploymentGroup#bucket}

---

##### `bundleType`<sup>Optional</sup> <a name="bundleType" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location.property.bundleType"></a>

```typescript
public readonly bundleType: string;
```

- *Type:* string

The file type of the application revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#bundle_type CodedeployDeploymentGroup#bundle_type}

---

##### `eTag`<sup>Optional</sup> <a name="eTag" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location.property.eTag"></a>

```typescript
public readonly eTag: string;
```

- *Type:* string

The ETag of the Amazon S3 object that represents the bundled artifacts for the application revision.

If the ETag is not specified as an input parameter, ETag validation of the object is skipped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#e_tag CodedeployDeploymentGroup#e_tag}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The name of the Amazon S3 object that represents the bundled artifacts for the application revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#key CodedeployDeploymentGroup#key}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

A specific version of the Amazon S3 object that represents the bundled artifacts for the application revision.

If the version is not specified, the system uses the most recent version by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#version CodedeployDeploymentGroup#version}

---

### CodedeployDeploymentGroupDeploymentStyle <a name="CodedeployDeploymentGroupDeploymentStyle" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

const codedeployDeploymentGroupDeploymentStyle: codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle.property.deploymentOption">deploymentOption</a></code> | <code>string</code> | Indicates whether to route deployment traffic behind a load balancer. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle.property.deploymentType">deploymentType</a></code> | <code>string</code> | Indicates whether to run an in-place or blue/green deployment. |

---

##### `deploymentOption`<sup>Optional</sup> <a name="deploymentOption" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle.property.deploymentOption"></a>

```typescript
public readonly deploymentOption: string;
```

- *Type:* string

Indicates whether to route deployment traffic behind a load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#deployment_option CodedeployDeploymentGroup#deployment_option}

---

##### `deploymentType`<sup>Optional</sup> <a name="deploymentType" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle.property.deploymentType"></a>

```typescript
public readonly deploymentType: string;
```

- *Type:* string

Indicates whether to run an in-place or blue/green deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#deployment_type CodedeployDeploymentGroup#deployment_type}

---

### CodedeployDeploymentGroupEc2TagFilters <a name="CodedeployDeploymentGroupEc2TagFilters" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilters.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

const codedeployDeploymentGroupEc2TagFilters: codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilters.property.key">key</a></code> | <code>string</code> | The tag filter key. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilters.property.type">type</a></code> | <code>string</code> | The tag filter type. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilters.property.value">value</a></code> | <code>string</code> | The tag filter value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilters.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The tag filter key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#key CodedeployDeploymentGroup#key}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilters.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The tag filter type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#type CodedeployDeploymentGroup#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilters.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The tag filter value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#value CodedeployDeploymentGroup#value}

---

### CodedeployDeploymentGroupEc2TagSet <a name="CodedeployDeploymentGroupEc2TagSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

const codedeployDeploymentGroupEc2TagSet: codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet.property.ec2TagSetList">ec2TagSetList</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct">CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct</a>[]</code> | The Amazon EC2 tags that are already applied to Amazon EC2 instances that you want to include in the deployment group. |

---

##### `ec2TagSetList`<sup>Optional</sup> <a name="ec2TagSetList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet.property.ec2TagSetList"></a>

```typescript
public readonly ec2TagSetList: IResolvable | CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct">CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct</a>[]

The Amazon EC2 tags that are already applied to Amazon EC2 instances that you want to include in the deployment group.

CodeDeploy includes all Amazon EC2 instances identified by any of the tags you specify in this deployment group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#ec_2_tag_set_list CodedeployDeploymentGroup#ec_2_tag_set_list}

---

### CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup <a name="CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

const codedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup: codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup.property.key">key</a></code> | <code>string</code> | The tag filter key. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup.property.type">type</a></code> | <code>string</code> | The tag filter type. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup.property.value">value</a></code> | <code>string</code> | The tag filter value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The tag filter key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#key CodedeployDeploymentGroup#key}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The tag filter type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#type CodedeployDeploymentGroup#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The tag filter value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#value CodedeployDeploymentGroup#value}

---

### CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct <a name="CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

const codedeployDeploymentGroupEc2TagSetEc2TagSetListStruct: codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct.property.ec2TagGroup">ec2TagGroup</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup">CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup</a>[]</code> | A list that contains other lists of Amazon EC2 instance tag groups. |

---

##### `ec2TagGroup`<sup>Optional</sup> <a name="ec2TagGroup" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct.property.ec2TagGroup"></a>

```typescript
public readonly ec2TagGroup: IResolvable | CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup">CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup</a>[]

A list that contains other lists of Amazon EC2 instance tag groups.

For an instance to be included in the deployment group, it must be identified by all of the tag groups in the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#ec_2_tag_group CodedeployDeploymentGroup#ec_2_tag_group}

---

### CodedeployDeploymentGroupEcsServices <a name="CodedeployDeploymentGroupEcsServices" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServices.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

const codedeployDeploymentGroupEcsServices: codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServices = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServices.property.clusterName">clusterName</a></code> | <code>string</code> | The name of the cluster that the Amazon ECS service is associated with. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServices.property.serviceName">serviceName</a></code> | <code>string</code> | The name of the target Amazon ECS service. |

---

##### `clusterName`<sup>Optional</sup> <a name="clusterName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServices.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The name of the cluster that the Amazon ECS service is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#cluster_name CodedeployDeploymentGroup#cluster_name}

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServices.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

The name of the target Amazon ECS service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#service_name CodedeployDeploymentGroup#service_name}

---

### CodedeployDeploymentGroupLoadBalancerInfo <a name="CodedeployDeploymentGroupLoadBalancerInfo" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

const codedeployDeploymentGroupLoadBalancerInfo: codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo.property.elbInfoList">elbInfoList</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct</a>[]</code> | An array that contains information about the load balancers to use for load balancing in a deployment. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo.property.targetGroupInfoList">targetGroupInfoList</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct</a>[]</code> | An array that contains information about the target groups to use for load balancing in a deployment. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo.property.targetGroupPairInfoList">targetGroupPairInfoList</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct</a>[]</code> | The target group pair information. This is an array of TargeGroupPairInfo objects with a maximum size of one. |

---

##### `elbInfoList`<sup>Optional</sup> <a name="elbInfoList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo.property.elbInfoList"></a>

```typescript
public readonly elbInfoList: IResolvable | CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct</a>[]

An array that contains information about the load balancers to use for load balancing in a deployment.

If you're using Classic Load Balancers, specify those load balancers in this array.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#elb_info_list CodedeployDeploymentGroup#elb_info_list}

---

##### `targetGroupInfoList`<sup>Optional</sup> <a name="targetGroupInfoList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo.property.targetGroupInfoList"></a>

```typescript
public readonly targetGroupInfoList: IResolvable | CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct</a>[]

An array that contains information about the target groups to use for load balancing in a deployment.

If you're using Application Load Balancers and Network Load Balancers, specify their associated target groups in this array.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#target_group_info_list CodedeployDeploymentGroup#target_group_info_list}

---

##### `targetGroupPairInfoList`<sup>Optional</sup> <a name="targetGroupPairInfoList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo.property.targetGroupPairInfoList"></a>

```typescript
public readonly targetGroupPairInfoList: IResolvable | CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct</a>[]

The target group pair information. This is an array of TargeGroupPairInfo objects with a maximum size of one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#target_group_pair_info_list CodedeployDeploymentGroup#target_group_pair_info_list}

---

### CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct <a name="CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

const codedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct: codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct.property.name">name</a></code> | <code>string</code> | For blue/green deployments, the name of the load balancer that is used to route traffic from original instances to replacement instances in a blue/green deployment. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

For blue/green deployments, the name of the load balancer that is used to route traffic from original instances to replacement instances in a blue/green deployment.

For in-place deployments, the name of the load balancer that instances are deregistered from so they are not serving traffic during a deployment, and then re-registered with after the deployment is complete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#name CodedeployDeploymentGroup#name}

---

### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

const codedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct: codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct.property.name">name</a></code> | <code>string</code> | For blue/green deployments, the name of the target group that instances in the original environment are deregistered from, and instances in the replacement environment registered with. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

For blue/green deployments, the name of the target group that instances in the original environment are deregistered from, and instances in the replacement environment registered with.

For in-place deployments, the name of the target group that instances are deregistered from, so they are not serving traffic during a deployment, and then re-registered with after the deployment completes. No duplicates allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#name CodedeployDeploymentGroup#name}

---

### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

const codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute: codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute.property.listenerArns">listenerArns</a></code> | <code>string[]</code> | The Amazon Resource Name (ARN) of one listener. |

---

##### `listenerArns`<sup>Optional</sup> <a name="listenerArns" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute.property.listenerArns"></a>

```typescript
public readonly listenerArns: string[];
```

- *Type:* string[]

The Amazon Resource Name (ARN) of one listener.

The listener identifies the route between a target group and a load balancer. This is an array of strings with a maximum size of one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#listener_arns CodedeployDeploymentGroup#listener_arns}

---

### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

const codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct: codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct.property.prodTrafficRoute">prodTrafficRoute</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute</a></code> | The path used by a load balancer to route production traffic when an Amazon ECS deployment is complete. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct.property.targetGroups">targetGroups</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups</a>[]</code> | One pair of target groups. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct.property.testTrafficRoute">testTrafficRoute</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute</a></code> | An optional path used by a load balancer to route test traffic after an Amazon ECS deployment. |

---

##### `prodTrafficRoute`<sup>Optional</sup> <a name="prodTrafficRoute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct.property.prodTrafficRoute"></a>

```typescript
public readonly prodTrafficRoute: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute;
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute</a>

The path used by a load balancer to route production traffic when an Amazon ECS deployment is complete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#prod_traffic_route CodedeployDeploymentGroup#prod_traffic_route}

---

##### `targetGroups`<sup>Optional</sup> <a name="targetGroups" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct.property.targetGroups"></a>

```typescript
public readonly targetGroups: IResolvable | CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups</a>[]

One pair of target groups.

One is associated with the original task set. The second is associated with the task set that serves traffic after the deployment is complete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#target_groups CodedeployDeploymentGroup#target_groups}

---

##### `testTrafficRoute`<sup>Optional</sup> <a name="testTrafficRoute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct.property.testTrafficRoute"></a>

```typescript
public readonly testTrafficRoute: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute;
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute</a>

An optional path used by a load balancer to route test traffic after an Amazon ECS deployment.

Validation can occur while test traffic is served during a deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#test_traffic_route CodedeployDeploymentGroup#test_traffic_route}

---

### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

const codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups: codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups.property.name">name</a></code> | <code>string</code> | For blue/green deployments, the name of the target group that instances in the original environment are deregistered from, and instances in the replacement environment registered with. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

For blue/green deployments, the name of the target group that instances in the original environment are deregistered from, and instances in the replacement environment registered with.

For in-place deployments, the name of the target group that instances are deregistered from, so they are not serving traffic during a deployment, and then re-registered with after the deployment completes. No duplicates allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#name CodedeployDeploymentGroup#name}

---

### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

const codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute: codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute.property.listenerArns">listenerArns</a></code> | <code>string[]</code> | The Amazon Resource Name (ARN) of one listener. |

---

##### `listenerArns`<sup>Optional</sup> <a name="listenerArns" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute.property.listenerArns"></a>

```typescript
public readonly listenerArns: string[];
```

- *Type:* string[]

The Amazon Resource Name (ARN) of one listener.

The listener identifies the route between a target group and a load balancer. This is an array of strings with a maximum size of one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#listener_arns CodedeployDeploymentGroup#listener_arns}

---

### CodedeployDeploymentGroupOnPremisesInstanceTagFilters <a name="CodedeployDeploymentGroupOnPremisesInstanceTagFilters" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilters.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

const codedeployDeploymentGroupOnPremisesInstanceTagFilters: codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilters.property.key">key</a></code> | <code>string</code> | The on-premises instance tag filter key. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilters.property.type">type</a></code> | <code>string</code> | The on-premises instance tag filter type. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilters.property.value">value</a></code> | <code>string</code> | The on-premises instance tag filter value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilters.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The on-premises instance tag filter key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#key CodedeployDeploymentGroup#key}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilters.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The on-premises instance tag filter type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#type CodedeployDeploymentGroup#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilters.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The on-premises instance tag filter value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#value CodedeployDeploymentGroup#value}

---

### CodedeployDeploymentGroupOnPremisesTagSet <a name="CodedeployDeploymentGroupOnPremisesTagSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSet.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

const codedeployDeploymentGroupOnPremisesTagSet: codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSet = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSet.property.onPremisesTagSetList">onPremisesTagSetList</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct</a>[]</code> | A list that contains other lists of on-premises instance tag groups. |

---

##### `onPremisesTagSetList`<sup>Optional</sup> <a name="onPremisesTagSetList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSet.property.onPremisesTagSetList"></a>

```typescript
public readonly onPremisesTagSetList: IResolvable | CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct</a>[]

A list that contains other lists of on-premises instance tag groups.

For an instance to be included in the deployment group, it must be identified by all of the tag groups in the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#on_premises_tag_set_list CodedeployDeploymentGroup#on_premises_tag_set_list}

---

### CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup <a name="CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

const codedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup: codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup.property.key">key</a></code> | <code>string</code> | The on-premises instance tag filter key. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup.property.type">type</a></code> | <code>string</code> | The on-premises instance tag filter type. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup.property.value">value</a></code> | <code>string</code> | The on-premises instance tag filter value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The on-premises instance tag filter key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#key CodedeployDeploymentGroup#key}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The on-premises instance tag filter type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#type CodedeployDeploymentGroup#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The on-premises instance tag filter value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#value CodedeployDeploymentGroup#value}

---

### CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct <a name="CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

const codedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct: codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct.property.onPremisesTagGroup">onPremisesTagGroup</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup</a>[]</code> | Information about groups of on-premises instance tags. |

---

##### `onPremisesTagGroup`<sup>Optional</sup> <a name="onPremisesTagGroup" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct.property.onPremisesTagGroup"></a>

```typescript
public readonly onPremisesTagGroup: IResolvable | CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup</a>[]

Information about groups of on-premises instance tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#on_premises_tag_group CodedeployDeploymentGroup#on_premises_tag_group}

---

### CodedeployDeploymentGroupTags <a name="CodedeployDeploymentGroupTags" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTags.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

const codedeployDeploymentGroupTags: codedeployDeploymentGroup.CodedeployDeploymentGroupTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTags.property.key">key</a></code> | <code>string</code> | The tag's key. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTags.property.value">value</a></code> | <code>string</code> | The tag's value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The tag's key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#key CodedeployDeploymentGroup#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The tag's value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#value CodedeployDeploymentGroup#value}

---

### CodedeployDeploymentGroupTriggerConfigurations <a name="CodedeployDeploymentGroupTriggerConfigurations" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurations.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

const codedeployDeploymentGroupTriggerConfigurations: codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurations.property.triggerEvents">triggerEvents</a></code> | <code>string[]</code> | The event type or types that trigger notifications. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurations.property.triggerName">triggerName</a></code> | <code>string</code> | The name of the notification trigger. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurations.property.triggerTargetArn">triggerTargetArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the Amazon Simple Notification Service topic through which notifications about deployment or instance events are sent. |

---

##### `triggerEvents`<sup>Optional</sup> <a name="triggerEvents" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurations.property.triggerEvents"></a>

```typescript
public readonly triggerEvents: string[];
```

- *Type:* string[]

The event type or types that trigger notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#trigger_events CodedeployDeploymentGroup#trigger_events}

---

##### `triggerName`<sup>Optional</sup> <a name="triggerName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurations.property.triggerName"></a>

```typescript
public readonly triggerName: string;
```

- *Type:* string

The name of the notification trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#trigger_name CodedeployDeploymentGroup#trigger_name}

---

##### `triggerTargetArn`<sup>Optional</sup> <a name="triggerTargetArn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurations.property.triggerTargetArn"></a>

```typescript
public readonly triggerTargetArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the Amazon Simple Notification Service topic through which notifications about deployment or instance events are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codedeploy_deployment_group#trigger_target_arn CodedeployDeploymentGroup#trigger_target_arn}

---

## Classes <a name="Classes" id="Classes"></a>

### CodedeployDeploymentGroupAlarmConfigurationAlarmsList <a name="CodedeployDeploymentGroupAlarmConfigurationAlarmsList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

new codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.get"></a>

```typescript
public get(index: number): CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarms">CodedeployDeploymentGroupAlarmConfigurationAlarms</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodedeployDeploymentGroupAlarmConfigurationAlarms[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarms">CodedeployDeploymentGroupAlarmConfigurationAlarms</a>[]

---


### CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference <a name="CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

new codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarms">CodedeployDeploymentGroupAlarmConfigurationAlarms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodedeployDeploymentGroupAlarmConfigurationAlarms;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarms">CodedeployDeploymentGroupAlarmConfigurationAlarms</a>

---


### CodedeployDeploymentGroupAlarmConfigurationOutputReference <a name="CodedeployDeploymentGroupAlarmConfigurationOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

new codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.putAlarms">putAlarms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.resetAlarms">resetAlarms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.resetIgnorePollAlarmFailure">resetIgnorePollAlarmFailure</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAlarms` <a name="putAlarms" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.putAlarms"></a>

```typescript
public putAlarms(value: IResolvable | CodedeployDeploymentGroupAlarmConfigurationAlarms[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.putAlarms.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarms">CodedeployDeploymentGroupAlarmConfigurationAlarms</a>[]

---

##### `resetAlarms` <a name="resetAlarms" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.resetAlarms"></a>

```typescript
public resetAlarms(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetIgnorePollAlarmFailure` <a name="resetIgnorePollAlarmFailure" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.resetIgnorePollAlarmFailure"></a>

```typescript
public resetIgnorePollAlarmFailure(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.alarms">alarms</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList">CodedeployDeploymentGroupAlarmConfigurationAlarmsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.alarmsInput">alarmsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarms">CodedeployDeploymentGroupAlarmConfigurationAlarms</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.ignorePollAlarmFailureInput">ignorePollAlarmFailureInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.ignorePollAlarmFailure">ignorePollAlarmFailure</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration">CodedeployDeploymentGroupAlarmConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alarms`<sup>Required</sup> <a name="alarms" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.alarms"></a>

```typescript
public readonly alarms: CodedeployDeploymentGroupAlarmConfigurationAlarmsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList">CodedeployDeploymentGroupAlarmConfigurationAlarmsList</a>

---

##### `alarmsInput`<sup>Optional</sup> <a name="alarmsInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.alarmsInput"></a>

```typescript
public readonly alarmsInput: IResolvable | CodedeployDeploymentGroupAlarmConfigurationAlarms[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarms">CodedeployDeploymentGroupAlarmConfigurationAlarms</a>[]

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ignorePollAlarmFailureInput`<sup>Optional</sup> <a name="ignorePollAlarmFailureInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.ignorePollAlarmFailureInput"></a>

```typescript
public readonly ignorePollAlarmFailureInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ignorePollAlarmFailure`<sup>Required</sup> <a name="ignorePollAlarmFailure" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.ignorePollAlarmFailure"></a>

```typescript
public readonly ignorePollAlarmFailure: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodedeployDeploymentGroupAlarmConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration">CodedeployDeploymentGroupAlarmConfiguration</a>

---


### CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference <a name="CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

new codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.resetEvents">resetEvents</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetEvents` <a name="resetEvents" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.resetEvents"></a>

```typescript
public resetEvents(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.eventsInput">eventsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.events">events</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration">CodedeployDeploymentGroupAutoRollbackConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `eventsInput`<sup>Optional</sup> <a name="eventsInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.eventsInput"></a>

```typescript
public readonly eventsInput: string[];
```

- *Type:* string[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.events"></a>

```typescript
public readonly events: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodedeployDeploymentGroupAutoRollbackConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration">CodedeployDeploymentGroupAutoRollbackConfiguration</a>

---


### CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference <a name="CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

new codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.resetActionOnTimeout">resetActionOnTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.resetWaitTimeInMinutes">resetWaitTimeInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActionOnTimeout` <a name="resetActionOnTimeout" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.resetActionOnTimeout"></a>

```typescript
public resetActionOnTimeout(): void
```

##### `resetWaitTimeInMinutes` <a name="resetWaitTimeInMinutes" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.resetWaitTimeInMinutes"></a>

```typescript
public resetWaitTimeInMinutes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.property.actionOnTimeoutInput">actionOnTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.property.waitTimeInMinutesInput">waitTimeInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.property.actionOnTimeout">actionOnTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.property.waitTimeInMinutes">waitTimeInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionOnTimeoutInput`<sup>Optional</sup> <a name="actionOnTimeoutInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.property.actionOnTimeoutInput"></a>

```typescript
public readonly actionOnTimeoutInput: string;
```

- *Type:* string

---

##### `waitTimeInMinutesInput`<sup>Optional</sup> <a name="waitTimeInMinutesInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.property.waitTimeInMinutesInput"></a>

```typescript
public readonly waitTimeInMinutesInput: number;
```

- *Type:* number

---

##### `actionOnTimeout`<sup>Required</sup> <a name="actionOnTimeout" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.property.actionOnTimeout"></a>

```typescript
public readonly actionOnTimeout: string;
```

- *Type:* string

---

##### `waitTimeInMinutes`<sup>Required</sup> <a name="waitTimeInMinutes" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.property.waitTimeInMinutes"></a>

```typescript
public readonly waitTimeInMinutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption</a>

---


### CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference <a name="CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

new codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.resetAction">resetAction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAction` <a name="resetAction" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.resetAction"></a>

```typescript
public resetAction(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption</a>

---


### CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference <a name="CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

new codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.putDeploymentReadyOption">putDeploymentReadyOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.putGreenFleetProvisioningOption">putGreenFleetProvisioningOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.putTerminateBlueInstancesOnDeploymentSuccess">putTerminateBlueInstancesOnDeploymentSuccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.resetDeploymentReadyOption">resetDeploymentReadyOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.resetGreenFleetProvisioningOption">resetGreenFleetProvisioningOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.resetTerminateBlueInstancesOnDeploymentSuccess">resetTerminateBlueInstancesOnDeploymentSuccess</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDeploymentReadyOption` <a name="putDeploymentReadyOption" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.putDeploymentReadyOption"></a>

```typescript
public putDeploymentReadyOption(value: CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.putDeploymentReadyOption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption</a>

---

##### `putGreenFleetProvisioningOption` <a name="putGreenFleetProvisioningOption" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.putGreenFleetProvisioningOption"></a>

```typescript
public putGreenFleetProvisioningOption(value: CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.putGreenFleetProvisioningOption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption</a>

---

##### `putTerminateBlueInstancesOnDeploymentSuccess` <a name="putTerminateBlueInstancesOnDeploymentSuccess" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.putTerminateBlueInstancesOnDeploymentSuccess"></a>

```typescript
public putTerminateBlueInstancesOnDeploymentSuccess(value: CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.putTerminateBlueInstancesOnDeploymentSuccess.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess</a>

---

##### `resetDeploymentReadyOption` <a name="resetDeploymentReadyOption" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.resetDeploymentReadyOption"></a>

```typescript
public resetDeploymentReadyOption(): void
```

##### `resetGreenFleetProvisioningOption` <a name="resetGreenFleetProvisioningOption" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.resetGreenFleetProvisioningOption"></a>

```typescript
public resetGreenFleetProvisioningOption(): void
```

##### `resetTerminateBlueInstancesOnDeploymentSuccess` <a name="resetTerminateBlueInstancesOnDeploymentSuccess" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.resetTerminateBlueInstancesOnDeploymentSuccess"></a>

```typescript
public resetTerminateBlueInstancesOnDeploymentSuccess(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.deploymentReadyOption">deploymentReadyOption</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.greenFleetProvisioningOption">greenFleetProvisioningOption</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.terminateBlueInstancesOnDeploymentSuccess">terminateBlueInstancesOnDeploymentSuccess</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.deploymentReadyOptionInput">deploymentReadyOptionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.greenFleetProvisioningOptionInput">greenFleetProvisioningOptionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.terminateBlueInstancesOnDeploymentSuccessInput">terminateBlueInstancesOnDeploymentSuccessInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfiguration">CodedeployDeploymentGroupBlueGreenDeploymentConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deploymentReadyOption`<sup>Required</sup> <a name="deploymentReadyOption" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.deploymentReadyOption"></a>

```typescript
public readonly deploymentReadyOption: CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference</a>

---

##### `greenFleetProvisioningOption`<sup>Required</sup> <a name="greenFleetProvisioningOption" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.greenFleetProvisioningOption"></a>

```typescript
public readonly greenFleetProvisioningOption: CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference</a>

---

##### `terminateBlueInstancesOnDeploymentSuccess`<sup>Required</sup> <a name="terminateBlueInstancesOnDeploymentSuccess" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.terminateBlueInstancesOnDeploymentSuccess"></a>

```typescript
public readonly terminateBlueInstancesOnDeploymentSuccess: CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference</a>

---

##### `deploymentReadyOptionInput`<sup>Optional</sup> <a name="deploymentReadyOptionInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.deploymentReadyOptionInput"></a>

```typescript
public readonly deploymentReadyOptionInput: IResolvable | CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption</a>

---

##### `greenFleetProvisioningOptionInput`<sup>Optional</sup> <a name="greenFleetProvisioningOptionInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.greenFleetProvisioningOptionInput"></a>

```typescript
public readonly greenFleetProvisioningOptionInput: IResolvable | CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption</a>

---

##### `terminateBlueInstancesOnDeploymentSuccessInput`<sup>Optional</sup> <a name="terminateBlueInstancesOnDeploymentSuccessInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.terminateBlueInstancesOnDeploymentSuccessInput"></a>

```typescript
public readonly terminateBlueInstancesOnDeploymentSuccessInput: IResolvable | CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodedeployDeploymentGroupBlueGreenDeploymentConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfiguration">CodedeployDeploymentGroupBlueGreenDeploymentConfiguration</a>

---


### CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference <a name="CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

new codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.resetTerminationWaitTimeInMinutes">resetTerminationWaitTimeInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAction` <a name="resetAction" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetTerminationWaitTimeInMinutes` <a name="resetTerminationWaitTimeInMinutes" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.resetTerminationWaitTimeInMinutes"></a>

```typescript
public resetTerminationWaitTimeInMinutes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.terminationWaitTimeInMinutesInput">terminationWaitTimeInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.terminationWaitTimeInMinutes">terminationWaitTimeInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `terminationWaitTimeInMinutesInput`<sup>Optional</sup> <a name="terminationWaitTimeInMinutesInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.terminationWaitTimeInMinutesInput"></a>

```typescript
public readonly terminationWaitTimeInMinutesInput: number;
```

- *Type:* number

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `terminationWaitTimeInMinutes`<sup>Required</sup> <a name="terminationWaitTimeInMinutes" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.terminationWaitTimeInMinutes"></a>

```typescript
public readonly terminationWaitTimeInMinutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess</a>

---


### CodedeployDeploymentGroupDeploymentOutputReference <a name="CodedeployDeploymentGroupDeploymentOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

new codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.putRevision">putRevision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.resetIgnoreApplicationStopFailures">resetIgnoreApplicationStopFailures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.resetRevision">resetRevision</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRevision` <a name="putRevision" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.putRevision"></a>

```typescript
public putRevision(value: CodedeployDeploymentGroupDeploymentRevision): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.putRevision.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevision">CodedeployDeploymentGroupDeploymentRevision</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetIgnoreApplicationStopFailures` <a name="resetIgnoreApplicationStopFailures" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.resetIgnoreApplicationStopFailures"></a>

```typescript
public resetIgnoreApplicationStopFailures(): void
```

##### `resetRevision` <a name="resetRevision" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.resetRevision"></a>

```typescript
public resetRevision(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.revision">revision</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference">CodedeployDeploymentGroupDeploymentRevisionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.ignoreApplicationStopFailuresInput">ignoreApplicationStopFailuresInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.revisionInput">revisionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevision">CodedeployDeploymentGroupDeploymentRevision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.ignoreApplicationStopFailures">ignoreApplicationStopFailures</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeployment">CodedeployDeploymentGroupDeployment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.revision"></a>

```typescript
public readonly revision: CodedeployDeploymentGroupDeploymentRevisionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference">CodedeployDeploymentGroupDeploymentRevisionOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `ignoreApplicationStopFailuresInput`<sup>Optional</sup> <a name="ignoreApplicationStopFailuresInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.ignoreApplicationStopFailuresInput"></a>

```typescript
public readonly ignoreApplicationStopFailuresInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `revisionInput`<sup>Optional</sup> <a name="revisionInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.revisionInput"></a>

```typescript
public readonly revisionInput: IResolvable | CodedeployDeploymentGroupDeploymentRevision;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevision">CodedeployDeploymentGroupDeploymentRevision</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `ignoreApplicationStopFailures`<sup>Required</sup> <a name="ignoreApplicationStopFailures" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.ignoreApplicationStopFailures"></a>

```typescript
public readonly ignoreApplicationStopFailures: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodedeployDeploymentGroupDeployment;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeployment">CodedeployDeploymentGroupDeployment</a>

---


### CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference <a name="CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

new codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.resetCommitId">resetCommitId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.resetRepository">resetRepository</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCommitId` <a name="resetCommitId" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.resetCommitId"></a>

```typescript
public resetCommitId(): void
```

##### `resetRepository` <a name="resetRepository" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.resetRepository"></a>

```typescript
public resetRepository(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.property.commitIdInput">commitIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.property.repositoryInput">repositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.property.commitId">commitId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.property.repository">repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocation">CodedeployDeploymentGroupDeploymentRevisionGitHubLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commitIdInput`<sup>Optional</sup> <a name="commitIdInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.property.commitIdInput"></a>

```typescript
public readonly commitIdInput: string;
```

- *Type:* string

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.property.repositoryInput"></a>

```typescript
public readonly repositoryInput: string;
```

- *Type:* string

---

##### `commitId`<sup>Required</sup> <a name="commitId" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.property.commitId"></a>

```typescript
public readonly commitId: string;
```

- *Type:* string

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodedeployDeploymentGroupDeploymentRevisionGitHubLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocation">CodedeployDeploymentGroupDeploymentRevisionGitHubLocation</a>

---


### CodedeployDeploymentGroupDeploymentRevisionOutputReference <a name="CodedeployDeploymentGroupDeploymentRevisionOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

new codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.putGitHubLocation">putGitHubLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.putS3Location">putS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.resetGitHubLocation">resetGitHubLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.resetRevisionType">resetRevisionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.resetS3Location">resetS3Location</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGitHubLocation` <a name="putGitHubLocation" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.putGitHubLocation"></a>

```typescript
public putGitHubLocation(value: CodedeployDeploymentGroupDeploymentRevisionGitHubLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.putGitHubLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocation">CodedeployDeploymentGroupDeploymentRevisionGitHubLocation</a>

---

##### `putS3Location` <a name="putS3Location" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.putS3Location"></a>

```typescript
public putS3Location(value: CodedeployDeploymentGroupDeploymentRevisionS3Location): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.putS3Location.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location">CodedeployDeploymentGroupDeploymentRevisionS3Location</a>

---

##### `resetGitHubLocation` <a name="resetGitHubLocation" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.resetGitHubLocation"></a>

```typescript
public resetGitHubLocation(): void
```

##### `resetRevisionType` <a name="resetRevisionType" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.resetRevisionType"></a>

```typescript
public resetRevisionType(): void
```

##### `resetS3Location` <a name="resetS3Location" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.resetS3Location"></a>

```typescript
public resetS3Location(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.gitHubLocation">gitHubLocation</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference">CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.s3Location">s3Location</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference">CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.gitHubLocationInput">gitHubLocationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocation">CodedeployDeploymentGroupDeploymentRevisionGitHubLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.revisionTypeInput">revisionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.s3LocationInput">s3LocationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location">CodedeployDeploymentGroupDeploymentRevisionS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.revisionType">revisionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevision">CodedeployDeploymentGroupDeploymentRevision</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gitHubLocation`<sup>Required</sup> <a name="gitHubLocation" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.gitHubLocation"></a>

```typescript
public readonly gitHubLocation: CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference">CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference</a>

---

##### `s3Location`<sup>Required</sup> <a name="s3Location" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.s3Location"></a>

```typescript
public readonly s3Location: CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference">CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference</a>

---

##### `gitHubLocationInput`<sup>Optional</sup> <a name="gitHubLocationInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.gitHubLocationInput"></a>

```typescript
public readonly gitHubLocationInput: IResolvable | CodedeployDeploymentGroupDeploymentRevisionGitHubLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocation">CodedeployDeploymentGroupDeploymentRevisionGitHubLocation</a>

---

##### `revisionTypeInput`<sup>Optional</sup> <a name="revisionTypeInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.revisionTypeInput"></a>

```typescript
public readonly revisionTypeInput: string;
```

- *Type:* string

---

##### `s3LocationInput`<sup>Optional</sup> <a name="s3LocationInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.s3LocationInput"></a>

```typescript
public readonly s3LocationInput: IResolvable | CodedeployDeploymentGroupDeploymentRevisionS3Location;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location">CodedeployDeploymentGroupDeploymentRevisionS3Location</a>

---

##### `revisionType`<sup>Required</sup> <a name="revisionType" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.revisionType"></a>

```typescript
public readonly revisionType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodedeployDeploymentGroupDeploymentRevision;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevision">CodedeployDeploymentGroupDeploymentRevision</a>

---


### CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference <a name="CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

new codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.resetBundleType">resetBundleType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.resetETag">resetETag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetBundleType` <a name="resetBundleType" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.resetBundleType"></a>

```typescript
public resetBundleType(): void
```

##### `resetETag` <a name="resetETag" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.resetETag"></a>

```typescript
public resetETag(): void
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.bundleTypeInput">bundleTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.eTagInput">eTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.bundleType">bundleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.eTag">eTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location">CodedeployDeploymentGroupDeploymentRevisionS3Location</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `bundleTypeInput`<sup>Optional</sup> <a name="bundleTypeInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.bundleTypeInput"></a>

```typescript
public readonly bundleTypeInput: string;
```

- *Type:* string

---

##### `eTagInput`<sup>Optional</sup> <a name="eTagInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.eTagInput"></a>

```typescript
public readonly eTagInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `bundleType`<sup>Required</sup> <a name="bundleType" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.bundleType"></a>

```typescript
public readonly bundleType: string;
```

- *Type:* string

---

##### `eTag`<sup>Required</sup> <a name="eTag" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.eTag"></a>

```typescript
public readonly eTag: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodedeployDeploymentGroupDeploymentRevisionS3Location;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location">CodedeployDeploymentGroupDeploymentRevisionS3Location</a>

---


### CodedeployDeploymentGroupDeploymentStyleOutputReference <a name="CodedeployDeploymentGroupDeploymentStyleOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

new codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.resetDeploymentOption">resetDeploymentOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.resetDeploymentType">resetDeploymentType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeploymentOption` <a name="resetDeploymentOption" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.resetDeploymentOption"></a>

```typescript
public resetDeploymentOption(): void
```

##### `resetDeploymentType` <a name="resetDeploymentType" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.resetDeploymentType"></a>

```typescript
public resetDeploymentType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.deploymentOptionInput">deploymentOptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.deploymentTypeInput">deploymentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.deploymentOption">deploymentOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.deploymentType">deploymentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle">CodedeployDeploymentGroupDeploymentStyle</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deploymentOptionInput`<sup>Optional</sup> <a name="deploymentOptionInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.deploymentOptionInput"></a>

```typescript
public readonly deploymentOptionInput: string;
```

- *Type:* string

---

##### `deploymentTypeInput`<sup>Optional</sup> <a name="deploymentTypeInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.deploymentTypeInput"></a>

```typescript
public readonly deploymentTypeInput: string;
```

- *Type:* string

---

##### `deploymentOption`<sup>Required</sup> <a name="deploymentOption" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.deploymentOption"></a>

```typescript
public readonly deploymentOption: string;
```

- *Type:* string

---

##### `deploymentType`<sup>Required</sup> <a name="deploymentType" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.deploymentType"></a>

```typescript
public readonly deploymentType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodedeployDeploymentGroupDeploymentStyle;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle">CodedeployDeploymentGroupDeploymentStyle</a>

---


### CodedeployDeploymentGroupEc2TagFiltersList <a name="CodedeployDeploymentGroupEc2TagFiltersList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

new codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.get"></a>

```typescript
public get(index: number): CodedeployDeploymentGroupEc2TagFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilters">CodedeployDeploymentGroupEc2TagFilters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodedeployDeploymentGroupEc2TagFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilters">CodedeployDeploymentGroupEc2TagFilters</a>[]

---


### CodedeployDeploymentGroupEc2TagFiltersOutputReference <a name="CodedeployDeploymentGroupEc2TagFiltersOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

new codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.resetType"></a>

```typescript
public resetType(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilters">CodedeployDeploymentGroupEc2TagFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodedeployDeploymentGroupEc2TagFilters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilters">CodedeployDeploymentGroupEc2TagFilters</a>

---


### CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList <a name="CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

new codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.get"></a>

```typescript
public get(index: number): CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup">CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup">CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup</a>[]

---


### CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference <a name="CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

new codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.resetType"></a>

```typescript
public resetType(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup">CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup">CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup</a>

---


### CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList <a name="CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

new codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.get"></a>

```typescript
public get(index: number): CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct">CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct">CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct</a>[]

---


### CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference <a name="CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

new codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.putEc2TagGroup">putEc2TagGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.resetEc2TagGroup">resetEc2TagGroup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEc2TagGroup` <a name="putEc2TagGroup" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.putEc2TagGroup"></a>

```typescript
public putEc2TagGroup(value: IResolvable | CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.putEc2TagGroup.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup">CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup</a>[]

---

##### `resetEc2TagGroup` <a name="resetEc2TagGroup" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.resetEc2TagGroup"></a>

```typescript
public resetEc2TagGroup(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.property.ec2TagGroup">ec2TagGroup</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList">CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.property.ec2TagGroupInput">ec2TagGroupInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup">CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct">CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ec2TagGroup`<sup>Required</sup> <a name="ec2TagGroup" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.property.ec2TagGroup"></a>

```typescript
public readonly ec2TagGroup: CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList;
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList">CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList</a>

---

##### `ec2TagGroupInput`<sup>Optional</sup> <a name="ec2TagGroupInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.property.ec2TagGroupInput"></a>

```typescript
public readonly ec2TagGroupInput: IResolvable | CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup">CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct">CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct</a>

---


### CodedeployDeploymentGroupEc2TagSetOutputReference <a name="CodedeployDeploymentGroupEc2TagSetOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

new codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.putEc2TagSetList">putEc2TagSetList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.resetEc2TagSetList">resetEc2TagSetList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEc2TagSetList` <a name="putEc2TagSetList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.putEc2TagSetList"></a>

```typescript
public putEc2TagSetList(value: IResolvable | CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.putEc2TagSetList.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct">CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct</a>[]

---

##### `resetEc2TagSetList` <a name="resetEc2TagSetList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.resetEc2TagSetList"></a>

```typescript
public resetEc2TagSetList(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.ec2TagSetList">ec2TagSetList</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList">CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.ec2TagSetListInput">ec2TagSetListInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct">CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet">CodedeployDeploymentGroupEc2TagSet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ec2TagSetList`<sup>Required</sup> <a name="ec2TagSetList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.ec2TagSetList"></a>

```typescript
public readonly ec2TagSetList: CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList;
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList">CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList</a>

---

##### `ec2TagSetListInput`<sup>Optional</sup> <a name="ec2TagSetListInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.ec2TagSetListInput"></a>

```typescript
public readonly ec2TagSetListInput: IResolvable | CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct">CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodedeployDeploymentGroupEc2TagSet;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet">CodedeployDeploymentGroupEc2TagSet</a>

---


### CodedeployDeploymentGroupEcsServicesList <a name="CodedeployDeploymentGroupEcsServicesList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

new codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.get"></a>

```typescript
public get(index: number): CodedeployDeploymentGroupEcsServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServices">CodedeployDeploymentGroupEcsServices</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodedeployDeploymentGroupEcsServices[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServices">CodedeployDeploymentGroupEcsServices</a>[]

---


### CodedeployDeploymentGroupEcsServicesOutputReference <a name="CodedeployDeploymentGroupEcsServicesOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

new codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.resetClusterName">resetClusterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.resetServiceName">resetServiceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClusterName` <a name="resetClusterName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.resetClusterName"></a>

```typescript
public resetClusterName(): void
```

##### `resetServiceName` <a name="resetServiceName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.resetServiceName"></a>

```typescript
public resetServiceName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.property.clusterNameInput">clusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.property.clusterName">clusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServices">CodedeployDeploymentGroupEcsServices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.property.clusterNameInput"></a>

```typescript
public readonly clusterNameInput: string;
```

- *Type:* string

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.property.serviceNameInput"></a>

```typescript
public readonly serviceNameInput: string;
```

- *Type:* string

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodedeployDeploymentGroupEcsServices;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServices">CodedeployDeploymentGroupEcsServices</a>

---


### CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList <a name="CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

new codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.get"></a>

```typescript
public get(index: number): CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct</a>[]

---


### CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference <a name="CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

new codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct</a>

---


### CodedeployDeploymentGroupLoadBalancerInfoOutputReference <a name="CodedeployDeploymentGroupLoadBalancerInfoOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

new codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.putElbInfoList">putElbInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.putTargetGroupInfoList">putTargetGroupInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.putTargetGroupPairInfoList">putTargetGroupPairInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.resetElbInfoList">resetElbInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.resetTargetGroupInfoList">resetTargetGroupInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.resetTargetGroupPairInfoList">resetTargetGroupPairInfoList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putElbInfoList` <a name="putElbInfoList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.putElbInfoList"></a>

```typescript
public putElbInfoList(value: IResolvable | CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.putElbInfoList.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct</a>[]

---

##### `putTargetGroupInfoList` <a name="putTargetGroupInfoList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.putTargetGroupInfoList"></a>

```typescript
public putTargetGroupInfoList(value: IResolvable | CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.putTargetGroupInfoList.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct</a>[]

---

##### `putTargetGroupPairInfoList` <a name="putTargetGroupPairInfoList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.putTargetGroupPairInfoList"></a>

```typescript
public putTargetGroupPairInfoList(value: IResolvable | CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.putTargetGroupPairInfoList.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct</a>[]

---

##### `resetElbInfoList` <a name="resetElbInfoList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.resetElbInfoList"></a>

```typescript
public resetElbInfoList(): void
```

##### `resetTargetGroupInfoList` <a name="resetTargetGroupInfoList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.resetTargetGroupInfoList"></a>

```typescript
public resetTargetGroupInfoList(): void
```

##### `resetTargetGroupPairInfoList` <a name="resetTargetGroupPairInfoList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.resetTargetGroupPairInfoList"></a>

```typescript
public resetTargetGroupPairInfoList(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.elbInfoList">elbInfoList</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList">CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.targetGroupInfoList">targetGroupInfoList</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.targetGroupPairInfoList">targetGroupPairInfoList</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.elbInfoListInput">elbInfoListInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.targetGroupInfoListInput">targetGroupInfoListInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.targetGroupPairInfoListInput">targetGroupPairInfoListInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo">CodedeployDeploymentGroupLoadBalancerInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `elbInfoList`<sup>Required</sup> <a name="elbInfoList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.elbInfoList"></a>

```typescript
public readonly elbInfoList: CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList;
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList">CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList</a>

---

##### `targetGroupInfoList`<sup>Required</sup> <a name="targetGroupInfoList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.targetGroupInfoList"></a>

```typescript
public readonly targetGroupInfoList: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList;
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList</a>

---

##### `targetGroupPairInfoList`<sup>Required</sup> <a name="targetGroupPairInfoList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.targetGroupPairInfoList"></a>

```typescript
public readonly targetGroupPairInfoList: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList;
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList</a>

---

##### `elbInfoListInput`<sup>Optional</sup> <a name="elbInfoListInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.elbInfoListInput"></a>

```typescript
public readonly elbInfoListInput: IResolvable | CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct</a>[]

---

##### `targetGroupInfoListInput`<sup>Optional</sup> <a name="targetGroupInfoListInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.targetGroupInfoListInput"></a>

```typescript
public readonly targetGroupInfoListInput: IResolvable | CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct</a>[]

---

##### `targetGroupPairInfoListInput`<sup>Optional</sup> <a name="targetGroupPairInfoListInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.targetGroupPairInfoListInput"></a>

```typescript
public readonly targetGroupPairInfoListInput: IResolvable | CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodedeployDeploymentGroupLoadBalancerInfo;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo">CodedeployDeploymentGroupLoadBalancerInfo</a>

---


### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

new codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.get"></a>

```typescript
public get(index: number): CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct</a>[]

---


### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

new codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct</a>

---


### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

new codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.resetListenerArns">resetListenerArns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetListenerArns` <a name="resetListenerArns" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.resetListenerArns"></a>

```typescript
public resetListenerArns(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.property.listenerArnsInput">listenerArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.property.listenerArns">listenerArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `listenerArnsInput`<sup>Optional</sup> <a name="listenerArnsInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.property.listenerArnsInput"></a>

```typescript
public readonly listenerArnsInput: string[];
```

- *Type:* string[]

---

##### `listenerArns`<sup>Required</sup> <a name="listenerArns" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.property.listenerArns"></a>

```typescript
public readonly listenerArns: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute</a>

---


### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

new codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.get"></a>

```typescript
public get(index: number): CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct</a>[]

---


### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

new codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.putProdTrafficRoute">putProdTrafficRoute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.putTargetGroups">putTargetGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.putTestTrafficRoute">putTestTrafficRoute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.resetProdTrafficRoute">resetProdTrafficRoute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.resetTargetGroups">resetTargetGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.resetTestTrafficRoute">resetTestTrafficRoute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProdTrafficRoute` <a name="putProdTrafficRoute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.putProdTrafficRoute"></a>

```typescript
public putProdTrafficRoute(value: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.putProdTrafficRoute.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute</a>

---

##### `putTargetGroups` <a name="putTargetGroups" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.putTargetGroups"></a>

```typescript
public putTargetGroups(value: IResolvable | CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.putTargetGroups.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups</a>[]

---

##### `putTestTrafficRoute` <a name="putTestTrafficRoute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.putTestTrafficRoute"></a>

```typescript
public putTestTrafficRoute(value: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.putTestTrafficRoute.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute</a>

---

##### `resetProdTrafficRoute` <a name="resetProdTrafficRoute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.resetProdTrafficRoute"></a>

```typescript
public resetProdTrafficRoute(): void
```

##### `resetTargetGroups` <a name="resetTargetGroups" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.resetTargetGroups"></a>

```typescript
public resetTargetGroups(): void
```

##### `resetTestTrafficRoute` <a name="resetTestTrafficRoute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.resetTestTrafficRoute"></a>

```typescript
public resetTestTrafficRoute(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.prodTrafficRoute">prodTrafficRoute</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.targetGroups">targetGroups</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.testTrafficRoute">testTrafficRoute</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.prodTrafficRouteInput">prodTrafficRouteInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.targetGroupsInput">targetGroupsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.testTrafficRouteInput">testTrafficRouteInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `prodTrafficRoute`<sup>Required</sup> <a name="prodTrafficRoute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.prodTrafficRoute"></a>

```typescript
public readonly prodTrafficRoute: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference</a>

---

##### `targetGroups`<sup>Required</sup> <a name="targetGroups" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.targetGroups"></a>

```typescript
public readonly targetGroups: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList</a>

---

##### `testTrafficRoute`<sup>Required</sup> <a name="testTrafficRoute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.testTrafficRoute"></a>

```typescript
public readonly testTrafficRoute: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference</a>

---

##### `prodTrafficRouteInput`<sup>Optional</sup> <a name="prodTrafficRouteInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.prodTrafficRouteInput"></a>

```typescript
public readonly prodTrafficRouteInput: IResolvable | CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute</a>

---

##### `targetGroupsInput`<sup>Optional</sup> <a name="targetGroupsInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.targetGroupsInput"></a>

```typescript
public readonly targetGroupsInput: IResolvable | CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups</a>[]

---

##### `testTrafficRouteInput`<sup>Optional</sup> <a name="testTrafficRouteInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.testTrafficRouteInput"></a>

```typescript
public readonly testTrafficRouteInput: IResolvable | CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct</a>

---


### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

new codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.get"></a>

```typescript
public get(index: number): CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups</a>[]

---


### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

new codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups</a>

---


### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

new codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.resetListenerArns">resetListenerArns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetListenerArns` <a name="resetListenerArns" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.resetListenerArns"></a>

```typescript
public resetListenerArns(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.property.listenerArnsInput">listenerArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.property.listenerArns">listenerArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `listenerArnsInput`<sup>Optional</sup> <a name="listenerArnsInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.property.listenerArnsInput"></a>

```typescript
public readonly listenerArnsInput: string[];
```

- *Type:* string[]

---

##### `listenerArns`<sup>Required</sup> <a name="listenerArns" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.property.listenerArns"></a>

```typescript
public readonly listenerArns: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute</a>

---


### CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList <a name="CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

new codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.get"></a>

```typescript
public get(index: number): CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilters">CodedeployDeploymentGroupOnPremisesInstanceTagFilters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodedeployDeploymentGroupOnPremisesInstanceTagFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilters">CodedeployDeploymentGroupOnPremisesInstanceTagFilters</a>[]

---


### CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference <a name="CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

new codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.resetType"></a>

```typescript
public resetType(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilters">CodedeployDeploymentGroupOnPremisesInstanceTagFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodedeployDeploymentGroupOnPremisesInstanceTagFilters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilters">CodedeployDeploymentGroupOnPremisesInstanceTagFilters</a>

---


### CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList <a name="CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

new codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.get"></a>

```typescript
public get(index: number): CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup</a>[]

---


### CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference <a name="CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

new codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.resetType"></a>

```typescript
public resetType(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup</a>

---


### CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList <a name="CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

new codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.get"></a>

```typescript
public get(index: number): CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct</a>[]

---


### CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference <a name="CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

new codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.putOnPremisesTagGroup">putOnPremisesTagGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.resetOnPremisesTagGroup">resetOnPremisesTagGroup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOnPremisesTagGroup` <a name="putOnPremisesTagGroup" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.putOnPremisesTagGroup"></a>

```typescript
public putOnPremisesTagGroup(value: IResolvable | CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.putOnPremisesTagGroup.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup</a>[]

---

##### `resetOnPremisesTagGroup` <a name="resetOnPremisesTagGroup" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.resetOnPremisesTagGroup"></a>

```typescript
public resetOnPremisesTagGroup(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.property.onPremisesTagGroup">onPremisesTagGroup</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.property.onPremisesTagGroupInput">onPremisesTagGroupInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `onPremisesTagGroup`<sup>Required</sup> <a name="onPremisesTagGroup" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.property.onPremisesTagGroup"></a>

```typescript
public readonly onPremisesTagGroup: CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList;
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList</a>

---

##### `onPremisesTagGroupInput`<sup>Optional</sup> <a name="onPremisesTagGroupInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.property.onPremisesTagGroupInput"></a>

```typescript
public readonly onPremisesTagGroupInput: IResolvable | CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct</a>

---


### CodedeployDeploymentGroupOnPremisesTagSetOutputReference <a name="CodedeployDeploymentGroupOnPremisesTagSetOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

new codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.putOnPremisesTagSetList">putOnPremisesTagSetList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.resetOnPremisesTagSetList">resetOnPremisesTagSetList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOnPremisesTagSetList` <a name="putOnPremisesTagSetList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.putOnPremisesTagSetList"></a>

```typescript
public putOnPremisesTagSetList(value: IResolvable | CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.putOnPremisesTagSetList.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct</a>[]

---

##### `resetOnPremisesTagSetList` <a name="resetOnPremisesTagSetList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.resetOnPremisesTagSetList"></a>

```typescript
public resetOnPremisesTagSetList(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.property.onPremisesTagSetList">onPremisesTagSetList</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.property.onPremisesTagSetListInput">onPremisesTagSetListInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSet">CodedeployDeploymentGroupOnPremisesTagSet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `onPremisesTagSetList`<sup>Required</sup> <a name="onPremisesTagSetList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.property.onPremisesTagSetList"></a>

```typescript
public readonly onPremisesTagSetList: CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList;
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList</a>

---

##### `onPremisesTagSetListInput`<sup>Optional</sup> <a name="onPremisesTagSetListInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.property.onPremisesTagSetListInput"></a>

```typescript
public readonly onPremisesTagSetListInput: IResolvable | CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodedeployDeploymentGroupOnPremisesTagSet;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSet">CodedeployDeploymentGroupOnPremisesTagSet</a>

---


### CodedeployDeploymentGroupTagsList <a name="CodedeployDeploymentGroupTagsList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

new codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.get"></a>

```typescript
public get(index: number): CodedeployDeploymentGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTags">CodedeployDeploymentGroupTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodedeployDeploymentGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTags">CodedeployDeploymentGroupTags</a>[]

---


### CodedeployDeploymentGroupTagsOutputReference <a name="CodedeployDeploymentGroupTagsOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

new codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTags">CodedeployDeploymentGroupTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodedeployDeploymentGroupTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTags">CodedeployDeploymentGroupTags</a>

---


### CodedeployDeploymentGroupTriggerConfigurationsList <a name="CodedeployDeploymentGroupTriggerConfigurationsList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

new codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.get"></a>

```typescript
public get(index: number): CodedeployDeploymentGroupTriggerConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurations">CodedeployDeploymentGroupTriggerConfigurations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodedeployDeploymentGroupTriggerConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurations">CodedeployDeploymentGroupTriggerConfigurations</a>[]

---


### CodedeployDeploymentGroupTriggerConfigurationsOutputReference <a name="CodedeployDeploymentGroupTriggerConfigurationsOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktn/provider-awscc'

new codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.resetTriggerEvents">resetTriggerEvents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.resetTriggerName">resetTriggerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.resetTriggerTargetArn">resetTriggerTargetArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTriggerEvents` <a name="resetTriggerEvents" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.resetTriggerEvents"></a>

```typescript
public resetTriggerEvents(): void
```

##### `resetTriggerName` <a name="resetTriggerName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.resetTriggerName"></a>

```typescript
public resetTriggerName(): void
```

##### `resetTriggerTargetArn` <a name="resetTriggerTargetArn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.resetTriggerTargetArn"></a>

```typescript
public resetTriggerTargetArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.triggerEventsInput">triggerEventsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.triggerNameInput">triggerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.triggerTargetArnInput">triggerTargetArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.triggerEvents">triggerEvents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.triggerName">triggerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.triggerTargetArn">triggerTargetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurations">CodedeployDeploymentGroupTriggerConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `triggerEventsInput`<sup>Optional</sup> <a name="triggerEventsInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.triggerEventsInput"></a>

```typescript
public readonly triggerEventsInput: string[];
```

- *Type:* string[]

---

##### `triggerNameInput`<sup>Optional</sup> <a name="triggerNameInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.triggerNameInput"></a>

```typescript
public readonly triggerNameInput: string;
```

- *Type:* string

---

##### `triggerTargetArnInput`<sup>Optional</sup> <a name="triggerTargetArnInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.triggerTargetArnInput"></a>

```typescript
public readonly triggerTargetArnInput: string;
```

- *Type:* string

---

##### `triggerEvents`<sup>Required</sup> <a name="triggerEvents" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.triggerEvents"></a>

```typescript
public readonly triggerEvents: string[];
```

- *Type:* string[]

---

##### `triggerName`<sup>Required</sup> <a name="triggerName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.triggerName"></a>

```typescript
public readonly triggerName: string;
```

- *Type:* string

---

##### `triggerTargetArn`<sup>Required</sup> <a name="triggerTargetArn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.triggerTargetArn"></a>

```typescript
public readonly triggerTargetArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodedeployDeploymentGroupTriggerConfigurations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurations">CodedeployDeploymentGroupTriggerConfigurations</a>

---



