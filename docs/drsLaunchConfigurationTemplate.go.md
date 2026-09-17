# `drsLaunchConfigurationTemplate` Submodule <a name="`drsLaunchConfigurationTemplate` Submodule" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DrsLaunchConfigurationTemplate <a name="DrsLaunchConfigurationTemplate" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/drs_launch_configuration_template awscc_drs_launch_configuration_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/drslaunchconfigurationtemplate"

drslaunchconfigurationtemplate.NewDrsLaunchConfigurationTemplate(scope Construct, id *string, config DrsLaunchConfigurationTemplateConfig) DrsLaunchConfigurationTemplate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig">DrsLaunchConfigurationTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig">DrsLaunchConfigurationTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.putLicensing">PutLicensing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetCopyPrivateIp">ResetCopyPrivateIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetCopyTags">ResetCopyTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetExportBucketArn">ResetExportBucketArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetLaunchDisposition">ResetLaunchDisposition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetLaunchIntoSourceInstance">ResetLaunchIntoSourceInstance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetLicensing">ResetLicensing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetPostLaunchEnabled">ResetPostLaunchEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetTargetInstanceTypeRightSizingMethod">ResetTargetInstanceTypeRightSizingMethod</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLicensing` <a name="PutLicensing" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.putLicensing"></a>

```go
func PutLicensing(value DrsLaunchConfigurationTemplateLicensing)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.putLicensing.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensing">DrsLaunchConfigurationTemplateLicensing</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCopyPrivateIp` <a name="ResetCopyPrivateIp" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetCopyPrivateIp"></a>

```go
func ResetCopyPrivateIp()
```

##### `ResetCopyTags` <a name="ResetCopyTags" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetCopyTags"></a>

```go
func ResetCopyTags()
```

##### `ResetExportBucketArn` <a name="ResetExportBucketArn" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetExportBucketArn"></a>

```go
func ResetExportBucketArn()
```

##### `ResetLaunchDisposition` <a name="ResetLaunchDisposition" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetLaunchDisposition"></a>

```go
func ResetLaunchDisposition()
```

##### `ResetLaunchIntoSourceInstance` <a name="ResetLaunchIntoSourceInstance" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetLaunchIntoSourceInstance"></a>

```go
func ResetLaunchIntoSourceInstance()
```

##### `ResetLicensing` <a name="ResetLicensing" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetLicensing"></a>

```go
func ResetLicensing()
```

##### `ResetPostLaunchEnabled` <a name="ResetPostLaunchEnabled" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetPostLaunchEnabled"></a>

```go
func ResetPostLaunchEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTargetInstanceTypeRightSizingMethod` <a name="ResetTargetInstanceTypeRightSizingMethod" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetTargetInstanceTypeRightSizingMethod"></a>

```go
func ResetTargetInstanceTypeRightSizingMethod()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DrsLaunchConfigurationTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/drslaunchconfigurationtemplate"

drslaunchconfigurationtemplate.DrsLaunchConfigurationTemplate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/drslaunchconfigurationtemplate"

drslaunchconfigurationtemplate.DrsLaunchConfigurationTemplate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/drslaunchconfigurationtemplate"

drslaunchconfigurationtemplate.DrsLaunchConfigurationTemplate_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/drslaunchconfigurationtemplate"

drslaunchconfigurationtemplate.DrsLaunchConfigurationTemplate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DrsLaunchConfigurationTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DrsLaunchConfigurationTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DrsLaunchConfigurationTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/drs_launch_configuration_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DrsLaunchConfigurationTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.launchConfigurationTemplateId">LaunchConfigurationTemplateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.licensing">Licensing</a></code> | <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference">DrsLaunchConfigurationTemplateLicensingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList">DrsLaunchConfigurationTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.copyPrivateIpInput">CopyPrivateIpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.copyTagsInput">CopyTagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.exportBucketArnInput">ExportBucketArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.launchDispositionInput">LaunchDispositionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.launchIntoSourceInstanceInput">LaunchIntoSourceInstanceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.licensingInput">LicensingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.postLaunchEnabledInput">PostLaunchEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.targetInstanceTypeRightSizingMethodInput">TargetInstanceTypeRightSizingMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.copyPrivateIp">CopyPrivateIp</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.copyTags">CopyTags</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.exportBucketArn">ExportBucketArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.launchDisposition">LaunchDisposition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.launchIntoSourceInstance">LaunchIntoSourceInstance</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.postLaunchEnabled">PostLaunchEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.targetInstanceTypeRightSizingMethod">TargetInstanceTypeRightSizingMethod</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LaunchConfigurationTemplateId`<sup>Required</sup> <a name="LaunchConfigurationTemplateId" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.launchConfigurationTemplateId"></a>

```go
func LaunchConfigurationTemplateId() *string
```

- *Type:* *string

---

##### `Licensing`<sup>Required</sup> <a name="Licensing" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.licensing"></a>

```go
func Licensing() DrsLaunchConfigurationTemplateLicensingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference">DrsLaunchConfigurationTemplateLicensingOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.tags"></a>

```go
func Tags() DrsLaunchConfigurationTemplateTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList">DrsLaunchConfigurationTemplateTagsList</a>

---

##### `CopyPrivateIpInput`<sup>Optional</sup> <a name="CopyPrivateIpInput" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.copyPrivateIpInput"></a>

```go
func CopyPrivateIpInput() interface{}
```

- *Type:* interface{}

---

##### `CopyTagsInput`<sup>Optional</sup> <a name="CopyTagsInput" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.copyTagsInput"></a>

```go
func CopyTagsInput() interface{}
```

- *Type:* interface{}

---

##### `ExportBucketArnInput`<sup>Optional</sup> <a name="ExportBucketArnInput" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.exportBucketArnInput"></a>

```go
func ExportBucketArnInput() *string
```

- *Type:* *string

---

##### `LaunchDispositionInput`<sup>Optional</sup> <a name="LaunchDispositionInput" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.launchDispositionInput"></a>

```go
func LaunchDispositionInput() *string
```

- *Type:* *string

---

##### `LaunchIntoSourceInstanceInput`<sup>Optional</sup> <a name="LaunchIntoSourceInstanceInput" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.launchIntoSourceInstanceInput"></a>

```go
func LaunchIntoSourceInstanceInput() interface{}
```

- *Type:* interface{}

---

##### `LicensingInput`<sup>Optional</sup> <a name="LicensingInput" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.licensingInput"></a>

```go
func LicensingInput() interface{}
```

- *Type:* interface{}

---

##### `PostLaunchEnabledInput`<sup>Optional</sup> <a name="PostLaunchEnabledInput" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.postLaunchEnabledInput"></a>

```go
func PostLaunchEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TargetInstanceTypeRightSizingMethodInput`<sup>Optional</sup> <a name="TargetInstanceTypeRightSizingMethodInput" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.targetInstanceTypeRightSizingMethodInput"></a>

```go
func TargetInstanceTypeRightSizingMethodInput() *string
```

- *Type:* *string

---

##### `CopyPrivateIp`<sup>Required</sup> <a name="CopyPrivateIp" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.copyPrivateIp"></a>

```go
func CopyPrivateIp() interface{}
```

- *Type:* interface{}

---

##### `CopyTags`<sup>Required</sup> <a name="CopyTags" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.copyTags"></a>

```go
func CopyTags() interface{}
```

- *Type:* interface{}

---

##### `ExportBucketArn`<sup>Required</sup> <a name="ExportBucketArn" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.exportBucketArn"></a>

```go
func ExportBucketArn() *string
```

- *Type:* *string

---

##### `LaunchDisposition`<sup>Required</sup> <a name="LaunchDisposition" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.launchDisposition"></a>

```go
func LaunchDisposition() *string
```

- *Type:* *string

---

##### `LaunchIntoSourceInstance`<sup>Required</sup> <a name="LaunchIntoSourceInstance" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.launchIntoSourceInstance"></a>

```go
func LaunchIntoSourceInstance() interface{}
```

- *Type:* interface{}

---

##### `PostLaunchEnabled`<sup>Required</sup> <a name="PostLaunchEnabled" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.postLaunchEnabled"></a>

```go
func PostLaunchEnabled() interface{}
```

- *Type:* interface{}

---

##### `TargetInstanceTypeRightSizingMethod`<sup>Required</sup> <a name="TargetInstanceTypeRightSizingMethod" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.targetInstanceTypeRightSizingMethod"></a>

```go
func TargetInstanceTypeRightSizingMethod() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DrsLaunchConfigurationTemplateConfig <a name="DrsLaunchConfigurationTemplateConfig" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/drslaunchconfigurationtemplate"

&drslaunchconfigurationtemplate.DrsLaunchConfigurationTemplateConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	CopyPrivateIp: interface{},
	CopyTags: interface{},
	ExportBucketArn: *string,
	LaunchDisposition: *string,
	LaunchIntoSourceInstance: interface{},
	Licensing: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensing,
	PostLaunchEnabled: interface{},
	Tags: interface{},
	TargetInstanceTypeRightSizingMethod: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.copyPrivateIp">CopyPrivateIp</a></code> | <code>interface{}</code> | Copy private IP. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.copyTags">CopyTags</a></code> | <code>interface{}</code> | Copy tags. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.exportBucketArn">ExportBucketArn</a></code> | <code>*string</code> | S3 bucket ARN to export Source Network templates. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.launchDisposition">LaunchDisposition</a></code> | <code>*string</code> | Launch disposition. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.launchIntoSourceInstance">LaunchIntoSourceInstance</a></code> | <code>interface{}</code> | DRS will set the 'launch into instance ID' of any source server when performing a drill, recovery or failback to the previous region or availability zone, using the instance ID of the source instance. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.licensing">Licensing</a></code> | <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensing">DrsLaunchConfigurationTemplateLicensing</a></code> | Configuration of a machine's license. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.postLaunchEnabled">PostLaunchEnabled</a></code> | <code>interface{}</code> | Whether we want to activate post-launch actions. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.tags">Tags</a></code> | <code>interface{}</code> | A set of tags associated with the Launch Configuration Template. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.targetInstanceTypeRightSizingMethod">TargetInstanceTypeRightSizingMethod</a></code> | <code>*string</code> | Target instance type right-sizing method. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CopyPrivateIp`<sup>Optional</sup> <a name="CopyPrivateIp" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.copyPrivateIp"></a>

```go
CopyPrivateIp interface{}
```

- *Type:* interface{}

Copy private IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/drs_launch_configuration_template#copy_private_ip DrsLaunchConfigurationTemplate#copy_private_ip}

---

##### `CopyTags`<sup>Optional</sup> <a name="CopyTags" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.copyTags"></a>

```go
CopyTags interface{}
```

- *Type:* interface{}

Copy tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/drs_launch_configuration_template#copy_tags DrsLaunchConfigurationTemplate#copy_tags}

---

##### `ExportBucketArn`<sup>Optional</sup> <a name="ExportBucketArn" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.exportBucketArn"></a>

```go
ExportBucketArn *string
```

- *Type:* *string

S3 bucket ARN to export Source Network templates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/drs_launch_configuration_template#export_bucket_arn DrsLaunchConfigurationTemplate#export_bucket_arn}

---

##### `LaunchDisposition`<sup>Optional</sup> <a name="LaunchDisposition" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.launchDisposition"></a>

```go
LaunchDisposition *string
```

- *Type:* *string

Launch disposition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/drs_launch_configuration_template#launch_disposition DrsLaunchConfigurationTemplate#launch_disposition}

---

##### `LaunchIntoSourceInstance`<sup>Optional</sup> <a name="LaunchIntoSourceInstance" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.launchIntoSourceInstance"></a>

```go
LaunchIntoSourceInstance interface{}
```

- *Type:* interface{}

DRS will set the 'launch into instance ID' of any source server when performing a drill, recovery or failback to the previous region or availability zone, using the instance ID of the source instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/drs_launch_configuration_template#launch_into_source_instance DrsLaunchConfigurationTemplate#launch_into_source_instance}

---

##### `Licensing`<sup>Optional</sup> <a name="Licensing" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.licensing"></a>

```go
Licensing DrsLaunchConfigurationTemplateLicensing
```

- *Type:* <a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensing">DrsLaunchConfigurationTemplateLicensing</a>

Configuration of a machine's license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/drs_launch_configuration_template#licensing DrsLaunchConfigurationTemplate#licensing}

---

##### `PostLaunchEnabled`<sup>Optional</sup> <a name="PostLaunchEnabled" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.postLaunchEnabled"></a>

```go
PostLaunchEnabled interface{}
```

- *Type:* interface{}

Whether we want to activate post-launch actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/drs_launch_configuration_template#post_launch_enabled DrsLaunchConfigurationTemplate#post_launch_enabled}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

A set of tags associated with the Launch Configuration Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/drs_launch_configuration_template#tags DrsLaunchConfigurationTemplate#tags}

---

##### `TargetInstanceTypeRightSizingMethod`<sup>Optional</sup> <a name="TargetInstanceTypeRightSizingMethod" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.targetInstanceTypeRightSizingMethod"></a>

```go
TargetInstanceTypeRightSizingMethod *string
```

- *Type:* *string

Target instance type right-sizing method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/drs_launch_configuration_template#target_instance_type_right_sizing_method DrsLaunchConfigurationTemplate#target_instance_type_right_sizing_method}

---

### DrsLaunchConfigurationTemplateLicensing <a name="DrsLaunchConfigurationTemplateLicensing" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensing"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensing.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/drslaunchconfigurationtemplate"

&drslaunchconfigurationtemplate.DrsLaunchConfigurationTemplateLicensing {
	OsByol: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensing.property.osByol">OsByol</a></code> | <code>interface{}</code> | Whether to enable Bring your own license or not. |

---

##### `OsByol`<sup>Optional</sup> <a name="OsByol" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensing.property.osByol"></a>

```go
OsByol interface{}
```

- *Type:* interface{}

Whether to enable Bring your own license or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/drs_launch_configuration_template#os_byol DrsLaunchConfigurationTemplate#os_byol}

---

### DrsLaunchConfigurationTemplateTags <a name="DrsLaunchConfigurationTemplateTags" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/drslaunchconfigurationtemplate"

&drslaunchconfigurationtemplate.DrsLaunchConfigurationTemplateTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/drs_launch_configuration_template#key DrsLaunchConfigurationTemplate#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/drs_launch_configuration_template#value DrsLaunchConfigurationTemplate#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DrsLaunchConfigurationTemplateLicensingOutputReference <a name="DrsLaunchConfigurationTemplateLicensingOutputReference" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/drslaunchconfigurationtemplate"

drslaunchconfigurationtemplate.NewDrsLaunchConfigurationTemplateLicensingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DrsLaunchConfigurationTemplateLicensingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.resetOsByol">ResetOsByol</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOsByol` <a name="ResetOsByol" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.resetOsByol"></a>

```go
func ResetOsByol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.property.osByolInput">OsByolInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.property.osByol">OsByol</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OsByolInput`<sup>Optional</sup> <a name="OsByolInput" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.property.osByolInput"></a>

```go
func OsByolInput() interface{}
```

- *Type:* interface{}

---

##### `OsByol`<sup>Required</sup> <a name="OsByol" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.property.osByol"></a>

```go
func OsByol() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DrsLaunchConfigurationTemplateTagsList <a name="DrsLaunchConfigurationTemplateTagsList" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/drslaunchconfigurationtemplate"

drslaunchconfigurationtemplate.NewDrsLaunchConfigurationTemplateTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DrsLaunchConfigurationTemplateTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.get"></a>

```go
func Get(index *f64) DrsLaunchConfigurationTemplateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DrsLaunchConfigurationTemplateTagsOutputReference <a name="DrsLaunchConfigurationTemplateTagsOutputReference" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/drslaunchconfigurationtemplate"

drslaunchconfigurationtemplate.NewDrsLaunchConfigurationTemplateTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DrsLaunchConfigurationTemplateTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



