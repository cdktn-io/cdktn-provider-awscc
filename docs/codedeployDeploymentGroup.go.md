# `codedeployDeploymentGroup` Submodule <a name="`codedeployDeploymentGroup` Submodule" id="@cdktn/provider-awscc.codedeployDeploymentGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodedeployDeploymentGroup <a name="CodedeployDeploymentGroup" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group awscc_codedeploy_deployment_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

codedeploydeploymentgroup.NewCodedeployDeploymentGroup(scope Construct, id *string, config CodedeployDeploymentGroupConfig) CodedeployDeploymentGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig">CodedeployDeploymentGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig">CodedeployDeploymentGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putAlarmConfiguration">PutAlarmConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putAutoRollbackConfiguration">PutAutoRollbackConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putBlueGreenDeploymentConfiguration">PutBlueGreenDeploymentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putDeployment">PutDeployment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putDeploymentStyle">PutDeploymentStyle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putEc2TagFilters">PutEc2TagFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putEc2TagSet">PutEc2TagSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putEcsServices">PutEcsServices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putLoadBalancerInfo">PutLoadBalancerInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putOnPremisesInstanceTagFilters">PutOnPremisesInstanceTagFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putOnPremisesTagSet">PutOnPremisesTagSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putTriggerConfigurations">PutTriggerConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetAlarmConfiguration">ResetAlarmConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetAutoRollbackConfiguration">ResetAutoRollbackConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetAutoScalingGroups">ResetAutoScalingGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetBlueGreenDeploymentConfiguration">ResetBlueGreenDeploymentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetDeployment">ResetDeployment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetDeploymentConfigName">ResetDeploymentConfigName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetDeploymentGroupName">ResetDeploymentGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetDeploymentStyle">ResetDeploymentStyle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetEc2TagFilters">ResetEc2TagFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetEc2TagSet">ResetEc2TagSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetEcsServices">ResetEcsServices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetLoadBalancerInfo">ResetLoadBalancerInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetOnPremisesInstanceTagFilters">ResetOnPremisesInstanceTagFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetOnPremisesTagSet">ResetOnPremisesTagSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetOutdatedInstancesStrategy">ResetOutdatedInstancesStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetTerminationHookEnabled">ResetTerminationHookEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetTriggerConfigurations">ResetTriggerConfigurations</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAlarmConfiguration` <a name="PutAlarmConfiguration" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putAlarmConfiguration"></a>

```go
func PutAlarmConfiguration(value CodedeployDeploymentGroupAlarmConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putAlarmConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration">CodedeployDeploymentGroupAlarmConfiguration</a>

---

##### `PutAutoRollbackConfiguration` <a name="PutAutoRollbackConfiguration" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putAutoRollbackConfiguration"></a>

```go
func PutAutoRollbackConfiguration(value CodedeployDeploymentGroupAutoRollbackConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putAutoRollbackConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration">CodedeployDeploymentGroupAutoRollbackConfiguration</a>

---

##### `PutBlueGreenDeploymentConfiguration` <a name="PutBlueGreenDeploymentConfiguration" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putBlueGreenDeploymentConfiguration"></a>

```go
func PutBlueGreenDeploymentConfiguration(value CodedeployDeploymentGroupBlueGreenDeploymentConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putBlueGreenDeploymentConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfiguration">CodedeployDeploymentGroupBlueGreenDeploymentConfiguration</a>

---

##### `PutDeployment` <a name="PutDeployment" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putDeployment"></a>

```go
func PutDeployment(value CodedeployDeploymentGroupDeployment)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putDeployment.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeployment">CodedeployDeploymentGroupDeployment</a>

---

##### `PutDeploymentStyle` <a name="PutDeploymentStyle" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putDeploymentStyle"></a>

```go
func PutDeploymentStyle(value CodedeployDeploymentGroupDeploymentStyle)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putDeploymentStyle.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle">CodedeployDeploymentGroupDeploymentStyle</a>

---

##### `PutEc2TagFilters` <a name="PutEc2TagFilters" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putEc2TagFilters"></a>

```go
func PutEc2TagFilters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putEc2TagFilters.parameter.value"></a>

- *Type:* interface{}

---

##### `PutEc2TagSet` <a name="PutEc2TagSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putEc2TagSet"></a>

```go
func PutEc2TagSet(value CodedeployDeploymentGroupEc2TagSet)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putEc2TagSet.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet">CodedeployDeploymentGroupEc2TagSet</a>

---

##### `PutEcsServices` <a name="PutEcsServices" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putEcsServices"></a>

```go
func PutEcsServices(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putEcsServices.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLoadBalancerInfo` <a name="PutLoadBalancerInfo" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putLoadBalancerInfo"></a>

```go
func PutLoadBalancerInfo(value CodedeployDeploymentGroupLoadBalancerInfo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putLoadBalancerInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo">CodedeployDeploymentGroupLoadBalancerInfo</a>

---

##### `PutOnPremisesInstanceTagFilters` <a name="PutOnPremisesInstanceTagFilters" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putOnPremisesInstanceTagFilters"></a>

```go
func PutOnPremisesInstanceTagFilters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putOnPremisesInstanceTagFilters.parameter.value"></a>

- *Type:* interface{}

---

##### `PutOnPremisesTagSet` <a name="PutOnPremisesTagSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putOnPremisesTagSet"></a>

```go
func PutOnPremisesTagSet(value CodedeployDeploymentGroupOnPremisesTagSet)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putOnPremisesTagSet.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSet">CodedeployDeploymentGroupOnPremisesTagSet</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTriggerConfigurations` <a name="PutTriggerConfigurations" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putTriggerConfigurations"></a>

```go
func PutTriggerConfigurations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.putTriggerConfigurations.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAlarmConfiguration` <a name="ResetAlarmConfiguration" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetAlarmConfiguration"></a>

```go
func ResetAlarmConfiguration()
```

##### `ResetAutoRollbackConfiguration` <a name="ResetAutoRollbackConfiguration" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetAutoRollbackConfiguration"></a>

```go
func ResetAutoRollbackConfiguration()
```

##### `ResetAutoScalingGroups` <a name="ResetAutoScalingGroups" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetAutoScalingGroups"></a>

```go
func ResetAutoScalingGroups()
```

##### `ResetBlueGreenDeploymentConfiguration` <a name="ResetBlueGreenDeploymentConfiguration" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetBlueGreenDeploymentConfiguration"></a>

```go
func ResetBlueGreenDeploymentConfiguration()
```

##### `ResetDeployment` <a name="ResetDeployment" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetDeployment"></a>

```go
func ResetDeployment()
```

##### `ResetDeploymentConfigName` <a name="ResetDeploymentConfigName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetDeploymentConfigName"></a>

```go
func ResetDeploymentConfigName()
```

##### `ResetDeploymentGroupName` <a name="ResetDeploymentGroupName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetDeploymentGroupName"></a>

```go
func ResetDeploymentGroupName()
```

##### `ResetDeploymentStyle` <a name="ResetDeploymentStyle" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetDeploymentStyle"></a>

```go
func ResetDeploymentStyle()
```

##### `ResetEc2TagFilters` <a name="ResetEc2TagFilters" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetEc2TagFilters"></a>

```go
func ResetEc2TagFilters()
```

##### `ResetEc2TagSet` <a name="ResetEc2TagSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetEc2TagSet"></a>

```go
func ResetEc2TagSet()
```

##### `ResetEcsServices` <a name="ResetEcsServices" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetEcsServices"></a>

```go
func ResetEcsServices()
```

##### `ResetLoadBalancerInfo` <a name="ResetLoadBalancerInfo" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetLoadBalancerInfo"></a>

```go
func ResetLoadBalancerInfo()
```

##### `ResetOnPremisesInstanceTagFilters` <a name="ResetOnPremisesInstanceTagFilters" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetOnPremisesInstanceTagFilters"></a>

```go
func ResetOnPremisesInstanceTagFilters()
```

##### `ResetOnPremisesTagSet` <a name="ResetOnPremisesTagSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetOnPremisesTagSet"></a>

```go
func ResetOnPremisesTagSet()
```

##### `ResetOutdatedInstancesStrategy` <a name="ResetOutdatedInstancesStrategy" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetOutdatedInstancesStrategy"></a>

```go
func ResetOutdatedInstancesStrategy()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTerminationHookEnabled` <a name="ResetTerminationHookEnabled" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetTerminationHookEnabled"></a>

```go
func ResetTerminationHookEnabled()
```

##### `ResetTriggerConfigurations` <a name="ResetTriggerConfigurations" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetTriggerConfigurations"></a>

```go
func ResetTriggerConfigurations()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CodedeployDeploymentGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

codedeploydeploymentgroup.CodedeployDeploymentGroup_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

codedeploydeploymentgroup.CodedeployDeploymentGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

codedeploydeploymentgroup.CodedeployDeploymentGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

codedeploydeploymentgroup.CodedeployDeploymentGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CodedeployDeploymentGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CodedeployDeploymentGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CodedeployDeploymentGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CodedeployDeploymentGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.alarmConfiguration">AlarmConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference">CodedeployDeploymentGroupAlarmConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.autoRollbackConfiguration">AutoRollbackConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference">CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.blueGreenDeploymentConfiguration">BlueGreenDeploymentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deployment">Deployment</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference">CodedeployDeploymentGroupDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentStyle">DeploymentStyle</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference">CodedeployDeploymentGroupDeploymentStyleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ec2TagFilters">Ec2TagFilters</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList">CodedeployDeploymentGroupEc2TagFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ec2TagSet">Ec2TagSet</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference">CodedeployDeploymentGroupEc2TagSetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ecsServices">EcsServices</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList">CodedeployDeploymentGroupEcsServicesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.loadBalancerInfo">LoadBalancerInfo</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference">CodedeployDeploymentGroupLoadBalancerInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.onPremisesInstanceTagFilters">OnPremisesInstanceTagFilters</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList">CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.onPremisesTagSet">OnPremisesTagSet</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference">CodedeployDeploymentGroupOnPremisesTagSetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList">CodedeployDeploymentGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.triggerConfigurations">TriggerConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList">CodedeployDeploymentGroupTriggerConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.alarmConfigurationInput">AlarmConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.applicationNameInput">ApplicationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.autoRollbackConfigurationInput">AutoRollbackConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.autoScalingGroupsInput">AutoScalingGroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.blueGreenDeploymentConfigurationInput">BlueGreenDeploymentConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentConfigNameInput">DeploymentConfigNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentGroupNameInput">DeploymentGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentInput">DeploymentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentStyleInput">DeploymentStyleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ec2TagFiltersInput">Ec2TagFiltersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ec2TagSetInput">Ec2TagSetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ecsServicesInput">EcsServicesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.loadBalancerInfoInput">LoadBalancerInfoInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.onPremisesInstanceTagFiltersInput">OnPremisesInstanceTagFiltersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.onPremisesTagSetInput">OnPremisesTagSetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.outdatedInstancesStrategyInput">OutdatedInstancesStrategyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.serviceRoleArnInput">ServiceRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.terminationHookEnabledInput">TerminationHookEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.triggerConfigurationsInput">TriggerConfigurationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.applicationName">ApplicationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.autoScalingGroups">AutoScalingGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentConfigName">DeploymentConfigName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentGroupName">DeploymentGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.outdatedInstancesStrategy">OutdatedInstancesStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.serviceRoleArn">ServiceRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.terminationHookEnabled">TerminationHookEnabled</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AlarmConfiguration`<sup>Required</sup> <a name="AlarmConfiguration" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.alarmConfiguration"></a>

```go
func AlarmConfiguration() CodedeployDeploymentGroupAlarmConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference">CodedeployDeploymentGroupAlarmConfigurationOutputReference</a>

---

##### `AutoRollbackConfiguration`<sup>Required</sup> <a name="AutoRollbackConfiguration" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.autoRollbackConfiguration"></a>

```go
func AutoRollbackConfiguration() CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference">CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference</a>

---

##### `BlueGreenDeploymentConfiguration`<sup>Required</sup> <a name="BlueGreenDeploymentConfiguration" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.blueGreenDeploymentConfiguration"></a>

```go
func BlueGreenDeploymentConfiguration() CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference</a>

---

##### `Deployment`<sup>Required</sup> <a name="Deployment" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deployment"></a>

```go
func Deployment() CodedeployDeploymentGroupDeploymentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference">CodedeployDeploymentGroupDeploymentOutputReference</a>

---

##### `DeploymentStyle`<sup>Required</sup> <a name="DeploymentStyle" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentStyle"></a>

```go
func DeploymentStyle() CodedeployDeploymentGroupDeploymentStyleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference">CodedeployDeploymentGroupDeploymentStyleOutputReference</a>

---

##### `Ec2TagFilters`<sup>Required</sup> <a name="Ec2TagFilters" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ec2TagFilters"></a>

```go
func Ec2TagFilters() CodedeployDeploymentGroupEc2TagFiltersList
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList">CodedeployDeploymentGroupEc2TagFiltersList</a>

---

##### `Ec2TagSet`<sup>Required</sup> <a name="Ec2TagSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ec2TagSet"></a>

```go
func Ec2TagSet() CodedeployDeploymentGroupEc2TagSetOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference">CodedeployDeploymentGroupEc2TagSetOutputReference</a>

---

##### `EcsServices`<sup>Required</sup> <a name="EcsServices" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ecsServices"></a>

```go
func EcsServices() CodedeployDeploymentGroupEcsServicesList
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList">CodedeployDeploymentGroupEcsServicesList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LoadBalancerInfo`<sup>Required</sup> <a name="LoadBalancerInfo" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.loadBalancerInfo"></a>

```go
func LoadBalancerInfo() CodedeployDeploymentGroupLoadBalancerInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference">CodedeployDeploymentGroupLoadBalancerInfoOutputReference</a>

---

##### `OnPremisesInstanceTagFilters`<sup>Required</sup> <a name="OnPremisesInstanceTagFilters" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.onPremisesInstanceTagFilters"></a>

```go
func OnPremisesInstanceTagFilters() CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList">CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList</a>

---

##### `OnPremisesTagSet`<sup>Required</sup> <a name="OnPremisesTagSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.onPremisesTagSet"></a>

```go
func OnPremisesTagSet() CodedeployDeploymentGroupOnPremisesTagSetOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference">CodedeployDeploymentGroupOnPremisesTagSetOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.tags"></a>

```go
func Tags() CodedeployDeploymentGroupTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList">CodedeployDeploymentGroupTagsList</a>

---

##### `TriggerConfigurations`<sup>Required</sup> <a name="TriggerConfigurations" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.triggerConfigurations"></a>

```go
func TriggerConfigurations() CodedeployDeploymentGroupTriggerConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList">CodedeployDeploymentGroupTriggerConfigurationsList</a>

---

##### `AlarmConfigurationInput`<sup>Optional</sup> <a name="AlarmConfigurationInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.alarmConfigurationInput"></a>

```go
func AlarmConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `ApplicationNameInput`<sup>Optional</sup> <a name="ApplicationNameInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.applicationNameInput"></a>

```go
func ApplicationNameInput() *string
```

- *Type:* *string

---

##### `AutoRollbackConfigurationInput`<sup>Optional</sup> <a name="AutoRollbackConfigurationInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.autoRollbackConfigurationInput"></a>

```go
func AutoRollbackConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `AutoScalingGroupsInput`<sup>Optional</sup> <a name="AutoScalingGroupsInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.autoScalingGroupsInput"></a>

```go
func AutoScalingGroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `BlueGreenDeploymentConfigurationInput`<sup>Optional</sup> <a name="BlueGreenDeploymentConfigurationInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.blueGreenDeploymentConfigurationInput"></a>

```go
func BlueGreenDeploymentConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `DeploymentConfigNameInput`<sup>Optional</sup> <a name="DeploymentConfigNameInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentConfigNameInput"></a>

```go
func DeploymentConfigNameInput() *string
```

- *Type:* *string

---

##### `DeploymentGroupNameInput`<sup>Optional</sup> <a name="DeploymentGroupNameInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentGroupNameInput"></a>

```go
func DeploymentGroupNameInput() *string
```

- *Type:* *string

---

##### `DeploymentInput`<sup>Optional</sup> <a name="DeploymentInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentInput"></a>

```go
func DeploymentInput() interface{}
```

- *Type:* interface{}

---

##### `DeploymentStyleInput`<sup>Optional</sup> <a name="DeploymentStyleInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentStyleInput"></a>

```go
func DeploymentStyleInput() interface{}
```

- *Type:* interface{}

---

##### `Ec2TagFiltersInput`<sup>Optional</sup> <a name="Ec2TagFiltersInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ec2TagFiltersInput"></a>

```go
func Ec2TagFiltersInput() interface{}
```

- *Type:* interface{}

---

##### `Ec2TagSetInput`<sup>Optional</sup> <a name="Ec2TagSetInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ec2TagSetInput"></a>

```go
func Ec2TagSetInput() interface{}
```

- *Type:* interface{}

---

##### `EcsServicesInput`<sup>Optional</sup> <a name="EcsServicesInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ecsServicesInput"></a>

```go
func EcsServicesInput() interface{}
```

- *Type:* interface{}

---

##### `LoadBalancerInfoInput`<sup>Optional</sup> <a name="LoadBalancerInfoInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.loadBalancerInfoInput"></a>

```go
func LoadBalancerInfoInput() interface{}
```

- *Type:* interface{}

---

##### `OnPremisesInstanceTagFiltersInput`<sup>Optional</sup> <a name="OnPremisesInstanceTagFiltersInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.onPremisesInstanceTagFiltersInput"></a>

```go
func OnPremisesInstanceTagFiltersInput() interface{}
```

- *Type:* interface{}

---

##### `OnPremisesTagSetInput`<sup>Optional</sup> <a name="OnPremisesTagSetInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.onPremisesTagSetInput"></a>

```go
func OnPremisesTagSetInput() interface{}
```

- *Type:* interface{}

---

##### `OutdatedInstancesStrategyInput`<sup>Optional</sup> <a name="OutdatedInstancesStrategyInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.outdatedInstancesStrategyInput"></a>

```go
func OutdatedInstancesStrategyInput() *string
```

- *Type:* *string

---

##### `ServiceRoleArnInput`<sup>Optional</sup> <a name="ServiceRoleArnInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.serviceRoleArnInput"></a>

```go
func ServiceRoleArnInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TerminationHookEnabledInput`<sup>Optional</sup> <a name="TerminationHookEnabledInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.terminationHookEnabledInput"></a>

```go
func TerminationHookEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TriggerConfigurationsInput`<sup>Optional</sup> <a name="TriggerConfigurationsInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.triggerConfigurationsInput"></a>

```go
func TriggerConfigurationsInput() interface{}
```

- *Type:* interface{}

---

##### `ApplicationName`<sup>Required</sup> <a name="ApplicationName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.applicationName"></a>

```go
func ApplicationName() *string
```

- *Type:* *string

---

##### `AutoScalingGroups`<sup>Required</sup> <a name="AutoScalingGroups" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.autoScalingGroups"></a>

```go
func AutoScalingGroups() *[]*string
```

- *Type:* *[]*string

---

##### `DeploymentConfigName`<sup>Required</sup> <a name="DeploymentConfigName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentConfigName"></a>

```go
func DeploymentConfigName() *string
```

- *Type:* *string

---

##### `DeploymentGroupName`<sup>Required</sup> <a name="DeploymentGroupName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentGroupName"></a>

```go
func DeploymentGroupName() *string
```

- *Type:* *string

---

##### `OutdatedInstancesStrategy`<sup>Required</sup> <a name="OutdatedInstancesStrategy" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.outdatedInstancesStrategy"></a>

```go
func OutdatedInstancesStrategy() *string
```

- *Type:* *string

---

##### `ServiceRoleArn`<sup>Required</sup> <a name="ServiceRoleArn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.serviceRoleArn"></a>

```go
func ServiceRoleArn() *string
```

- *Type:* *string

---

##### `TerminationHookEnabled`<sup>Required</sup> <a name="TerminationHookEnabled" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.terminationHookEnabled"></a>

```go
func TerminationHookEnabled() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CodedeployDeploymentGroupAlarmConfiguration <a name="CodedeployDeploymentGroupAlarmConfiguration" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

&codedeploydeploymentgroup.CodedeployDeploymentGroupAlarmConfiguration {
	Alarms: interface{},
	Enabled: interface{},
	IgnorePollAlarmFailure: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration.property.alarms">Alarms</a></code> | <code>interface{}</code> | A list of alarms configured for the deployment or deployment group. A maximum of 10 alarms can be added. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration.property.enabled">Enabled</a></code> | <code>interface{}</code> | Indicates whether the alarm configuration is enabled. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration.property.ignorePollAlarmFailure">IgnorePollAlarmFailure</a></code> | <code>interface{}</code> | Indicates whether a deployment should continue if information about the current state of alarms cannot be retrieved from Amazon CloudWatch. |

---

##### `Alarms`<sup>Optional</sup> <a name="Alarms" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration.property.alarms"></a>

```go
Alarms interface{}
```

- *Type:* interface{}

A list of alarms configured for the deployment or deployment group. A maximum of 10 alarms can be added.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#alarms CodedeployDeploymentGroup#alarms}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Indicates whether the alarm configuration is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#enabled CodedeployDeploymentGroup#enabled}

---

##### `IgnorePollAlarmFailure`<sup>Optional</sup> <a name="IgnorePollAlarmFailure" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration.property.ignorePollAlarmFailure"></a>

```go
IgnorePollAlarmFailure interface{}
```

- *Type:* interface{}

Indicates whether a deployment should continue if information about the current state of alarms cannot be retrieved from Amazon CloudWatch.

The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#ignore_poll_alarm_failure CodedeployDeploymentGroup#ignore_poll_alarm_failure}

---

### CodedeployDeploymentGroupAlarmConfigurationAlarms <a name="CodedeployDeploymentGroupAlarmConfigurationAlarms" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarms.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

&codedeploydeploymentgroup.CodedeployDeploymentGroupAlarmConfigurationAlarms {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarms.property.name">Name</a></code> | <code>*string</code> | The name of the alarm. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarms.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the alarm.

Maximum length is 255 characters. Each alarm name can be used only once in a list of alarms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#name CodedeployDeploymentGroup#name}

---

### CodedeployDeploymentGroupAutoRollbackConfiguration <a name="CodedeployDeploymentGroupAutoRollbackConfiguration" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

&codedeploydeploymentgroup.CodedeployDeploymentGroupAutoRollbackConfiguration {
	Enabled: interface{},
	Events: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration.property.enabled">Enabled</a></code> | <code>interface{}</code> | Indicates whether a defined automatic rollback configuration is currently enabled. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration.property.events">Events</a></code> | <code>*[]*string</code> | The event type or types that trigger a rollback. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Indicates whether a defined automatic rollback configuration is currently enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#enabled CodedeployDeploymentGroup#enabled}

---

##### `Events`<sup>Optional</sup> <a name="Events" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration.property.events"></a>

```go
Events *[]*string
```

- *Type:* *[]*string

The event type or types that trigger a rollback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#events CodedeployDeploymentGroup#events}

---

### CodedeployDeploymentGroupBlueGreenDeploymentConfiguration <a name="CodedeployDeploymentGroupBlueGreenDeploymentConfiguration" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

&codedeploydeploymentgroup.CodedeployDeploymentGroupBlueGreenDeploymentConfiguration {
	DeploymentReadyOption: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption,
	GreenFleetProvisioningOption: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption,
	TerminateBlueInstancesOnDeploymentSuccess: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfiguration.property.deploymentReadyOption">DeploymentReadyOption</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption</a></code> | Information about the action to take when newly provisioned instances are ready to receive traffic in a blue/green deployment. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfiguration.property.greenFleetProvisioningOption">GreenFleetProvisioningOption</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption</a></code> | Information about how instances are provisioned for a replacement environment in a blue/green deployment. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfiguration.property.terminateBlueInstancesOnDeploymentSuccess">TerminateBlueInstancesOnDeploymentSuccess</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess</a></code> | Information about whether to terminate instances in the original fleet during a blue/green deployment. |

---

##### `DeploymentReadyOption`<sup>Optional</sup> <a name="DeploymentReadyOption" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfiguration.property.deploymentReadyOption"></a>

```go
DeploymentReadyOption CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption</a>

Information about the action to take when newly provisioned instances are ready to receive traffic in a blue/green deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#deployment_ready_option CodedeployDeploymentGroup#deployment_ready_option}

---

##### `GreenFleetProvisioningOption`<sup>Optional</sup> <a name="GreenFleetProvisioningOption" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfiguration.property.greenFleetProvisioningOption"></a>

```go
GreenFleetProvisioningOption CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption</a>

Information about how instances are provisioned for a replacement environment in a blue/green deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#green_fleet_provisioning_option CodedeployDeploymentGroup#green_fleet_provisioning_option}

---

##### `TerminateBlueInstancesOnDeploymentSuccess`<sup>Optional</sup> <a name="TerminateBlueInstancesOnDeploymentSuccess" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfiguration.property.terminateBlueInstancesOnDeploymentSuccess"></a>

```go
TerminateBlueInstancesOnDeploymentSuccess CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess</a>

Information about whether to terminate instances in the original fleet during a blue/green deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#terminate_blue_instances_on_deployment_success CodedeployDeploymentGroup#terminate_blue_instances_on_deployment_success}

---

### CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption <a name="CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

&codedeploydeploymentgroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption {
	ActionOnTimeout: *string,
	WaitTimeInMinutes: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption.property.actionOnTimeout">ActionOnTimeout</a></code> | <code>*string</code> | Information about when to reroute traffic from an original environment to a replacement environment in a blue/green deployment. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption.property.waitTimeInMinutes">WaitTimeInMinutes</a></code> | <code>*f64</code> | The number of minutes to wait before the status of a blue/green deployment is changed to Stopped if rerouting is not started manually. |

---

##### `ActionOnTimeout`<sup>Optional</sup> <a name="ActionOnTimeout" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption.property.actionOnTimeout"></a>

```go
ActionOnTimeout *string
```

- *Type:* *string

Information about when to reroute traffic from an original environment to a replacement environment in a blue/green deployment.

CONTINUE_DEPLOYMENT: Register new instances with the load balancer immediately after the new application revision is installed on the instances in the replacement environment. STOP_DEPLOYMENT: Do not register new instances with a load balancer unless traffic rerouting is started using ContinueDeployment . If traffic rerouting is not started before the end of the specified wait period, the deployment status is changed to Stopped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#action_on_timeout CodedeployDeploymentGroup#action_on_timeout}

---

##### `WaitTimeInMinutes`<sup>Optional</sup> <a name="WaitTimeInMinutes" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption.property.waitTimeInMinutes"></a>

```go
WaitTimeInMinutes *f64
```

- *Type:* *f64

The number of minutes to wait before the status of a blue/green deployment is changed to Stopped if rerouting is not started manually.

Applies only to the STOP_DEPLOYMENT option for actionOnTimeout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#wait_time_in_minutes CodedeployDeploymentGroup#wait_time_in_minutes}

---

### CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption <a name="CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

&codedeploydeploymentgroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption {
	Action: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption.property.action">Action</a></code> | <code>*string</code> | The method used to add instances to a replacement environment. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption.property.action"></a>

```go
Action *string
```

- *Type:* *string

The method used to add instances to a replacement environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#action CodedeployDeploymentGroup#action}

---

### CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess <a name="CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

&codedeploydeploymentgroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess {
	Action: *string,
	TerminationWaitTimeInMinutes: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess.property.action">Action</a></code> | <code>*string</code> | The action to take on instances in the original environment after a successful blue/green deployment. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess.property.terminationWaitTimeInMinutes">TerminationWaitTimeInMinutes</a></code> | <code>*f64</code> | For an Amazon EC2 deployment, the number of minutes to wait after a successful blue/green deployment before terminating instances from the original environment. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess.property.action"></a>

```go
Action *string
```

- *Type:* *string

The action to take on instances in the original environment after a successful blue/green deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#action CodedeployDeploymentGroup#action}

---

##### `TerminationWaitTimeInMinutes`<sup>Optional</sup> <a name="TerminationWaitTimeInMinutes" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess.property.terminationWaitTimeInMinutes"></a>

```go
TerminationWaitTimeInMinutes *f64
```

- *Type:* *f64

For an Amazon EC2 deployment, the number of minutes to wait after a successful blue/green deployment before terminating instances from the original environment.

For an Amazon ECS deployment, the number of minutes before deleting the original (blue) task set. During an Amazon ECS deployment, CodeDeploy shifts traffic from the original (blue) task set to a replacement (green) task set. The maximum setting is 2880 minutes (2 days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#termination_wait_time_in_minutes CodedeployDeploymentGroup#termination_wait_time_in_minutes}

---

### CodedeployDeploymentGroupConfig <a name="CodedeployDeploymentGroupConfig" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

&codedeploydeploymentgroup.CodedeployDeploymentGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ApplicationName: *string,
	ServiceRoleArn: *string,
	AlarmConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration,
	AutoRollbackConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration,
	AutoScalingGroups: *[]*string,
	BlueGreenDeploymentConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfiguration,
	Deployment: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeployment,
	DeploymentConfigName: *string,
	DeploymentGroupName: *string,
	DeploymentStyle: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle,
	Ec2TagFilters: interface{},
	Ec2TagSet: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet,
	EcsServices: interface{},
	LoadBalancerInfo: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo,
	OnPremisesInstanceTagFilters: interface{},
	OnPremisesTagSet: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSet,
	OutdatedInstancesStrategy: *string,
	Tags: interface{},
	TerminationHookEnabled: interface{},
	TriggerConfigurations: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.applicationName">ApplicationName</a></code> | <code>*string</code> | The name of an existing CodeDeploy application to associate this deployment group with. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.serviceRoleArn">ServiceRoleArn</a></code> | <code>*string</code> | A service role Amazon Resource Name (ARN) that grants CodeDeploy permission to make calls to AWS services on your behalf. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.alarmConfiguration">AlarmConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration">CodedeployDeploymentGroupAlarmConfiguration</a></code> | Information about the Amazon CloudWatch alarms that are associated with the deployment group. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.autoRollbackConfiguration">AutoRollbackConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration">CodedeployDeploymentGroupAutoRollbackConfiguration</a></code> | Information about the automatic rollback configuration that is associated with the deployment group. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.autoScalingGroups">AutoScalingGroups</a></code> | <code>*[]*string</code> | A list of associated Auto Scaling groups that CodeDeploy automatically deploys revisions to when new instances are created. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.blueGreenDeploymentConfiguration">BlueGreenDeploymentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfiguration">CodedeployDeploymentGroupBlueGreenDeploymentConfiguration</a></code> | Information about blue/green deployment options for a deployment group. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.deployment">Deployment</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeployment">CodedeployDeploymentGroupDeployment</a></code> | The application revision to deploy to this deployment group. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.deploymentConfigName">DeploymentConfigName</a></code> | <code>*string</code> | A deployment configuration name or a predefined configuration name. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.deploymentGroupName">DeploymentGroupName</a></code> | <code>*string</code> | A name for the deployment group. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.deploymentStyle">DeploymentStyle</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle">CodedeployDeploymentGroupDeploymentStyle</a></code> | Attributes that determine the type of deployment to run and whether to route deployment traffic behind a load balancer. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.ec2TagFilters">Ec2TagFilters</a></code> | <code>interface{}</code> | The Amazon EC2 tags that are already applied to Amazon EC2 instances that you want to include in the deployment group. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.ec2TagSet">Ec2TagSet</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet">CodedeployDeploymentGroupEc2TagSet</a></code> | Information about groups of tags applied to Amazon EC2 instances. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.ecsServices">EcsServices</a></code> | <code>interface{}</code> | The target Amazon ECS services in the deployment group. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.loadBalancerInfo">LoadBalancerInfo</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo">CodedeployDeploymentGroupLoadBalancerInfo</a></code> | Information about the load balancer to use in a deployment. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.onPremisesInstanceTagFilters">OnPremisesInstanceTagFilters</a></code> | <code>interface{}</code> | The on-premises instance tags already applied to on-premises instances that you want to include in the deployment group. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.onPremisesTagSet">OnPremisesTagSet</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSet">CodedeployDeploymentGroupOnPremisesTagSet</a></code> | Information about groups of tags applied to on-premises instances. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.outdatedInstancesStrategy">OutdatedInstancesStrategy</a></code> | <code>*string</code> | Indicates what happens when new Amazon EC2 instances are launched mid-deployment and do not receive the deployed application revision. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The metadata that you apply to CodeDeploy deployment groups to help you organize and categorize them. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.terminationHookEnabled">TerminationHookEnabled</a></code> | <code>interface{}</code> | Indicates whether the deployment group was configured to have CodeDeploy install a termination hook into an Auto Scaling group. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.triggerConfigurations">TriggerConfigurations</a></code> | <code>interface{}</code> | Information about triggers associated with the deployment group. Duplicates are not allowed. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApplicationName`<sup>Required</sup> <a name="ApplicationName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.applicationName"></a>

```go
ApplicationName *string
```

- *Type:* *string

The name of an existing CodeDeploy application to associate this deployment group with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#application_name CodedeployDeploymentGroup#application_name}

---

##### `ServiceRoleArn`<sup>Required</sup> <a name="ServiceRoleArn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.serviceRoleArn"></a>

```go
ServiceRoleArn *string
```

- *Type:* *string

A service role Amazon Resource Name (ARN) that grants CodeDeploy permission to make calls to AWS services on your behalf.

For more information, see 'Create a Service Role for AWS CodeDeploy' in the AWS CodeDeploy User Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#service_role_arn CodedeployDeploymentGroup#service_role_arn}

---

##### `AlarmConfiguration`<sup>Optional</sup> <a name="AlarmConfiguration" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.alarmConfiguration"></a>

```go
AlarmConfiguration CodedeployDeploymentGroupAlarmConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration">CodedeployDeploymentGroupAlarmConfiguration</a>

Information about the Amazon CloudWatch alarms that are associated with the deployment group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#alarm_configuration CodedeployDeploymentGroup#alarm_configuration}

---

##### `AutoRollbackConfiguration`<sup>Optional</sup> <a name="AutoRollbackConfiguration" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.autoRollbackConfiguration"></a>

```go
AutoRollbackConfiguration CodedeployDeploymentGroupAutoRollbackConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration">CodedeployDeploymentGroupAutoRollbackConfiguration</a>

Information about the automatic rollback configuration that is associated with the deployment group.

If you specify this property, don't specify the Deployment property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#auto_rollback_configuration CodedeployDeploymentGroup#auto_rollback_configuration}

---

##### `AutoScalingGroups`<sup>Optional</sup> <a name="AutoScalingGroups" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.autoScalingGroups"></a>

```go
AutoScalingGroups *[]*string
```

- *Type:* *[]*string

A list of associated Auto Scaling groups that CodeDeploy automatically deploys revisions to when new instances are created.

Duplicates are not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#auto_scaling_groups CodedeployDeploymentGroup#auto_scaling_groups}

---

##### `BlueGreenDeploymentConfiguration`<sup>Optional</sup> <a name="BlueGreenDeploymentConfiguration" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.blueGreenDeploymentConfiguration"></a>

```go
BlueGreenDeploymentConfiguration CodedeployDeploymentGroupBlueGreenDeploymentConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfiguration">CodedeployDeploymentGroupBlueGreenDeploymentConfiguration</a>

Information about blue/green deployment options for a deployment group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#blue_green_deployment_configuration CodedeployDeploymentGroup#blue_green_deployment_configuration}

---

##### `Deployment`<sup>Optional</sup> <a name="Deployment" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.deployment"></a>

```go
Deployment CodedeployDeploymentGroupDeployment
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeployment">CodedeployDeploymentGroupDeployment</a>

The application revision to deploy to this deployment group.

If you specify this property, your target application revision is deployed as soon as the provisioning process is complete. If you specify this property, don't specify the AutoRollbackConfiguration property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#deployment CodedeployDeploymentGroup#deployment}

---

##### `DeploymentConfigName`<sup>Optional</sup> <a name="DeploymentConfigName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.deploymentConfigName"></a>

```go
DeploymentConfigName *string
```

- *Type:* *string

A deployment configuration name or a predefined configuration name.

With predefined configurations, you can deploy application revisions to one instance at a time (CodeDeployDefault.OneAtATime), half of the instances at a time (CodeDeployDefault.HalfAtATime), or all the instances at once (CodeDeployDefault.AllAtOnce).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#deployment_config_name CodedeployDeploymentGroup#deployment_config_name}

---

##### `DeploymentGroupName`<sup>Optional</sup> <a name="DeploymentGroupName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.deploymentGroupName"></a>

```go
DeploymentGroupName *string
```

- *Type:* *string

A name for the deployment group.

If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the deployment group name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#deployment_group_name CodedeployDeploymentGroup#deployment_group_name}

---

##### `DeploymentStyle`<sup>Optional</sup> <a name="DeploymentStyle" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.deploymentStyle"></a>

```go
DeploymentStyle CodedeployDeploymentGroupDeploymentStyle
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle">CodedeployDeploymentGroupDeploymentStyle</a>

Attributes that determine the type of deployment to run and whether to route deployment traffic behind a load balancer.

If you specify this property with a blue/green deployment type, don't specify the AutoScalingGroups, LoadBalancerInfo, or Deployment properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#deployment_style CodedeployDeploymentGroup#deployment_style}

---

##### `Ec2TagFilters`<sup>Optional</sup> <a name="Ec2TagFilters" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.ec2TagFilters"></a>

```go
Ec2TagFilters interface{}
```

- *Type:* interface{}

The Amazon EC2 tags that are already applied to Amazon EC2 instances that you want to include in the deployment group.

CodeDeploy includes all Amazon EC2 instances identified by any of the tags you specify in this deployment group. Duplicates are not allowed. You can specify EC2TagFilters or Ec2TagSet, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#ec_2_tag_filters CodedeployDeploymentGroup#ec_2_tag_filters}

---

##### `Ec2TagSet`<sup>Optional</sup> <a name="Ec2TagSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.ec2TagSet"></a>

```go
Ec2TagSet CodedeployDeploymentGroupEc2TagSet
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet">CodedeployDeploymentGroupEc2TagSet</a>

Information about groups of tags applied to Amazon EC2 instances.

Use when the deployment group includes only Amazon EC2 instances identified by all the tag groups. Cannot be used in the same call as ec2TagFilter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#ec_2_tag_set CodedeployDeploymentGroup#ec_2_tag_set}

---

##### `EcsServices`<sup>Optional</sup> <a name="EcsServices" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.ecsServices"></a>

```go
EcsServices interface{}
```

- *Type:* interface{}

The target Amazon ECS services in the deployment group.

This applies only to deployment groups that use the Amazon ECS compute platform. A target Amazon ECS service is specified as an Amazon ECS cluster and service name pair using the format <clustername>:<servicename>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#ecs_services CodedeployDeploymentGroup#ecs_services}

---

##### `LoadBalancerInfo`<sup>Optional</sup> <a name="LoadBalancerInfo" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.loadBalancerInfo"></a>

```go
LoadBalancerInfo CodedeployDeploymentGroupLoadBalancerInfo
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo">CodedeployDeploymentGroupLoadBalancerInfo</a>

Information about the load balancer to use in a deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#load_balancer_info CodedeployDeploymentGroup#load_balancer_info}

---

##### `OnPremisesInstanceTagFilters`<sup>Optional</sup> <a name="OnPremisesInstanceTagFilters" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.onPremisesInstanceTagFilters"></a>

```go
OnPremisesInstanceTagFilters interface{}
```

- *Type:* interface{}

The on-premises instance tags already applied to on-premises instances that you want to include in the deployment group.

CodeDeploy includes all on-premises instances identified by any of the tags you specify in this deployment group. Duplicates are not allowed. You can specify OnPremisesInstanceTagFilters or OnPremisesInstanceTagSet, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#on_premises_instance_tag_filters CodedeployDeploymentGroup#on_premises_instance_tag_filters}

---

##### `OnPremisesTagSet`<sup>Optional</sup> <a name="OnPremisesTagSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.onPremisesTagSet"></a>

```go
OnPremisesTagSet CodedeployDeploymentGroupOnPremisesTagSet
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSet">CodedeployDeploymentGroupOnPremisesTagSet</a>

Information about groups of tags applied to on-premises instances.

The deployment group includes only on-premises instances identified by all the tag groups. You can specify OnPremisesInstanceTagFilters or OnPremisesInstanceTagSet, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#on_premises_tag_set CodedeployDeploymentGroup#on_premises_tag_set}

---

##### `OutdatedInstancesStrategy`<sup>Optional</sup> <a name="OutdatedInstancesStrategy" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.outdatedInstancesStrategy"></a>

```go
OutdatedInstancesStrategy *string
```

- *Type:* *string

Indicates what happens when new Amazon EC2 instances are launched mid-deployment and do not receive the deployed application revision.

If this option is set to UPDATE or is unspecified, CodeDeploy initiates one or more 'auto-update outdated instances' deployments to apply the deployed application revision to the new Amazon EC2 instances. If this option is set to IGNORE, CodeDeploy does not initiate a deployment to update the new Amazon EC2 instances. This may result in instances having different revisions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#outdated_instances_strategy CodedeployDeploymentGroup#outdated_instances_strategy}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The metadata that you apply to CodeDeploy deployment groups to help you organize and categorize them.

Each tag consists of a key and an optional value, both of which you define.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#tags CodedeployDeploymentGroup#tags}

---

##### `TerminationHookEnabled`<sup>Optional</sup> <a name="TerminationHookEnabled" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.terminationHookEnabled"></a>

```go
TerminationHookEnabled interface{}
```

- *Type:* interface{}

Indicates whether the deployment group was configured to have CodeDeploy install a termination hook into an Auto Scaling group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#termination_hook_enabled CodedeployDeploymentGroup#termination_hook_enabled}

---

##### `TriggerConfigurations`<sup>Optional</sup> <a name="TriggerConfigurations" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.triggerConfigurations"></a>

```go
TriggerConfigurations interface{}
```

- *Type:* interface{}

Information about triggers associated with the deployment group. Duplicates are not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#trigger_configurations CodedeployDeploymentGroup#trigger_configurations}

---

### CodedeployDeploymentGroupDeployment <a name="CodedeployDeploymentGroupDeployment" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeployment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

&codedeploydeploymentgroup.CodedeployDeploymentGroupDeployment {
	Description: *string,
	IgnoreApplicationStopFailures: interface{},
	Revision: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevision,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeployment.property.description">Description</a></code> | <code>*string</code> | A description of the deployment. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeployment.property.ignoreApplicationStopFailures">IgnoreApplicationStopFailures</a></code> | <code>interface{}</code> | If true, then if an ApplicationStop, BeforeBlockTraffic, or AfterBlockTraffic deployment lifecycle event to an instance fails, then the deployment continues to the next deployment lifecycle event. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeployment.property.revision">Revision</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevision">CodedeployDeploymentGroupDeploymentRevision</a></code> | Information about the location of stored application artifacts and the service from which to retrieve them. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeployment.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#description CodedeployDeploymentGroup#description}

---

##### `IgnoreApplicationStopFailures`<sup>Optional</sup> <a name="IgnoreApplicationStopFailures" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeployment.property.ignoreApplicationStopFailures"></a>

```go
IgnoreApplicationStopFailures interface{}
```

- *Type:* interface{}

If true, then if an ApplicationStop, BeforeBlockTraffic, or AfterBlockTraffic deployment lifecycle event to an instance fails, then the deployment continues to the next deployment lifecycle event.

If false or not specified, then if a lifecycle event fails during a deployment to an instance, that deployment fails. If deployment to that instance is part of an overall deployment and the number of healthy hosts is not less than the minimum number of healthy hosts, then a deployment to the next instance is attempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#ignore_application_stop_failures CodedeployDeploymentGroup#ignore_application_stop_failures}

---

##### `Revision`<sup>Optional</sup> <a name="Revision" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeployment.property.revision"></a>

```go
Revision CodedeployDeploymentGroupDeploymentRevision
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevision">CodedeployDeploymentGroupDeploymentRevision</a>

Information about the location of stored application artifacts and the service from which to retrieve them.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#revision CodedeployDeploymentGroup#revision}

---

### CodedeployDeploymentGroupDeploymentRevision <a name="CodedeployDeploymentGroupDeploymentRevision" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevision"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevision.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

&codedeploydeploymentgroup.CodedeployDeploymentGroupDeploymentRevision {
	GitHubLocation: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocation,
	RevisionType: *string,
	S3Location: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevision.property.gitHubLocation">GitHubLocation</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocation">CodedeployDeploymentGroupDeploymentRevisionGitHubLocation</a></code> | Specifies the location of an application revision that is stored in GitHub. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevision.property.revisionType">RevisionType</a></code> | <code>*string</code> | The type of application revision. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevision.property.s3Location">S3Location</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location">CodedeployDeploymentGroupDeploymentRevisionS3Location</a></code> | Information about the location of application artifacts stored in Amazon S3. |

---

##### `GitHubLocation`<sup>Optional</sup> <a name="GitHubLocation" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevision.property.gitHubLocation"></a>

```go
GitHubLocation CodedeployDeploymentGroupDeploymentRevisionGitHubLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocation">CodedeployDeploymentGroupDeploymentRevisionGitHubLocation</a>

Specifies the location of an application revision that is stored in GitHub.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#git_hub_location CodedeployDeploymentGroup#git_hub_location}

---

##### `RevisionType`<sup>Optional</sup> <a name="RevisionType" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevision.property.revisionType"></a>

```go
RevisionType *string
```

- *Type:* *string

The type of application revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#revision_type CodedeployDeploymentGroup#revision_type}

---

##### `S3Location`<sup>Optional</sup> <a name="S3Location" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevision.property.s3Location"></a>

```go
S3Location CodedeployDeploymentGroupDeploymentRevisionS3Location
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location">CodedeployDeploymentGroupDeploymentRevisionS3Location</a>

Information about the location of application artifacts stored in Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#s3_location CodedeployDeploymentGroup#s3_location}

---

### CodedeployDeploymentGroupDeploymentRevisionGitHubLocation <a name="CodedeployDeploymentGroupDeploymentRevisionGitHubLocation" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

&codedeploydeploymentgroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocation {
	CommitId: *string,
	Repository: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocation.property.commitId">CommitId</a></code> | <code>*string</code> | The SHA1 commit ID of the GitHub commit that represents the bundled artifacts for the application revision. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocation.property.repository">Repository</a></code> | <code>*string</code> | The GitHub account and repository pair that stores the application revision to be deployed. |

---

##### `CommitId`<sup>Optional</sup> <a name="CommitId" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocation.property.commitId"></a>

```go
CommitId *string
```

- *Type:* *string

The SHA1 commit ID of the GitHub commit that represents the bundled artifacts for the application revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#commit_id CodedeployDeploymentGroup#commit_id}

---

##### `Repository`<sup>Optional</sup> <a name="Repository" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocation.property.repository"></a>

```go
Repository *string
```

- *Type:* *string

The GitHub account and repository pair that stores the application revision to be deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#repository CodedeployDeploymentGroup#repository}

---

### CodedeployDeploymentGroupDeploymentRevisionS3Location <a name="CodedeployDeploymentGroupDeploymentRevisionS3Location" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

&codedeploydeploymentgroup.CodedeployDeploymentGroupDeploymentRevisionS3Location {
	Bucket: *string,
	BundleType: *string,
	ETag: *string,
	Key: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location.property.bucket">Bucket</a></code> | <code>*string</code> | The name of the Amazon S3 bucket where the application revision is stored. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location.property.bundleType">BundleType</a></code> | <code>*string</code> | The file type of the application revision. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location.property.eTag">ETag</a></code> | <code>*string</code> | The ETag of the Amazon S3 object that represents the bundled artifacts for the application revision. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location.property.key">Key</a></code> | <code>*string</code> | The name of the Amazon S3 object that represents the bundled artifacts for the application revision. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location.property.version">Version</a></code> | <code>*string</code> | A specific version of the Amazon S3 object that represents the bundled artifacts for the application revision. |

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

The name of the Amazon S3 bucket where the application revision is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#bucket CodedeployDeploymentGroup#bucket}

---

##### `BundleType`<sup>Optional</sup> <a name="BundleType" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location.property.bundleType"></a>

```go
BundleType *string
```

- *Type:* *string

The file type of the application revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#bundle_type CodedeployDeploymentGroup#bundle_type}

---

##### `ETag`<sup>Optional</sup> <a name="ETag" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location.property.eTag"></a>

```go
ETag *string
```

- *Type:* *string

The ETag of the Amazon S3 object that represents the bundled artifacts for the application revision.

If the ETag is not specified as an input parameter, ETag validation of the object is skipped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#e_tag CodedeployDeploymentGroup#e_tag}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location.property.key"></a>

```go
Key *string
```

- *Type:* *string

The name of the Amazon S3 object that represents the bundled artifacts for the application revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#key CodedeployDeploymentGroup#key}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location.property.version"></a>

```go
Version *string
```

- *Type:* *string

A specific version of the Amazon S3 object that represents the bundled artifacts for the application revision.

If the version is not specified, the system uses the most recent version by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#version CodedeployDeploymentGroup#version}

---

### CodedeployDeploymentGroupDeploymentStyle <a name="CodedeployDeploymentGroupDeploymentStyle" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

&codedeploydeploymentgroup.CodedeployDeploymentGroupDeploymentStyle {
	DeploymentOption: *string,
	DeploymentType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle.property.deploymentOption">DeploymentOption</a></code> | <code>*string</code> | Indicates whether to route deployment traffic behind a load balancer. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle.property.deploymentType">DeploymentType</a></code> | <code>*string</code> | Indicates whether to run an in-place or blue/green deployment. |

---

##### `DeploymentOption`<sup>Optional</sup> <a name="DeploymentOption" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle.property.deploymentOption"></a>

```go
DeploymentOption *string
```

- *Type:* *string

Indicates whether to route deployment traffic behind a load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#deployment_option CodedeployDeploymentGroup#deployment_option}

---

##### `DeploymentType`<sup>Optional</sup> <a name="DeploymentType" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle.property.deploymentType"></a>

```go
DeploymentType *string
```

- *Type:* *string

Indicates whether to run an in-place or blue/green deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#deployment_type CodedeployDeploymentGroup#deployment_type}

---

### CodedeployDeploymentGroupEc2TagFilters <a name="CodedeployDeploymentGroupEc2TagFilters" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

&codedeploydeploymentgroup.CodedeployDeploymentGroupEc2TagFilters {
	Key: *string,
	Type: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilters.property.key">Key</a></code> | <code>*string</code> | The tag filter key. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilters.property.type">Type</a></code> | <code>*string</code> | The tag filter type. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilters.property.value">Value</a></code> | <code>*string</code> | The tag filter value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilters.property.key"></a>

```go
Key *string
```

- *Type:* *string

The tag filter key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#key CodedeployDeploymentGroup#key}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilters.property.type"></a>

```go
Type *string
```

- *Type:* *string

The tag filter type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#type CodedeployDeploymentGroup#type}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilters.property.value"></a>

```go
Value *string
```

- *Type:* *string

The tag filter value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#value CodedeployDeploymentGroup#value}

---

### CodedeployDeploymentGroupEc2TagSet <a name="CodedeployDeploymentGroupEc2TagSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

&codedeploydeploymentgroup.CodedeployDeploymentGroupEc2TagSet {
	Ec2TagSetList: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet.property.ec2TagSetList">Ec2TagSetList</a></code> | <code>interface{}</code> | The Amazon EC2 tags that are already applied to Amazon EC2 instances that you want to include in the deployment group. |

---

##### `Ec2TagSetList`<sup>Optional</sup> <a name="Ec2TagSetList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet.property.ec2TagSetList"></a>

```go
Ec2TagSetList interface{}
```

- *Type:* interface{}

The Amazon EC2 tags that are already applied to Amazon EC2 instances that you want to include in the deployment group.

CodeDeploy includes all Amazon EC2 instances identified by any of the tags you specify in this deployment group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#ec_2_tag_set_list CodedeployDeploymentGroup#ec_2_tag_set_list}

---

### CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup <a name="CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

&codedeploydeploymentgroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup {
	Key: *string,
	Type: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup.property.key">Key</a></code> | <code>*string</code> | The tag filter key. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup.property.type">Type</a></code> | <code>*string</code> | The tag filter type. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup.property.value">Value</a></code> | <code>*string</code> | The tag filter value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup.property.key"></a>

```go
Key *string
```

- *Type:* *string

The tag filter key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#key CodedeployDeploymentGroup#key}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup.property.type"></a>

```go
Type *string
```

- *Type:* *string

The tag filter type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#type CodedeployDeploymentGroup#type}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup.property.value"></a>

```go
Value *string
```

- *Type:* *string

The tag filter value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#value CodedeployDeploymentGroup#value}

---

### CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct <a name="CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

&codedeploydeploymentgroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct {
	Ec2TagGroup: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct.property.ec2TagGroup">Ec2TagGroup</a></code> | <code>interface{}</code> | A list that contains other lists of Amazon EC2 instance tag groups. |

---

##### `Ec2TagGroup`<sup>Optional</sup> <a name="Ec2TagGroup" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct.property.ec2TagGroup"></a>

```go
Ec2TagGroup interface{}
```

- *Type:* interface{}

A list that contains other lists of Amazon EC2 instance tag groups.

For an instance to be included in the deployment group, it must be identified by all of the tag groups in the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#ec_2_tag_group CodedeployDeploymentGroup#ec_2_tag_group}

---

### CodedeployDeploymentGroupEcsServices <a name="CodedeployDeploymentGroupEcsServices" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServices.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

&codedeploydeploymentgroup.CodedeployDeploymentGroupEcsServices {
	ClusterName: *string,
	ServiceName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServices.property.clusterName">ClusterName</a></code> | <code>*string</code> | The name of the cluster that the Amazon ECS service is associated with. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServices.property.serviceName">ServiceName</a></code> | <code>*string</code> | The name of the target Amazon ECS service. |

---

##### `ClusterName`<sup>Optional</sup> <a name="ClusterName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServices.property.clusterName"></a>

```go
ClusterName *string
```

- *Type:* *string

The name of the cluster that the Amazon ECS service is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#cluster_name CodedeployDeploymentGroup#cluster_name}

---

##### `ServiceName`<sup>Optional</sup> <a name="ServiceName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServices.property.serviceName"></a>

```go
ServiceName *string
```

- *Type:* *string

The name of the target Amazon ECS service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#service_name CodedeployDeploymentGroup#service_name}

---

### CodedeployDeploymentGroupLoadBalancerInfo <a name="CodedeployDeploymentGroupLoadBalancerInfo" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

&codedeploydeploymentgroup.CodedeployDeploymentGroupLoadBalancerInfo {
	ElbInfoList: interface{},
	TargetGroupInfoList: interface{},
	TargetGroupPairInfoList: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo.property.elbInfoList">ElbInfoList</a></code> | <code>interface{}</code> | An array that contains information about the load balancers to use for load balancing in a deployment. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo.property.targetGroupInfoList">TargetGroupInfoList</a></code> | <code>interface{}</code> | An array that contains information about the target groups to use for load balancing in a deployment. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo.property.targetGroupPairInfoList">TargetGroupPairInfoList</a></code> | <code>interface{}</code> | The target group pair information. This is an array of TargeGroupPairInfo objects with a maximum size of one. |

---

##### `ElbInfoList`<sup>Optional</sup> <a name="ElbInfoList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo.property.elbInfoList"></a>

```go
ElbInfoList interface{}
```

- *Type:* interface{}

An array that contains information about the load balancers to use for load balancing in a deployment.

If you're using Classic Load Balancers, specify those load balancers in this array.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#elb_info_list CodedeployDeploymentGroup#elb_info_list}

---

##### `TargetGroupInfoList`<sup>Optional</sup> <a name="TargetGroupInfoList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo.property.targetGroupInfoList"></a>

```go
TargetGroupInfoList interface{}
```

- *Type:* interface{}

An array that contains information about the target groups to use for load balancing in a deployment.

If you're using Application Load Balancers and Network Load Balancers, specify their associated target groups in this array.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#target_group_info_list CodedeployDeploymentGroup#target_group_info_list}

---

##### `TargetGroupPairInfoList`<sup>Optional</sup> <a name="TargetGroupPairInfoList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo.property.targetGroupPairInfoList"></a>

```go
TargetGroupPairInfoList interface{}
```

- *Type:* interface{}

The target group pair information. This is an array of TargeGroupPairInfo objects with a maximum size of one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#target_group_pair_info_list CodedeployDeploymentGroup#target_group_pair_info_list}

---

### CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct <a name="CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

&codedeploydeploymentgroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct.property.name">Name</a></code> | <code>*string</code> | For blue/green deployments, the name of the load balancer that is used to route traffic from original instances to replacement instances in a blue/green deployment. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct.property.name"></a>

```go
Name *string
```

- *Type:* *string

For blue/green deployments, the name of the load balancer that is used to route traffic from original instances to replacement instances in a blue/green deployment.

For in-place deployments, the name of the load balancer that instances are deregistered from so they are not serving traffic during a deployment, and then re-registered with after the deployment is complete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#name CodedeployDeploymentGroup#name}

---

### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

&codedeploydeploymentgroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct.property.name">Name</a></code> | <code>*string</code> | For blue/green deployments, the name of the target group that instances in the original environment are deregistered from, and instances in the replacement environment registered with. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct.property.name"></a>

```go
Name *string
```

- *Type:* *string

For blue/green deployments, the name of the target group that instances in the original environment are deregistered from, and instances in the replacement environment registered with.

For in-place deployments, the name of the target group that instances are deregistered from, so they are not serving traffic during a deployment, and then re-registered with after the deployment completes. No duplicates allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#name CodedeployDeploymentGroup#name}

---

### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

&codedeploydeploymentgroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute {
	ListenerArns: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute.property.listenerArns">ListenerArns</a></code> | <code>*[]*string</code> | The Amazon Resource Name (ARN) of one listener. |

---

##### `ListenerArns`<sup>Optional</sup> <a name="ListenerArns" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute.property.listenerArns"></a>

```go
ListenerArns *[]*string
```

- *Type:* *[]*string

The Amazon Resource Name (ARN) of one listener.

The listener identifies the route between a target group and a load balancer. This is an array of strings with a maximum size of one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#listener_arns CodedeployDeploymentGroup#listener_arns}

---

### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

&codedeploydeploymentgroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct {
	ProdTrafficRoute: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute,
	TargetGroups: interface{},
	TestTrafficRoute: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct.property.prodTrafficRoute">ProdTrafficRoute</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute</a></code> | The path used by a load balancer to route production traffic when an Amazon ECS deployment is complete. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct.property.targetGroups">TargetGroups</a></code> | <code>interface{}</code> | One pair of target groups. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct.property.testTrafficRoute">TestTrafficRoute</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute</a></code> | An optional path used by a load balancer to route test traffic after an Amazon ECS deployment. |

---

##### `ProdTrafficRoute`<sup>Optional</sup> <a name="ProdTrafficRoute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct.property.prodTrafficRoute"></a>

```go
ProdTrafficRoute CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute</a>

The path used by a load balancer to route production traffic when an Amazon ECS deployment is complete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#prod_traffic_route CodedeployDeploymentGroup#prod_traffic_route}

---

##### `TargetGroups`<sup>Optional</sup> <a name="TargetGroups" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct.property.targetGroups"></a>

```go
TargetGroups interface{}
```

- *Type:* interface{}

One pair of target groups.

One is associated with the original task set. The second is associated with the task set that serves traffic after the deployment is complete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#target_groups CodedeployDeploymentGroup#target_groups}

---

##### `TestTrafficRoute`<sup>Optional</sup> <a name="TestTrafficRoute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct.property.testTrafficRoute"></a>

```go
TestTrafficRoute CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute</a>

An optional path used by a load balancer to route test traffic after an Amazon ECS deployment.

Validation can occur while test traffic is served during a deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#test_traffic_route CodedeployDeploymentGroup#test_traffic_route}

---

### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

&codedeploydeploymentgroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups.property.name">Name</a></code> | <code>*string</code> | For blue/green deployments, the name of the target group that instances in the original environment are deregistered from, and instances in the replacement environment registered with. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups.property.name"></a>

```go
Name *string
```

- *Type:* *string

For blue/green deployments, the name of the target group that instances in the original environment are deregistered from, and instances in the replacement environment registered with.

For in-place deployments, the name of the target group that instances are deregistered from, so they are not serving traffic during a deployment, and then re-registered with after the deployment completes. No duplicates allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#name CodedeployDeploymentGroup#name}

---

### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

&codedeploydeploymentgroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute {
	ListenerArns: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute.property.listenerArns">ListenerArns</a></code> | <code>*[]*string</code> | The Amazon Resource Name (ARN) of one listener. |

---

##### `ListenerArns`<sup>Optional</sup> <a name="ListenerArns" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute.property.listenerArns"></a>

```go
ListenerArns *[]*string
```

- *Type:* *[]*string

The Amazon Resource Name (ARN) of one listener.

The listener identifies the route between a target group and a load balancer. This is an array of strings with a maximum size of one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#listener_arns CodedeployDeploymentGroup#listener_arns}

---

### CodedeployDeploymentGroupOnPremisesInstanceTagFilters <a name="CodedeployDeploymentGroupOnPremisesInstanceTagFilters" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

&codedeploydeploymentgroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilters {
	Key: *string,
	Type: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilters.property.key">Key</a></code> | <code>*string</code> | The on-premises instance tag filter key. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilters.property.type">Type</a></code> | <code>*string</code> | The on-premises instance tag filter type. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilters.property.value">Value</a></code> | <code>*string</code> | The on-premises instance tag filter value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilters.property.key"></a>

```go
Key *string
```

- *Type:* *string

The on-premises instance tag filter key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#key CodedeployDeploymentGroup#key}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilters.property.type"></a>

```go
Type *string
```

- *Type:* *string

The on-premises instance tag filter type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#type CodedeployDeploymentGroup#type}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilters.property.value"></a>

```go
Value *string
```

- *Type:* *string

The on-premises instance tag filter value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#value CodedeployDeploymentGroup#value}

---

### CodedeployDeploymentGroupOnPremisesTagSet <a name="CodedeployDeploymentGroupOnPremisesTagSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSet.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

&codedeploydeploymentgroup.CodedeployDeploymentGroupOnPremisesTagSet {
	OnPremisesTagSetList: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSet.property.onPremisesTagSetList">OnPremisesTagSetList</a></code> | <code>interface{}</code> | A list that contains other lists of on-premises instance tag groups. |

---

##### `OnPremisesTagSetList`<sup>Optional</sup> <a name="OnPremisesTagSetList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSet.property.onPremisesTagSetList"></a>

```go
OnPremisesTagSetList interface{}
```

- *Type:* interface{}

A list that contains other lists of on-premises instance tag groups.

For an instance to be included in the deployment group, it must be identified by all of the tag groups in the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#on_premises_tag_set_list CodedeployDeploymentGroup#on_premises_tag_set_list}

---

### CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup <a name="CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

&codedeploydeploymentgroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup {
	Key: *string,
	Type: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup.property.key">Key</a></code> | <code>*string</code> | The on-premises instance tag filter key. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup.property.type">Type</a></code> | <code>*string</code> | The on-premises instance tag filter type. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup.property.value">Value</a></code> | <code>*string</code> | The on-premises instance tag filter value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup.property.key"></a>

```go
Key *string
```

- *Type:* *string

The on-premises instance tag filter key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#key CodedeployDeploymentGroup#key}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup.property.type"></a>

```go
Type *string
```

- *Type:* *string

The on-premises instance tag filter type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#type CodedeployDeploymentGroup#type}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup.property.value"></a>

```go
Value *string
```

- *Type:* *string

The on-premises instance tag filter value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#value CodedeployDeploymentGroup#value}

---

### CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct <a name="CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

&codedeploydeploymentgroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct {
	OnPremisesTagGroup: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct.property.onPremisesTagGroup">OnPremisesTagGroup</a></code> | <code>interface{}</code> | Information about groups of on-premises instance tags. |

---

##### `OnPremisesTagGroup`<sup>Optional</sup> <a name="OnPremisesTagGroup" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct.property.onPremisesTagGroup"></a>

```go
OnPremisesTagGroup interface{}
```

- *Type:* interface{}

Information about groups of on-premises instance tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#on_premises_tag_group CodedeployDeploymentGroup#on_premises_tag_group}

---

### CodedeployDeploymentGroupTags <a name="CodedeployDeploymentGroupTags" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

&codedeploydeploymentgroup.CodedeployDeploymentGroupTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTags.property.key">Key</a></code> | <code>*string</code> | The tag's key. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTags.property.value">Value</a></code> | <code>*string</code> | The tag's value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The tag's key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#key CodedeployDeploymentGroup#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The tag's value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#value CodedeployDeploymentGroup#value}

---

### CodedeployDeploymentGroupTriggerConfigurations <a name="CodedeployDeploymentGroupTriggerConfigurations" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

&codedeploydeploymentgroup.CodedeployDeploymentGroupTriggerConfigurations {
	TriggerEvents: *[]*string,
	TriggerName: *string,
	TriggerTargetArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurations.property.triggerEvents">TriggerEvents</a></code> | <code>*[]*string</code> | The event type or types that trigger notifications. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurations.property.triggerName">TriggerName</a></code> | <code>*string</code> | The name of the notification trigger. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurations.property.triggerTargetArn">TriggerTargetArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the Amazon Simple Notification Service topic through which notifications about deployment or instance events are sent. |

---

##### `TriggerEvents`<sup>Optional</sup> <a name="TriggerEvents" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurations.property.triggerEvents"></a>

```go
TriggerEvents *[]*string
```

- *Type:* *[]*string

The event type or types that trigger notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#trigger_events CodedeployDeploymentGroup#trigger_events}

---

##### `TriggerName`<sup>Optional</sup> <a name="TriggerName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurations.property.triggerName"></a>

```go
TriggerName *string
```

- *Type:* *string

The name of the notification trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#trigger_name CodedeployDeploymentGroup#trigger_name}

---

##### `TriggerTargetArn`<sup>Optional</sup> <a name="TriggerTargetArn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurations.property.triggerTargetArn"></a>

```go
TriggerTargetArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the Amazon Simple Notification Service topic through which notifications about deployment or instance events are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_group#trigger_target_arn CodedeployDeploymentGroup#trigger_target_arn}

---

## Classes <a name="Classes" id="Classes"></a>

### CodedeployDeploymentGroupAlarmConfigurationAlarmsList <a name="CodedeployDeploymentGroupAlarmConfigurationAlarmsList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

codedeploydeploymentgroup.NewCodedeployDeploymentGroupAlarmConfigurationAlarmsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CodedeployDeploymentGroupAlarmConfigurationAlarmsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.get"></a>

```go
func Get(index *f64) CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference <a name="CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

codedeploydeploymentgroup.NewCodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodedeployDeploymentGroupAlarmConfigurationOutputReference <a name="CodedeployDeploymentGroupAlarmConfigurationOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

codedeploydeploymentgroup.NewCodedeployDeploymentGroupAlarmConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CodedeployDeploymentGroupAlarmConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.putAlarms">PutAlarms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.resetAlarms">ResetAlarms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.resetIgnorePollAlarmFailure">ResetIgnorePollAlarmFailure</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAlarms` <a name="PutAlarms" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.putAlarms"></a>

```go
func PutAlarms(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.putAlarms.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAlarms` <a name="ResetAlarms" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.resetAlarms"></a>

```go
func ResetAlarms()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetIgnorePollAlarmFailure` <a name="ResetIgnorePollAlarmFailure" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.resetIgnorePollAlarmFailure"></a>

```go
func ResetIgnorePollAlarmFailure()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.alarms">Alarms</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList">CodedeployDeploymentGroupAlarmConfigurationAlarmsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.alarmsInput">AlarmsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.ignorePollAlarmFailureInput">IgnorePollAlarmFailureInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.ignorePollAlarmFailure">IgnorePollAlarmFailure</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Alarms`<sup>Required</sup> <a name="Alarms" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.alarms"></a>

```go
func Alarms() CodedeployDeploymentGroupAlarmConfigurationAlarmsList
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationAlarmsList">CodedeployDeploymentGroupAlarmConfigurationAlarmsList</a>

---

##### `AlarmsInput`<sup>Optional</sup> <a name="AlarmsInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.alarmsInput"></a>

```go
func AlarmsInput() interface{}
```

- *Type:* interface{}

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IgnorePollAlarmFailureInput`<sup>Optional</sup> <a name="IgnorePollAlarmFailureInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.ignorePollAlarmFailureInput"></a>

```go
func IgnorePollAlarmFailureInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `IgnorePollAlarmFailure`<sup>Required</sup> <a name="IgnorePollAlarmFailure" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.ignorePollAlarmFailure"></a>

```go
func IgnorePollAlarmFailure() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference <a name="CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

codedeploydeploymentgroup.NewCodedeployDeploymentGroupAutoRollbackConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.resetEvents">ResetEvents</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetEvents` <a name="ResetEvents" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.resetEvents"></a>

```go
func ResetEvents()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.eventsInput">EventsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.events">Events</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EventsInput`<sup>Optional</sup> <a name="EventsInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.eventsInput"></a>

```go
func EventsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Events`<sup>Required</sup> <a name="Events" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.events"></a>

```go
func Events() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference <a name="CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

codedeploydeploymentgroup.NewCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.resetActionOnTimeout">ResetActionOnTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.resetWaitTimeInMinutes">ResetWaitTimeInMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActionOnTimeout` <a name="ResetActionOnTimeout" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.resetActionOnTimeout"></a>

```go
func ResetActionOnTimeout()
```

##### `ResetWaitTimeInMinutes` <a name="ResetWaitTimeInMinutes" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.resetWaitTimeInMinutes"></a>

```go
func ResetWaitTimeInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.property.actionOnTimeoutInput">ActionOnTimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.property.waitTimeInMinutesInput">WaitTimeInMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.property.actionOnTimeout">ActionOnTimeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.property.waitTimeInMinutes">WaitTimeInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionOnTimeoutInput`<sup>Optional</sup> <a name="ActionOnTimeoutInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.property.actionOnTimeoutInput"></a>

```go
func ActionOnTimeoutInput() *string
```

- *Type:* *string

---

##### `WaitTimeInMinutesInput`<sup>Optional</sup> <a name="WaitTimeInMinutesInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.property.waitTimeInMinutesInput"></a>

```go
func WaitTimeInMinutesInput() *f64
```

- *Type:* *f64

---

##### `ActionOnTimeout`<sup>Required</sup> <a name="ActionOnTimeout" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.property.actionOnTimeout"></a>

```go
func ActionOnTimeout() *string
```

- *Type:* *string

---

##### `WaitTimeInMinutes`<sup>Required</sup> <a name="WaitTimeInMinutes" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.property.waitTimeInMinutes"></a>

```go
func WaitTimeInMinutes() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference <a name="CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

codedeploydeploymentgroup.NewCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.resetAction">ResetAction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.resetAction"></a>

```go
func ResetAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference <a name="CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

codedeploydeploymentgroup.NewCodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.putDeploymentReadyOption">PutDeploymentReadyOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.putGreenFleetProvisioningOption">PutGreenFleetProvisioningOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.putTerminateBlueInstancesOnDeploymentSuccess">PutTerminateBlueInstancesOnDeploymentSuccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.resetDeploymentReadyOption">ResetDeploymentReadyOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.resetGreenFleetProvisioningOption">ResetGreenFleetProvisioningOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.resetTerminateBlueInstancesOnDeploymentSuccess">ResetTerminateBlueInstancesOnDeploymentSuccess</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDeploymentReadyOption` <a name="PutDeploymentReadyOption" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.putDeploymentReadyOption"></a>

```go
func PutDeploymentReadyOption(value CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.putDeploymentReadyOption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption</a>

---

##### `PutGreenFleetProvisioningOption` <a name="PutGreenFleetProvisioningOption" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.putGreenFleetProvisioningOption"></a>

```go
func PutGreenFleetProvisioningOption(value CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.putGreenFleetProvisioningOption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption</a>

---

##### `PutTerminateBlueInstancesOnDeploymentSuccess` <a name="PutTerminateBlueInstancesOnDeploymentSuccess" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.putTerminateBlueInstancesOnDeploymentSuccess"></a>

```go
func PutTerminateBlueInstancesOnDeploymentSuccess(value CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.putTerminateBlueInstancesOnDeploymentSuccess.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess</a>

---

##### `ResetDeploymentReadyOption` <a name="ResetDeploymentReadyOption" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.resetDeploymentReadyOption"></a>

```go
func ResetDeploymentReadyOption()
```

##### `ResetGreenFleetProvisioningOption` <a name="ResetGreenFleetProvisioningOption" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.resetGreenFleetProvisioningOption"></a>

```go
func ResetGreenFleetProvisioningOption()
```

##### `ResetTerminateBlueInstancesOnDeploymentSuccess` <a name="ResetTerminateBlueInstancesOnDeploymentSuccess" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.resetTerminateBlueInstancesOnDeploymentSuccess"></a>

```go
func ResetTerminateBlueInstancesOnDeploymentSuccess()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.deploymentReadyOption">DeploymentReadyOption</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.greenFleetProvisioningOption">GreenFleetProvisioningOption</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.terminateBlueInstancesOnDeploymentSuccess">TerminateBlueInstancesOnDeploymentSuccess</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.deploymentReadyOptionInput">DeploymentReadyOptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.greenFleetProvisioningOptionInput">GreenFleetProvisioningOptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.terminateBlueInstancesOnDeploymentSuccessInput">TerminateBlueInstancesOnDeploymentSuccessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeploymentReadyOption`<sup>Required</sup> <a name="DeploymentReadyOption" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.deploymentReadyOption"></a>

```go
func DeploymentReadyOption() CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference</a>

---

##### `GreenFleetProvisioningOption`<sup>Required</sup> <a name="GreenFleetProvisioningOption" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.greenFleetProvisioningOption"></a>

```go
func GreenFleetProvisioningOption() CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference</a>

---

##### `TerminateBlueInstancesOnDeploymentSuccess`<sup>Required</sup> <a name="TerminateBlueInstancesOnDeploymentSuccess" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.terminateBlueInstancesOnDeploymentSuccess"></a>

```go
func TerminateBlueInstancesOnDeploymentSuccess() CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference">CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference</a>

---

##### `DeploymentReadyOptionInput`<sup>Optional</sup> <a name="DeploymentReadyOptionInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.deploymentReadyOptionInput"></a>

```go
func DeploymentReadyOptionInput() interface{}
```

- *Type:* interface{}

---

##### `GreenFleetProvisioningOptionInput`<sup>Optional</sup> <a name="GreenFleetProvisioningOptionInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.greenFleetProvisioningOptionInput"></a>

```go
func GreenFleetProvisioningOptionInput() interface{}
```

- *Type:* interface{}

---

##### `TerminateBlueInstancesOnDeploymentSuccessInput`<sup>Optional</sup> <a name="TerminateBlueInstancesOnDeploymentSuccessInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.terminateBlueInstancesOnDeploymentSuccessInput"></a>

```go
func TerminateBlueInstancesOnDeploymentSuccessInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference <a name="CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

codedeploydeploymentgroup.NewCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.resetTerminationWaitTimeInMinutes">ResetTerminationWaitTimeInMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.resetAction"></a>

```go
func ResetAction()
```

##### `ResetTerminationWaitTimeInMinutes` <a name="ResetTerminationWaitTimeInMinutes" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.resetTerminationWaitTimeInMinutes"></a>

```go
func ResetTerminationWaitTimeInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.terminationWaitTimeInMinutesInput">TerminationWaitTimeInMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.terminationWaitTimeInMinutes">TerminationWaitTimeInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `TerminationWaitTimeInMinutesInput`<sup>Optional</sup> <a name="TerminationWaitTimeInMinutesInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.terminationWaitTimeInMinutesInput"></a>

```go
func TerminationWaitTimeInMinutesInput() *f64
```

- *Type:* *f64

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `TerminationWaitTimeInMinutes`<sup>Required</sup> <a name="TerminationWaitTimeInMinutes" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.terminationWaitTimeInMinutes"></a>

```go
func TerminationWaitTimeInMinutes() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodedeployDeploymentGroupDeploymentOutputReference <a name="CodedeployDeploymentGroupDeploymentOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

codedeploydeploymentgroup.NewCodedeployDeploymentGroupDeploymentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CodedeployDeploymentGroupDeploymentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.putRevision">PutRevision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.resetIgnoreApplicationStopFailures">ResetIgnoreApplicationStopFailures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.resetRevision">ResetRevision</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRevision` <a name="PutRevision" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.putRevision"></a>

```go
func PutRevision(value CodedeployDeploymentGroupDeploymentRevision)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.putRevision.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevision">CodedeployDeploymentGroupDeploymentRevision</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetIgnoreApplicationStopFailures` <a name="ResetIgnoreApplicationStopFailures" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.resetIgnoreApplicationStopFailures"></a>

```go
func ResetIgnoreApplicationStopFailures()
```

##### `ResetRevision` <a name="ResetRevision" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.resetRevision"></a>

```go
func ResetRevision()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.revision">Revision</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference">CodedeployDeploymentGroupDeploymentRevisionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.ignoreApplicationStopFailuresInput">IgnoreApplicationStopFailuresInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.revisionInput">RevisionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.ignoreApplicationStopFailures">IgnoreApplicationStopFailures</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.revision"></a>

```go
func Revision() CodedeployDeploymentGroupDeploymentRevisionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference">CodedeployDeploymentGroupDeploymentRevisionOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IgnoreApplicationStopFailuresInput`<sup>Optional</sup> <a name="IgnoreApplicationStopFailuresInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.ignoreApplicationStopFailuresInput"></a>

```go
func IgnoreApplicationStopFailuresInput() interface{}
```

- *Type:* interface{}

---

##### `RevisionInput`<sup>Optional</sup> <a name="RevisionInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.revisionInput"></a>

```go
func RevisionInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `IgnoreApplicationStopFailures`<sup>Required</sup> <a name="IgnoreApplicationStopFailures" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.ignoreApplicationStopFailures"></a>

```go
func IgnoreApplicationStopFailures() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference <a name="CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

codedeploydeploymentgroup.NewCodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.resetCommitId">ResetCommitId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.resetRepository">ResetRepository</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCommitId` <a name="ResetCommitId" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.resetCommitId"></a>

```go
func ResetCommitId()
```

##### `ResetRepository` <a name="ResetRepository" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.resetRepository"></a>

```go
func ResetRepository()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.property.commitIdInput">CommitIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.property.repositoryInput">RepositoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.property.commitId">CommitId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.property.repository">Repository</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CommitIdInput`<sup>Optional</sup> <a name="CommitIdInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.property.commitIdInput"></a>

```go
func CommitIdInput() *string
```

- *Type:* *string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.property.repositoryInput"></a>

```go
func RepositoryInput() *string
```

- *Type:* *string

---

##### `CommitId`<sup>Required</sup> <a name="CommitId" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.property.commitId"></a>

```go
func CommitId() *string
```

- *Type:* *string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.property.repository"></a>

```go
func Repository() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodedeployDeploymentGroupDeploymentRevisionOutputReference <a name="CodedeployDeploymentGroupDeploymentRevisionOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

codedeploydeploymentgroup.NewCodedeployDeploymentGroupDeploymentRevisionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CodedeployDeploymentGroupDeploymentRevisionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.putGitHubLocation">PutGitHubLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.putS3Location">PutS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.resetGitHubLocation">ResetGitHubLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.resetRevisionType">ResetRevisionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.resetS3Location">ResetS3Location</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGitHubLocation` <a name="PutGitHubLocation" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.putGitHubLocation"></a>

```go
func PutGitHubLocation(value CodedeployDeploymentGroupDeploymentRevisionGitHubLocation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.putGitHubLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocation">CodedeployDeploymentGroupDeploymentRevisionGitHubLocation</a>

---

##### `PutS3Location` <a name="PutS3Location" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.putS3Location"></a>

```go
func PutS3Location(value CodedeployDeploymentGroupDeploymentRevisionS3Location)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.putS3Location.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3Location">CodedeployDeploymentGroupDeploymentRevisionS3Location</a>

---

##### `ResetGitHubLocation` <a name="ResetGitHubLocation" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.resetGitHubLocation"></a>

```go
func ResetGitHubLocation()
```

##### `ResetRevisionType` <a name="ResetRevisionType" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.resetRevisionType"></a>

```go
func ResetRevisionType()
```

##### `ResetS3Location` <a name="ResetS3Location" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.resetS3Location"></a>

```go
func ResetS3Location()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.gitHubLocation">GitHubLocation</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference">CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.s3Location">S3Location</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference">CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.gitHubLocationInput">GitHubLocationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.revisionTypeInput">RevisionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.s3LocationInput">S3LocationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.revisionType">RevisionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GitHubLocation`<sup>Required</sup> <a name="GitHubLocation" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.gitHubLocation"></a>

```go
func GitHubLocation() CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference">CodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference</a>

---

##### `S3Location`<sup>Required</sup> <a name="S3Location" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.s3Location"></a>

```go
func S3Location() CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference">CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference</a>

---

##### `GitHubLocationInput`<sup>Optional</sup> <a name="GitHubLocationInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.gitHubLocationInput"></a>

```go
func GitHubLocationInput() interface{}
```

- *Type:* interface{}

---

##### `RevisionTypeInput`<sup>Optional</sup> <a name="RevisionTypeInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.revisionTypeInput"></a>

```go
func RevisionTypeInput() *string
```

- *Type:* *string

---

##### `S3LocationInput`<sup>Optional</sup> <a name="S3LocationInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.s3LocationInput"></a>

```go
func S3LocationInput() interface{}
```

- *Type:* interface{}

---

##### `RevisionType`<sup>Required</sup> <a name="RevisionType" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.revisionType"></a>

```go
func RevisionType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference <a name="CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

codedeploydeploymentgroup.NewCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.resetBundleType">ResetBundleType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.resetETag">ResetETag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.resetBucket"></a>

```go
func ResetBucket()
```

##### `ResetBundleType` <a name="ResetBundleType" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.resetBundleType"></a>

```go
func ResetBundleType()
```

##### `ResetETag` <a name="ResetETag" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.resetETag"></a>

```go
func ResetETag()
```

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.bundleTypeInput">BundleTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.eTagInput">ETagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.bundleType">BundleType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.eTag">ETag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `BundleTypeInput`<sup>Optional</sup> <a name="BundleTypeInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.bundleTypeInput"></a>

```go
func BundleTypeInput() *string
```

- *Type:* *string

---

##### `ETagInput`<sup>Optional</sup> <a name="ETagInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.eTagInput"></a>

```go
func ETagInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `BundleType`<sup>Required</sup> <a name="BundleType" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.bundleType"></a>

```go
func BundleType() *string
```

- *Type:* *string

---

##### `ETag`<sup>Required</sup> <a name="ETag" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.eTag"></a>

```go
func ETag() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodedeployDeploymentGroupDeploymentStyleOutputReference <a name="CodedeployDeploymentGroupDeploymentStyleOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

codedeploydeploymentgroup.NewCodedeployDeploymentGroupDeploymentStyleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CodedeployDeploymentGroupDeploymentStyleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.resetDeploymentOption">ResetDeploymentOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.resetDeploymentType">ResetDeploymentType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeploymentOption` <a name="ResetDeploymentOption" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.resetDeploymentOption"></a>

```go
func ResetDeploymentOption()
```

##### `ResetDeploymentType` <a name="ResetDeploymentType" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.resetDeploymentType"></a>

```go
func ResetDeploymentType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.deploymentOptionInput">DeploymentOptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.deploymentTypeInput">DeploymentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.deploymentOption">DeploymentOption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.deploymentType">DeploymentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeploymentOptionInput`<sup>Optional</sup> <a name="DeploymentOptionInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.deploymentOptionInput"></a>

```go
func DeploymentOptionInput() *string
```

- *Type:* *string

---

##### `DeploymentTypeInput`<sup>Optional</sup> <a name="DeploymentTypeInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.deploymentTypeInput"></a>

```go
func DeploymentTypeInput() *string
```

- *Type:* *string

---

##### `DeploymentOption`<sup>Required</sup> <a name="DeploymentOption" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.deploymentOption"></a>

```go
func DeploymentOption() *string
```

- *Type:* *string

---

##### `DeploymentType`<sup>Required</sup> <a name="DeploymentType" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.deploymentType"></a>

```go
func DeploymentType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodedeployDeploymentGroupEc2TagFiltersList <a name="CodedeployDeploymentGroupEc2TagFiltersList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

codedeploydeploymentgroup.NewCodedeployDeploymentGroupEc2TagFiltersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CodedeployDeploymentGroupEc2TagFiltersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.get"></a>

```go
func Get(index *f64) CodedeployDeploymentGroupEc2TagFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodedeployDeploymentGroupEc2TagFiltersOutputReference <a name="CodedeployDeploymentGroupEc2TagFiltersOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

codedeploydeploymentgroup.NewCodedeployDeploymentGroupEc2TagFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CodedeployDeploymentGroupEc2TagFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.resetType"></a>

```go
func ResetType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList <a name="CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

codedeploydeploymentgroup.NewCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.get"></a>

```go
func Get(index *f64) CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference <a name="CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

codedeploydeploymentgroup.NewCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.resetType"></a>

```go
func ResetType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList <a name="CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

codedeploydeploymentgroup.NewCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.get"></a>

```go
func Get(index *f64) CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference <a name="CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

codedeploydeploymentgroup.NewCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.putEc2TagGroup">PutEc2TagGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.resetEc2TagGroup">ResetEc2TagGroup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEc2TagGroup` <a name="PutEc2TagGroup" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.putEc2TagGroup"></a>

```go
func PutEc2TagGroup(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.putEc2TagGroup.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEc2TagGroup` <a name="ResetEc2TagGroup" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.resetEc2TagGroup"></a>

```go
func ResetEc2TagGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.property.ec2TagGroup">Ec2TagGroup</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList">CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.property.ec2TagGroupInput">Ec2TagGroupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ec2TagGroup`<sup>Required</sup> <a name="Ec2TagGroup" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.property.ec2TagGroup"></a>

```go
func Ec2TagGroup() CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList">CodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList</a>

---

##### `Ec2TagGroupInput`<sup>Optional</sup> <a name="Ec2TagGroupInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.property.ec2TagGroupInput"></a>

```go
func Ec2TagGroupInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodedeployDeploymentGroupEc2TagSetOutputReference <a name="CodedeployDeploymentGroupEc2TagSetOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

codedeploydeploymentgroup.NewCodedeployDeploymentGroupEc2TagSetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CodedeployDeploymentGroupEc2TagSetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.putEc2TagSetList">PutEc2TagSetList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.resetEc2TagSetList">ResetEc2TagSetList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEc2TagSetList` <a name="PutEc2TagSetList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.putEc2TagSetList"></a>

```go
func PutEc2TagSetList(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.putEc2TagSetList.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEc2TagSetList` <a name="ResetEc2TagSetList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.resetEc2TagSetList"></a>

```go
func ResetEc2TagSetList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.ec2TagSetList">Ec2TagSetList</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList">CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.ec2TagSetListInput">Ec2TagSetListInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ec2TagSetList`<sup>Required</sup> <a name="Ec2TagSetList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.ec2TagSetList"></a>

```go
func Ec2TagSetList() CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList">CodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList</a>

---

##### `Ec2TagSetListInput`<sup>Optional</sup> <a name="Ec2TagSetListInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.ec2TagSetListInput"></a>

```go
func Ec2TagSetListInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodedeployDeploymentGroupEcsServicesList <a name="CodedeployDeploymentGroupEcsServicesList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

codedeploydeploymentgroup.NewCodedeployDeploymentGroupEcsServicesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CodedeployDeploymentGroupEcsServicesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.get"></a>

```go
func Get(index *f64) CodedeployDeploymentGroupEcsServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodedeployDeploymentGroupEcsServicesOutputReference <a name="CodedeployDeploymentGroupEcsServicesOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

codedeploydeploymentgroup.NewCodedeployDeploymentGroupEcsServicesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CodedeployDeploymentGroupEcsServicesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.resetClusterName">ResetClusterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.resetServiceName">ResetServiceName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClusterName` <a name="ResetClusterName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.resetClusterName"></a>

```go
func ResetClusterName()
```

##### `ResetServiceName` <a name="ResetServiceName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.resetServiceName"></a>

```go
func ResetServiceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.property.clusterNameInput">ClusterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.property.serviceNameInput">ServiceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.property.clusterName">ClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.property.serviceName">ServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.property.clusterNameInput"></a>

```go
func ClusterNameInput() *string
```

- *Type:* *string

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.property.serviceNameInput"></a>

```go
func ServiceNameInput() *string
```

- *Type:* *string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.property.clusterName"></a>

```go
func ClusterName() *string
```

- *Type:* *string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.property.serviceName"></a>

```go
func ServiceName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServicesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList <a name="CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

codedeploydeploymentgroup.NewCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.get"></a>

```go
func Get(index *f64) CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference <a name="CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

codedeploydeploymentgroup.NewCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodedeployDeploymentGroupLoadBalancerInfoOutputReference <a name="CodedeployDeploymentGroupLoadBalancerInfoOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

codedeploydeploymentgroup.NewCodedeployDeploymentGroupLoadBalancerInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CodedeployDeploymentGroupLoadBalancerInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.putElbInfoList">PutElbInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.putTargetGroupInfoList">PutTargetGroupInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.putTargetGroupPairInfoList">PutTargetGroupPairInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.resetElbInfoList">ResetElbInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.resetTargetGroupInfoList">ResetTargetGroupInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.resetTargetGroupPairInfoList">ResetTargetGroupPairInfoList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutElbInfoList` <a name="PutElbInfoList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.putElbInfoList"></a>

```go
func PutElbInfoList(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.putElbInfoList.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTargetGroupInfoList` <a name="PutTargetGroupInfoList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.putTargetGroupInfoList"></a>

```go
func PutTargetGroupInfoList(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.putTargetGroupInfoList.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTargetGroupPairInfoList` <a name="PutTargetGroupPairInfoList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.putTargetGroupPairInfoList"></a>

```go
func PutTargetGroupPairInfoList(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.putTargetGroupPairInfoList.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetElbInfoList` <a name="ResetElbInfoList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.resetElbInfoList"></a>

```go
func ResetElbInfoList()
```

##### `ResetTargetGroupInfoList` <a name="ResetTargetGroupInfoList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.resetTargetGroupInfoList"></a>

```go
func ResetTargetGroupInfoList()
```

##### `ResetTargetGroupPairInfoList` <a name="ResetTargetGroupPairInfoList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.resetTargetGroupPairInfoList"></a>

```go
func ResetTargetGroupPairInfoList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.elbInfoList">ElbInfoList</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList">CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.targetGroupInfoList">TargetGroupInfoList</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.targetGroupPairInfoList">TargetGroupPairInfoList</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.elbInfoListInput">ElbInfoListInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.targetGroupInfoListInput">TargetGroupInfoListInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.targetGroupPairInfoListInput">TargetGroupPairInfoListInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ElbInfoList`<sup>Required</sup> <a name="ElbInfoList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.elbInfoList"></a>

```go
func ElbInfoList() CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList">CodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList</a>

---

##### `TargetGroupInfoList`<sup>Required</sup> <a name="TargetGroupInfoList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.targetGroupInfoList"></a>

```go
func TargetGroupInfoList() CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList</a>

---

##### `TargetGroupPairInfoList`<sup>Required</sup> <a name="TargetGroupPairInfoList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.targetGroupPairInfoList"></a>

```go
func TargetGroupPairInfoList() CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList</a>

---

##### `ElbInfoListInput`<sup>Optional</sup> <a name="ElbInfoListInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.elbInfoListInput"></a>

```go
func ElbInfoListInput() interface{}
```

- *Type:* interface{}

---

##### `TargetGroupInfoListInput`<sup>Optional</sup> <a name="TargetGroupInfoListInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.targetGroupInfoListInput"></a>

```go
func TargetGroupInfoListInput() interface{}
```

- *Type:* interface{}

---

##### `TargetGroupPairInfoListInput`<sup>Optional</sup> <a name="TargetGroupPairInfoListInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.targetGroupPairInfoListInput"></a>

```go
func TargetGroupPairInfoListInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

codedeploydeploymentgroup.NewCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.get"></a>

```go
func Get(index *f64) CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

codedeploydeploymentgroup.NewCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

codedeploydeploymentgroup.NewCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.resetListenerArns">ResetListenerArns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetListenerArns` <a name="ResetListenerArns" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.resetListenerArns"></a>

```go
func ResetListenerArns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.property.listenerArnsInput">ListenerArnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.property.listenerArns">ListenerArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ListenerArnsInput`<sup>Optional</sup> <a name="ListenerArnsInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.property.listenerArnsInput"></a>

```go
func ListenerArnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ListenerArns`<sup>Required</sup> <a name="ListenerArns" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.property.listenerArns"></a>

```go
func ListenerArns() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

codedeploydeploymentgroup.NewCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.get"></a>

```go
func Get(index *f64) CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

codedeploydeploymentgroup.NewCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.putProdTrafficRoute">PutProdTrafficRoute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.putTargetGroups">PutTargetGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.putTestTrafficRoute">PutTestTrafficRoute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.resetProdTrafficRoute">ResetProdTrafficRoute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.resetTargetGroups">ResetTargetGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.resetTestTrafficRoute">ResetTestTrafficRoute</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProdTrafficRoute` <a name="PutProdTrafficRoute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.putProdTrafficRoute"></a>

```go
func PutProdTrafficRoute(value CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.putProdTrafficRoute.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute</a>

---

##### `PutTargetGroups` <a name="PutTargetGroups" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.putTargetGroups"></a>

```go
func PutTargetGroups(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.putTargetGroups.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTestTrafficRoute` <a name="PutTestTrafficRoute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.putTestTrafficRoute"></a>

```go
func PutTestTrafficRoute(value CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.putTestTrafficRoute.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute</a>

---

##### `ResetProdTrafficRoute` <a name="ResetProdTrafficRoute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.resetProdTrafficRoute"></a>

```go
func ResetProdTrafficRoute()
```

##### `ResetTargetGroups` <a name="ResetTargetGroups" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.resetTargetGroups"></a>

```go
func ResetTargetGroups()
```

##### `ResetTestTrafficRoute` <a name="ResetTestTrafficRoute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.resetTestTrafficRoute"></a>

```go
func ResetTestTrafficRoute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.prodTrafficRoute">ProdTrafficRoute</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.targetGroups">TargetGroups</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.testTrafficRoute">TestTrafficRoute</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.prodTrafficRouteInput">ProdTrafficRouteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.targetGroupsInput">TargetGroupsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.testTrafficRouteInput">TestTrafficRouteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ProdTrafficRoute`<sup>Required</sup> <a name="ProdTrafficRoute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.prodTrafficRoute"></a>

```go
func ProdTrafficRoute() CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference</a>

---

##### `TargetGroups`<sup>Required</sup> <a name="TargetGroups" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.targetGroups"></a>

```go
func TargetGroups() CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList</a>

---

##### `TestTrafficRoute`<sup>Required</sup> <a name="TestTrafficRoute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.testTrafficRoute"></a>

```go
func TestTrafficRoute() CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference</a>

---

##### `ProdTrafficRouteInput`<sup>Optional</sup> <a name="ProdTrafficRouteInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.prodTrafficRouteInput"></a>

```go
func ProdTrafficRouteInput() interface{}
```

- *Type:* interface{}

---

##### `TargetGroupsInput`<sup>Optional</sup> <a name="TargetGroupsInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.targetGroupsInput"></a>

```go
func TargetGroupsInput() interface{}
```

- *Type:* interface{}

---

##### `TestTrafficRouteInput`<sup>Optional</sup> <a name="TestTrafficRouteInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.testTrafficRouteInput"></a>

```go
func TestTrafficRouteInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

codedeploydeploymentgroup.NewCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.get"></a>

```go
func Get(index *f64) CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

codedeploydeploymentgroup.NewCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

codedeploydeploymentgroup.NewCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.resetListenerArns">ResetListenerArns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetListenerArns` <a name="ResetListenerArns" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.resetListenerArns"></a>

```go
func ResetListenerArns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.property.listenerArnsInput">ListenerArnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.property.listenerArns">ListenerArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ListenerArnsInput`<sup>Optional</sup> <a name="ListenerArnsInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.property.listenerArnsInput"></a>

```go
func ListenerArnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ListenerArns`<sup>Required</sup> <a name="ListenerArns" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.property.listenerArns"></a>

```go
func ListenerArns() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList <a name="CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

codedeploydeploymentgroup.NewCodedeployDeploymentGroupOnPremisesInstanceTagFiltersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.get"></a>

```go
func Get(index *f64) CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference <a name="CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

codedeploydeploymentgroup.NewCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.resetType"></a>

```go
func ResetType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList <a name="CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

codedeploydeploymentgroup.NewCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.get"></a>

```go
func Get(index *f64) CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference <a name="CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

codedeploydeploymentgroup.NewCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.resetType"></a>

```go
func ResetType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList <a name="CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

codedeploydeploymentgroup.NewCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.get"></a>

```go
func Get(index *f64) CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference <a name="CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

codedeploydeploymentgroup.NewCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.putOnPremisesTagGroup">PutOnPremisesTagGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.resetOnPremisesTagGroup">ResetOnPremisesTagGroup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOnPremisesTagGroup` <a name="PutOnPremisesTagGroup" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.putOnPremisesTagGroup"></a>

```go
func PutOnPremisesTagGroup(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.putOnPremisesTagGroup.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetOnPremisesTagGroup` <a name="ResetOnPremisesTagGroup" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.resetOnPremisesTagGroup"></a>

```go
func ResetOnPremisesTagGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.property.onPremisesTagGroup">OnPremisesTagGroup</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.property.onPremisesTagGroupInput">OnPremisesTagGroupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OnPremisesTagGroup`<sup>Required</sup> <a name="OnPremisesTagGroup" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.property.onPremisesTagGroup"></a>

```go
func OnPremisesTagGroup() CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList</a>

---

##### `OnPremisesTagGroupInput`<sup>Optional</sup> <a name="OnPremisesTagGroupInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.property.onPremisesTagGroupInput"></a>

```go
func OnPremisesTagGroupInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodedeployDeploymentGroupOnPremisesTagSetOutputReference <a name="CodedeployDeploymentGroupOnPremisesTagSetOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

codedeploydeploymentgroup.NewCodedeployDeploymentGroupOnPremisesTagSetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CodedeployDeploymentGroupOnPremisesTagSetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.putOnPremisesTagSetList">PutOnPremisesTagSetList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.resetOnPremisesTagSetList">ResetOnPremisesTagSetList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOnPremisesTagSetList` <a name="PutOnPremisesTagSetList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.putOnPremisesTagSetList"></a>

```go
func PutOnPremisesTagSetList(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.putOnPremisesTagSetList.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetOnPremisesTagSetList` <a name="ResetOnPremisesTagSetList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.resetOnPremisesTagSetList"></a>

```go
func ResetOnPremisesTagSetList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.property.onPremisesTagSetList">OnPremisesTagSetList</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.property.onPremisesTagSetListInput">OnPremisesTagSetListInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OnPremisesTagSetList`<sup>Required</sup> <a name="OnPremisesTagSetList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.property.onPremisesTagSetList"></a>

```go
func OnPremisesTagSetList() CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList">CodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList</a>

---

##### `OnPremisesTagSetListInput`<sup>Optional</sup> <a name="OnPremisesTagSetListInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.property.onPremisesTagSetListInput"></a>

```go
func OnPremisesTagSetListInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesTagSetOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodedeployDeploymentGroupTagsList <a name="CodedeployDeploymentGroupTagsList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

codedeploydeploymentgroup.NewCodedeployDeploymentGroupTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CodedeployDeploymentGroupTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.get"></a>

```go
func Get(index *f64) CodedeployDeploymentGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodedeployDeploymentGroupTagsOutputReference <a name="CodedeployDeploymentGroupTagsOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

codedeploydeploymentgroup.NewCodedeployDeploymentGroupTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CodedeployDeploymentGroupTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodedeployDeploymentGroupTriggerConfigurationsList <a name="CodedeployDeploymentGroupTriggerConfigurationsList" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

codedeploydeploymentgroup.NewCodedeployDeploymentGroupTriggerConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CodedeployDeploymentGroupTriggerConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.get"></a>

```go
func Get(index *f64) CodedeployDeploymentGroupTriggerConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodedeployDeploymentGroupTriggerConfigurationsOutputReference <a name="CodedeployDeploymentGroupTriggerConfigurationsOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codedeploydeploymentgroup"

codedeploydeploymentgroup.NewCodedeployDeploymentGroupTriggerConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CodedeployDeploymentGroupTriggerConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.resetTriggerEvents">ResetTriggerEvents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.resetTriggerName">ResetTriggerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.resetTriggerTargetArn">ResetTriggerTargetArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTriggerEvents` <a name="ResetTriggerEvents" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.resetTriggerEvents"></a>

```go
func ResetTriggerEvents()
```

##### `ResetTriggerName` <a name="ResetTriggerName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.resetTriggerName"></a>

```go
func ResetTriggerName()
```

##### `ResetTriggerTargetArn` <a name="ResetTriggerTargetArn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.resetTriggerTargetArn"></a>

```go
func ResetTriggerTargetArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.triggerEventsInput">TriggerEventsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.triggerNameInput">TriggerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.triggerTargetArnInput">TriggerTargetArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.triggerEvents">TriggerEvents</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.triggerName">TriggerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.triggerTargetArn">TriggerTargetArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TriggerEventsInput`<sup>Optional</sup> <a name="TriggerEventsInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.triggerEventsInput"></a>

```go
func TriggerEventsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TriggerNameInput`<sup>Optional</sup> <a name="TriggerNameInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.triggerNameInput"></a>

```go
func TriggerNameInput() *string
```

- *Type:* *string

---

##### `TriggerTargetArnInput`<sup>Optional</sup> <a name="TriggerTargetArnInput" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.triggerTargetArnInput"></a>

```go
func TriggerTargetArnInput() *string
```

- *Type:* *string

---

##### `TriggerEvents`<sup>Required</sup> <a name="TriggerEvents" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.triggerEvents"></a>

```go
func TriggerEvents() *[]*string
```

- *Type:* *[]*string

---

##### `TriggerName`<sup>Required</sup> <a name="TriggerName" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.triggerName"></a>

```go
func TriggerName() *string
```

- *Type:* *string

---

##### `TriggerTargetArn`<sup>Required</sup> <a name="TriggerTargetArn" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.triggerTargetArn"></a>

```go
func TriggerTargetArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



