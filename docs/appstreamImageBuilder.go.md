# `appstreamImageBuilder` Submodule <a name="`appstreamImageBuilder` Submodule" id="@cdktn/provider-awscc.appstreamImageBuilder"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppstreamImageBuilder <a name="AppstreamImageBuilder" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder awscc_appstream_image_builder}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appstreamimagebuilder"

appstreamimagebuilder.NewAppstreamImageBuilder(scope Construct, id *string, config AppstreamImageBuilderConfig) AppstreamImageBuilder
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig">AppstreamImageBuilderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig">AppstreamImageBuilderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.putAccessEndpoints">PutAccessEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.putDomainJoinInfo">PutDomainJoinInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.putRootVolumeConfig">PutRootVolumeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.putVpcConfig">PutVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetAccessEndpoints">ResetAccessEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetAppstreamAgentVersion">ResetAppstreamAgentVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetDomainJoinInfo">ResetDomainJoinInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetEnableDefaultInternetAccess">ResetEnableDefaultInternetAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetIamRoleArn">ResetIamRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetImageArn">ResetImageArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetImageName">ResetImageName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetRootVolumeConfig">ResetRootVolumeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetSoftwaresToInstall">ResetSoftwaresToInstall</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetSoftwaresToUninstall">ResetSoftwaresToUninstall</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetVpcConfig">ResetVpcConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccessEndpoints` <a name="PutAccessEndpoints" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.putAccessEndpoints"></a>

```go
func PutAccessEndpoints(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.putAccessEndpoints.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDomainJoinInfo` <a name="PutDomainJoinInfo" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.putDomainJoinInfo"></a>

```go
func PutDomainJoinInfo(value AppstreamImageBuilderDomainJoinInfo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.putDomainJoinInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo">AppstreamImageBuilderDomainJoinInfo</a>

---

##### `PutRootVolumeConfig` <a name="PutRootVolumeConfig" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.putRootVolumeConfig"></a>

```go
func PutRootVolumeConfig(value AppstreamImageBuilderRootVolumeConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.putRootVolumeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfig">AppstreamImageBuilderRootVolumeConfig</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutVpcConfig` <a name="PutVpcConfig" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.putVpcConfig"></a>

```go
func PutVpcConfig(value AppstreamImageBuilderVpcConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfig">AppstreamImageBuilderVpcConfig</a>

---

##### `ResetAccessEndpoints` <a name="ResetAccessEndpoints" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetAccessEndpoints"></a>

```go
func ResetAccessEndpoints()
```

##### `ResetAppstreamAgentVersion` <a name="ResetAppstreamAgentVersion" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetAppstreamAgentVersion"></a>

```go
func ResetAppstreamAgentVersion()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetDomainJoinInfo` <a name="ResetDomainJoinInfo" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetDomainJoinInfo"></a>

```go
func ResetDomainJoinInfo()
```

##### `ResetEnableDefaultInternetAccess` <a name="ResetEnableDefaultInternetAccess" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetEnableDefaultInternetAccess"></a>

```go
func ResetEnableDefaultInternetAccess()
```

##### `ResetIamRoleArn` <a name="ResetIamRoleArn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetIamRoleArn"></a>

```go
func ResetIamRoleArn()
```

##### `ResetImageArn` <a name="ResetImageArn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetImageArn"></a>

```go
func ResetImageArn()
```

##### `ResetImageName` <a name="ResetImageName" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetImageName"></a>

```go
func ResetImageName()
```

##### `ResetRootVolumeConfig` <a name="ResetRootVolumeConfig" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetRootVolumeConfig"></a>

```go
func ResetRootVolumeConfig()
```

##### `ResetSoftwaresToInstall` <a name="ResetSoftwaresToInstall" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetSoftwaresToInstall"></a>

```go
func ResetSoftwaresToInstall()
```

##### `ResetSoftwaresToUninstall` <a name="ResetSoftwaresToUninstall" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetSoftwaresToUninstall"></a>

```go
func ResetSoftwaresToUninstall()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetTags"></a>

```go
func ResetTags()
```

##### `ResetVpcConfig` <a name="ResetVpcConfig" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetVpcConfig"></a>

```go
func ResetVpcConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AppstreamImageBuilder resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appstreamimagebuilder"

appstreamimagebuilder.AppstreamImageBuilder_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appstreamimagebuilder"

appstreamimagebuilder.AppstreamImageBuilder_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appstreamimagebuilder"

appstreamimagebuilder.AppstreamImageBuilder_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appstreamimagebuilder"

appstreamimagebuilder.AppstreamImageBuilder_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a AppstreamImageBuilder resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AppstreamImageBuilder to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AppstreamImageBuilder that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the AppstreamImageBuilder to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.accessEndpoints">AccessEndpoints</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList">AppstreamImageBuilderAccessEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.domainJoinInfo">DomainJoinInfo</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference">AppstreamImageBuilderDomainJoinInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.rootVolumeConfig">RootVolumeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference">AppstreamImageBuilderRootVolumeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.streamingUrl">StreamingUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList">AppstreamImageBuilderTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference">AppstreamImageBuilderVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.accessEndpointsInput">AccessEndpointsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.appstreamAgentVersionInput">AppstreamAgentVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.domainJoinInfoInput">DomainJoinInfoInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.enableDefaultInternetAccessInput">EnableDefaultInternetAccessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.iamRoleArnInput">IamRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.imageArnInput">ImageArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.imageNameInput">ImageNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.rootVolumeConfigInput">RootVolumeConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.softwaresToInstallInput">SoftwaresToInstallInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.softwaresToUninstallInput">SoftwaresToUninstallInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.vpcConfigInput">VpcConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.appstreamAgentVersion">AppstreamAgentVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.enableDefaultInternetAccess">EnableDefaultInternetAccess</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.iamRoleArn">IamRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.imageArn">ImageArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.imageName">ImageName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.softwaresToInstall">SoftwaresToInstall</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.softwaresToUninstall">SoftwaresToUninstall</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccessEndpoints`<sup>Required</sup> <a name="AccessEndpoints" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.accessEndpoints"></a>

```go
func AccessEndpoints() AppstreamImageBuilderAccessEndpointsList
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList">AppstreamImageBuilderAccessEndpointsList</a>

---

##### `DomainJoinInfo`<sup>Required</sup> <a name="DomainJoinInfo" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.domainJoinInfo"></a>

```go
func DomainJoinInfo() AppstreamImageBuilderDomainJoinInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference">AppstreamImageBuilderDomainJoinInfoOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RootVolumeConfig`<sup>Required</sup> <a name="RootVolumeConfig" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.rootVolumeConfig"></a>

```go
func RootVolumeConfig() AppstreamImageBuilderRootVolumeConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference">AppstreamImageBuilderRootVolumeConfigOutputReference</a>

---

##### `StreamingUrl`<sup>Required</sup> <a name="StreamingUrl" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.streamingUrl"></a>

```go
func StreamingUrl() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.tags"></a>

```go
func Tags() AppstreamImageBuilderTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList">AppstreamImageBuilderTagsList</a>

---

##### `VpcConfig`<sup>Required</sup> <a name="VpcConfig" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.vpcConfig"></a>

```go
func VpcConfig() AppstreamImageBuilderVpcConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference">AppstreamImageBuilderVpcConfigOutputReference</a>

---

##### `AccessEndpointsInput`<sup>Optional</sup> <a name="AccessEndpointsInput" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.accessEndpointsInput"></a>

```go
func AccessEndpointsInput() interface{}
```

- *Type:* interface{}

---

##### `AppstreamAgentVersionInput`<sup>Optional</sup> <a name="AppstreamAgentVersionInput" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.appstreamAgentVersionInput"></a>

```go
func AppstreamAgentVersionInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `DomainJoinInfoInput`<sup>Optional</sup> <a name="DomainJoinInfoInput" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.domainJoinInfoInput"></a>

```go
func DomainJoinInfoInput() interface{}
```

- *Type:* interface{}

---

##### `EnableDefaultInternetAccessInput`<sup>Optional</sup> <a name="EnableDefaultInternetAccessInput" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.enableDefaultInternetAccessInput"></a>

```go
func EnableDefaultInternetAccessInput() interface{}
```

- *Type:* interface{}

---

##### `IamRoleArnInput`<sup>Optional</sup> <a name="IamRoleArnInput" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.iamRoleArnInput"></a>

```go
func IamRoleArnInput() *string
```

- *Type:* *string

---

##### `ImageArnInput`<sup>Optional</sup> <a name="ImageArnInput" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.imageArnInput"></a>

```go
func ImageArnInput() *string
```

- *Type:* *string

---

##### `ImageNameInput`<sup>Optional</sup> <a name="ImageNameInput" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.imageNameInput"></a>

```go
func ImageNameInput() *string
```

- *Type:* *string

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.instanceTypeInput"></a>

```go
func InstanceTypeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RootVolumeConfigInput`<sup>Optional</sup> <a name="RootVolumeConfigInput" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.rootVolumeConfigInput"></a>

```go
func RootVolumeConfigInput() interface{}
```

- *Type:* interface{}

---

##### `SoftwaresToInstallInput`<sup>Optional</sup> <a name="SoftwaresToInstallInput" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.softwaresToInstallInput"></a>

```go
func SoftwaresToInstallInput() *[]*string
```

- *Type:* *[]*string

---

##### `SoftwaresToUninstallInput`<sup>Optional</sup> <a name="SoftwaresToUninstallInput" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.softwaresToUninstallInput"></a>

```go
func SoftwaresToUninstallInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `VpcConfigInput`<sup>Optional</sup> <a name="VpcConfigInput" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.vpcConfigInput"></a>

```go
func VpcConfigInput() interface{}
```

- *Type:* interface{}

---

##### `AppstreamAgentVersion`<sup>Required</sup> <a name="AppstreamAgentVersion" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.appstreamAgentVersion"></a>

```go
func AppstreamAgentVersion() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EnableDefaultInternetAccess`<sup>Required</sup> <a name="EnableDefaultInternetAccess" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.enableDefaultInternetAccess"></a>

```go
func EnableDefaultInternetAccess() interface{}
```

- *Type:* interface{}

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.iamRoleArn"></a>

```go
func IamRoleArn() *string
```

- *Type:* *string

---

##### `ImageArn`<sup>Required</sup> <a name="ImageArn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.imageArn"></a>

```go
func ImageArn() *string
```

- *Type:* *string

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.imageName"></a>

```go
func ImageName() *string
```

- *Type:* *string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SoftwaresToInstall`<sup>Required</sup> <a name="SoftwaresToInstall" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.softwaresToInstall"></a>

```go
func SoftwaresToInstall() *[]*string
```

- *Type:* *[]*string

---

##### `SoftwaresToUninstall`<sup>Required</sup> <a name="SoftwaresToUninstall" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.softwaresToUninstall"></a>

```go
func SoftwaresToUninstall() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AppstreamImageBuilderAccessEndpoints <a name="AppstreamImageBuilderAccessEndpoints" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoints.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appstreamimagebuilder"

&appstreamimagebuilder.AppstreamImageBuilderAccessEndpoints {
	EndpointType: *string,
	VpceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoints.property.endpointType">EndpointType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#endpoint_type AppstreamImageBuilder#endpoint_type}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoints.property.vpceId">VpceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#vpce_id AppstreamImageBuilder#vpce_id}. |

---

##### `EndpointType`<sup>Optional</sup> <a name="EndpointType" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoints.property.endpointType"></a>

```go
EndpointType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#endpoint_type AppstreamImageBuilder#endpoint_type}.

---

##### `VpceId`<sup>Optional</sup> <a name="VpceId" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoints.property.vpceId"></a>

```go
VpceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#vpce_id AppstreamImageBuilder#vpce_id}.

---

### AppstreamImageBuilderConfig <a name="AppstreamImageBuilderConfig" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appstreamimagebuilder"

&appstreamimagebuilder.AppstreamImageBuilderConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	InstanceType: *string,
	Name: *string,
	AccessEndpoints: interface{},
	AppstreamAgentVersion: *string,
	Description: *string,
	DisplayName: *string,
	DomainJoinInfo: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo,
	EnableDefaultInternetAccess: interface{},
	IamRoleArn: *string,
	ImageArn: *string,
	ImageName: *string,
	RootVolumeConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfig,
	SoftwaresToInstall: *[]*string,
	SoftwaresToUninstall: *[]*string,
	Tags: interface{},
	VpcConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.instanceType">InstanceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#instance_type AppstreamImageBuilder#instance_type}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#name AppstreamImageBuilder#name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.accessEndpoints">AccessEndpoints</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#access_endpoints AppstreamImageBuilder#access_endpoints}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.appstreamAgentVersion">AppstreamAgentVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#appstream_agent_version AppstreamImageBuilder#appstream_agent_version}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#description AppstreamImageBuilder#description}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#display_name AppstreamImageBuilder#display_name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.domainJoinInfo">DomainJoinInfo</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo">AppstreamImageBuilderDomainJoinInfo</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#domain_join_info AppstreamImageBuilder#domain_join_info}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.enableDefaultInternetAccess">EnableDefaultInternetAccess</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#enable_default_internet_access AppstreamImageBuilder#enable_default_internet_access}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.iamRoleArn">IamRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#iam_role_arn AppstreamImageBuilder#iam_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.imageArn">ImageArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#image_arn AppstreamImageBuilder#image_arn}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.imageName">ImageName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#image_name AppstreamImageBuilder#image_name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.rootVolumeConfig">RootVolumeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfig">AppstreamImageBuilderRootVolumeConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#root_volume_config AppstreamImageBuilder#root_volume_config}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.softwaresToInstall">SoftwaresToInstall</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#softwares_to_install AppstreamImageBuilder#softwares_to_install}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.softwaresToUninstall">SoftwaresToUninstall</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#softwares_to_uninstall AppstreamImageBuilder#softwares_to_uninstall}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#tags AppstreamImageBuilder#tags}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfig">AppstreamImageBuilderVpcConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#vpc_config AppstreamImageBuilder#vpc_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.instanceType"></a>

```go
InstanceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#instance_type AppstreamImageBuilder#instance_type}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#name AppstreamImageBuilder#name}.

---

##### `AccessEndpoints`<sup>Optional</sup> <a name="AccessEndpoints" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.accessEndpoints"></a>

```go
AccessEndpoints interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#access_endpoints AppstreamImageBuilder#access_endpoints}.

---

##### `AppstreamAgentVersion`<sup>Optional</sup> <a name="AppstreamAgentVersion" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.appstreamAgentVersion"></a>

```go
AppstreamAgentVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#appstream_agent_version AppstreamImageBuilder#appstream_agent_version}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#description AppstreamImageBuilder#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#display_name AppstreamImageBuilder#display_name}.

---

##### `DomainJoinInfo`<sup>Optional</sup> <a name="DomainJoinInfo" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.domainJoinInfo"></a>

```go
DomainJoinInfo AppstreamImageBuilderDomainJoinInfo
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo">AppstreamImageBuilderDomainJoinInfo</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#domain_join_info AppstreamImageBuilder#domain_join_info}.

---

##### `EnableDefaultInternetAccess`<sup>Optional</sup> <a name="EnableDefaultInternetAccess" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.enableDefaultInternetAccess"></a>

```go
EnableDefaultInternetAccess interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#enable_default_internet_access AppstreamImageBuilder#enable_default_internet_access}.

---

##### `IamRoleArn`<sup>Optional</sup> <a name="IamRoleArn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.iamRoleArn"></a>

```go
IamRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#iam_role_arn AppstreamImageBuilder#iam_role_arn}.

---

##### `ImageArn`<sup>Optional</sup> <a name="ImageArn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.imageArn"></a>

```go
ImageArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#image_arn AppstreamImageBuilder#image_arn}.

---

##### `ImageName`<sup>Optional</sup> <a name="ImageName" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.imageName"></a>

```go
ImageName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#image_name AppstreamImageBuilder#image_name}.

---

##### `RootVolumeConfig`<sup>Optional</sup> <a name="RootVolumeConfig" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.rootVolumeConfig"></a>

```go
RootVolumeConfig AppstreamImageBuilderRootVolumeConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfig">AppstreamImageBuilderRootVolumeConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#root_volume_config AppstreamImageBuilder#root_volume_config}.

---

##### `SoftwaresToInstall`<sup>Optional</sup> <a name="SoftwaresToInstall" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.softwaresToInstall"></a>

```go
SoftwaresToInstall *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#softwares_to_install AppstreamImageBuilder#softwares_to_install}.

---

##### `SoftwaresToUninstall`<sup>Optional</sup> <a name="SoftwaresToUninstall" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.softwaresToUninstall"></a>

```go
SoftwaresToUninstall *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#softwares_to_uninstall AppstreamImageBuilder#softwares_to_uninstall}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#tags AppstreamImageBuilder#tags}.

---

##### `VpcConfig`<sup>Optional</sup> <a name="VpcConfig" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.vpcConfig"></a>

```go
VpcConfig AppstreamImageBuilderVpcConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfig">AppstreamImageBuilderVpcConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#vpc_config AppstreamImageBuilder#vpc_config}.

---

### AppstreamImageBuilderDomainJoinInfo <a name="AppstreamImageBuilderDomainJoinInfo" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appstreamimagebuilder"

&appstreamimagebuilder.AppstreamImageBuilderDomainJoinInfo {
	DirectoryName: *string,
	OrganizationalUnitDistinguishedName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo.property.directoryName">DirectoryName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#directory_name AppstreamImageBuilder#directory_name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo.property.organizationalUnitDistinguishedName">OrganizationalUnitDistinguishedName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#organizational_unit_distinguished_name AppstreamImageBuilder#organizational_unit_distinguished_name}. |

---

##### `DirectoryName`<sup>Optional</sup> <a name="DirectoryName" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo.property.directoryName"></a>

```go
DirectoryName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#directory_name AppstreamImageBuilder#directory_name}.

---

##### `OrganizationalUnitDistinguishedName`<sup>Optional</sup> <a name="OrganizationalUnitDistinguishedName" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo.property.organizationalUnitDistinguishedName"></a>

```go
OrganizationalUnitDistinguishedName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#organizational_unit_distinguished_name AppstreamImageBuilder#organizational_unit_distinguished_name}.

---

### AppstreamImageBuilderRootVolumeConfig <a name="AppstreamImageBuilderRootVolumeConfig" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appstreamimagebuilder"

&appstreamimagebuilder.AppstreamImageBuilderRootVolumeConfig {
	VolumeSizeInGb: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfig.property.volumeSizeInGb">VolumeSizeInGb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#volume_size_in_gb AppstreamImageBuilder#volume_size_in_gb}. |

---

##### `VolumeSizeInGb`<sup>Optional</sup> <a name="VolumeSizeInGb" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfig.property.volumeSizeInGb"></a>

```go
VolumeSizeInGb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#volume_size_in_gb AppstreamImageBuilder#volume_size_in_gb}.

---

### AppstreamImageBuilderTags <a name="AppstreamImageBuilderTags" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appstreamimagebuilder"

&appstreamimagebuilder.AppstreamImageBuilderTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#key AppstreamImageBuilder#key}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#value AppstreamImageBuilder#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#key AppstreamImageBuilder#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#value AppstreamImageBuilder#value}.

---

### AppstreamImageBuilderVpcConfig <a name="AppstreamImageBuilderVpcConfig" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appstreamimagebuilder"

&appstreamimagebuilder.AppstreamImageBuilderVpcConfig {
	SecurityGroupIds: *[]*string,
	SubnetIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#security_group_ids AppstreamImageBuilder#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfig.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#subnet_ids AppstreamImageBuilder#subnet_ids}. |

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfig.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#security_group_ids AppstreamImageBuilder#security_group_ids}.

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfig.property.subnetIds"></a>

```go
SubnetIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#subnet_ids AppstreamImageBuilder#subnet_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppstreamImageBuilderAccessEndpointsList <a name="AppstreamImageBuilderAccessEndpointsList" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appstreamimagebuilder"

appstreamimagebuilder.NewAppstreamImageBuilderAccessEndpointsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AppstreamImageBuilderAccessEndpointsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.get"></a>

```go
func Get(index *f64) AppstreamImageBuilderAccessEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppstreamImageBuilderAccessEndpointsOutputReference <a name="AppstreamImageBuilderAccessEndpointsOutputReference" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appstreamimagebuilder"

appstreamimagebuilder.NewAppstreamImageBuilderAccessEndpointsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AppstreamImageBuilderAccessEndpointsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.resetEndpointType">ResetEndpointType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.resetVpceId">ResetVpceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndpointType` <a name="ResetEndpointType" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.resetEndpointType"></a>

```go
func ResetEndpointType()
```

##### `ResetVpceId` <a name="ResetVpceId" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.resetVpceId"></a>

```go
func ResetVpceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.property.endpointTypeInput">EndpointTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.property.vpceIdInput">VpceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.property.endpointType">EndpointType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.property.vpceId">VpceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndpointTypeInput`<sup>Optional</sup> <a name="EndpointTypeInput" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.property.endpointTypeInput"></a>

```go
func EndpointTypeInput() *string
```

- *Type:* *string

---

##### `VpceIdInput`<sup>Optional</sup> <a name="VpceIdInput" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.property.vpceIdInput"></a>

```go
func VpceIdInput() *string
```

- *Type:* *string

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.property.endpointType"></a>

```go
func EndpointType() *string
```

- *Type:* *string

---

##### `VpceId`<sup>Required</sup> <a name="VpceId" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.property.vpceId"></a>

```go
func VpceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppstreamImageBuilderDomainJoinInfoOutputReference <a name="AppstreamImageBuilderDomainJoinInfoOutputReference" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appstreamimagebuilder"

appstreamimagebuilder.NewAppstreamImageBuilderDomainJoinInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppstreamImageBuilderDomainJoinInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.resetDirectoryName">ResetDirectoryName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.resetOrganizationalUnitDistinguishedName">ResetOrganizationalUnitDistinguishedName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDirectoryName` <a name="ResetDirectoryName" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.resetDirectoryName"></a>

```go
func ResetDirectoryName()
```

##### `ResetOrganizationalUnitDistinguishedName` <a name="ResetOrganizationalUnitDistinguishedName" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.resetOrganizationalUnitDistinguishedName"></a>

```go
func ResetOrganizationalUnitDistinguishedName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.directoryNameInput">DirectoryNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.organizationalUnitDistinguishedNameInput">OrganizationalUnitDistinguishedNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.directoryName">DirectoryName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.organizationalUnitDistinguishedName">OrganizationalUnitDistinguishedName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DirectoryNameInput`<sup>Optional</sup> <a name="DirectoryNameInput" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.directoryNameInput"></a>

```go
func DirectoryNameInput() *string
```

- *Type:* *string

---

##### `OrganizationalUnitDistinguishedNameInput`<sup>Optional</sup> <a name="OrganizationalUnitDistinguishedNameInput" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.organizationalUnitDistinguishedNameInput"></a>

```go
func OrganizationalUnitDistinguishedNameInput() *string
```

- *Type:* *string

---

##### `DirectoryName`<sup>Required</sup> <a name="DirectoryName" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.directoryName"></a>

```go
func DirectoryName() *string
```

- *Type:* *string

---

##### `OrganizationalUnitDistinguishedName`<sup>Required</sup> <a name="OrganizationalUnitDistinguishedName" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.organizationalUnitDistinguishedName"></a>

```go
func OrganizationalUnitDistinguishedName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppstreamImageBuilderRootVolumeConfigOutputReference <a name="AppstreamImageBuilderRootVolumeConfigOutputReference" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appstreamimagebuilder"

appstreamimagebuilder.NewAppstreamImageBuilderRootVolumeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppstreamImageBuilderRootVolumeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.resetVolumeSizeInGb">ResetVolumeSizeInGb</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVolumeSizeInGb` <a name="ResetVolumeSizeInGb" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.resetVolumeSizeInGb"></a>

```go
func ResetVolumeSizeInGb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.property.volumeSizeInGbInput">VolumeSizeInGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.property.volumeSizeInGb">VolumeSizeInGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VolumeSizeInGbInput`<sup>Optional</sup> <a name="VolumeSizeInGbInput" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.property.volumeSizeInGbInput"></a>

```go
func VolumeSizeInGbInput() *f64
```

- *Type:* *f64

---

##### `VolumeSizeInGb`<sup>Required</sup> <a name="VolumeSizeInGb" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.property.volumeSizeInGb"></a>

```go
func VolumeSizeInGb() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppstreamImageBuilderTagsList <a name="AppstreamImageBuilderTagsList" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appstreamimagebuilder"

appstreamimagebuilder.NewAppstreamImageBuilderTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AppstreamImageBuilderTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.get"></a>

```go
func Get(index *f64) AppstreamImageBuilderTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppstreamImageBuilderTagsOutputReference <a name="AppstreamImageBuilderTagsOutputReference" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appstreamimagebuilder"

appstreamimagebuilder.NewAppstreamImageBuilderTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AppstreamImageBuilderTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppstreamImageBuilderVpcConfigOutputReference <a name="AppstreamImageBuilderVpcConfigOutputReference" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appstreamimagebuilder"

appstreamimagebuilder.NewAppstreamImageBuilderVpcConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppstreamImageBuilderVpcConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.resetSecurityGroupIds"></a>

```go
func ResetSecurityGroupIds()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.resetSubnetIds"></a>

```go
func ResetSubnetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.subnetIdsInput"></a>

```go
func SubnetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



