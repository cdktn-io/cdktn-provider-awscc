# `elasticloadbalancingv2TargetGroup` Submodule <a name="`elasticloadbalancingv2TargetGroup` Submodule" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Elasticloadbalancingv2TargetGroup <a name="Elasticloadbalancingv2TargetGroup" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_target_group awscc_elasticloadbalancingv2_target_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticloadbalancingv2targetgroup"

elasticloadbalancingv2targetgroup.NewElasticloadbalancingv2TargetGroup(scope Construct, id *string, config Elasticloadbalancingv2TargetGroupConfig) Elasticloadbalancingv2TargetGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig">Elasticloadbalancingv2TargetGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig">Elasticloadbalancingv2TargetGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.putMatcher">PutMatcher</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.putTargetGroupAttributes">PutTargetGroupAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.putTargets">PutTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetHealthCheckEnabled">ResetHealthCheckEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetHealthCheckIntervalSeconds">ResetHealthCheckIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetHealthCheckPath">ResetHealthCheckPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetHealthCheckPort">ResetHealthCheckPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetHealthCheckProtocol">ResetHealthCheckProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetHealthCheckTimeoutSeconds">ResetHealthCheckTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetHealthyThresholdCount">ResetHealthyThresholdCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetIpAddressType">ResetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetMatcher">ResetMatcher</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetProtocolVersion">ResetProtocolVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetTargetControlPort">ResetTargetControlPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetTargetGroupAttributes">ResetTargetGroupAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetTargets">ResetTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetTargetType">ResetTargetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetUnhealthyThresholdCount">ResetUnhealthyThresholdCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetVpcId">ResetVpcId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMatcher` <a name="PutMatcher" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.putMatcher"></a>

```go
func PutMatcher(value Elasticloadbalancingv2TargetGroupMatcher)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.putMatcher.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcher">Elasticloadbalancingv2TargetGroupMatcher</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTargetGroupAttributes` <a name="PutTargetGroupAttributes" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.putTargetGroupAttributes"></a>

```go
func PutTargetGroupAttributes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.putTargetGroupAttributes.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTargets` <a name="PutTargets" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.putTargets"></a>

```go
func PutTargets(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.putTargets.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetHealthCheckEnabled` <a name="ResetHealthCheckEnabled" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetHealthCheckEnabled"></a>

```go
func ResetHealthCheckEnabled()
```

##### `ResetHealthCheckIntervalSeconds` <a name="ResetHealthCheckIntervalSeconds" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetHealthCheckIntervalSeconds"></a>

```go
func ResetHealthCheckIntervalSeconds()
```

##### `ResetHealthCheckPath` <a name="ResetHealthCheckPath" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetHealthCheckPath"></a>

```go
func ResetHealthCheckPath()
```

##### `ResetHealthCheckPort` <a name="ResetHealthCheckPort" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetHealthCheckPort"></a>

```go
func ResetHealthCheckPort()
```

##### `ResetHealthCheckProtocol` <a name="ResetHealthCheckProtocol" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetHealthCheckProtocol"></a>

```go
func ResetHealthCheckProtocol()
```

##### `ResetHealthCheckTimeoutSeconds` <a name="ResetHealthCheckTimeoutSeconds" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetHealthCheckTimeoutSeconds"></a>

```go
func ResetHealthCheckTimeoutSeconds()
```

##### `ResetHealthyThresholdCount` <a name="ResetHealthyThresholdCount" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetHealthyThresholdCount"></a>

```go
func ResetHealthyThresholdCount()
```

##### `ResetIpAddressType` <a name="ResetIpAddressType" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetIpAddressType"></a>

```go
func ResetIpAddressType()
```

##### `ResetMatcher` <a name="ResetMatcher" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetMatcher"></a>

```go
func ResetMatcher()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetName"></a>

```go
func ResetName()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetPort"></a>

```go
func ResetPort()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetProtocol"></a>

```go
func ResetProtocol()
```

##### `ResetProtocolVersion` <a name="ResetProtocolVersion" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetProtocolVersion"></a>

```go
func ResetProtocolVersion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTargetControlPort` <a name="ResetTargetControlPort" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetTargetControlPort"></a>

```go
func ResetTargetControlPort()
```

##### `ResetTargetGroupAttributes` <a name="ResetTargetGroupAttributes" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetTargetGroupAttributes"></a>

```go
func ResetTargetGroupAttributes()
```

##### `ResetTargets` <a name="ResetTargets" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetTargets"></a>

```go
func ResetTargets()
```

##### `ResetTargetType` <a name="ResetTargetType" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetTargetType"></a>

```go
func ResetTargetType()
```

##### `ResetUnhealthyThresholdCount` <a name="ResetUnhealthyThresholdCount" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetUnhealthyThresholdCount"></a>

```go
func ResetUnhealthyThresholdCount()
```

##### `ResetVpcId` <a name="ResetVpcId" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetVpcId"></a>

```go
func ResetVpcId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Elasticloadbalancingv2TargetGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticloadbalancingv2targetgroup"

elasticloadbalancingv2targetgroup.Elasticloadbalancingv2TargetGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticloadbalancingv2targetgroup"

elasticloadbalancingv2targetgroup.Elasticloadbalancingv2TargetGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticloadbalancingv2targetgroup"

elasticloadbalancingv2targetgroup.Elasticloadbalancingv2TargetGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticloadbalancingv2targetgroup"

elasticloadbalancingv2targetgroup.Elasticloadbalancingv2TargetGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Elasticloadbalancingv2TargetGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Elasticloadbalancingv2TargetGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Elasticloadbalancingv2TargetGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_target_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Elasticloadbalancingv2TargetGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.loadBalancerArns">LoadBalancerArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.matcher">Matcher</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference">Elasticloadbalancingv2TargetGroupMatcherOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList">Elasticloadbalancingv2TargetGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.targetGroupArn">TargetGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.targetGroupAttributes">TargetGroupAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList">Elasticloadbalancingv2TargetGroupTargetGroupAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.targetGroupFullName">TargetGroupFullName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.targetGroupName">TargetGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.targets">Targets</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList">Elasticloadbalancingv2TargetGroupTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckEnabledInput">HealthCheckEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckIntervalSecondsInput">HealthCheckIntervalSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckPathInput">HealthCheckPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckPortInput">HealthCheckPortInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckProtocolInput">HealthCheckProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckTimeoutSecondsInput">HealthCheckTimeoutSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthyThresholdCountInput">HealthyThresholdCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.ipAddressTypeInput">IpAddressTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.matcherInput">MatcherInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.protocolVersionInput">ProtocolVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.targetControlPortInput">TargetControlPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.targetGroupAttributesInput">TargetGroupAttributesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.targetsInput">TargetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.targetTypeInput">TargetTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.unhealthyThresholdCountInput">UnhealthyThresholdCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.vpcIdInput">VpcIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckEnabled">HealthCheckEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckIntervalSeconds">HealthCheckIntervalSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckPath">HealthCheckPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckPort">HealthCheckPort</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckProtocol">HealthCheckProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckTimeoutSeconds">HealthCheckTimeoutSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthyThresholdCount">HealthyThresholdCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.ipAddressType">IpAddressType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.protocolVersion">ProtocolVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.targetControlPort">TargetControlPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.targetType">TargetType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.unhealthyThresholdCount">UnhealthyThresholdCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LoadBalancerArns`<sup>Required</sup> <a name="LoadBalancerArns" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.loadBalancerArns"></a>

```go
func LoadBalancerArns() *[]*string
```

- *Type:* *[]*string

---

##### `Matcher`<sup>Required</sup> <a name="Matcher" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.matcher"></a>

```go
func Matcher() Elasticloadbalancingv2TargetGroupMatcherOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference">Elasticloadbalancingv2TargetGroupMatcherOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.tags"></a>

```go
func Tags() Elasticloadbalancingv2TargetGroupTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList">Elasticloadbalancingv2TargetGroupTagsList</a>

---

##### `TargetGroupArn`<sup>Required</sup> <a name="TargetGroupArn" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.targetGroupArn"></a>

```go
func TargetGroupArn() *string
```

- *Type:* *string

---

##### `TargetGroupAttributes`<sup>Required</sup> <a name="TargetGroupAttributes" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.targetGroupAttributes"></a>

```go
func TargetGroupAttributes() Elasticloadbalancingv2TargetGroupTargetGroupAttributesList
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList">Elasticloadbalancingv2TargetGroupTargetGroupAttributesList</a>

---

##### `TargetGroupFullName`<sup>Required</sup> <a name="TargetGroupFullName" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.targetGroupFullName"></a>

```go
func TargetGroupFullName() *string
```

- *Type:* *string

---

##### `TargetGroupName`<sup>Required</sup> <a name="TargetGroupName" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.targetGroupName"></a>

```go
func TargetGroupName() *string
```

- *Type:* *string

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.targets"></a>

```go
func Targets() Elasticloadbalancingv2TargetGroupTargetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList">Elasticloadbalancingv2TargetGroupTargetsList</a>

---

##### `HealthCheckEnabledInput`<sup>Optional</sup> <a name="HealthCheckEnabledInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckEnabledInput"></a>

```go
func HealthCheckEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `HealthCheckIntervalSecondsInput`<sup>Optional</sup> <a name="HealthCheckIntervalSecondsInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckIntervalSecondsInput"></a>

```go
func HealthCheckIntervalSecondsInput() *f64
```

- *Type:* *f64

---

##### `HealthCheckPathInput`<sup>Optional</sup> <a name="HealthCheckPathInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckPathInput"></a>

```go
func HealthCheckPathInput() *string
```

- *Type:* *string

---

##### `HealthCheckPortInput`<sup>Optional</sup> <a name="HealthCheckPortInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckPortInput"></a>

```go
func HealthCheckPortInput() *string
```

- *Type:* *string

---

##### `HealthCheckProtocolInput`<sup>Optional</sup> <a name="HealthCheckProtocolInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckProtocolInput"></a>

```go
func HealthCheckProtocolInput() *string
```

- *Type:* *string

---

##### `HealthCheckTimeoutSecondsInput`<sup>Optional</sup> <a name="HealthCheckTimeoutSecondsInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckTimeoutSecondsInput"></a>

```go
func HealthCheckTimeoutSecondsInput() *f64
```

- *Type:* *f64

---

##### `HealthyThresholdCountInput`<sup>Optional</sup> <a name="HealthyThresholdCountInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthyThresholdCountInput"></a>

```go
func HealthyThresholdCountInput() *f64
```

- *Type:* *f64

---

##### `IpAddressTypeInput`<sup>Optional</sup> <a name="IpAddressTypeInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.ipAddressTypeInput"></a>

```go
func IpAddressTypeInput() *string
```

- *Type:* *string

---

##### `MatcherInput`<sup>Optional</sup> <a name="MatcherInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.matcherInput"></a>

```go
func MatcherInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `ProtocolVersionInput`<sup>Optional</sup> <a name="ProtocolVersionInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.protocolVersionInput"></a>

```go
func ProtocolVersionInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TargetControlPortInput`<sup>Optional</sup> <a name="TargetControlPortInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.targetControlPortInput"></a>

```go
func TargetControlPortInput() *f64
```

- *Type:* *f64

---

##### `TargetGroupAttributesInput`<sup>Optional</sup> <a name="TargetGroupAttributesInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.targetGroupAttributesInput"></a>

```go
func TargetGroupAttributesInput() interface{}
```

- *Type:* interface{}

---

##### `TargetsInput`<sup>Optional</sup> <a name="TargetsInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.targetsInput"></a>

```go
func TargetsInput() interface{}
```

- *Type:* interface{}

---

##### `TargetTypeInput`<sup>Optional</sup> <a name="TargetTypeInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.targetTypeInput"></a>

```go
func TargetTypeInput() *string
```

- *Type:* *string

---

##### `UnhealthyThresholdCountInput`<sup>Optional</sup> <a name="UnhealthyThresholdCountInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.unhealthyThresholdCountInput"></a>

```go
func UnhealthyThresholdCountInput() *f64
```

- *Type:* *f64

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.vpcIdInput"></a>

```go
func VpcIdInput() *string
```

- *Type:* *string

---

##### `HealthCheckEnabled`<sup>Required</sup> <a name="HealthCheckEnabled" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckEnabled"></a>

```go
func HealthCheckEnabled() interface{}
```

- *Type:* interface{}

---

##### `HealthCheckIntervalSeconds`<sup>Required</sup> <a name="HealthCheckIntervalSeconds" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckIntervalSeconds"></a>

```go
func HealthCheckIntervalSeconds() *f64
```

- *Type:* *f64

---

##### `HealthCheckPath`<sup>Required</sup> <a name="HealthCheckPath" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckPath"></a>

```go
func HealthCheckPath() *string
```

- *Type:* *string

---

##### `HealthCheckPort`<sup>Required</sup> <a name="HealthCheckPort" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckPort"></a>

```go
func HealthCheckPort() *string
```

- *Type:* *string

---

##### `HealthCheckProtocol`<sup>Required</sup> <a name="HealthCheckProtocol" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckProtocol"></a>

```go
func HealthCheckProtocol() *string
```

- *Type:* *string

---

##### `HealthCheckTimeoutSeconds`<sup>Required</sup> <a name="HealthCheckTimeoutSeconds" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckTimeoutSeconds"></a>

```go
func HealthCheckTimeoutSeconds() *f64
```

- *Type:* *f64

---

##### `HealthyThresholdCount`<sup>Required</sup> <a name="HealthyThresholdCount" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthyThresholdCount"></a>

```go
func HealthyThresholdCount() *f64
```

- *Type:* *f64

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.ipAddressType"></a>

```go
func IpAddressType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `ProtocolVersion`<sup>Required</sup> <a name="ProtocolVersion" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.protocolVersion"></a>

```go
func ProtocolVersion() *string
```

- *Type:* *string

---

##### `TargetControlPort`<sup>Required</sup> <a name="TargetControlPort" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.targetControlPort"></a>

```go
func TargetControlPort() *f64
```

- *Type:* *f64

---

##### `TargetType`<sup>Required</sup> <a name="TargetType" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.targetType"></a>

```go
func TargetType() *string
```

- *Type:* *string

---

##### `UnhealthyThresholdCount`<sup>Required</sup> <a name="UnhealthyThresholdCount" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.unhealthyThresholdCount"></a>

```go
func UnhealthyThresholdCount() *f64
```

- *Type:* *f64

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Elasticloadbalancingv2TargetGroupConfig <a name="Elasticloadbalancingv2TargetGroupConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticloadbalancingv2targetgroup"

&elasticloadbalancingv2targetgroup.Elasticloadbalancingv2TargetGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	HealthCheckEnabled: interface{},
	HealthCheckIntervalSeconds: *f64,
	HealthCheckPath: *string,
	HealthCheckPort: *string,
	HealthCheckProtocol: *string,
	HealthCheckTimeoutSeconds: *f64,
	HealthyThresholdCount: *f64,
	IpAddressType: *string,
	Matcher: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcher,
	Name: *string,
	Port: *f64,
	Protocol: *string,
	ProtocolVersion: *string,
	Tags: interface{},
	TargetControlPort: *f64,
	TargetGroupAttributes: interface{},
	Targets: interface{},
	TargetType: *string,
	UnhealthyThresholdCount: *f64,
	VpcId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.healthCheckEnabled">HealthCheckEnabled</a></code> | <code>interface{}</code> | Indicates whether health checks are enabled. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.healthCheckIntervalSeconds">HealthCheckIntervalSeconds</a></code> | <code>*f64</code> | The approximate amount of time, in seconds, between health checks of an individual target. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.healthCheckPath">HealthCheckPath</a></code> | <code>*string</code> | [HTTP/HTTPS health checks] The destination for health checks on the targets. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.healthCheckPort">HealthCheckPort</a></code> | <code>*string</code> | The port the load balancer uses when performing health checks on targets. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.healthCheckProtocol">HealthCheckProtocol</a></code> | <code>*string</code> | The protocol the load balancer uses when performing health checks on targets. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.healthCheckTimeoutSeconds">HealthCheckTimeoutSeconds</a></code> | <code>*f64</code> | The amount of time, in seconds, during which no response from a target means a failed health check. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.healthyThresholdCount">HealthyThresholdCount</a></code> | <code>*f64</code> | The number of consecutive health checks successes required before considering an unhealthy target healthy. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.ipAddressType">IpAddressType</a></code> | <code>*string</code> | The type of IP address used for this target group. The possible values are ipv4 and ipv6. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.matcher">Matcher</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcher">Elasticloadbalancingv2TargetGroupMatcher</a></code> | [HTTP/HTTPS health checks] The HTTP or gRPC codes to use when checking for a successful response from a target. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.name">Name</a></code> | <code>*string</code> | The name of the target group. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.port">Port</a></code> | <code>*f64</code> | The port on which the targets receive traffic. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.protocol">Protocol</a></code> | <code>*string</code> | The protocol to use for routing traffic to the targets. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.protocolVersion">ProtocolVersion</a></code> | <code>*string</code> | [HTTP/HTTPS protocol] The protocol version. The possible values are GRPC, HTTP1, and HTTP2. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The tags. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.targetControlPort">TargetControlPort</a></code> | <code>*f64</code> | The port that the target control agent uses to communicate the available capacity of targets to the load balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.targetGroupAttributes">TargetGroupAttributes</a></code> | <code>interface{}</code> | The attributes. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.targets">Targets</a></code> | <code>interface{}</code> | The targets. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.targetType">TargetType</a></code> | <code>*string</code> | The type of target that you must specify when registering targets with this target group. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.unhealthyThresholdCount">UnhealthyThresholdCount</a></code> | <code>*f64</code> | The number of consecutive health check failures required before considering a target unhealthy. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.vpcId">VpcId</a></code> | <code>*string</code> | The identifier of the virtual private cloud (VPC). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `HealthCheckEnabled`<sup>Optional</sup> <a name="HealthCheckEnabled" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.healthCheckEnabled"></a>

```go
HealthCheckEnabled interface{}
```

- *Type:* interface{}

Indicates whether health checks are enabled.

If the target type is lambda, health checks are disabled by default but can be enabled. If the target type is instance, ip, or alb, health checks are always enabled and cannot be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_target_group#health_check_enabled Elasticloadbalancingv2TargetGroup#health_check_enabled}

---

##### `HealthCheckIntervalSeconds`<sup>Optional</sup> <a name="HealthCheckIntervalSeconds" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.healthCheckIntervalSeconds"></a>

```go
HealthCheckIntervalSeconds *f64
```

- *Type:* *f64

The approximate amount of time, in seconds, between health checks of an individual target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_target_group#health_check_interval_seconds Elasticloadbalancingv2TargetGroup#health_check_interval_seconds}

---

##### `HealthCheckPath`<sup>Optional</sup> <a name="HealthCheckPath" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.healthCheckPath"></a>

```go
HealthCheckPath *string
```

- *Type:* *string

[HTTP/HTTPS health checks] The destination for health checks on the targets.

[HTTP1 or HTTP2 protocol version] The ping path. The default is /. [GRPC protocol version] The path of a custom health check method with the format /package.service/method. The default is /AWS.ALB/healthcheck.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_target_group#health_check_path Elasticloadbalancingv2TargetGroup#health_check_path}

---

##### `HealthCheckPort`<sup>Optional</sup> <a name="HealthCheckPort" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.healthCheckPort"></a>

```go
HealthCheckPort *string
```

- *Type:* *string

The port the load balancer uses when performing health checks on targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_target_group#health_check_port Elasticloadbalancingv2TargetGroup#health_check_port}

---

##### `HealthCheckProtocol`<sup>Optional</sup> <a name="HealthCheckProtocol" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.healthCheckProtocol"></a>

```go
HealthCheckProtocol *string
```

- *Type:* *string

The protocol the load balancer uses when performing health checks on targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_target_group#health_check_protocol Elasticloadbalancingv2TargetGroup#health_check_protocol}

---

##### `HealthCheckTimeoutSeconds`<sup>Optional</sup> <a name="HealthCheckTimeoutSeconds" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.healthCheckTimeoutSeconds"></a>

```go
HealthCheckTimeoutSeconds *f64
```

- *Type:* *f64

The amount of time, in seconds, during which no response from a target means a failed health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_target_group#health_check_timeout_seconds Elasticloadbalancingv2TargetGroup#health_check_timeout_seconds}

---

##### `HealthyThresholdCount`<sup>Optional</sup> <a name="HealthyThresholdCount" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.healthyThresholdCount"></a>

```go
HealthyThresholdCount *f64
```

- *Type:* *f64

The number of consecutive health checks successes required before considering an unhealthy target healthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_target_group#healthy_threshold_count Elasticloadbalancingv2TargetGroup#healthy_threshold_count}

---

##### `IpAddressType`<sup>Optional</sup> <a name="IpAddressType" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.ipAddressType"></a>

```go
IpAddressType *string
```

- *Type:* *string

The type of IP address used for this target group. The possible values are ipv4 and ipv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_target_group#ip_address_type Elasticloadbalancingv2TargetGroup#ip_address_type}

---

##### `Matcher`<sup>Optional</sup> <a name="Matcher" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.matcher"></a>

```go
Matcher Elasticloadbalancingv2TargetGroupMatcher
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcher">Elasticloadbalancingv2TargetGroupMatcher</a>

[HTTP/HTTPS health checks] The HTTP or gRPC codes to use when checking for a successful response from a target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_target_group#matcher Elasticloadbalancingv2TargetGroup#matcher}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the target group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_target_group#name Elasticloadbalancingv2TargetGroup#name}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The port on which the targets receive traffic.

This port is used unless you specify a port override when registering the target. If the target is a Lambda function, this parameter does not apply. If the protocol is GENEVE, the supported port is 6081.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_target_group#port Elasticloadbalancingv2TargetGroup#port}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

The protocol to use for routing traffic to the targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_target_group#protocol Elasticloadbalancingv2TargetGroup#protocol}

---

##### `ProtocolVersion`<sup>Optional</sup> <a name="ProtocolVersion" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.protocolVersion"></a>

```go
ProtocolVersion *string
```

- *Type:* *string

[HTTP/HTTPS protocol] The protocol version. The possible values are GRPC, HTTP1, and HTTP2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_target_group#protocol_version Elasticloadbalancingv2TargetGroup#protocol_version}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_target_group#tags Elasticloadbalancingv2TargetGroup#tags}

---

##### `TargetControlPort`<sup>Optional</sup> <a name="TargetControlPort" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.targetControlPort"></a>

```go
TargetControlPort *f64
```

- *Type:* *f64

The port that the target control agent uses to communicate the available capacity of targets to the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_target_group#target_control_port Elasticloadbalancingv2TargetGroup#target_control_port}

---

##### `TargetGroupAttributes`<sup>Optional</sup> <a name="TargetGroupAttributes" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.targetGroupAttributes"></a>

```go
TargetGroupAttributes interface{}
```

- *Type:* interface{}

The attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_target_group#target_group_attributes Elasticloadbalancingv2TargetGroup#target_group_attributes}

---

##### `Targets`<sup>Optional</sup> <a name="Targets" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.targets"></a>

```go
Targets interface{}
```

- *Type:* interface{}

The targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_target_group#targets Elasticloadbalancingv2TargetGroup#targets}

---

##### `TargetType`<sup>Optional</sup> <a name="TargetType" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.targetType"></a>

```go
TargetType *string
```

- *Type:* *string

The type of target that you must specify when registering targets with this target group.

You can't specify targets for a target group using more than one target type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_target_group#target_type Elasticloadbalancingv2TargetGroup#target_type}

---

##### `UnhealthyThresholdCount`<sup>Optional</sup> <a name="UnhealthyThresholdCount" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.unhealthyThresholdCount"></a>

```go
UnhealthyThresholdCount *f64
```

- *Type:* *f64

The number of consecutive health check failures required before considering a target unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_target_group#unhealthy_threshold_count Elasticloadbalancingv2TargetGroup#unhealthy_threshold_count}

---

##### `VpcId`<sup>Optional</sup> <a name="VpcId" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.vpcId"></a>

```go
VpcId *string
```

- *Type:* *string

The identifier of the virtual private cloud (VPC).

If the target is a Lambda function, this parameter does not apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_target_group#vpc_id Elasticloadbalancingv2TargetGroup#vpc_id}

---

### Elasticloadbalancingv2TargetGroupMatcher <a name="Elasticloadbalancingv2TargetGroupMatcher" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcher"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcher.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticloadbalancingv2targetgroup"

&elasticloadbalancingv2targetgroup.Elasticloadbalancingv2TargetGroupMatcher {
	GrpcCode: *string,
	HttpCode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcher.property.grpcCode">GrpcCode</a></code> | <code>*string</code> | You can specify values between 0 and 99. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcher.property.httpCode">HttpCode</a></code> | <code>*string</code> | For Application Load Balancers, you can specify values between 200 and 499, and the default value is 200. |

---

##### `GrpcCode`<sup>Optional</sup> <a name="GrpcCode" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcher.property.grpcCode"></a>

```go
GrpcCode *string
```

- *Type:* *string

You can specify values between 0 and 99.

You can specify multiple values, or a range of values. The default value is 12.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_target_group#grpc_code Elasticloadbalancingv2TargetGroup#grpc_code}

---

##### `HttpCode`<sup>Optional</sup> <a name="HttpCode" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcher.property.httpCode"></a>

```go
HttpCode *string
```

- *Type:* *string

For Application Load Balancers, you can specify values between 200 and 499, and the default value is 200.

You can specify multiple values or a range of values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_target_group#http_code Elasticloadbalancingv2TargetGroup#http_code}

---

### Elasticloadbalancingv2TargetGroupTags <a name="Elasticloadbalancingv2TargetGroupTags" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticloadbalancingv2targetgroup"

&elasticloadbalancingv2targetgroup.Elasticloadbalancingv2TargetGroupTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTags.property.key">Key</a></code> | <code>*string</code> | The value for the tag. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTags.property.value">Value</a></code> | <code>*string</code> | The key name of the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_target_group#key Elasticloadbalancingv2TargetGroup#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_target_group#value Elasticloadbalancingv2TargetGroup#value}

---

### Elasticloadbalancingv2TargetGroupTargetGroupAttributes <a name="Elasticloadbalancingv2TargetGroupTargetGroupAttributes" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticloadbalancingv2targetgroup"

&elasticloadbalancingv2targetgroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributes {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributes.property.key">Key</a></code> | <code>*string</code> | The value of the attribute. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributes.property.value">Value</a></code> | <code>*string</code> | The name of the attribute. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributes.property.key"></a>

```go
Key *string
```

- *Type:* *string

The value of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_target_group#key Elasticloadbalancingv2TargetGroup#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributes.property.value"></a>

```go
Value *string
```

- *Type:* *string

The name of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_target_group#value Elasticloadbalancingv2TargetGroup#value}

---

### Elasticloadbalancingv2TargetGroupTargets <a name="Elasticloadbalancingv2TargetGroupTargets" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticloadbalancingv2targetgroup"

&elasticloadbalancingv2targetgroup.Elasticloadbalancingv2TargetGroupTargets {
	AvailabilityZone: *string,
	Id: *string,
	Port: *f64,
	QuicServerId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargets.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | An Availability Zone or all. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargets.property.id">Id</a></code> | <code>*string</code> | The ID of the target. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargets.property.port">Port</a></code> | <code>*f64</code> | The port on which the target is listening. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargets.property.quicServerId">QuicServerId</a></code> | <code>*string</code> | The Server ID used by targets when using QUIC or TCP_QUIC protocols. |

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargets.property.availabilityZone"></a>

```go
AvailabilityZone *string
```

- *Type:* *string

An Availability Zone or all.

This determines whether the target receives traffic from the load balancer nodes in the specified Availability Zone or from all enabled Availability Zones for the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_target_group#availability_zone Elasticloadbalancingv2TargetGroup#availability_zone}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargets.property.id"></a>

```go
Id *string
```

- *Type:* *string

The ID of the target.

If the target type of the target group is instance, specify an instance ID. If the target type is ip, specify an IP address. If the target type is lambda, specify the ARN of the Lambda function. If the target type is alb, specify the ARN of the Application Load Balancer target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_target_group#id Elasticloadbalancingv2TargetGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargets.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The port on which the target is listening.

If the target group protocol is GENEVE, the supported port is 6081. If the target type is alb, the targeted Application Load Balancer must have at least one listener whose port matches the target group port. Not used if the target is a Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_target_group#port Elasticloadbalancingv2TargetGroup#port}

---

##### `QuicServerId`<sup>Optional</sup> <a name="QuicServerId" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargets.property.quicServerId"></a>

```go
QuicServerId *string
```

- *Type:* *string

The Server ID used by targets when using QUIC or TCP_QUIC protocols.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_target_group#quic_server_id Elasticloadbalancingv2TargetGroup#quic_server_id}

---

## Classes <a name="Classes" id="Classes"></a>

### Elasticloadbalancingv2TargetGroupMatcherOutputReference <a name="Elasticloadbalancingv2TargetGroupMatcherOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticloadbalancingv2targetgroup"

elasticloadbalancingv2targetgroup.NewElasticloadbalancingv2TargetGroupMatcherOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Elasticloadbalancingv2TargetGroupMatcherOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.resetGrpcCode">ResetGrpcCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.resetHttpCode">ResetHttpCode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGrpcCode` <a name="ResetGrpcCode" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.resetGrpcCode"></a>

```go
func ResetGrpcCode()
```

##### `ResetHttpCode` <a name="ResetHttpCode" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.resetHttpCode"></a>

```go
func ResetHttpCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.property.grpcCodeInput">GrpcCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.property.httpCodeInput">HttpCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.property.grpcCode">GrpcCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.property.httpCode">HttpCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GrpcCodeInput`<sup>Optional</sup> <a name="GrpcCodeInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.property.grpcCodeInput"></a>

```go
func GrpcCodeInput() *string
```

- *Type:* *string

---

##### `HttpCodeInput`<sup>Optional</sup> <a name="HttpCodeInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.property.httpCodeInput"></a>

```go
func HttpCodeInput() *string
```

- *Type:* *string

---

##### `GrpcCode`<sup>Required</sup> <a name="GrpcCode" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.property.grpcCode"></a>

```go
func GrpcCode() *string
```

- *Type:* *string

---

##### `HttpCode`<sup>Required</sup> <a name="HttpCode" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.property.httpCode"></a>

```go
func HttpCode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Elasticloadbalancingv2TargetGroupTagsList <a name="Elasticloadbalancingv2TargetGroupTagsList" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticloadbalancingv2targetgroup"

elasticloadbalancingv2targetgroup.NewElasticloadbalancingv2TargetGroupTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Elasticloadbalancingv2TargetGroupTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.get"></a>

```go
func Get(index *f64) Elasticloadbalancingv2TargetGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Elasticloadbalancingv2TargetGroupTagsOutputReference <a name="Elasticloadbalancingv2TargetGroupTagsOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticloadbalancingv2targetgroup"

elasticloadbalancingv2targetgroup.NewElasticloadbalancingv2TargetGroupTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Elasticloadbalancingv2TargetGroupTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Elasticloadbalancingv2TargetGroupTargetGroupAttributesList <a name="Elasticloadbalancingv2TargetGroupTargetGroupAttributesList" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticloadbalancingv2targetgroup"

elasticloadbalancingv2targetgroup.NewElasticloadbalancingv2TargetGroupTargetGroupAttributesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Elasticloadbalancingv2TargetGroupTargetGroupAttributesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.get"></a>

```go
func Get(index *f64) Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference <a name="Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticloadbalancingv2targetgroup"

elasticloadbalancingv2targetgroup.NewElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Elasticloadbalancingv2TargetGroupTargetsList <a name="Elasticloadbalancingv2TargetGroupTargetsList" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticloadbalancingv2targetgroup"

elasticloadbalancingv2targetgroup.NewElasticloadbalancingv2TargetGroupTargetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Elasticloadbalancingv2TargetGroupTargetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.get"></a>

```go
func Get(index *f64) Elasticloadbalancingv2TargetGroupTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Elasticloadbalancingv2TargetGroupTargetsOutputReference <a name="Elasticloadbalancingv2TargetGroupTargetsOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticloadbalancingv2targetgroup"

elasticloadbalancingv2targetgroup.NewElasticloadbalancingv2TargetGroupTargetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Elasticloadbalancingv2TargetGroupTargetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.resetQuicServerId">ResetQuicServerId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.resetAvailabilityZone"></a>

```go
func ResetAvailabilityZone()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetQuicServerId` <a name="ResetQuicServerId" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.resetQuicServerId"></a>

```go
func ResetQuicServerId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.property.quicServerIdInput">QuicServerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.property.quicServerId">QuicServerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.property.availabilityZoneInput"></a>

```go
func AvailabilityZoneInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `QuicServerIdInput`<sup>Optional</sup> <a name="QuicServerIdInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.property.quicServerIdInput"></a>

```go
func QuicServerIdInput() *string
```

- *Type:* *string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `QuicServerId`<sup>Required</sup> <a name="QuicServerId" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.property.quicServerId"></a>

```go
func QuicServerId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



