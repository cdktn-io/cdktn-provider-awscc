# `pcsComputeNodeGroup` Submodule <a name="`pcsComputeNodeGroup` Submodule" id="@cdktn/provider-awscc.pcsComputeNodeGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PcsComputeNodeGroup <a name="PcsComputeNodeGroup" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group awscc_pcs_compute_node_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pcscomputenodegroup"

pcscomputenodegroup.NewPcsComputeNodeGroup(scope Construct, id *string, config PcsComputeNodeGroupConfig) PcsComputeNodeGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig">PcsComputeNodeGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig">PcsComputeNodeGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.putCustomLaunchTemplate">PutCustomLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.putInstanceConfigs">PutInstanceConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.putNodeLifecycleActions">PutNodeLifecycleActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.putScalingConfiguration">PutScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.putSlurmConfiguration">PutSlurmConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.putSpotOptions">PutSpotOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.resetAmiId">ResetAmiId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.resetNodeLifecycleActions">ResetNodeLifecycleActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.resetPurchaseOption">ResetPurchaseOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.resetSlurmConfiguration">ResetSlurmConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.resetSpotOptions">ResetSpotOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCustomLaunchTemplate` <a name="PutCustomLaunchTemplate" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.putCustomLaunchTemplate"></a>

```go
func PutCustomLaunchTemplate(value PcsComputeNodeGroupCustomLaunchTemplate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.putCustomLaunchTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplate">PcsComputeNodeGroupCustomLaunchTemplate</a>

---

##### `PutInstanceConfigs` <a name="PutInstanceConfigs" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.putInstanceConfigs"></a>

```go
func PutInstanceConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.putInstanceConfigs.parameter.value"></a>

- *Type:* interface{}

---

##### `PutNodeLifecycleActions` <a name="PutNodeLifecycleActions" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.putNodeLifecycleActions"></a>

```go
func PutNodeLifecycleActions(value PcsComputeNodeGroupNodeLifecycleActions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.putNodeLifecycleActions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActions">PcsComputeNodeGroupNodeLifecycleActions</a>

---

##### `PutScalingConfiguration` <a name="PutScalingConfiguration" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.putScalingConfiguration"></a>

```go
func PutScalingConfiguration(value PcsComputeNodeGroupScalingConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.putScalingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfiguration">PcsComputeNodeGroupScalingConfiguration</a>

---

##### `PutSlurmConfiguration` <a name="PutSlurmConfiguration" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.putSlurmConfiguration"></a>

```go
func PutSlurmConfiguration(value PcsComputeNodeGroupSlurmConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.putSlurmConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfiguration">PcsComputeNodeGroupSlurmConfiguration</a>

---

##### `PutSpotOptions` <a name="PutSpotOptions" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.putSpotOptions"></a>

```go
func PutSpotOptions(value PcsComputeNodeGroupSpotOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.putSpotOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptions">PcsComputeNodeGroupSpotOptions</a>

---

##### `ResetAmiId` <a name="ResetAmiId" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.resetAmiId"></a>

```go
func ResetAmiId()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.resetName"></a>

```go
func ResetName()
```

##### `ResetNodeLifecycleActions` <a name="ResetNodeLifecycleActions" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.resetNodeLifecycleActions"></a>

```go
func ResetNodeLifecycleActions()
```

##### `ResetPurchaseOption` <a name="ResetPurchaseOption" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.resetPurchaseOption"></a>

```go
func ResetPurchaseOption()
```

##### `ResetSlurmConfiguration` <a name="ResetSlurmConfiguration" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.resetSlurmConfiguration"></a>

```go
func ResetSlurmConfiguration()
```

##### `ResetSpotOptions` <a name="ResetSpotOptions" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.resetSpotOptions"></a>

```go
func ResetSpotOptions()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a PcsComputeNodeGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pcscomputenodegroup"

pcscomputenodegroup.PcsComputeNodeGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pcscomputenodegroup"

pcscomputenodegroup.PcsComputeNodeGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pcscomputenodegroup"

pcscomputenodegroup.PcsComputeNodeGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pcscomputenodegroup"

pcscomputenodegroup.PcsComputeNodeGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a PcsComputeNodeGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PcsComputeNodeGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PcsComputeNodeGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the PcsComputeNodeGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.computeNodeGroupId">ComputeNodeGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.customLaunchTemplate">CustomLaunchTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference">PcsComputeNodeGroupCustomLaunchTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.errorInfo">ErrorInfo</a></code> | <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoList">PcsComputeNodeGroupErrorInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.instanceConfigs">InstanceConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsList">PcsComputeNodeGroupInstanceConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.nodeLifecycleActions">NodeLifecycleActions</a></code> | <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference">PcsComputeNodeGroupNodeLifecycleActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.scalingConfiguration">ScalingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference">PcsComputeNodeGroupScalingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.slurmConfiguration">SlurmConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference">PcsComputeNodeGroupSlurmConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.spotOptions">SpotOptions</a></code> | <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference">PcsComputeNodeGroupSpotOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.amiIdInput">AmiIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.clusterIdInput">ClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.customLaunchTemplateInput">CustomLaunchTemplateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.iamInstanceProfileArnInput">IamInstanceProfileArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.instanceConfigsInput">InstanceConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.nodeLifecycleActionsInput">NodeLifecycleActionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.purchaseOptionInput">PurchaseOptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.scalingConfigurationInput">ScalingConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.slurmConfigurationInput">SlurmConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.spotOptionsInput">SpotOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.amiId">AmiId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.iamInstanceProfileArn">IamInstanceProfileArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.purchaseOption">PurchaseOption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ComputeNodeGroupId`<sup>Required</sup> <a name="ComputeNodeGroupId" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.computeNodeGroupId"></a>

```go
func ComputeNodeGroupId() *string
```

- *Type:* *string

---

##### `CustomLaunchTemplate`<sup>Required</sup> <a name="CustomLaunchTemplate" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.customLaunchTemplate"></a>

```go
func CustomLaunchTemplate() PcsComputeNodeGroupCustomLaunchTemplateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference">PcsComputeNodeGroupCustomLaunchTemplateOutputReference</a>

---

##### `ErrorInfo`<sup>Required</sup> <a name="ErrorInfo" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.errorInfo"></a>

```go
func ErrorInfo() PcsComputeNodeGroupErrorInfoList
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoList">PcsComputeNodeGroupErrorInfoList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceConfigs`<sup>Required</sup> <a name="InstanceConfigs" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.instanceConfigs"></a>

```go
func InstanceConfigs() PcsComputeNodeGroupInstanceConfigsList
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsList">PcsComputeNodeGroupInstanceConfigsList</a>

---

##### `NodeLifecycleActions`<sup>Required</sup> <a name="NodeLifecycleActions" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.nodeLifecycleActions"></a>

```go
func NodeLifecycleActions() PcsComputeNodeGroupNodeLifecycleActionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference">PcsComputeNodeGroupNodeLifecycleActionsOutputReference</a>

---

##### `ScalingConfiguration`<sup>Required</sup> <a name="ScalingConfiguration" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.scalingConfiguration"></a>

```go
func ScalingConfiguration() PcsComputeNodeGroupScalingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference">PcsComputeNodeGroupScalingConfigurationOutputReference</a>

---

##### `SlurmConfiguration`<sup>Required</sup> <a name="SlurmConfiguration" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.slurmConfiguration"></a>

```go
func SlurmConfiguration() PcsComputeNodeGroupSlurmConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference">PcsComputeNodeGroupSlurmConfigurationOutputReference</a>

---

##### `SpotOptions`<sup>Required</sup> <a name="SpotOptions" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.spotOptions"></a>

```go
func SpotOptions() PcsComputeNodeGroupSpotOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference">PcsComputeNodeGroupSpotOptionsOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `AmiIdInput`<sup>Optional</sup> <a name="AmiIdInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.amiIdInput"></a>

```go
func AmiIdInput() *string
```

- *Type:* *string

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.clusterIdInput"></a>

```go
func ClusterIdInput() *string
```

- *Type:* *string

---

##### `CustomLaunchTemplateInput`<sup>Optional</sup> <a name="CustomLaunchTemplateInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.customLaunchTemplateInput"></a>

```go
func CustomLaunchTemplateInput() interface{}
```

- *Type:* interface{}

---

##### `IamInstanceProfileArnInput`<sup>Optional</sup> <a name="IamInstanceProfileArnInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.iamInstanceProfileArnInput"></a>

```go
func IamInstanceProfileArnInput() *string
```

- *Type:* *string

---

##### `InstanceConfigsInput`<sup>Optional</sup> <a name="InstanceConfigsInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.instanceConfigsInput"></a>

```go
func InstanceConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NodeLifecycleActionsInput`<sup>Optional</sup> <a name="NodeLifecycleActionsInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.nodeLifecycleActionsInput"></a>

```go
func NodeLifecycleActionsInput() interface{}
```

- *Type:* interface{}

---

##### `PurchaseOptionInput`<sup>Optional</sup> <a name="PurchaseOptionInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.purchaseOptionInput"></a>

```go
func PurchaseOptionInput() *string
```

- *Type:* *string

---

##### `ScalingConfigurationInput`<sup>Optional</sup> <a name="ScalingConfigurationInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.scalingConfigurationInput"></a>

```go
func ScalingConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `SlurmConfigurationInput`<sup>Optional</sup> <a name="SlurmConfigurationInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.slurmConfigurationInput"></a>

```go
func SlurmConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `SpotOptionsInput`<sup>Optional</sup> <a name="SpotOptionsInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.spotOptionsInput"></a>

```go
func SpotOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.subnetIdsInput"></a>

```go
func SubnetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AmiId`<sup>Required</sup> <a name="AmiId" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.amiId"></a>

```go
func AmiId() *string
```

- *Type:* *string

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `IamInstanceProfileArn`<sup>Required</sup> <a name="IamInstanceProfileArn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.iamInstanceProfileArn"></a>

```go
func IamInstanceProfileArn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PurchaseOption`<sup>Required</sup> <a name="PurchaseOption" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.purchaseOption"></a>

```go
func PurchaseOption() *string
```

- *Type:* *string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PcsComputeNodeGroupConfig <a name="PcsComputeNodeGroupConfig" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pcscomputenodegroup"

&pcscomputenodegroup.PcsComputeNodeGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterId: *string,
	CustomLaunchTemplate: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplate,
	IamInstanceProfileArn: *string,
	InstanceConfigs: interface{},
	ScalingConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfiguration,
	SubnetIds: *[]*string,
	AmiId: *string,
	Name: *string,
	NodeLifecycleActions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActions,
	PurchaseOption: *string,
	SlurmConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfiguration,
	SpotOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptions,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.clusterId">ClusterId</a></code> | <code>*string</code> | The ID of the cluster of the compute node group. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.customLaunchTemplate">CustomLaunchTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplate">PcsComputeNodeGroupCustomLaunchTemplate</a></code> | An Amazon EC2 launch template AWS PCS uses to launch compute nodes. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.iamInstanceProfileArn">IamInstanceProfileArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the IAM instance profile used to pass an IAM role when launching EC2 instances. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.instanceConfigs">InstanceConfigs</a></code> | <code>interface{}</code> | A list of EC2 instance configurations that AWS PCS can provision in the compute node group. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.scalingConfiguration">ScalingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfiguration">PcsComputeNodeGroupScalingConfiguration</a></code> | Specifies the boundaries of the compute node group auto scaling. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | The list of subnet IDs where instances are provisioned by the compute node group. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.amiId">AmiId</a></code> | <code>*string</code> | The ID of the Amazon Machine Image (AMI) that AWS PCS uses to launch instances. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.name">Name</a></code> | <code>*string</code> | The name that identifies the compute node group. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.nodeLifecycleActions">NodeLifecycleActions</a></code> | <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActions">PcsComputeNodeGroupNodeLifecycleActions</a></code> | Custom scripts that run at defined points in a compute node's lifecycle. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.purchaseOption">PurchaseOption</a></code> | <code>*string</code> | Specifies how EC2 instances are purchased on your behalf. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.slurmConfiguration">SlurmConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfiguration">PcsComputeNodeGroupSlurmConfiguration</a></code> | Additional options related to the Slurm scheduler. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.spotOptions">SpotOptions</a></code> | <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptions">PcsComputeNodeGroupSpotOptions</a></code> | Additional configuration when you specify SPOT as the purchase option. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | 1 or more tags added to the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.clusterId"></a>

```go
ClusterId *string
```

- *Type:* *string

The ID of the cluster of the compute node group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#cluster_id PcsComputeNodeGroup#cluster_id}

---

##### `CustomLaunchTemplate`<sup>Required</sup> <a name="CustomLaunchTemplate" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.customLaunchTemplate"></a>

```go
CustomLaunchTemplate PcsComputeNodeGroupCustomLaunchTemplate
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplate">PcsComputeNodeGroupCustomLaunchTemplate</a>

An Amazon EC2 launch template AWS PCS uses to launch compute nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#custom_launch_template PcsComputeNodeGroup#custom_launch_template}

---

##### `IamInstanceProfileArn`<sup>Required</sup> <a name="IamInstanceProfileArn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.iamInstanceProfileArn"></a>

```go
IamInstanceProfileArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the IAM instance profile used to pass an IAM role when launching EC2 instances.

The role contained in your instance profile must have pcs:RegisterComputeNodeGroupInstance permissions attached to provision instances correctly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#iam_instance_profile_arn PcsComputeNodeGroup#iam_instance_profile_arn}

---

##### `InstanceConfigs`<sup>Required</sup> <a name="InstanceConfigs" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.instanceConfigs"></a>

```go
InstanceConfigs interface{}
```

- *Type:* interface{}

A list of EC2 instance configurations that AWS PCS can provision in the compute node group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#instance_configs PcsComputeNodeGroup#instance_configs}

---

##### `ScalingConfiguration`<sup>Required</sup> <a name="ScalingConfiguration" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.scalingConfiguration"></a>

```go
ScalingConfiguration PcsComputeNodeGroupScalingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfiguration">PcsComputeNodeGroupScalingConfiguration</a>

Specifies the boundaries of the compute node group auto scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#scaling_configuration PcsComputeNodeGroup#scaling_configuration}

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.subnetIds"></a>

```go
SubnetIds *[]*string
```

- *Type:* *[]*string

The list of subnet IDs where instances are provisioned by the compute node group.

The subnets must be in the same VPC as the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#subnet_ids PcsComputeNodeGroup#subnet_ids}

---

##### `AmiId`<sup>Optional</sup> <a name="AmiId" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.amiId"></a>

```go
AmiId *string
```

- *Type:* *string

The ID of the Amazon Machine Image (AMI) that AWS PCS uses to launch instances.

If not provided, AWS PCS uses the AMI ID specified in the custom launch template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#ami_id PcsComputeNodeGroup#ami_id}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name that identifies the compute node group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#name PcsComputeNodeGroup#name}

---

##### `NodeLifecycleActions`<sup>Optional</sup> <a name="NodeLifecycleActions" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.nodeLifecycleActions"></a>

```go
NodeLifecycleActions PcsComputeNodeGroupNodeLifecycleActions
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActions">PcsComputeNodeGroupNodeLifecycleActions</a>

Custom scripts that run at defined points in a compute node's lifecycle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#node_lifecycle_actions PcsComputeNodeGroup#node_lifecycle_actions}

---

##### `PurchaseOption`<sup>Optional</sup> <a name="PurchaseOption" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.purchaseOption"></a>

```go
PurchaseOption *string
```

- *Type:* *string

Specifies how EC2 instances are purchased on your behalf.

AWS PCS supports On-Demand, Spot, Capacity Block, and Interruptible Capacity Reservation instances. For more information, see Instance purchasing options in the Amazon Elastic Compute Cloud User Guide. If you don't provide this option, it defaults to On-Demand.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#purchase_option PcsComputeNodeGroup#purchase_option}

---

##### `SlurmConfiguration`<sup>Optional</sup> <a name="SlurmConfiguration" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.slurmConfiguration"></a>

```go
SlurmConfiguration PcsComputeNodeGroupSlurmConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfiguration">PcsComputeNodeGroupSlurmConfiguration</a>

Additional options related to the Slurm scheduler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#slurm_configuration PcsComputeNodeGroup#slurm_configuration}

---

##### `SpotOptions`<sup>Optional</sup> <a name="SpotOptions" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.spotOptions"></a>

```go
SpotOptions PcsComputeNodeGroupSpotOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptions">PcsComputeNodeGroupSpotOptions</a>

Additional configuration when you specify SPOT as the purchase option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#spot_options PcsComputeNodeGroup#spot_options}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

1 or more tags added to the resource.

Each tag consists of a tag key and tag value. The tag value is optional and can be an empty string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#tags PcsComputeNodeGroup#tags}

---

### PcsComputeNodeGroupCustomLaunchTemplate <a name="PcsComputeNodeGroupCustomLaunchTemplate" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pcscomputenodegroup"

&pcscomputenodegroup.PcsComputeNodeGroupCustomLaunchTemplate {
	Version: *string,
	TemplateId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplate.property.version">Version</a></code> | <code>*string</code> | The version of the EC2 launch template to use to provision instances. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplate.property.templateId">TemplateId</a></code> | <code>*string</code> | The ID of the EC2 launch template to use to provision instances. |

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplate.property.version"></a>

```go
Version *string
```

- *Type:* *string

The version of the EC2 launch template to use to provision instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#version PcsComputeNodeGroup#version}

---

##### `TemplateId`<sup>Optional</sup> <a name="TemplateId" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplate.property.templateId"></a>

```go
TemplateId *string
```

- *Type:* *string

The ID of the EC2 launch template to use to provision instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#template_id PcsComputeNodeGroup#template_id}

---

### PcsComputeNodeGroupErrorInfo <a name="PcsComputeNodeGroupErrorInfo" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pcscomputenodegroup"

&pcscomputenodegroup.PcsComputeNodeGroupErrorInfo {

}
```


### PcsComputeNodeGroupInstanceConfigs <a name="PcsComputeNodeGroupInstanceConfigs" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pcscomputenodegroup"

&pcscomputenodegroup.PcsComputeNodeGroupInstanceConfigs {
	InstanceType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigs.property.instanceType">InstanceType</a></code> | <code>*string</code> | The EC2 instance type that AWS PCS can provision in the compute node group. |

---

##### `InstanceType`<sup>Optional</sup> <a name="InstanceType" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigs.property.instanceType"></a>

```go
InstanceType *string
```

- *Type:* *string

The EC2 instance type that AWS PCS can provision in the compute node group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#instance_type PcsComputeNodeGroup#instance_type}

---

### PcsComputeNodeGroupNodeLifecycleActions <a name="PcsComputeNodeGroupNodeLifecycleActions" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pcscomputenodegroup"

&pcscomputenodegroup.PcsComputeNodeGroupNodeLifecycleActions {
	ScriptCachingPolicy: *string,
	Stages: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStages,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActions.property.scriptCachingPolicy">ScriptCachingPolicy</a></code> | <code>*string</code> | Controls whether lifecycle scripts are downloaded once at first boot (CACHE_ONCE) or re-downloaded on every reboot (REFRESH_ON_REBOOT). |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActions.property.stages">Stages</a></code> | <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStages">PcsComputeNodeGroupNodeLifecycleActionsStages</a></code> | The ordered scripts to run at each compute node lifecycle stage. |

---

##### `ScriptCachingPolicy`<sup>Optional</sup> <a name="ScriptCachingPolicy" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActions.property.scriptCachingPolicy"></a>

```go
ScriptCachingPolicy *string
```

- *Type:* *string

Controls whether lifecycle scripts are downloaded once at first boot (CACHE_ONCE) or re-downloaded on every reboot (REFRESH_ON_REBOOT).

Defaults to CACHE_ONCE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#script_caching_policy PcsComputeNodeGroup#script_caching_policy}

---

##### `Stages`<sup>Optional</sup> <a name="Stages" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActions.property.stages"></a>

```go
Stages PcsComputeNodeGroupNodeLifecycleActionsStages
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStages">PcsComputeNodeGroupNodeLifecycleActionsStages</a>

The ordered scripts to run at each compute node lifecycle stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#stages PcsComputeNodeGroup#stages}

---

### PcsComputeNodeGroupNodeLifecycleActionsStages <a name="PcsComputeNodeGroupNodeLifecycleActionsStages" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStages.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pcscomputenodegroup"

&pcscomputenodegroup.PcsComputeNodeGroupNodeLifecycleActionsStages {
	NodeBootstrapped: interface{},
	NodeReady: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStages.property.nodeBootstrapped">NodeBootstrapped</a></code> | <code>interface{}</code> | Scripts to run after the node is bootstrapped, once the PCS configuration phase completes and before slurmd starts. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStages.property.nodeReady">NodeReady</a></code> | <code>interface{}</code> | Scripts to execute when the node becomes ready (every boot). |

---

##### `NodeBootstrapped`<sup>Optional</sup> <a name="NodeBootstrapped" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStages.property.nodeBootstrapped"></a>

```go
NodeBootstrapped interface{}
```

- *Type:* interface{}

Scripts to run after the node is bootstrapped, once the PCS configuration phase completes and before slurmd starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#node_bootstrapped PcsComputeNodeGroup#node_bootstrapped}

---

##### `NodeReady`<sup>Optional</sup> <a name="NodeReady" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStages.property.nodeReady"></a>

```go
NodeReady interface{}
```

- *Type:* interface{}

Scripts to execute when the node becomes ready (every boot).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#node_ready PcsComputeNodeGroup#node_ready}

---

### PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped <a name="PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pcscomputenodegroup"

&pcscomputenodegroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped {
	Arguments: *[]*string,
	ExecutionPolicy: *string,
	Name: *string,
	OnError: *string,
	ScriptSource: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped.property.arguments">Arguments</a></code> | <code>*[]*string</code> | An ordered list of arguments passed to the script. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped.property.executionPolicy">ExecutionPolicy</a></code> | <code>*string</code> | Whether the script runs only on the node's first boot (FIRST_BOOT_ONLY) or on every boot including reboots (EVERY_BOOT). |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped.property.name">Name</a></code> | <code>*string</code> | A human-readable name that identifies the script. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped.property.onError">OnError</a></code> | <code>*string</code> | The behavior when the script exits with an error. Defaults to TERMINATE. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped.property.scriptSource">ScriptSource</a></code> | <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource">PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource</a></code> | The external location of a lifecycle script. |

---

##### `Arguments`<sup>Optional</sup> <a name="Arguments" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped.property.arguments"></a>

```go
Arguments *[]*string
```

- *Type:* *[]*string

An ordered list of arguments passed to the script.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#arguments PcsComputeNodeGroup#arguments}

---

##### `ExecutionPolicy`<sup>Optional</sup> <a name="ExecutionPolicy" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped.property.executionPolicy"></a>

```go
ExecutionPolicy *string
```

- *Type:* *string

Whether the script runs only on the node's first boot (FIRST_BOOT_ONLY) or on every boot including reboots (EVERY_BOOT).

Defaults to FIRST_BOOT_ONLY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#execution_policy PcsComputeNodeGroup#execution_policy}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped.property.name"></a>

```go
Name *string
```

- *Type:* *string

A human-readable name that identifies the script.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#name PcsComputeNodeGroup#name}

---

##### `OnError`<sup>Optional</sup> <a name="OnError" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped.property.onError"></a>

```go
OnError *string
```

- *Type:* *string

The behavior when the script exits with an error. Defaults to TERMINATE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#on_error PcsComputeNodeGroup#on_error}

---

##### `ScriptSource`<sup>Optional</sup> <a name="ScriptSource" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped.property.scriptSource"></a>

```go
ScriptSource PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource">PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource</a>

The external location of a lifecycle script.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#script_source PcsComputeNodeGroup#script_source}

---

### PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource <a name="PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pcscomputenodegroup"

&pcscomputenodegroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource {
	Checksum: *string,
	S3VersionId: *string,
	ScriptLocation: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource.property.checksum">Checksum</a></code> | <code>*string</code> | A 64-character hexadecimal SHA-256 digest used to verify script integrity. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource.property.s3VersionId">S3VersionId</a></code> | <code>*string</code> | The S3 object version ID of the script, when stored in a versioned bucket. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource.property.scriptLocation">ScriptLocation</a></code> | <code>*string</code> | The S3 URI or HTTPS URL where the script is stored. |

---

##### `Checksum`<sup>Optional</sup> <a name="Checksum" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource.property.checksum"></a>

```go
Checksum *string
```

- *Type:* *string

A 64-character hexadecimal SHA-256 digest used to verify script integrity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#checksum PcsComputeNodeGroup#checksum}

---

##### `S3VersionId`<sup>Optional</sup> <a name="S3VersionId" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource.property.s3VersionId"></a>

```go
S3VersionId *string
```

- *Type:* *string

The S3 object version ID of the script, when stored in a versioned bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#s3_version_id PcsComputeNodeGroup#s3_version_id}

---

##### `ScriptLocation`<sup>Optional</sup> <a name="ScriptLocation" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource.property.scriptLocation"></a>

```go
ScriptLocation *string
```

- *Type:* *string

The S3 URI or HTTPS URL where the script is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#script_location PcsComputeNodeGroup#script_location}

---

### PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady <a name="PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pcscomputenodegroup"

&pcscomputenodegroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady {
	Arguments: *[]*string,
	ExecutionPolicy: *string,
	Name: *string,
	OnError: *string,
	ScriptSource: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady.property.arguments">Arguments</a></code> | <code>*[]*string</code> | An ordered list of arguments passed to the script. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady.property.executionPolicy">ExecutionPolicy</a></code> | <code>*string</code> | Whether the script runs only on the node's first boot (FIRST_BOOT_ONLY) or on every boot including reboots (EVERY_BOOT). |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady.property.name">Name</a></code> | <code>*string</code> | A human-readable name that identifies the script. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady.property.onError">OnError</a></code> | <code>*string</code> | The behavior when the script exits with an error. Defaults to TERMINATE. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady.property.scriptSource">ScriptSource</a></code> | <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource">PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource</a></code> | The external location of a lifecycle script. |

---

##### `Arguments`<sup>Optional</sup> <a name="Arguments" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady.property.arguments"></a>

```go
Arguments *[]*string
```

- *Type:* *[]*string

An ordered list of arguments passed to the script.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#arguments PcsComputeNodeGroup#arguments}

---

##### `ExecutionPolicy`<sup>Optional</sup> <a name="ExecutionPolicy" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady.property.executionPolicy"></a>

```go
ExecutionPolicy *string
```

- *Type:* *string

Whether the script runs only on the node's first boot (FIRST_BOOT_ONLY) or on every boot including reboots (EVERY_BOOT).

Defaults to FIRST_BOOT_ONLY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#execution_policy PcsComputeNodeGroup#execution_policy}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady.property.name"></a>

```go
Name *string
```

- *Type:* *string

A human-readable name that identifies the script.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#name PcsComputeNodeGroup#name}

---

##### `OnError`<sup>Optional</sup> <a name="OnError" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady.property.onError"></a>

```go
OnError *string
```

- *Type:* *string

The behavior when the script exits with an error. Defaults to TERMINATE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#on_error PcsComputeNodeGroup#on_error}

---

##### `ScriptSource`<sup>Optional</sup> <a name="ScriptSource" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady.property.scriptSource"></a>

```go
ScriptSource PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource">PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource</a>

The external location of a lifecycle script.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#script_source PcsComputeNodeGroup#script_source}

---

### PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource <a name="PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pcscomputenodegroup"

&pcscomputenodegroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource {
	Checksum: *string,
	S3VersionId: *string,
	ScriptLocation: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource.property.checksum">Checksum</a></code> | <code>*string</code> | A 64-character hexadecimal SHA-256 digest used to verify script integrity. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource.property.s3VersionId">S3VersionId</a></code> | <code>*string</code> | The S3 object version ID of the script, when stored in a versioned bucket. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource.property.scriptLocation">ScriptLocation</a></code> | <code>*string</code> | The S3 URI or HTTPS URL where the script is stored. |

---

##### `Checksum`<sup>Optional</sup> <a name="Checksum" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource.property.checksum"></a>

```go
Checksum *string
```

- *Type:* *string

A 64-character hexadecimal SHA-256 digest used to verify script integrity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#checksum PcsComputeNodeGroup#checksum}

---

##### `S3VersionId`<sup>Optional</sup> <a name="S3VersionId" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource.property.s3VersionId"></a>

```go
S3VersionId *string
```

- *Type:* *string

The S3 object version ID of the script, when stored in a versioned bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#s3_version_id PcsComputeNodeGroup#s3_version_id}

---

##### `ScriptLocation`<sup>Optional</sup> <a name="ScriptLocation" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource.property.scriptLocation"></a>

```go
ScriptLocation *string
```

- *Type:* *string

The S3 URI or HTTPS URL where the script is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#script_location PcsComputeNodeGroup#script_location}

---

### PcsComputeNodeGroupScalingConfiguration <a name="PcsComputeNodeGroupScalingConfiguration" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pcscomputenodegroup"

&pcscomputenodegroup.PcsComputeNodeGroupScalingConfiguration {
	MaxInstanceCount: *f64,
	MinInstanceCount: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfiguration.property.maxInstanceCount">MaxInstanceCount</a></code> | <code>*f64</code> | The upper bound of the number of instances allowed in the compute fleet. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfiguration.property.minInstanceCount">MinInstanceCount</a></code> | <code>*f64</code> | The lower bound of the number of instances allowed in the compute fleet. |

---

##### `MaxInstanceCount`<sup>Required</sup> <a name="MaxInstanceCount" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfiguration.property.maxInstanceCount"></a>

```go
MaxInstanceCount *f64
```

- *Type:* *f64

The upper bound of the number of instances allowed in the compute fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#max_instance_count PcsComputeNodeGroup#max_instance_count}

---

##### `MinInstanceCount`<sup>Required</sup> <a name="MinInstanceCount" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfiguration.property.minInstanceCount"></a>

```go
MinInstanceCount *f64
```

- *Type:* *f64

The lower bound of the number of instances allowed in the compute fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#min_instance_count PcsComputeNodeGroup#min_instance_count}

---

### PcsComputeNodeGroupSlurmConfiguration <a name="PcsComputeNodeGroupSlurmConfiguration" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pcscomputenodegroup"

&pcscomputenodegroup.PcsComputeNodeGroupSlurmConfiguration {
	ScaleDownIdleTimeInSeconds: *f64,
	SlurmCustomSettings: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfiguration.property.scaleDownIdleTimeInSeconds">ScaleDownIdleTimeInSeconds</a></code> | <code>*f64</code> | The time before an idle node is scaled down. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfiguration.property.slurmCustomSettings">SlurmCustomSettings</a></code> | <code>interface{}</code> | Additional Slurm-specific configuration that directly maps to Slurm settings. |

---

##### `ScaleDownIdleTimeInSeconds`<sup>Optional</sup> <a name="ScaleDownIdleTimeInSeconds" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfiguration.property.scaleDownIdleTimeInSeconds"></a>

```go
ScaleDownIdleTimeInSeconds *f64
```

- *Type:* *f64

The time before an idle node is scaled down.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#scale_down_idle_time_in_seconds PcsComputeNodeGroup#scale_down_idle_time_in_seconds}

---

##### `SlurmCustomSettings`<sup>Optional</sup> <a name="SlurmCustomSettings" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfiguration.property.slurmCustomSettings"></a>

```go
SlurmCustomSettings interface{}
```

- *Type:* interface{}

Additional Slurm-specific configuration that directly maps to Slurm settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#slurm_custom_settings PcsComputeNodeGroup#slurm_custom_settings}

---

### PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings <a name="PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pcscomputenodegroup"

&pcscomputenodegroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings {
	ParameterName: *string,
	ParameterValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings.property.parameterName">ParameterName</a></code> | <code>*string</code> | AWS PCS supports configuration of the following Slurm parameters for compute node groups: Weight and RealMemory. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings.property.parameterValue">ParameterValue</a></code> | <code>*string</code> | The value for the configured Slurm setting. |

---

##### `ParameterName`<sup>Optional</sup> <a name="ParameterName" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings.property.parameterName"></a>

```go
ParameterName *string
```

- *Type:* *string

AWS PCS supports configuration of the following Slurm parameters for compute node groups: Weight and RealMemory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#parameter_name PcsComputeNodeGroup#parameter_name}

---

##### `ParameterValue`<sup>Optional</sup> <a name="ParameterValue" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings.property.parameterValue"></a>

```go
ParameterValue *string
```

- *Type:* *string

The value for the configured Slurm setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#parameter_value PcsComputeNodeGroup#parameter_value}

---

### PcsComputeNodeGroupSpotOptions <a name="PcsComputeNodeGroupSpotOptions" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pcscomputenodegroup"

&pcscomputenodegroup.PcsComputeNodeGroupSpotOptions {
	AllocationStrategy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptions.property.allocationStrategy">AllocationStrategy</a></code> | <code>*string</code> | The Amazon EC2 allocation strategy AWS PCS uses to provision EC2 instances. |

---

##### `AllocationStrategy`<sup>Optional</sup> <a name="AllocationStrategy" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptions.property.allocationStrategy"></a>

```go
AllocationStrategy *string
```

- *Type:* *string

The Amazon EC2 allocation strategy AWS PCS uses to provision EC2 instances.

AWS PCS supports lowest price, capacity optimized, and price capacity optimized. If you don't provide this option, it defaults to price capacity optimized.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#allocation_strategy PcsComputeNodeGroup#allocation_strategy}

---

## Classes <a name="Classes" id="Classes"></a>

### PcsComputeNodeGroupCustomLaunchTemplateOutputReference <a name="PcsComputeNodeGroupCustomLaunchTemplateOutputReference" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pcscomputenodegroup"

pcscomputenodegroup.NewPcsComputeNodeGroupCustomLaunchTemplateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PcsComputeNodeGroupCustomLaunchTemplateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.resetTemplateId">ResetTemplateId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTemplateId` <a name="ResetTemplateId" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.resetTemplateId"></a>

```go
func ResetTemplateId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.templateIdInput">TemplateIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.templateId">TemplateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TemplateIdInput`<sup>Optional</sup> <a name="TemplateIdInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.templateIdInput"></a>

```go
func TemplateIdInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `TemplateId`<sup>Required</sup> <a name="TemplateId" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.templateId"></a>

```go
func TemplateId() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PcsComputeNodeGroupErrorInfoList <a name="PcsComputeNodeGroupErrorInfoList" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pcscomputenodegroup"

pcscomputenodegroup.NewPcsComputeNodeGroupErrorInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PcsComputeNodeGroupErrorInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoList.get"></a>

```go
func Get(index *f64) PcsComputeNodeGroupErrorInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### PcsComputeNodeGroupErrorInfoOutputReference <a name="PcsComputeNodeGroupErrorInfoOutputReference" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pcscomputenodegroup"

pcscomputenodegroup.NewPcsComputeNodeGroupErrorInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PcsComputeNodeGroupErrorInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.property.code">Code</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfo">PcsComputeNodeGroupErrorInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.property.code"></a>

```go
func Code() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() PcsComputeNodeGroupErrorInfo
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfo">PcsComputeNodeGroupErrorInfo</a>

---


### PcsComputeNodeGroupInstanceConfigsList <a name="PcsComputeNodeGroupInstanceConfigsList" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pcscomputenodegroup"

pcscomputenodegroup.NewPcsComputeNodeGroupInstanceConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PcsComputeNodeGroupInstanceConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsList.get"></a>

```go
func Get(index *f64) PcsComputeNodeGroupInstanceConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PcsComputeNodeGroupInstanceConfigsOutputReference <a name="PcsComputeNodeGroupInstanceConfigsOutputReference" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pcscomputenodegroup"

pcscomputenodegroup.NewPcsComputeNodeGroupInstanceConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PcsComputeNodeGroupInstanceConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.resetInstanceType">ResetInstanceType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInstanceType` <a name="ResetInstanceType" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.resetInstanceType"></a>

```go
func ResetInstanceType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.property.instanceTypeInput"></a>

```go
func InstanceTypeInput() *string
```

- *Type:* *string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PcsComputeNodeGroupNodeLifecycleActionsOutputReference <a name="PcsComputeNodeGroupNodeLifecycleActionsOutputReference" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pcscomputenodegroup"

pcscomputenodegroup.NewPcsComputeNodeGroupNodeLifecycleActionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PcsComputeNodeGroupNodeLifecycleActionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.putStages">PutStages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.resetScriptCachingPolicy">ResetScriptCachingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.resetStages">ResetStages</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStages` <a name="PutStages" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.putStages"></a>

```go
func PutStages(value PcsComputeNodeGroupNodeLifecycleActionsStages)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.putStages.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStages">PcsComputeNodeGroupNodeLifecycleActionsStages</a>

---

##### `ResetScriptCachingPolicy` <a name="ResetScriptCachingPolicy" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.resetScriptCachingPolicy"></a>

```go
func ResetScriptCachingPolicy()
```

##### `ResetStages` <a name="ResetStages" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.resetStages"></a>

```go
func ResetStages()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.stages">Stages</a></code> | <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference">PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.scriptCachingPolicyInput">ScriptCachingPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.stagesInput">StagesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.scriptCachingPolicy">ScriptCachingPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Stages`<sup>Required</sup> <a name="Stages" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.stages"></a>

```go
func Stages() PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference">PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference</a>

---

##### `ScriptCachingPolicyInput`<sup>Optional</sup> <a name="ScriptCachingPolicyInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.scriptCachingPolicyInput"></a>

```go
func ScriptCachingPolicyInput() *string
```

- *Type:* *string

---

##### `StagesInput`<sup>Optional</sup> <a name="StagesInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.stagesInput"></a>

```go
func StagesInput() interface{}
```

- *Type:* interface{}

---

##### `ScriptCachingPolicy`<sup>Required</sup> <a name="ScriptCachingPolicy" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.scriptCachingPolicy"></a>

```go
func ScriptCachingPolicy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList <a name="PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pcscomputenodegroup"

pcscomputenodegroup.NewPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.get"></a>

```go
func Get(index *f64) PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference <a name="PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pcscomputenodegroup"

pcscomputenodegroup.NewPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.putScriptSource">PutScriptSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.resetArguments">ResetArguments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.resetExecutionPolicy">ResetExecutionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.resetOnError">ResetOnError</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.resetScriptSource">ResetScriptSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScriptSource` <a name="PutScriptSource" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.putScriptSource"></a>

```go
func PutScriptSource(value PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.putScriptSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource">PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource</a>

---

##### `ResetArguments` <a name="ResetArguments" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.resetArguments"></a>

```go
func ResetArguments()
```

##### `ResetExecutionPolicy` <a name="ResetExecutionPolicy" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.resetExecutionPolicy"></a>

```go
func ResetExecutionPolicy()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetOnError` <a name="ResetOnError" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.resetOnError"></a>

```go
func ResetOnError()
```

##### `ResetScriptSource` <a name="ResetScriptSource" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.resetScriptSource"></a>

```go
func ResetScriptSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.scriptSource">ScriptSource</a></code> | <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference">PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.argumentsInput">ArgumentsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.executionPolicyInput">ExecutionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.onErrorInput">OnErrorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.scriptSourceInput">ScriptSourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.arguments">Arguments</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.executionPolicy">ExecutionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.onError">OnError</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScriptSource`<sup>Required</sup> <a name="ScriptSource" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.scriptSource"></a>

```go
func ScriptSource() PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference">PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference</a>

---

##### `ArgumentsInput`<sup>Optional</sup> <a name="ArgumentsInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.argumentsInput"></a>

```go
func ArgumentsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExecutionPolicyInput`<sup>Optional</sup> <a name="ExecutionPolicyInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.executionPolicyInput"></a>

```go
func ExecutionPolicyInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OnErrorInput`<sup>Optional</sup> <a name="OnErrorInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.onErrorInput"></a>

```go
func OnErrorInput() *string
```

- *Type:* *string

---

##### `ScriptSourceInput`<sup>Optional</sup> <a name="ScriptSourceInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.scriptSourceInput"></a>

```go
func ScriptSourceInput() interface{}
```

- *Type:* interface{}

---

##### `Arguments`<sup>Required</sup> <a name="Arguments" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.arguments"></a>

```go
func Arguments() *[]*string
```

- *Type:* *[]*string

---

##### `ExecutionPolicy`<sup>Required</sup> <a name="ExecutionPolicy" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.executionPolicy"></a>

```go
func ExecutionPolicy() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OnError`<sup>Required</sup> <a name="OnError" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.onError"></a>

```go
func OnError() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference <a name="PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pcscomputenodegroup"

pcscomputenodegroup.NewPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.resetChecksum">ResetChecksum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.resetS3VersionId">ResetS3VersionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.resetScriptLocation">ResetScriptLocation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChecksum` <a name="ResetChecksum" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.resetChecksum"></a>

```go
func ResetChecksum()
```

##### `ResetS3VersionId` <a name="ResetS3VersionId" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.resetS3VersionId"></a>

```go
func ResetS3VersionId()
```

##### `ResetScriptLocation` <a name="ResetScriptLocation" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.resetScriptLocation"></a>

```go
func ResetScriptLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.checksumInput">ChecksumInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.s3VersionIdInput">S3VersionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.scriptLocationInput">ScriptLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.checksum">Checksum</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.s3VersionId">S3VersionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.scriptLocation">ScriptLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ChecksumInput`<sup>Optional</sup> <a name="ChecksumInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.checksumInput"></a>

```go
func ChecksumInput() *string
```

- *Type:* *string

---

##### `S3VersionIdInput`<sup>Optional</sup> <a name="S3VersionIdInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.s3VersionIdInput"></a>

```go
func S3VersionIdInput() *string
```

- *Type:* *string

---

##### `ScriptLocationInput`<sup>Optional</sup> <a name="ScriptLocationInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.scriptLocationInput"></a>

```go
func ScriptLocationInput() *string
```

- *Type:* *string

---

##### `Checksum`<sup>Required</sup> <a name="Checksum" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.checksum"></a>

```go
func Checksum() *string
```

- *Type:* *string

---

##### `S3VersionId`<sup>Required</sup> <a name="S3VersionId" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.s3VersionId"></a>

```go
func S3VersionId() *string
```

- *Type:* *string

---

##### `ScriptLocation`<sup>Required</sup> <a name="ScriptLocation" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.scriptLocation"></a>

```go
func ScriptLocation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList <a name="PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pcscomputenodegroup"

pcscomputenodegroup.NewPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.get"></a>

```go
func Get(index *f64) PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference <a name="PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pcscomputenodegroup"

pcscomputenodegroup.NewPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.putScriptSource">PutScriptSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.resetArguments">ResetArguments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.resetExecutionPolicy">ResetExecutionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.resetOnError">ResetOnError</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.resetScriptSource">ResetScriptSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScriptSource` <a name="PutScriptSource" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.putScriptSource"></a>

```go
func PutScriptSource(value PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.putScriptSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource">PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource</a>

---

##### `ResetArguments` <a name="ResetArguments" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.resetArguments"></a>

```go
func ResetArguments()
```

##### `ResetExecutionPolicy` <a name="ResetExecutionPolicy" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.resetExecutionPolicy"></a>

```go
func ResetExecutionPolicy()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetOnError` <a name="ResetOnError" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.resetOnError"></a>

```go
func ResetOnError()
```

##### `ResetScriptSource` <a name="ResetScriptSource" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.resetScriptSource"></a>

```go
func ResetScriptSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.scriptSource">ScriptSource</a></code> | <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference">PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.argumentsInput">ArgumentsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.executionPolicyInput">ExecutionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.onErrorInput">OnErrorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.scriptSourceInput">ScriptSourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.arguments">Arguments</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.executionPolicy">ExecutionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.onError">OnError</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScriptSource`<sup>Required</sup> <a name="ScriptSource" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.scriptSource"></a>

```go
func ScriptSource() PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference">PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference</a>

---

##### `ArgumentsInput`<sup>Optional</sup> <a name="ArgumentsInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.argumentsInput"></a>

```go
func ArgumentsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExecutionPolicyInput`<sup>Optional</sup> <a name="ExecutionPolicyInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.executionPolicyInput"></a>

```go
func ExecutionPolicyInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OnErrorInput`<sup>Optional</sup> <a name="OnErrorInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.onErrorInput"></a>

```go
func OnErrorInput() *string
```

- *Type:* *string

---

##### `ScriptSourceInput`<sup>Optional</sup> <a name="ScriptSourceInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.scriptSourceInput"></a>

```go
func ScriptSourceInput() interface{}
```

- *Type:* interface{}

---

##### `Arguments`<sup>Required</sup> <a name="Arguments" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.arguments"></a>

```go
func Arguments() *[]*string
```

- *Type:* *[]*string

---

##### `ExecutionPolicy`<sup>Required</sup> <a name="ExecutionPolicy" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.executionPolicy"></a>

```go
func ExecutionPolicy() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OnError`<sup>Required</sup> <a name="OnError" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.onError"></a>

```go
func OnError() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference <a name="PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pcscomputenodegroup"

pcscomputenodegroup.NewPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.resetChecksum">ResetChecksum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.resetS3VersionId">ResetS3VersionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.resetScriptLocation">ResetScriptLocation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChecksum` <a name="ResetChecksum" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.resetChecksum"></a>

```go
func ResetChecksum()
```

##### `ResetS3VersionId` <a name="ResetS3VersionId" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.resetS3VersionId"></a>

```go
func ResetS3VersionId()
```

##### `ResetScriptLocation` <a name="ResetScriptLocation" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.resetScriptLocation"></a>

```go
func ResetScriptLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.checksumInput">ChecksumInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.s3VersionIdInput">S3VersionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.scriptLocationInput">ScriptLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.checksum">Checksum</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.s3VersionId">S3VersionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.scriptLocation">ScriptLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ChecksumInput`<sup>Optional</sup> <a name="ChecksumInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.checksumInput"></a>

```go
func ChecksumInput() *string
```

- *Type:* *string

---

##### `S3VersionIdInput`<sup>Optional</sup> <a name="S3VersionIdInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.s3VersionIdInput"></a>

```go
func S3VersionIdInput() *string
```

- *Type:* *string

---

##### `ScriptLocationInput`<sup>Optional</sup> <a name="ScriptLocationInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.scriptLocationInput"></a>

```go
func ScriptLocationInput() *string
```

- *Type:* *string

---

##### `Checksum`<sup>Required</sup> <a name="Checksum" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.checksum"></a>

```go
func Checksum() *string
```

- *Type:* *string

---

##### `S3VersionId`<sup>Required</sup> <a name="S3VersionId" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.s3VersionId"></a>

```go
func S3VersionId() *string
```

- *Type:* *string

---

##### `ScriptLocation`<sup>Required</sup> <a name="ScriptLocation" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.scriptLocation"></a>

```go
func ScriptLocation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference <a name="PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pcscomputenodegroup"

pcscomputenodegroup.NewPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.putNodeBootstrapped">PutNodeBootstrapped</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.putNodeReady">PutNodeReady</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.resetNodeBootstrapped">ResetNodeBootstrapped</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.resetNodeReady">ResetNodeReady</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNodeBootstrapped` <a name="PutNodeBootstrapped" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.putNodeBootstrapped"></a>

```go
func PutNodeBootstrapped(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.putNodeBootstrapped.parameter.value"></a>

- *Type:* interface{}

---

##### `PutNodeReady` <a name="PutNodeReady" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.putNodeReady"></a>

```go
func PutNodeReady(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.putNodeReady.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetNodeBootstrapped` <a name="ResetNodeBootstrapped" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.resetNodeBootstrapped"></a>

```go
func ResetNodeBootstrapped()
```

##### `ResetNodeReady` <a name="ResetNodeReady" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.resetNodeReady"></a>

```go
func ResetNodeReady()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.nodeBootstrapped">NodeBootstrapped</a></code> | <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList">PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.nodeReady">NodeReady</a></code> | <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList">PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.nodeBootstrappedInput">NodeBootstrappedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.nodeReadyInput">NodeReadyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NodeBootstrapped`<sup>Required</sup> <a name="NodeBootstrapped" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.nodeBootstrapped"></a>

```go
func NodeBootstrapped() PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList">PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList</a>

---

##### `NodeReady`<sup>Required</sup> <a name="NodeReady" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.nodeReady"></a>

```go
func NodeReady() PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList">PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList</a>

---

##### `NodeBootstrappedInput`<sup>Optional</sup> <a name="NodeBootstrappedInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.nodeBootstrappedInput"></a>

```go
func NodeBootstrappedInput() interface{}
```

- *Type:* interface{}

---

##### `NodeReadyInput`<sup>Optional</sup> <a name="NodeReadyInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.nodeReadyInput"></a>

```go
func NodeReadyInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PcsComputeNodeGroupScalingConfigurationOutputReference <a name="PcsComputeNodeGroupScalingConfigurationOutputReference" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pcscomputenodegroup"

pcscomputenodegroup.NewPcsComputeNodeGroupScalingConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PcsComputeNodeGroupScalingConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.property.maxInstanceCountInput">MaxInstanceCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.property.minInstanceCountInput">MinInstanceCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.property.maxInstanceCount">MaxInstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.property.minInstanceCount">MinInstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxInstanceCountInput`<sup>Optional</sup> <a name="MaxInstanceCountInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.property.maxInstanceCountInput"></a>

```go
func MaxInstanceCountInput() *f64
```

- *Type:* *f64

---

##### `MinInstanceCountInput`<sup>Optional</sup> <a name="MinInstanceCountInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.property.minInstanceCountInput"></a>

```go
func MinInstanceCountInput() *f64
```

- *Type:* *f64

---

##### `MaxInstanceCount`<sup>Required</sup> <a name="MaxInstanceCount" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.property.maxInstanceCount"></a>

```go
func MaxInstanceCount() *f64
```

- *Type:* *f64

---

##### `MinInstanceCount`<sup>Required</sup> <a name="MinInstanceCount" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.property.minInstanceCount"></a>

```go
func MinInstanceCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PcsComputeNodeGroupSlurmConfigurationOutputReference <a name="PcsComputeNodeGroupSlurmConfigurationOutputReference" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pcscomputenodegroup"

pcscomputenodegroup.NewPcsComputeNodeGroupSlurmConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PcsComputeNodeGroupSlurmConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.putSlurmCustomSettings">PutSlurmCustomSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.resetScaleDownIdleTimeInSeconds">ResetScaleDownIdleTimeInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.resetSlurmCustomSettings">ResetSlurmCustomSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSlurmCustomSettings` <a name="PutSlurmCustomSettings" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.putSlurmCustomSettings"></a>

```go
func PutSlurmCustomSettings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.putSlurmCustomSettings.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetScaleDownIdleTimeInSeconds` <a name="ResetScaleDownIdleTimeInSeconds" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.resetScaleDownIdleTimeInSeconds"></a>

```go
func ResetScaleDownIdleTimeInSeconds()
```

##### `ResetSlurmCustomSettings` <a name="ResetSlurmCustomSettings" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.resetSlurmCustomSettings"></a>

```go
func ResetSlurmCustomSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.property.slurmCustomSettings">SlurmCustomSettings</a></code> | <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList">PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.property.scaleDownIdleTimeInSecondsInput">ScaleDownIdleTimeInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.property.slurmCustomSettingsInput">SlurmCustomSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.property.scaleDownIdleTimeInSeconds">ScaleDownIdleTimeInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SlurmCustomSettings`<sup>Required</sup> <a name="SlurmCustomSettings" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.property.slurmCustomSettings"></a>

```go
func SlurmCustomSettings() PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList">PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList</a>

---

##### `ScaleDownIdleTimeInSecondsInput`<sup>Optional</sup> <a name="ScaleDownIdleTimeInSecondsInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.property.scaleDownIdleTimeInSecondsInput"></a>

```go
func ScaleDownIdleTimeInSecondsInput() *f64
```

- *Type:* *f64

---

##### `SlurmCustomSettingsInput`<sup>Optional</sup> <a name="SlurmCustomSettingsInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.property.slurmCustomSettingsInput"></a>

```go
func SlurmCustomSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `ScaleDownIdleTimeInSeconds`<sup>Required</sup> <a name="ScaleDownIdleTimeInSeconds" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.property.scaleDownIdleTimeInSeconds"></a>

```go
func ScaleDownIdleTimeInSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList <a name="PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pcscomputenodegroup"

pcscomputenodegroup.NewPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.get"></a>

```go
func Get(index *f64) PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference <a name="PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pcscomputenodegroup"

pcscomputenodegroup.NewPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.resetParameterName">ResetParameterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.resetParameterValue">ResetParameterValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameterName` <a name="ResetParameterName" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.resetParameterName"></a>

```go
func ResetParameterName()
```

##### `ResetParameterValue` <a name="ResetParameterValue" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.resetParameterValue"></a>

```go
func ResetParameterValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.parameterNameInput">ParameterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.parameterValueInput">ParameterValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.parameterName">ParameterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.parameterValue">ParameterValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ParameterNameInput`<sup>Optional</sup> <a name="ParameterNameInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.parameterNameInput"></a>

```go
func ParameterNameInput() *string
```

- *Type:* *string

---

##### `ParameterValueInput`<sup>Optional</sup> <a name="ParameterValueInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.parameterValueInput"></a>

```go
func ParameterValueInput() *string
```

- *Type:* *string

---

##### `ParameterName`<sup>Required</sup> <a name="ParameterName" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.parameterName"></a>

```go
func ParameterName() *string
```

- *Type:* *string

---

##### `ParameterValue`<sup>Required</sup> <a name="ParameterValue" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.parameterValue"></a>

```go
func ParameterValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PcsComputeNodeGroupSpotOptionsOutputReference <a name="PcsComputeNodeGroupSpotOptionsOutputReference" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pcscomputenodegroup"

pcscomputenodegroup.NewPcsComputeNodeGroupSpotOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PcsComputeNodeGroupSpotOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.resetAllocationStrategy">ResetAllocationStrategy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllocationStrategy` <a name="ResetAllocationStrategy" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.resetAllocationStrategy"></a>

```go
func ResetAllocationStrategy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.property.allocationStrategyInput">AllocationStrategyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.property.allocationStrategy">AllocationStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllocationStrategyInput`<sup>Optional</sup> <a name="AllocationStrategyInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.property.allocationStrategyInput"></a>

```go
func AllocationStrategyInput() *string
```

- *Type:* *string

---

##### `AllocationStrategy`<sup>Required</sup> <a name="AllocationStrategy" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.property.allocationStrategy"></a>

```go
func AllocationStrategy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



