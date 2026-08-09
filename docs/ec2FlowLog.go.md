# `ec2FlowLog` Submodule <a name="`ec2FlowLog` Submodule" id="@cdktn/provider-awscc.ec2FlowLog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2FlowLog <a name="Ec2FlowLog" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_flow_log awscc_ec2_flow_log}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2flowlog"

ec2flowlog.NewEc2FlowLog(scope Construct, id *string, config Ec2FlowLogConfig) Ec2FlowLog
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig">Ec2FlowLogConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig">Ec2FlowLogConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.putDestinationOptions">PutDestinationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.putTagFieldSpecifications">PutTagFieldSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetDeliverCrossAccountRole">ResetDeliverCrossAccountRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetDeliverLogsPermissionArn">ResetDeliverLogsPermissionArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetDestinationOptions">ResetDestinationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetLogDestination">ResetLogDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetLogDestinationType">ResetLogDestinationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetLogFormat">ResetLogFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetLogGroupName">ResetLogGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetMaxAggregationInterval">ResetMaxAggregationInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetTagFieldSpecifications">ResetTagFieldSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetTrafficType">ResetTrafficType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDestinationOptions` <a name="PutDestinationOptions" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.putDestinationOptions"></a>

```go
func PutDestinationOptions(value Ec2FlowLogDestinationOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.putDestinationOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptions">Ec2FlowLogDestinationOptions</a>

---

##### `PutTagFieldSpecifications` <a name="PutTagFieldSpecifications" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.putTagFieldSpecifications"></a>

```go
func PutTagFieldSpecifications(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.putTagFieldSpecifications.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDeliverCrossAccountRole` <a name="ResetDeliverCrossAccountRole" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetDeliverCrossAccountRole"></a>

```go
func ResetDeliverCrossAccountRole()
```

##### `ResetDeliverLogsPermissionArn` <a name="ResetDeliverLogsPermissionArn" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetDeliverLogsPermissionArn"></a>

```go
func ResetDeliverLogsPermissionArn()
```

##### `ResetDestinationOptions` <a name="ResetDestinationOptions" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetDestinationOptions"></a>

```go
func ResetDestinationOptions()
```

##### `ResetLogDestination` <a name="ResetLogDestination" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetLogDestination"></a>

```go
func ResetLogDestination()
```

##### `ResetLogDestinationType` <a name="ResetLogDestinationType" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetLogDestinationType"></a>

```go
func ResetLogDestinationType()
```

##### `ResetLogFormat` <a name="ResetLogFormat" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetLogFormat"></a>

```go
func ResetLogFormat()
```

##### `ResetLogGroupName` <a name="ResetLogGroupName" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetLogGroupName"></a>

```go
func ResetLogGroupName()
```

##### `ResetMaxAggregationInterval` <a name="ResetMaxAggregationInterval" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetMaxAggregationInterval"></a>

```go
func ResetMaxAggregationInterval()
```

##### `ResetTagFieldSpecifications` <a name="ResetTagFieldSpecifications" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetTagFieldSpecifications"></a>

```go
func ResetTagFieldSpecifications()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTrafficType` <a name="ResetTrafficType" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetTrafficType"></a>

```go
func ResetTrafficType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2FlowLog resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2flowlog"

ec2flowlog.Ec2FlowLog_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2flowlog"

ec2flowlog.Ec2FlowLog_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2flowlog"

ec2flowlog.Ec2FlowLog_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2flowlog"

ec2flowlog.Ec2FlowLog_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Ec2FlowLog resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Ec2FlowLog to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Ec2FlowLog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_flow_log#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Ec2FlowLog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.destinationOptions">DestinationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference">Ec2FlowLogDestinationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.flowLogId">FlowLogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.tagFieldSpecifications">TagFieldSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList">Ec2FlowLogTagFieldSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList">Ec2FlowLogTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.deliverCrossAccountRoleInput">DeliverCrossAccountRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.deliverLogsPermissionArnInput">DeliverLogsPermissionArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.destinationOptionsInput">DestinationOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.logDestinationInput">LogDestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.logDestinationTypeInput">LogDestinationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.logFormatInput">LogFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.logGroupNameInput">LogGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.maxAggregationIntervalInput">MaxAggregationIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.resourceIdInput">ResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.tagFieldSpecificationsInput">TagFieldSpecificationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.trafficTypeInput">TrafficTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.deliverCrossAccountRole">DeliverCrossAccountRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.deliverLogsPermissionArn">DeliverLogsPermissionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.logDestination">LogDestination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.logDestinationType">LogDestinationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.logFormat">LogFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.logGroupName">LogGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.maxAggregationInterval">MaxAggregationInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.trafficType">TrafficType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DestinationOptions`<sup>Required</sup> <a name="DestinationOptions" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.destinationOptions"></a>

```go
func DestinationOptions() Ec2FlowLogDestinationOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference">Ec2FlowLogDestinationOptionsOutputReference</a>

---

##### `FlowLogId`<sup>Required</sup> <a name="FlowLogId" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.flowLogId"></a>

```go
func FlowLogId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `TagFieldSpecifications`<sup>Required</sup> <a name="TagFieldSpecifications" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.tagFieldSpecifications"></a>

```go
func TagFieldSpecifications() Ec2FlowLogTagFieldSpecificationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList">Ec2FlowLogTagFieldSpecificationsList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.tags"></a>

```go
func Tags() Ec2FlowLogTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList">Ec2FlowLogTagsList</a>

---

##### `DeliverCrossAccountRoleInput`<sup>Optional</sup> <a name="DeliverCrossAccountRoleInput" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.deliverCrossAccountRoleInput"></a>

```go
func DeliverCrossAccountRoleInput() *string
```

- *Type:* *string

---

##### `DeliverLogsPermissionArnInput`<sup>Optional</sup> <a name="DeliverLogsPermissionArnInput" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.deliverLogsPermissionArnInput"></a>

```go
func DeliverLogsPermissionArnInput() *string
```

- *Type:* *string

---

##### `DestinationOptionsInput`<sup>Optional</sup> <a name="DestinationOptionsInput" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.destinationOptionsInput"></a>

```go
func DestinationOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `LogDestinationInput`<sup>Optional</sup> <a name="LogDestinationInput" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.logDestinationInput"></a>

```go
func LogDestinationInput() *string
```

- *Type:* *string

---

##### `LogDestinationTypeInput`<sup>Optional</sup> <a name="LogDestinationTypeInput" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.logDestinationTypeInput"></a>

```go
func LogDestinationTypeInput() *string
```

- *Type:* *string

---

##### `LogFormatInput`<sup>Optional</sup> <a name="LogFormatInput" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.logFormatInput"></a>

```go
func LogFormatInput() *string
```

- *Type:* *string

---

##### `LogGroupNameInput`<sup>Optional</sup> <a name="LogGroupNameInput" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.logGroupNameInput"></a>

```go
func LogGroupNameInput() *string
```

- *Type:* *string

---

##### `MaxAggregationIntervalInput`<sup>Optional</sup> <a name="MaxAggregationIntervalInput" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.maxAggregationIntervalInput"></a>

```go
func MaxAggregationIntervalInput() *f64
```

- *Type:* *f64

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.resourceIdInput"></a>

```go
func ResourceIdInput() *string
```

- *Type:* *string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.resourceTypeInput"></a>

```go
func ResourceTypeInput() *string
```

- *Type:* *string

---

##### `TagFieldSpecificationsInput`<sup>Optional</sup> <a name="TagFieldSpecificationsInput" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.tagFieldSpecificationsInput"></a>

```go
func TagFieldSpecificationsInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TrafficTypeInput`<sup>Optional</sup> <a name="TrafficTypeInput" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.trafficTypeInput"></a>

```go
func TrafficTypeInput() *string
```

- *Type:* *string

---

##### `DeliverCrossAccountRole`<sup>Required</sup> <a name="DeliverCrossAccountRole" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.deliverCrossAccountRole"></a>

```go
func DeliverCrossAccountRole() *string
```

- *Type:* *string

---

##### `DeliverLogsPermissionArn`<sup>Required</sup> <a name="DeliverLogsPermissionArn" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.deliverLogsPermissionArn"></a>

```go
func DeliverLogsPermissionArn() *string
```

- *Type:* *string

---

##### `LogDestination`<sup>Required</sup> <a name="LogDestination" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.logDestination"></a>

```go
func LogDestination() *string
```

- *Type:* *string

---

##### `LogDestinationType`<sup>Required</sup> <a name="LogDestinationType" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.logDestinationType"></a>

```go
func LogDestinationType() *string
```

- *Type:* *string

---

##### `LogFormat`<sup>Required</sup> <a name="LogFormat" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.logFormat"></a>

```go
func LogFormat() *string
```

- *Type:* *string

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.logGroupName"></a>

```go
func LogGroupName() *string
```

- *Type:* *string

---

##### `MaxAggregationInterval`<sup>Required</sup> <a name="MaxAggregationInterval" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.maxAggregationInterval"></a>

```go
func MaxAggregationInterval() *f64
```

- *Type:* *f64

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `TrafficType`<sup>Required</sup> <a name="TrafficType" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.trafficType"></a>

```go
func TrafficType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2FlowLogConfig <a name="Ec2FlowLogConfig" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2flowlog"

&ec2flowlog.Ec2FlowLogConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ResourceId: *string,
	ResourceType: *string,
	DeliverCrossAccountRole: *string,
	DeliverLogsPermissionArn: *string,
	DestinationOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ec2FlowLog.Ec2FlowLogDestinationOptions,
	LogDestination: *string,
	LogDestinationType: *string,
	LogFormat: *string,
	LogGroupName: *string,
	MaxAggregationInterval: *f64,
	TagFieldSpecifications: interface{},
	Tags: interface{},
	TrafficType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.resourceId">ResourceId</a></code> | <code>*string</code> | The ID of the subnet, network interface, or VPC for which you want to create a flow log. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.resourceType">ResourceType</a></code> | <code>*string</code> | The type of resource for which to create the flow log. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.deliverCrossAccountRole">DeliverCrossAccountRole</a></code> | <code>*string</code> | The ARN of the IAM role that allows Amazon EC2 to publish flow logs across accounts. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.deliverLogsPermissionArn">DeliverLogsPermissionArn</a></code> | <code>*string</code> | The ARN for the IAM role that permits Amazon EC2 to publish flow logs to a CloudWatch Logs log group in your account. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.destinationOptions">DestinationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptions">Ec2FlowLogDestinationOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_flow_log#destination_options Ec2FlowLog#destination_options}. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.logDestination">LogDestination</a></code> | <code>*string</code> | Specifies the destination to which the flow log data is to be published. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.logDestinationType">LogDestinationType</a></code> | <code>*string</code> | Specifies the type of destination to which the flow log data is to be published. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.logFormat">LogFormat</a></code> | <code>*string</code> | The fields to include in the flow log record, in the order in which they should appear. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.logGroupName">LogGroupName</a></code> | <code>*string</code> | The name of a new or existing CloudWatch Logs log group where Amazon EC2 publishes your flow logs. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.maxAggregationInterval">MaxAggregationInterval</a></code> | <code>*f64</code> | The maximum interval of time during which a flow of packets is captured and aggregated into a flow log record. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.tagFieldSpecifications">TagFieldSpecifications</a></code> | <code>interface{}</code> | The resource types and associated tags for EC2 resources associated with the EC2 Tags feature for log enrichment. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The tags to apply to the flow logs. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.trafficType">TrafficType</a></code> | <code>*string</code> | The type of traffic to log. You can log traffic that the resource accepts or rejects, or all traffic. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.resourceId"></a>

```go
ResourceId *string
```

- *Type:* *string

The ID of the subnet, network interface, or VPC for which you want to create a flow log.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_flow_log#resource_id Ec2FlowLog#resource_id}

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.resourceType"></a>

```go
ResourceType *string
```

- *Type:* *string

The type of resource for which to create the flow log.

For example, if you specified a VPC ID for the ResourceId property, specify VPC for this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_flow_log#resource_type Ec2FlowLog#resource_type}

---

##### `DeliverCrossAccountRole`<sup>Optional</sup> <a name="DeliverCrossAccountRole" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.deliverCrossAccountRole"></a>

```go
DeliverCrossAccountRole *string
```

- *Type:* *string

The ARN of the IAM role that allows Amazon EC2 to publish flow logs across accounts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_flow_log#deliver_cross_account_role Ec2FlowLog#deliver_cross_account_role}

---

##### `DeliverLogsPermissionArn`<sup>Optional</sup> <a name="DeliverLogsPermissionArn" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.deliverLogsPermissionArn"></a>

```go
DeliverLogsPermissionArn *string
```

- *Type:* *string

The ARN for the IAM role that permits Amazon EC2 to publish flow logs to a CloudWatch Logs log group in your account.

If you specify LogDestinationType as s3 or kinesis-data-firehose, do not specify DeliverLogsPermissionArn or LogGroupName.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_flow_log#deliver_logs_permission_arn Ec2FlowLog#deliver_logs_permission_arn}

---

##### `DestinationOptions`<sup>Optional</sup> <a name="DestinationOptions" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.destinationOptions"></a>

```go
DestinationOptions Ec2FlowLogDestinationOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptions">Ec2FlowLogDestinationOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_flow_log#destination_options Ec2FlowLog#destination_options}.

---

##### `LogDestination`<sup>Optional</sup> <a name="LogDestination" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.logDestination"></a>

```go
LogDestination *string
```

- *Type:* *string

Specifies the destination to which the flow log data is to be published.

Flow log data can be published to a CloudWatch Logs log group, an Amazon S3 bucket, or a Kinesis Firehose stream. The value specified for this parameter depends on the value specified for LogDestinationType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_flow_log#log_destination Ec2FlowLog#log_destination}

---

##### `LogDestinationType`<sup>Optional</sup> <a name="LogDestinationType" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.logDestinationType"></a>

```go
LogDestinationType *string
```

- *Type:* *string

Specifies the type of destination to which the flow log data is to be published.

Flow log data can be published to CloudWatch Logs or Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_flow_log#log_destination_type Ec2FlowLog#log_destination_type}

---

##### `LogFormat`<sup>Optional</sup> <a name="LogFormat" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.logFormat"></a>

```go
LogFormat *string
```

- *Type:* *string

The fields to include in the flow log record, in the order in which they should appear.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_flow_log#log_format Ec2FlowLog#log_format}

---

##### `LogGroupName`<sup>Optional</sup> <a name="LogGroupName" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.logGroupName"></a>

```go
LogGroupName *string
```

- *Type:* *string

The name of a new or existing CloudWatch Logs log group where Amazon EC2 publishes your flow logs.

If you specify LogDestinationType as s3 or kinesis-data-firehose, do not specify DeliverLogsPermissionArn or LogGroupName.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_flow_log#log_group_name Ec2FlowLog#log_group_name}

---

##### `MaxAggregationInterval`<sup>Optional</sup> <a name="MaxAggregationInterval" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.maxAggregationInterval"></a>

```go
MaxAggregationInterval *f64
```

- *Type:* *f64

The maximum interval of time during which a flow of packets is captured and aggregated into a flow log record.

You can specify 60 seconds (1 minute) or 600 seconds (10 minutes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_flow_log#max_aggregation_interval Ec2FlowLog#max_aggregation_interval}

---

##### `TagFieldSpecifications`<sup>Optional</sup> <a name="TagFieldSpecifications" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.tagFieldSpecifications"></a>

```go
TagFieldSpecifications interface{}
```

- *Type:* interface{}

The resource types and associated tags for EC2 resources associated with the EC2 Tags feature for log enrichment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_flow_log#tag_field_specifications Ec2FlowLog#tag_field_specifications}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The tags to apply to the flow logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_flow_log#tags Ec2FlowLog#tags}

---

##### `TrafficType`<sup>Optional</sup> <a name="TrafficType" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.trafficType"></a>

```go
TrafficType *string
```

- *Type:* *string

The type of traffic to log. You can log traffic that the resource accepts or rejects, or all traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_flow_log#traffic_type Ec2FlowLog#traffic_type}

---

### Ec2FlowLogDestinationOptions <a name="Ec2FlowLogDestinationOptions" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2flowlog"

&ec2flowlog.Ec2FlowLogDestinationOptions {
	FileFormat: *string,
	HiveCompatiblePartitions: interface{},
	PerHourPartition: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptions.property.fileFormat">FileFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_flow_log#file_format Ec2FlowLog#file_format}. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptions.property.hiveCompatiblePartitions">HiveCompatiblePartitions</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_flow_log#hive_compatible_partitions Ec2FlowLog#hive_compatible_partitions}. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptions.property.perHourPartition">PerHourPartition</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_flow_log#per_hour_partition Ec2FlowLog#per_hour_partition}. |

---

##### `FileFormat`<sup>Optional</sup> <a name="FileFormat" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptions.property.fileFormat"></a>

```go
FileFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_flow_log#file_format Ec2FlowLog#file_format}.

---

##### `HiveCompatiblePartitions`<sup>Optional</sup> <a name="HiveCompatiblePartitions" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptions.property.hiveCompatiblePartitions"></a>

```go
HiveCompatiblePartitions interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_flow_log#hive_compatible_partitions Ec2FlowLog#hive_compatible_partitions}.

---

##### `PerHourPartition`<sup>Optional</sup> <a name="PerHourPartition" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptions.property.perHourPartition"></a>

```go
PerHourPartition interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_flow_log#per_hour_partition Ec2FlowLog#per_hour_partition}.

---

### Ec2FlowLogTagFieldSpecifications <a name="Ec2FlowLogTagFieldSpecifications" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecifications.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2flowlog"

&ec2flowlog.Ec2FlowLogTagFieldSpecifications {
	ResourceType: *string,
	TagKeys: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecifications.property.resourceType">ResourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_flow_log#resource_type Ec2FlowLog#resource_type}. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecifications.property.tagKeys">TagKeys</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_flow_log#tag_keys Ec2FlowLog#tag_keys}. |

---

##### `ResourceType`<sup>Optional</sup> <a name="ResourceType" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecifications.property.resourceType"></a>

```go
ResourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_flow_log#resource_type Ec2FlowLog#resource_type}.

---

##### `TagKeys`<sup>Optional</sup> <a name="TagKeys" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecifications.property.tagKeys"></a>

```go
TagKeys *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_flow_log#tag_keys Ec2FlowLog#tag_keys}.

---

### Ec2FlowLogTags <a name="Ec2FlowLogTags" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2flowlog"

&ec2flowlog.Ec2FlowLogTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_flow_log#key Ec2FlowLog#key}. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_flow_log#value Ec2FlowLog#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_flow_log#key Ec2FlowLog#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_flow_log#value Ec2FlowLog#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2FlowLogDestinationOptionsOutputReference <a name="Ec2FlowLogDestinationOptionsOutputReference" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2flowlog"

ec2flowlog.NewEc2FlowLogDestinationOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Ec2FlowLogDestinationOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.resetFileFormat">ResetFileFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.resetHiveCompatiblePartitions">ResetHiveCompatiblePartitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.resetPerHourPartition">ResetPerHourPartition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFileFormat` <a name="ResetFileFormat" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.resetFileFormat"></a>

```go
func ResetFileFormat()
```

##### `ResetHiveCompatiblePartitions` <a name="ResetHiveCompatiblePartitions" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.resetHiveCompatiblePartitions"></a>

```go
func ResetHiveCompatiblePartitions()
```

##### `ResetPerHourPartition` <a name="ResetPerHourPartition" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.resetPerHourPartition"></a>

```go
func ResetPerHourPartition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.fileFormatInput">FileFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.hiveCompatiblePartitionsInput">HiveCompatiblePartitionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.perHourPartitionInput">PerHourPartitionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.fileFormat">FileFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.hiveCompatiblePartitions">HiveCompatiblePartitions</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.perHourPartition">PerHourPartition</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FileFormatInput`<sup>Optional</sup> <a name="FileFormatInput" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.fileFormatInput"></a>

```go
func FileFormatInput() *string
```

- *Type:* *string

---

##### `HiveCompatiblePartitionsInput`<sup>Optional</sup> <a name="HiveCompatiblePartitionsInput" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.hiveCompatiblePartitionsInput"></a>

```go
func HiveCompatiblePartitionsInput() interface{}
```

- *Type:* interface{}

---

##### `PerHourPartitionInput`<sup>Optional</sup> <a name="PerHourPartitionInput" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.perHourPartitionInput"></a>

```go
func PerHourPartitionInput() interface{}
```

- *Type:* interface{}

---

##### `FileFormat`<sup>Required</sup> <a name="FileFormat" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.fileFormat"></a>

```go
func FileFormat() *string
```

- *Type:* *string

---

##### `HiveCompatiblePartitions`<sup>Required</sup> <a name="HiveCompatiblePartitions" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.hiveCompatiblePartitions"></a>

```go
func HiveCompatiblePartitions() interface{}
```

- *Type:* interface{}

---

##### `PerHourPartition`<sup>Required</sup> <a name="PerHourPartition" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.perHourPartition"></a>

```go
func PerHourPartition() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2FlowLogTagFieldSpecificationsList <a name="Ec2FlowLogTagFieldSpecificationsList" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2flowlog"

ec2flowlog.NewEc2FlowLogTagFieldSpecificationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Ec2FlowLogTagFieldSpecificationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.get"></a>

```go
func Get(index *f64) Ec2FlowLogTagFieldSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2FlowLogTagFieldSpecificationsOutputReference <a name="Ec2FlowLogTagFieldSpecificationsOutputReference" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2flowlog"

ec2flowlog.NewEc2FlowLogTagFieldSpecificationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Ec2FlowLogTagFieldSpecificationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.resetResourceType">ResetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.resetTagKeys">ResetTagKeys</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResourceType` <a name="ResetResourceType" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.resetResourceType"></a>

```go
func ResetResourceType()
```

##### `ResetTagKeys` <a name="ResetTagKeys" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.resetTagKeys"></a>

```go
func ResetTagKeys()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.property.tagKeysInput">TagKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.property.tagKeys">TagKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.property.resourceTypeInput"></a>

```go
func ResourceTypeInput() *string
```

- *Type:* *string

---

##### `TagKeysInput`<sup>Optional</sup> <a name="TagKeysInput" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.property.tagKeysInput"></a>

```go
func TagKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `TagKeys`<sup>Required</sup> <a name="TagKeys" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.property.tagKeys"></a>

```go
func TagKeys() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2FlowLogTagsList <a name="Ec2FlowLogTagsList" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2flowlog"

ec2flowlog.NewEc2FlowLogTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Ec2FlowLogTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.get"></a>

```go
func Get(index *f64) Ec2FlowLogTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2FlowLogTagsOutputReference <a name="Ec2FlowLogTagsOutputReference" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2flowlog"

ec2flowlog.NewEc2FlowLogTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Ec2FlowLogTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



