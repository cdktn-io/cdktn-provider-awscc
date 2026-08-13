# `syntheticsCanary` Submodule <a name="`syntheticsCanary` Submodule" id="@cdktn/provider-awscc.syntheticsCanary"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SyntheticsCanary <a name="SyntheticsCanary" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary awscc_synthetics_canary}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/syntheticscanary"

syntheticscanary.NewSyntheticsCanary(scope Construct, id *string, config SyntheticsCanaryConfig) SyntheticsCanary
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig">SyntheticsCanaryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig">SyntheticsCanaryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putArtifactConfig">PutArtifactConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putBrowserConfigs">PutBrowserConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putCode">PutCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putRunConfig">PutRunConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putSchedule">PutSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putVisualReference">PutVisualReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putVisualReferences">PutVisualReferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putVpcConfig">PutVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetArtifactConfig">ResetArtifactConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetBrowserConfigs">ResetBrowserConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetDeleteLambdaResourcesOnCanaryDeletion">ResetDeleteLambdaResourcesOnCanaryDeletion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetDryRunAndUpdate">ResetDryRunAndUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetFailureRetentionPeriod">ResetFailureRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetProvisionedResourceCleanup">ResetProvisionedResourceCleanup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetResourcesToReplicateTags">ResetResourcesToReplicateTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetRunConfig">ResetRunConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetStartCanaryAfterCreation">ResetStartCanaryAfterCreation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetSuccessRetentionPeriod">ResetSuccessRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetVisualReference">ResetVisualReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetVisualReferences">ResetVisualReferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetVpcConfig">ResetVpcConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutArtifactConfig` <a name="PutArtifactConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putArtifactConfig"></a>

```go
func PutArtifactConfig(value SyntheticsCanaryArtifactConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putArtifactConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfig">SyntheticsCanaryArtifactConfig</a>

---

##### `PutBrowserConfigs` <a name="PutBrowserConfigs" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putBrowserConfigs"></a>

```go
func PutBrowserConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putBrowserConfigs.parameter.value"></a>

- *Type:* interface{}

---

##### `PutCode` <a name="PutCode" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putCode"></a>

```go
func PutCode(value SyntheticsCanaryCode)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putCode.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode">SyntheticsCanaryCode</a>

---

##### `PutRunConfig` <a name="PutRunConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putRunConfig"></a>

```go
func PutRunConfig(value SyntheticsCanaryRunConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putRunConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig">SyntheticsCanaryRunConfig</a>

---

##### `PutSchedule` <a name="PutSchedule" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putSchedule"></a>

```go
func PutSchedule(value SyntheticsCanarySchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule">SyntheticsCanarySchedule</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutVisualReference` <a name="PutVisualReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putVisualReference"></a>

```go
func PutVisualReference(value SyntheticsCanaryVisualReference)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putVisualReference.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference">SyntheticsCanaryVisualReference</a>

---

##### `PutVisualReferences` <a name="PutVisualReferences" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putVisualReferences"></a>

```go
func PutVisualReferences(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putVisualReferences.parameter.value"></a>

- *Type:* interface{}

---

##### `PutVpcConfig` <a name="PutVpcConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putVpcConfig"></a>

```go
func PutVpcConfig(value SyntheticsCanaryVpcConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig">SyntheticsCanaryVpcConfig</a>

---

##### `ResetArtifactConfig` <a name="ResetArtifactConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetArtifactConfig"></a>

```go
func ResetArtifactConfig()
```

##### `ResetBrowserConfigs` <a name="ResetBrowserConfigs" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetBrowserConfigs"></a>

```go
func ResetBrowserConfigs()
```

##### `ResetDeleteLambdaResourcesOnCanaryDeletion` <a name="ResetDeleteLambdaResourcesOnCanaryDeletion" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetDeleteLambdaResourcesOnCanaryDeletion"></a>

```go
func ResetDeleteLambdaResourcesOnCanaryDeletion()
```

##### `ResetDryRunAndUpdate` <a name="ResetDryRunAndUpdate" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetDryRunAndUpdate"></a>

```go
func ResetDryRunAndUpdate()
```

##### `ResetFailureRetentionPeriod` <a name="ResetFailureRetentionPeriod" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetFailureRetentionPeriod"></a>

```go
func ResetFailureRetentionPeriod()
```

##### `ResetProvisionedResourceCleanup` <a name="ResetProvisionedResourceCleanup" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetProvisionedResourceCleanup"></a>

```go
func ResetProvisionedResourceCleanup()
```

##### `ResetResourcesToReplicateTags` <a name="ResetResourcesToReplicateTags" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetResourcesToReplicateTags"></a>

```go
func ResetResourcesToReplicateTags()
```

##### `ResetRunConfig` <a name="ResetRunConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetRunConfig"></a>

```go
func ResetRunConfig()
```

##### `ResetStartCanaryAfterCreation` <a name="ResetStartCanaryAfterCreation" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetStartCanaryAfterCreation"></a>

```go
func ResetStartCanaryAfterCreation()
```

##### `ResetSuccessRetentionPeriod` <a name="ResetSuccessRetentionPeriod" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetSuccessRetentionPeriod"></a>

```go
func ResetSuccessRetentionPeriod()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetTags"></a>

```go
func ResetTags()
```

##### `ResetVisualReference` <a name="ResetVisualReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetVisualReference"></a>

```go
func ResetVisualReference()
```

##### `ResetVisualReferences` <a name="ResetVisualReferences" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetVisualReferences"></a>

```go
func ResetVisualReferences()
```

##### `ResetVpcConfig` <a name="ResetVpcConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetVpcConfig"></a>

```go
func ResetVpcConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SyntheticsCanary resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/syntheticscanary"

syntheticscanary.SyntheticsCanary_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/syntheticscanary"

syntheticscanary.SyntheticsCanary_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/syntheticscanary"

syntheticscanary.SyntheticsCanary_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/syntheticscanary"

syntheticscanary.SyntheticsCanary_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SyntheticsCanary resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SyntheticsCanary to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SyntheticsCanary that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SyntheticsCanary to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.artifactConfig">ArtifactConfig</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference">SyntheticsCanaryArtifactConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.browserConfigs">BrowserConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList">SyntheticsCanaryBrowserConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.canaryId">CanaryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.code">Code</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference">SyntheticsCanaryCodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.runConfig">RunConfig</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference">SyntheticsCanaryRunConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.schedule">Schedule</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference">SyntheticsCanaryScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList">SyntheticsCanaryTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.visualReference">VisualReference</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference">SyntheticsCanaryVisualReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.visualReferences">VisualReferences</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList">SyntheticsCanaryVisualReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference">SyntheticsCanaryVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.artifactConfigInput">ArtifactConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.artifactS3LocationInput">ArtifactS3LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.browserConfigsInput">BrowserConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.codeInput">CodeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.deleteLambdaResourcesOnCanaryDeletionInput">DeleteLambdaResourcesOnCanaryDeletionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.dryRunAndUpdateInput">DryRunAndUpdateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.executionRoleArnInput">ExecutionRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.failureRetentionPeriodInput">FailureRetentionPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.provisionedResourceCleanupInput">ProvisionedResourceCleanupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.resourcesToReplicateTagsInput">ResourcesToReplicateTagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.runConfigInput">RunConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.runtimeVersionInput">RuntimeVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.scheduleInput">ScheduleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.startCanaryAfterCreationInput">StartCanaryAfterCreationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.successRetentionPeriodInput">SuccessRetentionPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.visualReferenceInput">VisualReferenceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.visualReferencesInput">VisualReferencesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.vpcConfigInput">VpcConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.artifactS3Location">ArtifactS3Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.deleteLambdaResourcesOnCanaryDeletion">DeleteLambdaResourcesOnCanaryDeletion</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.dryRunAndUpdate">DryRunAndUpdate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.failureRetentionPeriod">FailureRetentionPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.provisionedResourceCleanup">ProvisionedResourceCleanup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.resourcesToReplicateTags">ResourcesToReplicateTags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.runtimeVersion">RuntimeVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.startCanaryAfterCreation">StartCanaryAfterCreation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.successRetentionPeriod">SuccessRetentionPeriod</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ArtifactConfig`<sup>Required</sup> <a name="ArtifactConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.artifactConfig"></a>

```go
func ArtifactConfig() SyntheticsCanaryArtifactConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference">SyntheticsCanaryArtifactConfigOutputReference</a>

---

##### `BrowserConfigs`<sup>Required</sup> <a name="BrowserConfigs" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.browserConfigs"></a>

```go
func BrowserConfigs() SyntheticsCanaryBrowserConfigsList
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList">SyntheticsCanaryBrowserConfigsList</a>

---

##### `CanaryId`<sup>Required</sup> <a name="CanaryId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.canaryId"></a>

```go
func CanaryId() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.code"></a>

```go
func Code() SyntheticsCanaryCodeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference">SyntheticsCanaryCodeOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RunConfig`<sup>Required</sup> <a name="RunConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.runConfig"></a>

```go
func RunConfig() SyntheticsCanaryRunConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference">SyntheticsCanaryRunConfigOutputReference</a>

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.schedule"></a>

```go
func Schedule() SyntheticsCanaryScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference">SyntheticsCanaryScheduleOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.tags"></a>

```go
func Tags() SyntheticsCanaryTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList">SyntheticsCanaryTagsList</a>

---

##### `VisualReference`<sup>Required</sup> <a name="VisualReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.visualReference"></a>

```go
func VisualReference() SyntheticsCanaryVisualReferenceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference">SyntheticsCanaryVisualReferenceOutputReference</a>

---

##### `VisualReferences`<sup>Required</sup> <a name="VisualReferences" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.visualReferences"></a>

```go
func VisualReferences() SyntheticsCanaryVisualReferencesList
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList">SyntheticsCanaryVisualReferencesList</a>

---

##### `VpcConfig`<sup>Required</sup> <a name="VpcConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.vpcConfig"></a>

```go
func VpcConfig() SyntheticsCanaryVpcConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference">SyntheticsCanaryVpcConfigOutputReference</a>

---

##### `ArtifactConfigInput`<sup>Optional</sup> <a name="ArtifactConfigInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.artifactConfigInput"></a>

```go
func ArtifactConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ArtifactS3LocationInput`<sup>Optional</sup> <a name="ArtifactS3LocationInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.artifactS3LocationInput"></a>

```go
func ArtifactS3LocationInput() *string
```

- *Type:* *string

---

##### `BrowserConfigsInput`<sup>Optional</sup> <a name="BrowserConfigsInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.browserConfigsInput"></a>

```go
func BrowserConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `CodeInput`<sup>Optional</sup> <a name="CodeInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.codeInput"></a>

```go
func CodeInput() interface{}
```

- *Type:* interface{}

---

##### `DeleteLambdaResourcesOnCanaryDeletionInput`<sup>Optional</sup> <a name="DeleteLambdaResourcesOnCanaryDeletionInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.deleteLambdaResourcesOnCanaryDeletionInput"></a>

```go
func DeleteLambdaResourcesOnCanaryDeletionInput() interface{}
```

- *Type:* interface{}

---

##### `DryRunAndUpdateInput`<sup>Optional</sup> <a name="DryRunAndUpdateInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.dryRunAndUpdateInput"></a>

```go
func DryRunAndUpdateInput() interface{}
```

- *Type:* interface{}

---

##### `ExecutionRoleArnInput`<sup>Optional</sup> <a name="ExecutionRoleArnInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.executionRoleArnInput"></a>

```go
func ExecutionRoleArnInput() *string
```

- *Type:* *string

---

##### `FailureRetentionPeriodInput`<sup>Optional</sup> <a name="FailureRetentionPeriodInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.failureRetentionPeriodInput"></a>

```go
func FailureRetentionPeriodInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProvisionedResourceCleanupInput`<sup>Optional</sup> <a name="ProvisionedResourceCleanupInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.provisionedResourceCleanupInput"></a>

```go
func ProvisionedResourceCleanupInput() *string
```

- *Type:* *string

---

##### `ResourcesToReplicateTagsInput`<sup>Optional</sup> <a name="ResourcesToReplicateTagsInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.resourcesToReplicateTagsInput"></a>

```go
func ResourcesToReplicateTagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RunConfigInput`<sup>Optional</sup> <a name="RunConfigInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.runConfigInput"></a>

```go
func RunConfigInput() interface{}
```

- *Type:* interface{}

---

##### `RuntimeVersionInput`<sup>Optional</sup> <a name="RuntimeVersionInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.runtimeVersionInput"></a>

```go
func RuntimeVersionInput() *string
```

- *Type:* *string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.scheduleInput"></a>

```go
func ScheduleInput() interface{}
```

- *Type:* interface{}

---

##### `StartCanaryAfterCreationInput`<sup>Optional</sup> <a name="StartCanaryAfterCreationInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.startCanaryAfterCreationInput"></a>

```go
func StartCanaryAfterCreationInput() interface{}
```

- *Type:* interface{}

---

##### `SuccessRetentionPeriodInput`<sup>Optional</sup> <a name="SuccessRetentionPeriodInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.successRetentionPeriodInput"></a>

```go
func SuccessRetentionPeriodInput() *f64
```

- *Type:* *f64

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `VisualReferenceInput`<sup>Optional</sup> <a name="VisualReferenceInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.visualReferenceInput"></a>

```go
func VisualReferenceInput() interface{}
```

- *Type:* interface{}

---

##### `VisualReferencesInput`<sup>Optional</sup> <a name="VisualReferencesInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.visualReferencesInput"></a>

```go
func VisualReferencesInput() interface{}
```

- *Type:* interface{}

---

##### `VpcConfigInput`<sup>Optional</sup> <a name="VpcConfigInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.vpcConfigInput"></a>

```go
func VpcConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ArtifactS3Location`<sup>Required</sup> <a name="ArtifactS3Location" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.artifactS3Location"></a>

```go
func ArtifactS3Location() *string
```

- *Type:* *string

---

##### `DeleteLambdaResourcesOnCanaryDeletion`<sup>Required</sup> <a name="DeleteLambdaResourcesOnCanaryDeletion" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.deleteLambdaResourcesOnCanaryDeletion"></a>

```go
func DeleteLambdaResourcesOnCanaryDeletion() interface{}
```

- *Type:* interface{}

---

##### `DryRunAndUpdate`<sup>Required</sup> <a name="DryRunAndUpdate" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.dryRunAndUpdate"></a>

```go
func DryRunAndUpdate() interface{}
```

- *Type:* interface{}

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.executionRoleArn"></a>

```go
func ExecutionRoleArn() *string
```

- *Type:* *string

---

##### `FailureRetentionPeriod`<sup>Required</sup> <a name="FailureRetentionPeriod" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.failureRetentionPeriod"></a>

```go
func FailureRetentionPeriod() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProvisionedResourceCleanup`<sup>Required</sup> <a name="ProvisionedResourceCleanup" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.provisionedResourceCleanup"></a>

```go
func ProvisionedResourceCleanup() *string
```

- *Type:* *string

---

##### `ResourcesToReplicateTags`<sup>Required</sup> <a name="ResourcesToReplicateTags" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.resourcesToReplicateTags"></a>

```go
func ResourcesToReplicateTags() *[]*string
```

- *Type:* *[]*string

---

##### `RuntimeVersion`<sup>Required</sup> <a name="RuntimeVersion" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.runtimeVersion"></a>

```go
func RuntimeVersion() *string
```

- *Type:* *string

---

##### `StartCanaryAfterCreation`<sup>Required</sup> <a name="StartCanaryAfterCreation" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.startCanaryAfterCreation"></a>

```go
func StartCanaryAfterCreation() interface{}
```

- *Type:* interface{}

---

##### `SuccessRetentionPeriod`<sup>Required</sup> <a name="SuccessRetentionPeriod" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.successRetentionPeriod"></a>

```go
func SuccessRetentionPeriod() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SyntheticsCanaryArtifactConfig <a name="SyntheticsCanaryArtifactConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/syntheticscanary"

&syntheticscanary.SyntheticsCanaryArtifactConfig {
	S3Encryption: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfig.property.s3Encryption">S3Encryption</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption">SyntheticsCanaryArtifactConfigS3Encryption</a></code> | Encryption configuration for uploading artifacts to S3. |

---

##### `S3Encryption`<sup>Optional</sup> <a name="S3Encryption" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfig.property.s3Encryption"></a>

```go
S3Encryption SyntheticsCanaryArtifactConfigS3Encryption
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption">SyntheticsCanaryArtifactConfigS3Encryption</a>

Encryption configuration for uploading artifacts to S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#s3_encryption SyntheticsCanary#s3_encryption}

---

### SyntheticsCanaryArtifactConfigS3Encryption <a name="SyntheticsCanaryArtifactConfigS3Encryption" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/syntheticscanary"

&syntheticscanary.SyntheticsCanaryArtifactConfigS3Encryption {
	EncryptionMode: *string,
	KmsKeyArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption.property.encryptionMode">EncryptionMode</a></code> | <code>*string</code> | Encryption mode for encrypting artifacts when uploading to S3. Valid values: SSE_S3 and SSE_KMS. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | KMS key Arn for encrypting artifacts when uploading to S3. |

---

##### `EncryptionMode`<sup>Optional</sup> <a name="EncryptionMode" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption.property.encryptionMode"></a>

```go
EncryptionMode *string
```

- *Type:* *string

Encryption mode for encrypting artifacts when uploading to S3. Valid values: SSE_S3 and SSE_KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#encryption_mode SyntheticsCanary#encryption_mode}

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption.property.kmsKeyArn"></a>

```go
KmsKeyArn *string
```

- *Type:* *string

KMS key Arn for encrypting artifacts when uploading to S3.

You must specify KMS key Arn for SSE_KMS encryption mode only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#kms_key_arn SyntheticsCanary#kms_key_arn}

---

### SyntheticsCanaryBrowserConfigs <a name="SyntheticsCanaryBrowserConfigs" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/syntheticscanary"

&syntheticscanary.SyntheticsCanaryBrowserConfigs {
	BrowserType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigs.property.browserType">BrowserType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#browser_type SyntheticsCanary#browser_type}. |

---

##### `BrowserType`<sup>Optional</sup> <a name="BrowserType" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigs.property.browserType"></a>

```go
BrowserType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#browser_type SyntheticsCanary#browser_type}.

---

### SyntheticsCanaryCode <a name="SyntheticsCanaryCode" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/syntheticscanary"

&syntheticscanary.SyntheticsCanaryCode {
	BlueprintTypes: *[]*string,
	Dependencies: interface{},
	Handler: *string,
	S3Bucket: *string,
	S3Key: *string,
	S3ObjectVersion: *string,
	Script: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.blueprintTypes">BlueprintTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#blueprint_types SyntheticsCanary#blueprint_types}. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.dependencies">Dependencies</a></code> | <code>interface{}</code> | List of Lambda layers to attach to the canary. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.handler">Handler</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#handler SyntheticsCanary#handler}. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.s3Bucket">S3Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#s3_bucket SyntheticsCanary#s3_bucket}. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.s3Key">S3Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#s3_key SyntheticsCanary#s3_key}. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.s3ObjectVersion">S3ObjectVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#s3_object_version SyntheticsCanary#s3_object_version}. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.script">Script</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#script SyntheticsCanary#script}. |

---

##### `BlueprintTypes`<sup>Optional</sup> <a name="BlueprintTypes" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.blueprintTypes"></a>

```go
BlueprintTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#blueprint_types SyntheticsCanary#blueprint_types}.

---

##### `Dependencies`<sup>Optional</sup> <a name="Dependencies" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.dependencies"></a>

```go
Dependencies interface{}
```

- *Type:* interface{}

List of Lambda layers to attach to the canary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#dependencies SyntheticsCanary#dependencies}

---

##### `Handler`<sup>Optional</sup> <a name="Handler" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.handler"></a>

```go
Handler *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#handler SyntheticsCanary#handler}.

---

##### `S3Bucket`<sup>Optional</sup> <a name="S3Bucket" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.s3Bucket"></a>

```go
S3Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#s3_bucket SyntheticsCanary#s3_bucket}.

---

##### `S3Key`<sup>Optional</sup> <a name="S3Key" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.s3Key"></a>

```go
S3Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#s3_key SyntheticsCanary#s3_key}.

---

##### `S3ObjectVersion`<sup>Optional</sup> <a name="S3ObjectVersion" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.s3ObjectVersion"></a>

```go
S3ObjectVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#s3_object_version SyntheticsCanary#s3_object_version}.

---

##### `Script`<sup>Optional</sup> <a name="Script" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.script"></a>

```go
Script *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#script SyntheticsCanary#script}.

---

### SyntheticsCanaryCodeDependencies <a name="SyntheticsCanaryCodeDependencies" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/syntheticscanary"

&syntheticscanary.SyntheticsCanaryCodeDependencies {
	Reference: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies.property.reference">Reference</a></code> | <code>*string</code> | ARN of the Lambda layer. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies.property.type">Type</a></code> | <code>*string</code> | Type of dependency. |

---

##### `Reference`<sup>Optional</sup> <a name="Reference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies.property.reference"></a>

```go
Reference *string
```

- *Type:* *string

ARN of the Lambda layer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#reference SyntheticsCanary#reference}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies.property.type"></a>

```go
Type *string
```

- *Type:* *string

Type of dependency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#type SyntheticsCanary#type}

---

### SyntheticsCanaryConfig <a name="SyntheticsCanaryConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/syntheticscanary"

&syntheticscanary.SyntheticsCanaryConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ArtifactS3Location: *string,
	Code: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.syntheticsCanary.SyntheticsCanaryCode,
	ExecutionRoleArn: *string,
	Name: *string,
	RuntimeVersion: *string,
	Schedule: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.syntheticsCanary.SyntheticsCanarySchedule,
	ArtifactConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.syntheticsCanary.SyntheticsCanaryArtifactConfig,
	BrowserConfigs: interface{},
	DeleteLambdaResourcesOnCanaryDeletion: interface{},
	DryRunAndUpdate: interface{},
	FailureRetentionPeriod: *f64,
	ProvisionedResourceCleanup: *string,
	ResourcesToReplicateTags: *[]*string,
	RunConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.syntheticsCanary.SyntheticsCanaryRunConfig,
	StartCanaryAfterCreation: interface{},
	SuccessRetentionPeriod: *f64,
	Tags: interface{},
	VisualReference: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.syntheticsCanary.SyntheticsCanaryVisualReference,
	VisualReferences: interface{},
	VpcConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.syntheticsCanary.SyntheticsCanaryVpcConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.artifactS3Location">ArtifactS3Location</a></code> | <code>*string</code> | Provide the s3 bucket output location for test results. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.code">Code</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode">SyntheticsCanaryCode</a></code> | Provide the canary script source. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>*string</code> | Lambda Execution role used to run your canaries. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.name">Name</a></code> | <code>*string</code> | Name of the canary. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.runtimeVersion">RuntimeVersion</a></code> | <code>*string</code> | Runtime version of Synthetics Library. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.schedule">Schedule</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule">SyntheticsCanarySchedule</a></code> | Frequency to run your canaries. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.artifactConfig">ArtifactConfig</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfig">SyntheticsCanaryArtifactConfig</a></code> | Provide artifact configuration. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.browserConfigs">BrowserConfigs</a></code> | <code>interface{}</code> | List of browser configurations for the canary. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.deleteLambdaResourcesOnCanaryDeletion">DeleteLambdaResourcesOnCanaryDeletion</a></code> | <code>interface{}</code> | Deletes associated lambda resources created by Synthetics if set to True. Default is False. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.dryRunAndUpdate">DryRunAndUpdate</a></code> | <code>interface{}</code> | Setting to control if UpdateCanary will perform a DryRun and validate it is PASSING before performing the Update. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.failureRetentionPeriod">FailureRetentionPeriod</a></code> | <code>*f64</code> | Retention period of failed canary runs represented in number of days. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.provisionedResourceCleanup">ProvisionedResourceCleanup</a></code> | <code>*string</code> | Setting to control if provisioned resources created by Synthetics are deleted alongside the canary. Default is AUTOMATIC. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.resourcesToReplicateTags">ResourcesToReplicateTags</a></code> | <code>*[]*string</code> | List of resources which canary tags should be replicated to. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.runConfig">RunConfig</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig">SyntheticsCanaryRunConfig</a></code> | Provide canary run configuration. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.startCanaryAfterCreation">StartCanaryAfterCreation</a></code> | <code>interface{}</code> | Runs canary if set to True. Default is False. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.successRetentionPeriod">SuccessRetentionPeriod</a></code> | <code>*f64</code> | Retention period of successful canary runs represented in number of days. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#tags SyntheticsCanary#tags}. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.visualReference">VisualReference</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference">SyntheticsCanaryVisualReference</a></code> | Visual reference configuration for visual testing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.visualReferences">VisualReferences</a></code> | <code>interface{}</code> | List of visual references for the canary. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig">SyntheticsCanaryVpcConfig</a></code> | Provide VPC Configuration if enabled. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ArtifactS3Location`<sup>Required</sup> <a name="ArtifactS3Location" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.artifactS3Location"></a>

```go
ArtifactS3Location *string
```

- *Type:* *string

Provide the s3 bucket output location for test results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#artifact_s3_location SyntheticsCanary#artifact_s3_location}

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.code"></a>

```go
Code SyntheticsCanaryCode
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode">SyntheticsCanaryCode</a>

Provide the canary script source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#code SyntheticsCanary#code}

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.executionRoleArn"></a>

```go
ExecutionRoleArn *string
```

- *Type:* *string

Lambda Execution role used to run your canaries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#execution_role_arn SyntheticsCanary#execution_role_arn}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the canary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#name SyntheticsCanary#name}

---

##### `RuntimeVersion`<sup>Required</sup> <a name="RuntimeVersion" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.runtimeVersion"></a>

```go
RuntimeVersion *string
```

- *Type:* *string

Runtime version of Synthetics Library.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#runtime_version SyntheticsCanary#runtime_version}

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.schedule"></a>

```go
Schedule SyntheticsCanarySchedule
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule">SyntheticsCanarySchedule</a>

Frequency to run your canaries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#schedule SyntheticsCanary#schedule}

---

##### `ArtifactConfig`<sup>Optional</sup> <a name="ArtifactConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.artifactConfig"></a>

```go
ArtifactConfig SyntheticsCanaryArtifactConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfig">SyntheticsCanaryArtifactConfig</a>

Provide artifact configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#artifact_config SyntheticsCanary#artifact_config}

---

##### `BrowserConfigs`<sup>Optional</sup> <a name="BrowserConfigs" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.browserConfigs"></a>

```go
BrowserConfigs interface{}
```

- *Type:* interface{}

List of browser configurations for the canary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#browser_configs SyntheticsCanary#browser_configs}

---

##### `DeleteLambdaResourcesOnCanaryDeletion`<sup>Optional</sup> <a name="DeleteLambdaResourcesOnCanaryDeletion" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.deleteLambdaResourcesOnCanaryDeletion"></a>

```go
DeleteLambdaResourcesOnCanaryDeletion interface{}
```

- *Type:* interface{}

Deletes associated lambda resources created by Synthetics if set to True. Default is False.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#delete_lambda_resources_on_canary_deletion SyntheticsCanary#delete_lambda_resources_on_canary_deletion}

---

##### `DryRunAndUpdate`<sup>Optional</sup> <a name="DryRunAndUpdate" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.dryRunAndUpdate"></a>

```go
DryRunAndUpdate interface{}
```

- *Type:* interface{}

Setting to control if UpdateCanary will perform a DryRun and validate it is PASSING before performing the Update.

Default is FALSE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#dry_run_and_update SyntheticsCanary#dry_run_and_update}

---

##### `FailureRetentionPeriod`<sup>Optional</sup> <a name="FailureRetentionPeriod" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.failureRetentionPeriod"></a>

```go
FailureRetentionPeriod *f64
```

- *Type:* *f64

Retention period of failed canary runs represented in number of days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#failure_retention_period SyntheticsCanary#failure_retention_period}

---

##### `ProvisionedResourceCleanup`<sup>Optional</sup> <a name="ProvisionedResourceCleanup" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.provisionedResourceCleanup"></a>

```go
ProvisionedResourceCleanup *string
```

- *Type:* *string

Setting to control if provisioned resources created by Synthetics are deleted alongside the canary. Default is AUTOMATIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#provisioned_resource_cleanup SyntheticsCanary#provisioned_resource_cleanup}

---

##### `ResourcesToReplicateTags`<sup>Optional</sup> <a name="ResourcesToReplicateTags" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.resourcesToReplicateTags"></a>

```go
ResourcesToReplicateTags *[]*string
```

- *Type:* *[]*string

List of resources which canary tags should be replicated to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#resources_to_replicate_tags SyntheticsCanary#resources_to_replicate_tags}

---

##### `RunConfig`<sup>Optional</sup> <a name="RunConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.runConfig"></a>

```go
RunConfig SyntheticsCanaryRunConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig">SyntheticsCanaryRunConfig</a>

Provide canary run configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#run_config SyntheticsCanary#run_config}

---

##### `StartCanaryAfterCreation`<sup>Optional</sup> <a name="StartCanaryAfterCreation" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.startCanaryAfterCreation"></a>

```go
StartCanaryAfterCreation interface{}
```

- *Type:* interface{}

Runs canary if set to True. Default is False.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#start_canary_after_creation SyntheticsCanary#start_canary_after_creation}

---

##### `SuccessRetentionPeriod`<sup>Optional</sup> <a name="SuccessRetentionPeriod" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.successRetentionPeriod"></a>

```go
SuccessRetentionPeriod *f64
```

- *Type:* *f64

Retention period of successful canary runs represented in number of days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#success_retention_period SyntheticsCanary#success_retention_period}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#tags SyntheticsCanary#tags}.

---

##### `VisualReference`<sup>Optional</sup> <a name="VisualReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.visualReference"></a>

```go
VisualReference SyntheticsCanaryVisualReference
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference">SyntheticsCanaryVisualReference</a>

Visual reference configuration for visual testing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#visual_reference SyntheticsCanary#visual_reference}

---

##### `VisualReferences`<sup>Optional</sup> <a name="VisualReferences" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.visualReferences"></a>

```go
VisualReferences interface{}
```

- *Type:* interface{}

List of visual references for the canary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#visual_references SyntheticsCanary#visual_references}

---

##### `VpcConfig`<sup>Optional</sup> <a name="VpcConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.vpcConfig"></a>

```go
VpcConfig SyntheticsCanaryVpcConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig">SyntheticsCanaryVpcConfig</a>

Provide VPC Configuration if enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#vpc_config SyntheticsCanary#vpc_config}

---

### SyntheticsCanaryRunConfig <a name="SyntheticsCanaryRunConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/syntheticscanary"

&syntheticscanary.SyntheticsCanaryRunConfig {
	ActiveTracing: interface{},
	EnvironmentVariables: *map[string]*string,
	EphemeralStorage: *f64,
	MemoryInMb: *f64,
	TimeoutInSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig.property.activeTracing">ActiveTracing</a></code> | <code>interface{}</code> | Enable active tracing if set to true. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig.property.environmentVariables">EnvironmentVariables</a></code> | <code>*map[string]*string</code> | Environment variable key-value pairs. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig.property.ephemeralStorage">EphemeralStorage</a></code> | <code>*f64</code> | Provide ephemeralStorage available for canary in MB. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig.property.memoryInMb">MemoryInMb</a></code> | <code>*f64</code> | Provide maximum memory available for canary in MB. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>*f64</code> | Provide maximum canary timeout per run in seconds. |

---

##### `ActiveTracing`<sup>Optional</sup> <a name="ActiveTracing" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig.property.activeTracing"></a>

```go
ActiveTracing interface{}
```

- *Type:* interface{}

Enable active tracing if set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#active_tracing SyntheticsCanary#active_tracing}

---

##### `EnvironmentVariables`<sup>Optional</sup> <a name="EnvironmentVariables" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig.property.environmentVariables"></a>

```go
EnvironmentVariables *map[string]*string
```

- *Type:* *map[string]*string

Environment variable key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#environment_variables SyntheticsCanary#environment_variables}

---

##### `EphemeralStorage`<sup>Optional</sup> <a name="EphemeralStorage" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig.property.ephemeralStorage"></a>

```go
EphemeralStorage *f64
```

- *Type:* *f64

Provide ephemeralStorage available for canary in MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#ephemeral_storage SyntheticsCanary#ephemeral_storage}

---

##### `MemoryInMb`<sup>Optional</sup> <a name="MemoryInMb" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig.property.memoryInMb"></a>

```go
MemoryInMb *f64
```

- *Type:* *f64

Provide maximum memory available for canary in MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#memory_in_mb SyntheticsCanary#memory_in_mb}

---

##### `TimeoutInSeconds`<sup>Optional</sup> <a name="TimeoutInSeconds" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig.property.timeoutInSeconds"></a>

```go
TimeoutInSeconds *f64
```

- *Type:* *f64

Provide maximum canary timeout per run in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#timeout_in_seconds SyntheticsCanary#timeout_in_seconds}

---

### SyntheticsCanarySchedule <a name="SyntheticsCanarySchedule" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/syntheticscanary"

&syntheticscanary.SyntheticsCanarySchedule {
	Expression: *string,
	DurationInSeconds: *string,
	RetryConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#expression SyntheticsCanary#expression}. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule.property.durationInSeconds">DurationInSeconds</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#duration_in_seconds SyntheticsCanary#duration_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule.property.retryConfig">RetryConfig</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfig">SyntheticsCanaryScheduleRetryConfig</a></code> | Provide canary auto retry configuration. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#expression SyntheticsCanary#expression}.

---

##### `DurationInSeconds`<sup>Optional</sup> <a name="DurationInSeconds" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule.property.durationInSeconds"></a>

```go
DurationInSeconds *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#duration_in_seconds SyntheticsCanary#duration_in_seconds}.

---

##### `RetryConfig`<sup>Optional</sup> <a name="RetryConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule.property.retryConfig"></a>

```go
RetryConfig SyntheticsCanaryScheduleRetryConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfig">SyntheticsCanaryScheduleRetryConfig</a>

Provide canary auto retry configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#retry_config SyntheticsCanary#retry_config}

---

### SyntheticsCanaryScheduleRetryConfig <a name="SyntheticsCanaryScheduleRetryConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/syntheticscanary"

&syntheticscanary.SyntheticsCanaryScheduleRetryConfig {
	MaxRetries: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfig.property.maxRetries">MaxRetries</a></code> | <code>*f64</code> | maximum times the canary will be retried upon the scheduled run failure. |

---

##### `MaxRetries`<sup>Optional</sup> <a name="MaxRetries" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfig.property.maxRetries"></a>

```go
MaxRetries *f64
```

- *Type:* *f64

maximum times the canary will be retried upon the scheduled run failure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#max_retries SyntheticsCanary#max_retries}

---

### SyntheticsCanaryTags <a name="SyntheticsCanaryTags" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/syntheticscanary"

&syntheticscanary.SyntheticsCanaryTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#key SyntheticsCanary#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#value SyntheticsCanary#value}

---

### SyntheticsCanaryVisualReference <a name="SyntheticsCanaryVisualReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/syntheticscanary"

&syntheticscanary.SyntheticsCanaryVisualReference {
	BaseCanaryRunId: *string,
	BaseScreenshots: interface{},
	BrowserType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference.property.baseCanaryRunId">BaseCanaryRunId</a></code> | <code>*string</code> | Canary run id to be used as base reference for visual testing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference.property.baseScreenshots">BaseScreenshots</a></code> | <code>interface{}</code> | List of screenshots used as base reference for visual testing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference.property.browserType">BrowserType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#browser_type SyntheticsCanary#browser_type}. |

---

##### `BaseCanaryRunId`<sup>Optional</sup> <a name="BaseCanaryRunId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference.property.baseCanaryRunId"></a>

```go
BaseCanaryRunId *string
```

- *Type:* *string

Canary run id to be used as base reference for visual testing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#base_canary_run_id SyntheticsCanary#base_canary_run_id}

---

##### `BaseScreenshots`<sup>Optional</sup> <a name="BaseScreenshots" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference.property.baseScreenshots"></a>

```go
BaseScreenshots interface{}
```

- *Type:* interface{}

List of screenshots used as base reference for visual testing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#base_screenshots SyntheticsCanary#base_screenshots}

---

##### `BrowserType`<sup>Optional</sup> <a name="BrowserType" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference.property.browserType"></a>

```go
BrowserType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#browser_type SyntheticsCanary#browser_type}.

---

### SyntheticsCanaryVisualReferenceBaseScreenshots <a name="SyntheticsCanaryVisualReferenceBaseScreenshots" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/syntheticscanary"

&syntheticscanary.SyntheticsCanaryVisualReferenceBaseScreenshots {
	IgnoreCoordinates: *[]*string,
	ScreenshotName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots.property.ignoreCoordinates">IgnoreCoordinates</a></code> | <code>*[]*string</code> | List of coordinates of rectangles to be ignored during visual testing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots.property.screenshotName">ScreenshotName</a></code> | <code>*string</code> | Name of the screenshot to be used as base reference for visual testing. |

---

##### `IgnoreCoordinates`<sup>Optional</sup> <a name="IgnoreCoordinates" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots.property.ignoreCoordinates"></a>

```go
IgnoreCoordinates *[]*string
```

- *Type:* *[]*string

List of coordinates of rectangles to be ignored during visual testing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#ignore_coordinates SyntheticsCanary#ignore_coordinates}

---

##### `ScreenshotName`<sup>Optional</sup> <a name="ScreenshotName" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots.property.screenshotName"></a>

```go
ScreenshotName *string
```

- *Type:* *string

Name of the screenshot to be used as base reference for visual testing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#screenshot_name SyntheticsCanary#screenshot_name}

---

### SyntheticsCanaryVisualReferences <a name="SyntheticsCanaryVisualReferences" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/syntheticscanary"

&syntheticscanary.SyntheticsCanaryVisualReferences {
	BaseCanaryRunId: *string,
	BaseScreenshots: interface{},
	BrowserType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences.property.baseCanaryRunId">BaseCanaryRunId</a></code> | <code>*string</code> | Canary run id to be used as base reference for visual testing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences.property.baseScreenshots">BaseScreenshots</a></code> | <code>interface{}</code> | List of screenshots used as base reference for visual testing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences.property.browserType">BrowserType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#browser_type SyntheticsCanary#browser_type}. |

---

##### `BaseCanaryRunId`<sup>Optional</sup> <a name="BaseCanaryRunId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences.property.baseCanaryRunId"></a>

```go
BaseCanaryRunId *string
```

- *Type:* *string

Canary run id to be used as base reference for visual testing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#base_canary_run_id SyntheticsCanary#base_canary_run_id}

---

##### `BaseScreenshots`<sup>Optional</sup> <a name="BaseScreenshots" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences.property.baseScreenshots"></a>

```go
BaseScreenshots interface{}
```

- *Type:* interface{}

List of screenshots used as base reference for visual testing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#base_screenshots SyntheticsCanary#base_screenshots}

---

##### `BrowserType`<sup>Optional</sup> <a name="BrowserType" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences.property.browserType"></a>

```go
BrowserType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#browser_type SyntheticsCanary#browser_type}.

---

### SyntheticsCanaryVisualReferencesBaseScreenshots <a name="SyntheticsCanaryVisualReferencesBaseScreenshots" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/syntheticscanary"

&syntheticscanary.SyntheticsCanaryVisualReferencesBaseScreenshots {
	IgnoreCoordinates: *[]*string,
	ScreenshotName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots.property.ignoreCoordinates">IgnoreCoordinates</a></code> | <code>*[]*string</code> | List of coordinates of rectangles to be ignored during visual testing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots.property.screenshotName">ScreenshotName</a></code> | <code>*string</code> | Name of the screenshot to be used as base reference for visual testing. |

---

##### `IgnoreCoordinates`<sup>Optional</sup> <a name="IgnoreCoordinates" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots.property.ignoreCoordinates"></a>

```go
IgnoreCoordinates *[]*string
```

- *Type:* *[]*string

List of coordinates of rectangles to be ignored during visual testing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#ignore_coordinates SyntheticsCanary#ignore_coordinates}

---

##### `ScreenshotName`<sup>Optional</sup> <a name="ScreenshotName" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots.property.screenshotName"></a>

```go
ScreenshotName *string
```

- *Type:* *string

Name of the screenshot to be used as base reference for visual testing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#screenshot_name SyntheticsCanary#screenshot_name}

---

### SyntheticsCanaryVpcConfig <a name="SyntheticsCanaryVpcConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/syntheticscanary"

&syntheticscanary.SyntheticsCanaryVpcConfig {
	Ipv6AllowedForDualStack: interface{},
	SecurityGroupIds: *[]*string,
	SubnetIds: *[]*string,
	VpcId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig.property.ipv6AllowedForDualStack">Ipv6AllowedForDualStack</a></code> | <code>interface{}</code> | Allow outbound IPv6 traffic on VPC canaries that are connected to dual-stack subnets if set to true. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#security_group_ids SyntheticsCanary#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#subnet_ids SyntheticsCanary#subnet_ids}. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig.property.vpcId">VpcId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#vpc_id SyntheticsCanary#vpc_id}. |

---

##### `Ipv6AllowedForDualStack`<sup>Optional</sup> <a name="Ipv6AllowedForDualStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig.property.ipv6AllowedForDualStack"></a>

```go
Ipv6AllowedForDualStack interface{}
```

- *Type:* interface{}

Allow outbound IPv6 traffic on VPC canaries that are connected to dual-stack subnets if set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#ipv_6_allowed_for_dual_stack SyntheticsCanary#ipv_6_allowed_for_dual_stack}

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#security_group_ids SyntheticsCanary#security_group_ids}.

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig.property.subnetIds"></a>

```go
SubnetIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#subnet_ids SyntheticsCanary#subnet_ids}.

---

##### `VpcId`<sup>Optional</sup> <a name="VpcId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig.property.vpcId"></a>

```go
VpcId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#vpc_id SyntheticsCanary#vpc_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### SyntheticsCanaryArtifactConfigOutputReference <a name="SyntheticsCanaryArtifactConfigOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/syntheticscanary"

syntheticscanary.NewSyntheticsCanaryArtifactConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SyntheticsCanaryArtifactConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.putS3Encryption">PutS3Encryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.resetS3Encryption">ResetS3Encryption</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3Encryption` <a name="PutS3Encryption" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.putS3Encryption"></a>

```go
func PutS3Encryption(value SyntheticsCanaryArtifactConfigS3Encryption)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.putS3Encryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption">SyntheticsCanaryArtifactConfigS3Encryption</a>

---

##### `ResetS3Encryption` <a name="ResetS3Encryption" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.resetS3Encryption"></a>

```go
func ResetS3Encryption()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.s3Encryption">S3Encryption</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference">SyntheticsCanaryArtifactConfigS3EncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.s3EncryptionInput">S3EncryptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3Encryption`<sup>Required</sup> <a name="S3Encryption" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.s3Encryption"></a>

```go
func S3Encryption() SyntheticsCanaryArtifactConfigS3EncryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference">SyntheticsCanaryArtifactConfigS3EncryptionOutputReference</a>

---

##### `S3EncryptionInput`<sup>Optional</sup> <a name="S3EncryptionInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.s3EncryptionInput"></a>

```go
func S3EncryptionInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SyntheticsCanaryArtifactConfigS3EncryptionOutputReference <a name="SyntheticsCanaryArtifactConfigS3EncryptionOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/syntheticscanary"

syntheticscanary.NewSyntheticsCanaryArtifactConfigS3EncryptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SyntheticsCanaryArtifactConfigS3EncryptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resetEncryptionMode">ResetEncryptionMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncryptionMode` <a name="ResetEncryptionMode" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resetEncryptionMode"></a>

```go
func ResetEncryptionMode()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resetKmsKeyArn"></a>

```go
func ResetKmsKeyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.encryptionModeInput">EncryptionModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.encryptionMode">EncryptionMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionModeInput`<sup>Optional</sup> <a name="EncryptionModeInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.encryptionModeInput"></a>

```go
func EncryptionModeInput() *string
```

- *Type:* *string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.kmsKeyArnInput"></a>

```go
func KmsKeyArnInput() *string
```

- *Type:* *string

---

##### `EncryptionMode`<sup>Required</sup> <a name="EncryptionMode" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.encryptionMode"></a>

```go
func EncryptionMode() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SyntheticsCanaryBrowserConfigsList <a name="SyntheticsCanaryBrowserConfigsList" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/syntheticscanary"

syntheticscanary.NewSyntheticsCanaryBrowserConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SyntheticsCanaryBrowserConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.get"></a>

```go
func Get(index *f64) SyntheticsCanaryBrowserConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SyntheticsCanaryBrowserConfigsOutputReference <a name="SyntheticsCanaryBrowserConfigsOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/syntheticscanary"

syntheticscanary.NewSyntheticsCanaryBrowserConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SyntheticsCanaryBrowserConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.resetBrowserType">ResetBrowserType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBrowserType` <a name="ResetBrowserType" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.resetBrowserType"></a>

```go
func ResetBrowserType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.property.browserTypeInput">BrowserTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.property.browserType">BrowserType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BrowserTypeInput`<sup>Optional</sup> <a name="BrowserTypeInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.property.browserTypeInput"></a>

```go
func BrowserTypeInput() *string
```

- *Type:* *string

---

##### `BrowserType`<sup>Required</sup> <a name="BrowserType" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.property.browserType"></a>

```go
func BrowserType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SyntheticsCanaryCodeDependenciesList <a name="SyntheticsCanaryCodeDependenciesList" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/syntheticscanary"

syntheticscanary.NewSyntheticsCanaryCodeDependenciesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SyntheticsCanaryCodeDependenciesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.get"></a>

```go
func Get(index *f64) SyntheticsCanaryCodeDependenciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SyntheticsCanaryCodeDependenciesOutputReference <a name="SyntheticsCanaryCodeDependenciesOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/syntheticscanary"

syntheticscanary.NewSyntheticsCanaryCodeDependenciesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SyntheticsCanaryCodeDependenciesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.resetReference">ResetReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReference` <a name="ResetReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.resetReference"></a>

```go
func ResetReference()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.referenceInput">ReferenceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.reference">Reference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReferenceInput`<sup>Optional</sup> <a name="ReferenceInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.referenceInput"></a>

```go
func ReferenceInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Reference`<sup>Required</sup> <a name="Reference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.reference"></a>

```go
func Reference() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SyntheticsCanaryCodeOutputReference <a name="SyntheticsCanaryCodeOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/syntheticscanary"

syntheticscanary.NewSyntheticsCanaryCodeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SyntheticsCanaryCodeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.putDependencies">PutDependencies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetBlueprintTypes">ResetBlueprintTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetDependencies">ResetDependencies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetHandler">ResetHandler</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetS3Bucket">ResetS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetS3Key">ResetS3Key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetS3ObjectVersion">ResetS3ObjectVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetScript">ResetScript</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDependencies` <a name="PutDependencies" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.putDependencies"></a>

```go
func PutDependencies(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.putDependencies.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBlueprintTypes` <a name="ResetBlueprintTypes" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetBlueprintTypes"></a>

```go
func ResetBlueprintTypes()
```

##### `ResetDependencies` <a name="ResetDependencies" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetDependencies"></a>

```go
func ResetDependencies()
```

##### `ResetHandler` <a name="ResetHandler" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetHandler"></a>

```go
func ResetHandler()
```

##### `ResetS3Bucket` <a name="ResetS3Bucket" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetS3Bucket"></a>

```go
func ResetS3Bucket()
```

##### `ResetS3Key` <a name="ResetS3Key" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetS3Key"></a>

```go
func ResetS3Key()
```

##### `ResetS3ObjectVersion` <a name="ResetS3ObjectVersion" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetS3ObjectVersion"></a>

```go
func ResetS3ObjectVersion()
```

##### `ResetScript` <a name="ResetScript" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetScript"></a>

```go
func ResetScript()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.dependencies">Dependencies</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList">SyntheticsCanaryCodeDependenciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.sourceLocationArn">SourceLocationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.blueprintTypesInput">BlueprintTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.dependenciesInput">DependenciesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.handlerInput">HandlerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.s3BucketInput">S3BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.s3KeyInput">S3KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.s3ObjectVersionInput">S3ObjectVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.scriptInput">ScriptInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.blueprintTypes">BlueprintTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.handler">Handler</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.s3Bucket">S3Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.s3Key">S3Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.s3ObjectVersion">S3ObjectVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.script">Script</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Dependencies`<sup>Required</sup> <a name="Dependencies" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.dependencies"></a>

```go
func Dependencies() SyntheticsCanaryCodeDependenciesList
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList">SyntheticsCanaryCodeDependenciesList</a>

---

##### `SourceLocationArn`<sup>Required</sup> <a name="SourceLocationArn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.sourceLocationArn"></a>

```go
func SourceLocationArn() *string
```

- *Type:* *string

---

##### `BlueprintTypesInput`<sup>Optional</sup> <a name="BlueprintTypesInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.blueprintTypesInput"></a>

```go
func BlueprintTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DependenciesInput`<sup>Optional</sup> <a name="DependenciesInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.dependenciesInput"></a>

```go
func DependenciesInput() interface{}
```

- *Type:* interface{}

---

##### `HandlerInput`<sup>Optional</sup> <a name="HandlerInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.handlerInput"></a>

```go
func HandlerInput() *string
```

- *Type:* *string

---

##### `S3BucketInput`<sup>Optional</sup> <a name="S3BucketInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.s3BucketInput"></a>

```go
func S3BucketInput() *string
```

- *Type:* *string

---

##### `S3KeyInput`<sup>Optional</sup> <a name="S3KeyInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.s3KeyInput"></a>

```go
func S3KeyInput() *string
```

- *Type:* *string

---

##### `S3ObjectVersionInput`<sup>Optional</sup> <a name="S3ObjectVersionInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.s3ObjectVersionInput"></a>

```go
func S3ObjectVersionInput() *string
```

- *Type:* *string

---

##### `ScriptInput`<sup>Optional</sup> <a name="ScriptInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.scriptInput"></a>

```go
func ScriptInput() *string
```

- *Type:* *string

---

##### `BlueprintTypes`<sup>Required</sup> <a name="BlueprintTypes" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.blueprintTypes"></a>

```go
func BlueprintTypes() *[]*string
```

- *Type:* *[]*string

---

##### `Handler`<sup>Required</sup> <a name="Handler" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.handler"></a>

```go
func Handler() *string
```

- *Type:* *string

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.s3Bucket"></a>

```go
func S3Bucket() *string
```

- *Type:* *string

---

##### `S3Key`<sup>Required</sup> <a name="S3Key" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.s3Key"></a>

```go
func S3Key() *string
```

- *Type:* *string

---

##### `S3ObjectVersion`<sup>Required</sup> <a name="S3ObjectVersion" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.s3ObjectVersion"></a>

```go
func S3ObjectVersion() *string
```

- *Type:* *string

---

##### `Script`<sup>Required</sup> <a name="Script" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.script"></a>

```go
func Script() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SyntheticsCanaryRunConfigOutputReference <a name="SyntheticsCanaryRunConfigOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/syntheticscanary"

syntheticscanary.NewSyntheticsCanaryRunConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SyntheticsCanaryRunConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetActiveTracing">ResetActiveTracing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetEnvironmentVariables">ResetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetEphemeralStorage">ResetEphemeralStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetMemoryInMb">ResetMemoryInMb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetTimeoutInSeconds">ResetTimeoutInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActiveTracing` <a name="ResetActiveTracing" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetActiveTracing"></a>

```go
func ResetActiveTracing()
```

##### `ResetEnvironmentVariables` <a name="ResetEnvironmentVariables" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetEnvironmentVariables"></a>

```go
func ResetEnvironmentVariables()
```

##### `ResetEphemeralStorage` <a name="ResetEphemeralStorage" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetEphemeralStorage"></a>

```go
func ResetEphemeralStorage()
```

##### `ResetMemoryInMb` <a name="ResetMemoryInMb" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetMemoryInMb"></a>

```go
func ResetMemoryInMb()
```

##### `ResetTimeoutInSeconds` <a name="ResetTimeoutInSeconds" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetTimeoutInSeconds"></a>

```go
func ResetTimeoutInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.activeTracingInput">ActiveTracingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.environmentVariablesInput">EnvironmentVariablesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.ephemeralStorageInput">EphemeralStorageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.memoryInMbInput">MemoryInMbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.timeoutInSecondsInput">TimeoutInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.activeTracing">ActiveTracing</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.environmentVariables">EnvironmentVariables</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.ephemeralStorage">EphemeralStorage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.memoryInMb">MemoryInMb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActiveTracingInput`<sup>Optional</sup> <a name="ActiveTracingInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.activeTracingInput"></a>

```go
func ActiveTracingInput() interface{}
```

- *Type:* interface{}

---

##### `EnvironmentVariablesInput`<sup>Optional</sup> <a name="EnvironmentVariablesInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.environmentVariablesInput"></a>

```go
func EnvironmentVariablesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `EphemeralStorageInput`<sup>Optional</sup> <a name="EphemeralStorageInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.ephemeralStorageInput"></a>

```go
func EphemeralStorageInput() *f64
```

- *Type:* *f64

---

##### `MemoryInMbInput`<sup>Optional</sup> <a name="MemoryInMbInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.memoryInMbInput"></a>

```go
func MemoryInMbInput() *f64
```

- *Type:* *f64

---

##### `TimeoutInSecondsInput`<sup>Optional</sup> <a name="TimeoutInSecondsInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.timeoutInSecondsInput"></a>

```go
func TimeoutInSecondsInput() *f64
```

- *Type:* *f64

---

##### `ActiveTracing`<sup>Required</sup> <a name="ActiveTracing" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.activeTracing"></a>

```go
func ActiveTracing() interface{}
```

- *Type:* interface{}

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.environmentVariables"></a>

```go
func EnvironmentVariables() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `EphemeralStorage`<sup>Required</sup> <a name="EphemeralStorage" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.ephemeralStorage"></a>

```go
func EphemeralStorage() *f64
```

- *Type:* *f64

---

##### `MemoryInMb`<sup>Required</sup> <a name="MemoryInMb" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.memoryInMb"></a>

```go
func MemoryInMb() *f64
```

- *Type:* *f64

---

##### `TimeoutInSeconds`<sup>Required</sup> <a name="TimeoutInSeconds" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.timeoutInSeconds"></a>

```go
func TimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SyntheticsCanaryScheduleOutputReference <a name="SyntheticsCanaryScheduleOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/syntheticscanary"

syntheticscanary.NewSyntheticsCanaryScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SyntheticsCanaryScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.putRetryConfig">PutRetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.resetDurationInSeconds">ResetDurationInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.resetRetryConfig">ResetRetryConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRetryConfig` <a name="PutRetryConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.putRetryConfig"></a>

```go
func PutRetryConfig(value SyntheticsCanaryScheduleRetryConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.putRetryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfig">SyntheticsCanaryScheduleRetryConfig</a>

---

##### `ResetDurationInSeconds` <a name="ResetDurationInSeconds" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.resetDurationInSeconds"></a>

```go
func ResetDurationInSeconds()
```

##### `ResetRetryConfig` <a name="ResetRetryConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.resetRetryConfig"></a>

```go
func ResetRetryConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.retryConfig">RetryConfig</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference">SyntheticsCanaryScheduleRetryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.durationInSecondsInput">DurationInSecondsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.retryConfigInput">RetryConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.durationInSeconds">DurationInSeconds</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RetryConfig`<sup>Required</sup> <a name="RetryConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.retryConfig"></a>

```go
func RetryConfig() SyntheticsCanaryScheduleRetryConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference">SyntheticsCanaryScheduleRetryConfigOutputReference</a>

---

##### `DurationInSecondsInput`<sup>Optional</sup> <a name="DurationInSecondsInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.durationInSecondsInput"></a>

```go
func DurationInSecondsInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `RetryConfigInput`<sup>Optional</sup> <a name="RetryConfigInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.retryConfigInput"></a>

```go
func RetryConfigInput() interface{}
```

- *Type:* interface{}

---

##### `DurationInSeconds`<sup>Required</sup> <a name="DurationInSeconds" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.durationInSeconds"></a>

```go
func DurationInSeconds() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SyntheticsCanaryScheduleRetryConfigOutputReference <a name="SyntheticsCanaryScheduleRetryConfigOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/syntheticscanary"

syntheticscanary.NewSyntheticsCanaryScheduleRetryConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SyntheticsCanaryScheduleRetryConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.resetMaxRetries">ResetMaxRetries</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxRetries` <a name="ResetMaxRetries" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.resetMaxRetries"></a>

```go
func ResetMaxRetries()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.property.maxRetriesInput">MaxRetriesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.property.maxRetries">MaxRetries</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxRetriesInput`<sup>Optional</sup> <a name="MaxRetriesInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.property.maxRetriesInput"></a>

```go
func MaxRetriesInput() *f64
```

- *Type:* *f64

---

##### `MaxRetries`<sup>Required</sup> <a name="MaxRetries" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.property.maxRetries"></a>

```go
func MaxRetries() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SyntheticsCanaryTagsList <a name="SyntheticsCanaryTagsList" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/syntheticscanary"

syntheticscanary.NewSyntheticsCanaryTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SyntheticsCanaryTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.get"></a>

```go
func Get(index *f64) SyntheticsCanaryTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SyntheticsCanaryTagsOutputReference <a name="SyntheticsCanaryTagsOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/syntheticscanary"

syntheticscanary.NewSyntheticsCanaryTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SyntheticsCanaryTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SyntheticsCanaryVisualReferenceBaseScreenshotsList <a name="SyntheticsCanaryVisualReferenceBaseScreenshotsList" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/syntheticscanary"

syntheticscanary.NewSyntheticsCanaryVisualReferenceBaseScreenshotsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SyntheticsCanaryVisualReferenceBaseScreenshotsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.get"></a>

```go
func Get(index *f64) SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference <a name="SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/syntheticscanary"

syntheticscanary.NewSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.resetIgnoreCoordinates">ResetIgnoreCoordinates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.resetScreenshotName">ResetScreenshotName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIgnoreCoordinates` <a name="ResetIgnoreCoordinates" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.resetIgnoreCoordinates"></a>

```go
func ResetIgnoreCoordinates()
```

##### `ResetScreenshotName` <a name="ResetScreenshotName" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.resetScreenshotName"></a>

```go
func ResetScreenshotName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.ignoreCoordinatesInput">IgnoreCoordinatesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.screenshotNameInput">ScreenshotNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.ignoreCoordinates">IgnoreCoordinates</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.screenshotName">ScreenshotName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IgnoreCoordinatesInput`<sup>Optional</sup> <a name="IgnoreCoordinatesInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.ignoreCoordinatesInput"></a>

```go
func IgnoreCoordinatesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ScreenshotNameInput`<sup>Optional</sup> <a name="ScreenshotNameInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.screenshotNameInput"></a>

```go
func ScreenshotNameInput() *string
```

- *Type:* *string

---

##### `IgnoreCoordinates`<sup>Required</sup> <a name="IgnoreCoordinates" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.ignoreCoordinates"></a>

```go
func IgnoreCoordinates() *[]*string
```

- *Type:* *[]*string

---

##### `ScreenshotName`<sup>Required</sup> <a name="ScreenshotName" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.screenshotName"></a>

```go
func ScreenshotName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SyntheticsCanaryVisualReferenceOutputReference <a name="SyntheticsCanaryVisualReferenceOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/syntheticscanary"

syntheticscanary.NewSyntheticsCanaryVisualReferenceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SyntheticsCanaryVisualReferenceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.putBaseScreenshots">PutBaseScreenshots</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.resetBaseCanaryRunId">ResetBaseCanaryRunId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.resetBaseScreenshots">ResetBaseScreenshots</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.resetBrowserType">ResetBrowserType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBaseScreenshots` <a name="PutBaseScreenshots" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.putBaseScreenshots"></a>

```go
func PutBaseScreenshots(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.putBaseScreenshots.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBaseCanaryRunId` <a name="ResetBaseCanaryRunId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.resetBaseCanaryRunId"></a>

```go
func ResetBaseCanaryRunId()
```

##### `ResetBaseScreenshots` <a name="ResetBaseScreenshots" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.resetBaseScreenshots"></a>

```go
func ResetBaseScreenshots()
```

##### `ResetBrowserType` <a name="ResetBrowserType" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.resetBrowserType"></a>

```go
func ResetBrowserType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.baseScreenshots">BaseScreenshots</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList">SyntheticsCanaryVisualReferenceBaseScreenshotsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.baseCanaryRunIdInput">BaseCanaryRunIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.baseScreenshotsInput">BaseScreenshotsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.browserTypeInput">BrowserTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.baseCanaryRunId">BaseCanaryRunId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.browserType">BrowserType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BaseScreenshots`<sup>Required</sup> <a name="BaseScreenshots" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.baseScreenshots"></a>

```go
func BaseScreenshots() SyntheticsCanaryVisualReferenceBaseScreenshotsList
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList">SyntheticsCanaryVisualReferenceBaseScreenshotsList</a>

---

##### `BaseCanaryRunIdInput`<sup>Optional</sup> <a name="BaseCanaryRunIdInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.baseCanaryRunIdInput"></a>

```go
func BaseCanaryRunIdInput() *string
```

- *Type:* *string

---

##### `BaseScreenshotsInput`<sup>Optional</sup> <a name="BaseScreenshotsInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.baseScreenshotsInput"></a>

```go
func BaseScreenshotsInput() interface{}
```

- *Type:* interface{}

---

##### `BrowserTypeInput`<sup>Optional</sup> <a name="BrowserTypeInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.browserTypeInput"></a>

```go
func BrowserTypeInput() *string
```

- *Type:* *string

---

##### `BaseCanaryRunId`<sup>Required</sup> <a name="BaseCanaryRunId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.baseCanaryRunId"></a>

```go
func BaseCanaryRunId() *string
```

- *Type:* *string

---

##### `BrowserType`<sup>Required</sup> <a name="BrowserType" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.browserType"></a>

```go
func BrowserType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SyntheticsCanaryVisualReferencesBaseScreenshotsList <a name="SyntheticsCanaryVisualReferencesBaseScreenshotsList" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/syntheticscanary"

syntheticscanary.NewSyntheticsCanaryVisualReferencesBaseScreenshotsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SyntheticsCanaryVisualReferencesBaseScreenshotsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.get"></a>

```go
func Get(index *f64) SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference <a name="SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/syntheticscanary"

syntheticscanary.NewSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.resetIgnoreCoordinates">ResetIgnoreCoordinates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.resetScreenshotName">ResetScreenshotName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIgnoreCoordinates` <a name="ResetIgnoreCoordinates" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.resetIgnoreCoordinates"></a>

```go
func ResetIgnoreCoordinates()
```

##### `ResetScreenshotName` <a name="ResetScreenshotName" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.resetScreenshotName"></a>

```go
func ResetScreenshotName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.ignoreCoordinatesInput">IgnoreCoordinatesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.screenshotNameInput">ScreenshotNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.ignoreCoordinates">IgnoreCoordinates</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.screenshotName">ScreenshotName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IgnoreCoordinatesInput`<sup>Optional</sup> <a name="IgnoreCoordinatesInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.ignoreCoordinatesInput"></a>

```go
func IgnoreCoordinatesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ScreenshotNameInput`<sup>Optional</sup> <a name="ScreenshotNameInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.screenshotNameInput"></a>

```go
func ScreenshotNameInput() *string
```

- *Type:* *string

---

##### `IgnoreCoordinates`<sup>Required</sup> <a name="IgnoreCoordinates" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.ignoreCoordinates"></a>

```go
func IgnoreCoordinates() *[]*string
```

- *Type:* *[]*string

---

##### `ScreenshotName`<sup>Required</sup> <a name="ScreenshotName" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.screenshotName"></a>

```go
func ScreenshotName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SyntheticsCanaryVisualReferencesList <a name="SyntheticsCanaryVisualReferencesList" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/syntheticscanary"

syntheticscanary.NewSyntheticsCanaryVisualReferencesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SyntheticsCanaryVisualReferencesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.get"></a>

```go
func Get(index *f64) SyntheticsCanaryVisualReferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SyntheticsCanaryVisualReferencesOutputReference <a name="SyntheticsCanaryVisualReferencesOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/syntheticscanary"

syntheticscanary.NewSyntheticsCanaryVisualReferencesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SyntheticsCanaryVisualReferencesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.putBaseScreenshots">PutBaseScreenshots</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.resetBaseCanaryRunId">ResetBaseCanaryRunId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.resetBaseScreenshots">ResetBaseScreenshots</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.resetBrowserType">ResetBrowserType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBaseScreenshots` <a name="PutBaseScreenshots" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.putBaseScreenshots"></a>

```go
func PutBaseScreenshots(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.putBaseScreenshots.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBaseCanaryRunId` <a name="ResetBaseCanaryRunId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.resetBaseCanaryRunId"></a>

```go
func ResetBaseCanaryRunId()
```

##### `ResetBaseScreenshots` <a name="ResetBaseScreenshots" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.resetBaseScreenshots"></a>

```go
func ResetBaseScreenshots()
```

##### `ResetBrowserType` <a name="ResetBrowserType" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.resetBrowserType"></a>

```go
func ResetBrowserType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.baseScreenshots">BaseScreenshots</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList">SyntheticsCanaryVisualReferencesBaseScreenshotsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.baseCanaryRunIdInput">BaseCanaryRunIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.baseScreenshotsInput">BaseScreenshotsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.browserTypeInput">BrowserTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.baseCanaryRunId">BaseCanaryRunId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.browserType">BrowserType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BaseScreenshots`<sup>Required</sup> <a name="BaseScreenshots" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.baseScreenshots"></a>

```go
func BaseScreenshots() SyntheticsCanaryVisualReferencesBaseScreenshotsList
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList">SyntheticsCanaryVisualReferencesBaseScreenshotsList</a>

---

##### `BaseCanaryRunIdInput`<sup>Optional</sup> <a name="BaseCanaryRunIdInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.baseCanaryRunIdInput"></a>

```go
func BaseCanaryRunIdInput() *string
```

- *Type:* *string

---

##### `BaseScreenshotsInput`<sup>Optional</sup> <a name="BaseScreenshotsInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.baseScreenshotsInput"></a>

```go
func BaseScreenshotsInput() interface{}
```

- *Type:* interface{}

---

##### `BrowserTypeInput`<sup>Optional</sup> <a name="BrowserTypeInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.browserTypeInput"></a>

```go
func BrowserTypeInput() *string
```

- *Type:* *string

---

##### `BaseCanaryRunId`<sup>Required</sup> <a name="BaseCanaryRunId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.baseCanaryRunId"></a>

```go
func BaseCanaryRunId() *string
```

- *Type:* *string

---

##### `BrowserType`<sup>Required</sup> <a name="BrowserType" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.browserType"></a>

```go
func BrowserType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SyntheticsCanaryVpcConfigOutputReference <a name="SyntheticsCanaryVpcConfigOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/syntheticscanary"

syntheticscanary.NewSyntheticsCanaryVpcConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SyntheticsCanaryVpcConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resetIpv6AllowedForDualStack">ResetIpv6AllowedForDualStack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resetVpcId">ResetVpcId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpv6AllowedForDualStack` <a name="ResetIpv6AllowedForDualStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resetIpv6AllowedForDualStack"></a>

```go
func ResetIpv6AllowedForDualStack()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resetSecurityGroupIds"></a>

```go
func ResetSecurityGroupIds()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resetSubnetIds"></a>

```go
func ResetSubnetIds()
```

##### `ResetVpcId` <a name="ResetVpcId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resetVpcId"></a>

```go
func ResetVpcId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.ipv6AllowedForDualStackInput">Ipv6AllowedForDualStackInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.vpcIdInput">VpcIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.ipv6AllowedForDualStack">Ipv6AllowedForDualStack</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ipv6AllowedForDualStackInput`<sup>Optional</sup> <a name="Ipv6AllowedForDualStackInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.ipv6AllowedForDualStackInput"></a>

```go
func Ipv6AllowedForDualStackInput() interface{}
```

- *Type:* interface{}

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.subnetIdsInput"></a>

```go
func SubnetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.vpcIdInput"></a>

```go
func VpcIdInput() *string
```

- *Type:* *string

---

##### `Ipv6AllowedForDualStack`<sup>Required</sup> <a name="Ipv6AllowedForDualStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.ipv6AllowedForDualStack"></a>

```go
func Ipv6AllowedForDualStack() interface{}
```

- *Type:* interface{}

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



