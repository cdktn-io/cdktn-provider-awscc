# `mediapackagePackagingConfiguration` Submodule <a name="`mediapackagePackagingConfiguration` Submodule" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediapackagePackagingConfiguration <a name="MediapackagePackagingConfiguration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration awscc_mediapackage_packaging_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackagingconfiguration"

mediapackagepackagingconfiguration.NewMediapackagePackagingConfiguration(scope Construct, id *string, config MediapackagePackagingConfigurationConfig) MediapackagePackagingConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig">MediapackagePackagingConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig">MediapackagePackagingConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.putCmafPackage">PutCmafPackage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.putDashPackage">PutDashPackage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.putHlsPackage">PutHlsPackage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.putMssPackage">PutMssPackage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.resetCmafPackage">ResetCmafPackage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.resetDashPackage">ResetDashPackage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.resetHlsPackage">ResetHlsPackage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.resetMssPackage">ResetMssPackage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCmafPackage` <a name="PutCmafPackage" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.putCmafPackage"></a>

```go
func PutCmafPackage(value MediapackagePackagingConfigurationCmafPackage)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.putCmafPackage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackage">MediapackagePackagingConfigurationCmafPackage</a>

---

##### `PutDashPackage` <a name="PutDashPackage" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.putDashPackage"></a>

```go
func PutDashPackage(value MediapackagePackagingConfigurationDashPackage)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.putDashPackage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage">MediapackagePackagingConfigurationDashPackage</a>

---

##### `PutHlsPackage` <a name="PutHlsPackage" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.putHlsPackage"></a>

```go
func PutHlsPackage(value MediapackagePackagingConfigurationHlsPackage)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.putHlsPackage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackage">MediapackagePackagingConfigurationHlsPackage</a>

---

##### `PutMssPackage` <a name="PutMssPackage" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.putMssPackage"></a>

```go
func PutMssPackage(value MediapackagePackagingConfigurationMssPackage)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.putMssPackage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackage">MediapackagePackagingConfigurationMssPackage</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCmafPackage` <a name="ResetCmafPackage" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.resetCmafPackage"></a>

```go
func ResetCmafPackage()
```

##### `ResetDashPackage` <a name="ResetDashPackage" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.resetDashPackage"></a>

```go
func ResetDashPackage()
```

##### `ResetHlsPackage` <a name="ResetHlsPackage" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.resetHlsPackage"></a>

```go
func ResetHlsPackage()
```

##### `ResetMssPackage` <a name="ResetMssPackage" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.resetMssPackage"></a>

```go
func ResetMssPackage()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MediapackagePackagingConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackagingconfiguration"

mediapackagepackagingconfiguration.MediapackagePackagingConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackagingconfiguration"

mediapackagepackagingconfiguration.MediapackagePackagingConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackagingconfiguration"

mediapackagepackagingconfiguration.MediapackagePackagingConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackagingconfiguration"

mediapackagepackagingconfiguration.MediapackagePackagingConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a MediapackagePackagingConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MediapackagePackagingConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MediapackagePackagingConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the MediapackagePackagingConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.cmafPackage">CmafPackage</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference">MediapackagePackagingConfigurationCmafPackageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.dashPackage">DashPackage</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference">MediapackagePackagingConfigurationDashPackageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.hlsPackage">HlsPackage</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference">MediapackagePackagingConfigurationHlsPackageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.mssPackage">MssPackage</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference">MediapackagePackagingConfigurationMssPackageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList">MediapackagePackagingConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.cmafPackageInput">CmafPackageInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.dashPackageInput">DashPackageInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.hlsPackageInput">HlsPackageInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.mssPackageInput">MssPackageInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.packagingConfigurationIdInput">PackagingConfigurationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.packagingGroupIdInput">PackagingGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.packagingConfigurationId">PackagingConfigurationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.packagingGroupId">PackagingGroupId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CmafPackage`<sup>Required</sup> <a name="CmafPackage" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.cmafPackage"></a>

```go
func CmafPackage() MediapackagePackagingConfigurationCmafPackageOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference">MediapackagePackagingConfigurationCmafPackageOutputReference</a>

---

##### `DashPackage`<sup>Required</sup> <a name="DashPackage" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.dashPackage"></a>

```go
func DashPackage() MediapackagePackagingConfigurationDashPackageOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference">MediapackagePackagingConfigurationDashPackageOutputReference</a>

---

##### `HlsPackage`<sup>Required</sup> <a name="HlsPackage" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.hlsPackage"></a>

```go
func HlsPackage() MediapackagePackagingConfigurationHlsPackageOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference">MediapackagePackagingConfigurationHlsPackageOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MssPackage`<sup>Required</sup> <a name="MssPackage" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.mssPackage"></a>

```go
func MssPackage() MediapackagePackagingConfigurationMssPackageOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference">MediapackagePackagingConfigurationMssPackageOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.tags"></a>

```go
func Tags() MediapackagePackagingConfigurationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList">MediapackagePackagingConfigurationTagsList</a>

---

##### `CmafPackageInput`<sup>Optional</sup> <a name="CmafPackageInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.cmafPackageInput"></a>

```go
func CmafPackageInput() interface{}
```

- *Type:* interface{}

---

##### `DashPackageInput`<sup>Optional</sup> <a name="DashPackageInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.dashPackageInput"></a>

```go
func DashPackageInput() interface{}
```

- *Type:* interface{}

---

##### `HlsPackageInput`<sup>Optional</sup> <a name="HlsPackageInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.hlsPackageInput"></a>

```go
func HlsPackageInput() interface{}
```

- *Type:* interface{}

---

##### `MssPackageInput`<sup>Optional</sup> <a name="MssPackageInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.mssPackageInput"></a>

```go
func MssPackageInput() interface{}
```

- *Type:* interface{}

---

##### `PackagingConfigurationIdInput`<sup>Optional</sup> <a name="PackagingConfigurationIdInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.packagingConfigurationIdInput"></a>

```go
func PackagingConfigurationIdInput() *string
```

- *Type:* *string

---

##### `PackagingGroupIdInput`<sup>Optional</sup> <a name="PackagingGroupIdInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.packagingGroupIdInput"></a>

```go
func PackagingGroupIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `PackagingConfigurationId`<sup>Required</sup> <a name="PackagingConfigurationId" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.packagingConfigurationId"></a>

```go
func PackagingConfigurationId() *string
```

- *Type:* *string

---

##### `PackagingGroupId`<sup>Required</sup> <a name="PackagingGroupId" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.packagingGroupId"></a>

```go
func PackagingGroupId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MediapackagePackagingConfigurationCmafPackage <a name="MediapackagePackagingConfigurationCmafPackage" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackage.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackagingconfiguration"

&mediapackagepackagingconfiguration.MediapackagePackagingConfigurationCmafPackage {
	Encryption: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryption,
	HlsManifests: interface{},
	IncludeEncoderConfigurationInSegments: interface{},
	SegmentDurationSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackage.property.encryption">Encryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryption">MediapackagePackagingConfigurationCmafPackageEncryption</a></code> | A CMAF encryption configuration. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackage.property.hlsManifests">HlsManifests</a></code> | <code>interface{}</code> | A list of HLS manifest configurations. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackage.property.includeEncoderConfigurationInSegments">IncludeEncoderConfigurationInSegments</a></code> | <code>interface{}</code> | When includeEncoderConfigurationInSegments is set to true, MediaPackage places your encoder's Sequence Parameter Set (SPS), Picture Parameter Set (PPS), and Video Parameter Set (VPS) metadata in every video segment instead of in the init fragment. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackage.property.segmentDurationSeconds">SegmentDurationSeconds</a></code> | <code>*f64</code> | Duration (in seconds) of each fragment. |

---

##### `Encryption`<sup>Optional</sup> <a name="Encryption" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackage.property.encryption"></a>

```go
Encryption MediapackagePackagingConfigurationCmafPackageEncryption
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryption">MediapackagePackagingConfigurationCmafPackageEncryption</a>

A CMAF encryption configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#encryption MediapackagePackagingConfiguration#encryption}

---

##### `HlsManifests`<sup>Optional</sup> <a name="HlsManifests" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackage.property.hlsManifests"></a>

```go
HlsManifests interface{}
```

- *Type:* interface{}

A list of HLS manifest configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#hls_manifests MediapackagePackagingConfiguration#hls_manifests}

---

##### `IncludeEncoderConfigurationInSegments`<sup>Optional</sup> <a name="IncludeEncoderConfigurationInSegments" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackage.property.includeEncoderConfigurationInSegments"></a>

```go
IncludeEncoderConfigurationInSegments interface{}
```

- *Type:* interface{}

When includeEncoderConfigurationInSegments is set to true, MediaPackage places your encoder's Sequence Parameter Set (SPS), Picture Parameter Set (PPS), and Video Parameter Set (VPS) metadata in every video segment instead of in the init fragment.

This lets you use different SPS/PPS/VPS settings for your assets during content playback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#include_encoder_configuration_in_segments MediapackagePackagingConfiguration#include_encoder_configuration_in_segments}

---

##### `SegmentDurationSeconds`<sup>Optional</sup> <a name="SegmentDurationSeconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackage.property.segmentDurationSeconds"></a>

```go
SegmentDurationSeconds *f64
```

- *Type:* *f64

Duration (in seconds) of each fragment.

Actual fragments will be rounded to the nearest multiple of the source fragment duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#segment_duration_seconds MediapackagePackagingConfiguration#segment_duration_seconds}

---

### MediapackagePackagingConfigurationCmafPackageEncryption <a name="MediapackagePackagingConfigurationCmafPackageEncryption" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryption.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackagingconfiguration"

&mediapackagepackagingconfiguration.MediapackagePackagingConfigurationCmafPackageEncryption {
	SpekeKeyProvider: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryption.property.spekeKeyProvider">SpekeKeyProvider</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider</a></code> | A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys. |

---

##### `SpekeKeyProvider`<sup>Optional</sup> <a name="SpekeKeyProvider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryption.property.spekeKeyProvider"></a>

```go
SpekeKeyProvider MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider</a>

A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#speke_key_provider MediapackagePackagingConfiguration#speke_key_provider}

---

### MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider <a name="MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackagingconfiguration"

&mediapackagepackagingconfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider {
	EncryptionContractConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration,
	RoleArn: *string,
	SystemIds: *[]*string,
	Url: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider.property.encryptionContractConfiguration">EncryptionContractConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a></code> | The configuration to use for encrypting one or more content tracks separately for endpoints that use SPEKE 2.0. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider.property.roleArn">RoleArn</a></code> | <code>*string</code> | An Amazon Resource Name (ARN) of an IAM role that AWS Elemental MediaPackage will assume when accessing the key provider service. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider.property.systemIds">SystemIds</a></code> | <code>*[]*string</code> | The system IDs to include in key requests. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider.property.url">Url</a></code> | <code>*string</code> | The URL of the external key provider service. |

---

##### `EncryptionContractConfiguration`<sup>Optional</sup> <a name="EncryptionContractConfiguration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider.property.encryptionContractConfiguration"></a>

```go
EncryptionContractConfiguration MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a>

The configuration to use for encrypting one or more content tracks separately for endpoints that use SPEKE 2.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#encryption_contract_configuration MediapackagePackagingConfiguration#encryption_contract_configuration}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

An Amazon Resource Name (ARN) of an IAM role that AWS Elemental MediaPackage will assume when accessing the key provider service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#role_arn MediapackagePackagingConfiguration#role_arn}

---

##### `SystemIds`<sup>Optional</sup> <a name="SystemIds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider.property.systemIds"></a>

```go
SystemIds *[]*string
```

- *Type:* *[]*string

The system IDs to include in key requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#system_ids MediapackagePackagingConfiguration#system_ids}

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider.property.url"></a>

```go
Url *string
```

- *Type:* *string

The URL of the external key provider service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#url MediapackagePackagingConfiguration#url}

---

### MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration <a name="MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackagingconfiguration"

&mediapackagepackagingconfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration {
	PresetSpeke20Audio: *string,
	PresetSpeke20Video: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.property.presetSpeke20Audio">PresetSpeke20Audio</a></code> | <code>*string</code> | A collection of audio encryption presets. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.property.presetSpeke20Video">PresetSpeke20Video</a></code> | <code>*string</code> | A collection of video encryption presets. |

---

##### `PresetSpeke20Audio`<sup>Optional</sup> <a name="PresetSpeke20Audio" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.property.presetSpeke20Audio"></a>

```go
PresetSpeke20Audio *string
```

- *Type:* *string

A collection of audio encryption presets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#preset_speke_20_audio MediapackagePackagingConfiguration#preset_speke_20_audio}

---

##### `PresetSpeke20Video`<sup>Optional</sup> <a name="PresetSpeke20Video" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.property.presetSpeke20Video"></a>

```go
PresetSpeke20Video *string
```

- *Type:* *string

A collection of video encryption presets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#preset_speke_20_video MediapackagePackagingConfiguration#preset_speke_20_video}

---

### MediapackagePackagingConfigurationCmafPackageHlsManifests <a name="MediapackagePackagingConfigurationCmafPackageHlsManifests" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifests.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackagingconfiguration"

&mediapackagepackagingconfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifests {
	AdMarkers: *string,
	IncludeIframeOnlyStream: interface{},
	ManifestName: *string,
	ProgramDateTimeIntervalSeconds: *f64,
	RepeatExtXKey: interface{},
	StreamSelection: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifests.property.adMarkers">AdMarkers</a></code> | <code>*string</code> | This setting controls how ad markers are included in the packaged OriginEndpoint. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifests.property.includeIframeOnlyStream">IncludeIframeOnlyStream</a></code> | <code>interface{}</code> | When enabled, an I-Frame only stream will be included in the output. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifests.property.manifestName">ManifestName</a></code> | <code>*string</code> | An optional string to include in the name of the manifest. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifests.property.programDateTimeIntervalSeconds">ProgramDateTimeIntervalSeconds</a></code> | <code>*f64</code> | The interval (in seconds) between each EXT-X-PROGRAM-DATE-TIME tag inserted into manifests. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifests.property.repeatExtXKey">RepeatExtXKey</a></code> | <code>interface{}</code> | When enabled, the EXT-X-KEY tag will be repeated in output manifests. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifests.property.streamSelection">StreamSelection</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection">MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection</a></code> | A StreamSelection configuration. |

---

##### `AdMarkers`<sup>Optional</sup> <a name="AdMarkers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifests.property.adMarkers"></a>

```go
AdMarkers *string
```

- *Type:* *string

This setting controls how ad markers are included in the packaged OriginEndpoint.

"NONE" will omit all SCTE-35 ad markers from the output. "PASSTHROUGH" causes the manifest to contain a copy of the SCTE-35 ad markers (comments) taken directly from the input HTTP Live Streaming (HLS) manifest. "SCTE35_ENHANCED" generates ad markers and blackout tags based on SCTE-35 messages in the input source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#ad_markers MediapackagePackagingConfiguration#ad_markers}

---

##### `IncludeIframeOnlyStream`<sup>Optional</sup> <a name="IncludeIframeOnlyStream" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifests.property.includeIframeOnlyStream"></a>

```go
IncludeIframeOnlyStream interface{}
```

- *Type:* interface{}

When enabled, an I-Frame only stream will be included in the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#include_iframe_only_stream MediapackagePackagingConfiguration#include_iframe_only_stream}

---

##### `ManifestName`<sup>Optional</sup> <a name="ManifestName" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifests.property.manifestName"></a>

```go
ManifestName *string
```

- *Type:* *string

An optional string to include in the name of the manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#manifest_name MediapackagePackagingConfiguration#manifest_name}

---

##### `ProgramDateTimeIntervalSeconds`<sup>Optional</sup> <a name="ProgramDateTimeIntervalSeconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifests.property.programDateTimeIntervalSeconds"></a>

```go
ProgramDateTimeIntervalSeconds *f64
```

- *Type:* *f64

The interval (in seconds) between each EXT-X-PROGRAM-DATE-TIME tag inserted into manifests.

Additionally, when an interval is specified ID3Timed Metadata messages will be generated every 5 seconds using the ingest time of the content. If the interval is not specified, or set to 0, then no EXT-X-PROGRAM-DATE-TIME tags will be inserted into manifests and no ID3Timed Metadata messages will be generated. Note that irrespective of this parameter, if any ID3 Timed Metadata is found in HTTP Live Streaming (HLS) input, it will be passed through to HLS output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#program_date_time_interval_seconds MediapackagePackagingConfiguration#program_date_time_interval_seconds}

---

##### `RepeatExtXKey`<sup>Optional</sup> <a name="RepeatExtXKey" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifests.property.repeatExtXKey"></a>

```go
RepeatExtXKey interface{}
```

- *Type:* interface{}

When enabled, the EXT-X-KEY tag will be repeated in output manifests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#repeat_ext_x_key MediapackagePackagingConfiguration#repeat_ext_x_key}

---

##### `StreamSelection`<sup>Optional</sup> <a name="StreamSelection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifests.property.streamSelection"></a>

```go
StreamSelection MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection">MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection</a>

A StreamSelection configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#stream_selection MediapackagePackagingConfiguration#stream_selection}

---

### MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection <a name="MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackagingconfiguration"

&mediapackagepackagingconfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection {
	MaxVideoBitsPerSecond: *f64,
	MinVideoBitsPerSecond: *f64,
	StreamOrder: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection.property.maxVideoBitsPerSecond">MaxVideoBitsPerSecond</a></code> | <code>*f64</code> | The maximum video bitrate (bps) to include in output. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection.property.minVideoBitsPerSecond">MinVideoBitsPerSecond</a></code> | <code>*f64</code> | The minimum video bitrate (bps) to include in output. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection.property.streamOrder">StreamOrder</a></code> | <code>*string</code> | A directive that determines the order of streams in the output. |

---

##### `MaxVideoBitsPerSecond`<sup>Optional</sup> <a name="MaxVideoBitsPerSecond" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection.property.maxVideoBitsPerSecond"></a>

```go
MaxVideoBitsPerSecond *f64
```

- *Type:* *f64

The maximum video bitrate (bps) to include in output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#max_video_bits_per_second MediapackagePackagingConfiguration#max_video_bits_per_second}

---

##### `MinVideoBitsPerSecond`<sup>Optional</sup> <a name="MinVideoBitsPerSecond" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection.property.minVideoBitsPerSecond"></a>

```go
MinVideoBitsPerSecond *f64
```

- *Type:* *f64

The minimum video bitrate (bps) to include in output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#min_video_bits_per_second MediapackagePackagingConfiguration#min_video_bits_per_second}

---

##### `StreamOrder`<sup>Optional</sup> <a name="StreamOrder" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection.property.streamOrder"></a>

```go
StreamOrder *string
```

- *Type:* *string

A directive that determines the order of streams in the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#stream_order MediapackagePackagingConfiguration#stream_order}

---

### MediapackagePackagingConfigurationConfig <a name="MediapackagePackagingConfigurationConfig" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackagingconfiguration"

&mediapackagepackagingconfiguration.MediapackagePackagingConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	PackagingConfigurationId: *string,
	PackagingGroupId: *string,
	CmafPackage: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackage,
	DashPackage: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage,
	HlsPackage: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackage,
	MssPackage: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackage,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.packagingConfigurationId">PackagingConfigurationId</a></code> | <code>*string</code> | The ID of the PackagingConfiguration. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.packagingGroupId">PackagingGroupId</a></code> | <code>*string</code> | The ID of a PackagingGroup. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.cmafPackage">CmafPackage</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackage">MediapackagePackagingConfigurationCmafPackage</a></code> | A CMAF packaging configuration. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.dashPackage">DashPackage</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage">MediapackagePackagingConfigurationDashPackage</a></code> | A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.hlsPackage">HlsPackage</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackage">MediapackagePackagingConfigurationHlsPackage</a></code> | An HTTP Live Streaming (HLS) packaging configuration. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.mssPackage">MssPackage</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackage">MediapackagePackagingConfigurationMssPackage</a></code> | A Microsoft Smooth Streaming (MSS) PackagingConfiguration. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.tags">Tags</a></code> | <code>interface{}</code> | A collection of tags associated with a resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PackagingConfigurationId`<sup>Required</sup> <a name="PackagingConfigurationId" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.packagingConfigurationId"></a>

```go
PackagingConfigurationId *string
```

- *Type:* *string

The ID of the PackagingConfiguration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#packaging_configuration_id MediapackagePackagingConfiguration#packaging_configuration_id}

---

##### `PackagingGroupId`<sup>Required</sup> <a name="PackagingGroupId" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.packagingGroupId"></a>

```go
PackagingGroupId *string
```

- *Type:* *string

The ID of a PackagingGroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#packaging_group_id MediapackagePackagingConfiguration#packaging_group_id}

---

##### `CmafPackage`<sup>Optional</sup> <a name="CmafPackage" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.cmafPackage"></a>

```go
CmafPackage MediapackagePackagingConfigurationCmafPackage
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackage">MediapackagePackagingConfigurationCmafPackage</a>

A CMAF packaging configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#cmaf_package MediapackagePackagingConfiguration#cmaf_package}

---

##### `DashPackage`<sup>Optional</sup> <a name="DashPackage" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.dashPackage"></a>

```go
DashPackage MediapackagePackagingConfigurationDashPackage
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage">MediapackagePackagingConfigurationDashPackage</a>

A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#dash_package MediapackagePackagingConfiguration#dash_package}

---

##### `HlsPackage`<sup>Optional</sup> <a name="HlsPackage" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.hlsPackage"></a>

```go
HlsPackage MediapackagePackagingConfigurationHlsPackage
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackage">MediapackagePackagingConfigurationHlsPackage</a>

An HTTP Live Streaming (HLS) packaging configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#hls_package MediapackagePackagingConfiguration#hls_package}

---

##### `MssPackage`<sup>Optional</sup> <a name="MssPackage" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.mssPackage"></a>

```go
MssPackage MediapackagePackagingConfigurationMssPackage
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackage">MediapackagePackagingConfigurationMssPackage</a>

A Microsoft Smooth Streaming (MSS) PackagingConfiguration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#mss_package MediapackagePackagingConfiguration#mss_package}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

A collection of tags associated with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#tags MediapackagePackagingConfiguration#tags}

---

### MediapackagePackagingConfigurationDashPackage <a name="MediapackagePackagingConfigurationDashPackage" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackagingconfiguration"

&mediapackagepackagingconfiguration.MediapackagePackagingConfigurationDashPackage {
	DashManifests: interface{},
	Encryption: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryption,
	IncludeEncoderConfigurationInSegments: interface{},
	IncludeIframeOnlyStream: interface{},
	PeriodTriggers: *[]*string,
	SegmentDurationSeconds: *f64,
	SegmentTemplateFormat: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage.property.dashManifests">DashManifests</a></code> | <code>interface{}</code> | A list of DASH manifest configurations. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage.property.encryption">Encryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryption">MediapackagePackagingConfigurationDashPackageEncryption</a></code> | A Dynamic Adaptive Streaming over HTTP (DASH) encryption configuration. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage.property.includeEncoderConfigurationInSegments">IncludeEncoderConfigurationInSegments</a></code> | <code>interface{}</code> | When includeEncoderConfigurationInSegments is set to true, MediaPackage places your encoder's Sequence Parameter Set (SPS), Picture Parameter Set (PPS), and Video Parameter Set (VPS) metadata in every video segment instead of in the init fragment. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage.property.includeIframeOnlyStream">IncludeIframeOnlyStream</a></code> | <code>interface{}</code> | When enabled, an I-Frame only stream will be included in the output. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage.property.periodTriggers">PeriodTriggers</a></code> | <code>*[]*string</code> | A list of triggers that controls when the outgoing Dynamic Adaptive Streaming over HTTP (DASH) Media Presentation Description (MPD) will be partitioned into multiple periods. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage.property.segmentDurationSeconds">SegmentDurationSeconds</a></code> | <code>*f64</code> | Duration (in seconds) of each fragment. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage.property.segmentTemplateFormat">SegmentTemplateFormat</a></code> | <code>*string</code> | Determines the type of SegmentTemplate included in the Media Presentation Description (MPD). |

---

##### `DashManifests`<sup>Optional</sup> <a name="DashManifests" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage.property.dashManifests"></a>

```go
DashManifests interface{}
```

- *Type:* interface{}

A list of DASH manifest configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#dash_manifests MediapackagePackagingConfiguration#dash_manifests}

---

##### `Encryption`<sup>Optional</sup> <a name="Encryption" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage.property.encryption"></a>

```go
Encryption MediapackagePackagingConfigurationDashPackageEncryption
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryption">MediapackagePackagingConfigurationDashPackageEncryption</a>

A Dynamic Adaptive Streaming over HTTP (DASH) encryption configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#encryption MediapackagePackagingConfiguration#encryption}

---

##### `IncludeEncoderConfigurationInSegments`<sup>Optional</sup> <a name="IncludeEncoderConfigurationInSegments" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage.property.includeEncoderConfigurationInSegments"></a>

```go
IncludeEncoderConfigurationInSegments interface{}
```

- *Type:* interface{}

When includeEncoderConfigurationInSegments is set to true, MediaPackage places your encoder's Sequence Parameter Set (SPS), Picture Parameter Set (PPS), and Video Parameter Set (VPS) metadata in every video segment instead of in the init fragment.

This lets you use different SPS/PPS/VPS settings for your assets during content playback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#include_encoder_configuration_in_segments MediapackagePackagingConfiguration#include_encoder_configuration_in_segments}

---

##### `IncludeIframeOnlyStream`<sup>Optional</sup> <a name="IncludeIframeOnlyStream" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage.property.includeIframeOnlyStream"></a>

```go
IncludeIframeOnlyStream interface{}
```

- *Type:* interface{}

When enabled, an I-Frame only stream will be included in the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#include_iframe_only_stream MediapackagePackagingConfiguration#include_iframe_only_stream}

---

##### `PeriodTriggers`<sup>Optional</sup> <a name="PeriodTriggers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage.property.periodTriggers"></a>

```go
PeriodTriggers *[]*string
```

- *Type:* *[]*string

A list of triggers that controls when the outgoing Dynamic Adaptive Streaming over HTTP (DASH) Media Presentation Description (MPD) will be partitioned into multiple periods.

If empty, the content will not be partitioned into more than one period. If the list contains "ADS", new periods will be created where the Asset contains SCTE-35 ad markers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#period_triggers MediapackagePackagingConfiguration#period_triggers}

---

##### `SegmentDurationSeconds`<sup>Optional</sup> <a name="SegmentDurationSeconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage.property.segmentDurationSeconds"></a>

```go
SegmentDurationSeconds *f64
```

- *Type:* *f64

Duration (in seconds) of each fragment.

Actual fragments will be rounded to the nearest multiple of the source fragment duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#segment_duration_seconds MediapackagePackagingConfiguration#segment_duration_seconds}

---

##### `SegmentTemplateFormat`<sup>Optional</sup> <a name="SegmentTemplateFormat" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage.property.segmentTemplateFormat"></a>

```go
SegmentTemplateFormat *string
```

- *Type:* *string

Determines the type of SegmentTemplate included in the Media Presentation Description (MPD).

When set to NUMBER_WITH_TIMELINE, a full timeline is presented in each SegmentTemplate, with $Number$ media URLs. When set to TIME_WITH_TIMELINE, a full timeline is presented in each SegmentTemplate, with $Time$ media URLs. When set to NUMBER_WITH_DURATION, only a duration is included in each SegmentTemplate, with $Number$ media URLs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#segment_template_format MediapackagePackagingConfiguration#segment_template_format}

---

### MediapackagePackagingConfigurationDashPackageDashManifests <a name="MediapackagePackagingConfigurationDashPackageDashManifests" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifests.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackagingconfiguration"

&mediapackagepackagingconfiguration.MediapackagePackagingConfigurationDashPackageDashManifests {
	ManifestLayout: *string,
	ManifestName: *string,
	MinBufferTimeSeconds: *f64,
	Profile: *string,
	ScteMarkersSource: *string,
	StreamSelection: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifests.property.manifestLayout">ManifestLayout</a></code> | <code>*string</code> | Determines the position of some tags in the Media Presentation Description (MPD). |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifests.property.manifestName">ManifestName</a></code> | <code>*string</code> | An optional string to include in the name of the manifest. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifests.property.minBufferTimeSeconds">MinBufferTimeSeconds</a></code> | <code>*f64</code> | Minimum duration (in seconds) that a player will buffer media before starting the presentation. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifests.property.profile">Profile</a></code> | <code>*string</code> | The Dynamic Adaptive Streaming over HTTP (DASH) profile type. When set to "HBBTV_1_5", HbbTV 1.5 compliant output is enabled. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifests.property.scteMarkersSource">ScteMarkersSource</a></code> | <code>*string</code> | The source of scte markers used. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifests.property.streamSelection">StreamSelection</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection">MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection</a></code> | A StreamSelection configuration. |

---

##### `ManifestLayout`<sup>Optional</sup> <a name="ManifestLayout" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifests.property.manifestLayout"></a>

```go
ManifestLayout *string
```

- *Type:* *string

Determines the position of some tags in the Media Presentation Description (MPD).

When set to FULL, elements like SegmentTemplate and ContentProtection are included in each Representation. When set to COMPACT, duplicate elements are combined and presented at the AdaptationSet level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#manifest_layout MediapackagePackagingConfiguration#manifest_layout}

---

##### `ManifestName`<sup>Optional</sup> <a name="ManifestName" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifests.property.manifestName"></a>

```go
ManifestName *string
```

- *Type:* *string

An optional string to include in the name of the manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#manifest_name MediapackagePackagingConfiguration#manifest_name}

---

##### `MinBufferTimeSeconds`<sup>Optional</sup> <a name="MinBufferTimeSeconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifests.property.minBufferTimeSeconds"></a>

```go
MinBufferTimeSeconds *f64
```

- *Type:* *f64

Minimum duration (in seconds) that a player will buffer media before starting the presentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#min_buffer_time_seconds MediapackagePackagingConfiguration#min_buffer_time_seconds}

---

##### `Profile`<sup>Optional</sup> <a name="Profile" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifests.property.profile"></a>

```go
Profile *string
```

- *Type:* *string

The Dynamic Adaptive Streaming over HTTP (DASH) profile type. When set to "HBBTV_1_5", HbbTV 1.5 compliant output is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#profile MediapackagePackagingConfiguration#profile}

---

##### `ScteMarkersSource`<sup>Optional</sup> <a name="ScteMarkersSource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifests.property.scteMarkersSource"></a>

```go
ScteMarkersSource *string
```

- *Type:* *string

The source of scte markers used.

When set to SEGMENTS, the scte markers are sourced from the segments of the ingested content. When set to MANIFEST, the scte markers are sourced from the manifest of the ingested content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#scte_markers_source MediapackagePackagingConfiguration#scte_markers_source}

---

##### `StreamSelection`<sup>Optional</sup> <a name="StreamSelection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifests.property.streamSelection"></a>

```go
StreamSelection MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection">MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection</a>

A StreamSelection configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#stream_selection MediapackagePackagingConfiguration#stream_selection}

---

### MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection <a name="MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackagingconfiguration"

&mediapackagepackagingconfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection {
	MaxVideoBitsPerSecond: *f64,
	MinVideoBitsPerSecond: *f64,
	StreamOrder: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection.property.maxVideoBitsPerSecond">MaxVideoBitsPerSecond</a></code> | <code>*f64</code> | The maximum video bitrate (bps) to include in output. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection.property.minVideoBitsPerSecond">MinVideoBitsPerSecond</a></code> | <code>*f64</code> | The minimum video bitrate (bps) to include in output. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection.property.streamOrder">StreamOrder</a></code> | <code>*string</code> | A directive that determines the order of streams in the output. |

---

##### `MaxVideoBitsPerSecond`<sup>Optional</sup> <a name="MaxVideoBitsPerSecond" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection.property.maxVideoBitsPerSecond"></a>

```go
MaxVideoBitsPerSecond *f64
```

- *Type:* *f64

The maximum video bitrate (bps) to include in output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#max_video_bits_per_second MediapackagePackagingConfiguration#max_video_bits_per_second}

---

##### `MinVideoBitsPerSecond`<sup>Optional</sup> <a name="MinVideoBitsPerSecond" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection.property.minVideoBitsPerSecond"></a>

```go
MinVideoBitsPerSecond *f64
```

- *Type:* *f64

The minimum video bitrate (bps) to include in output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#min_video_bits_per_second MediapackagePackagingConfiguration#min_video_bits_per_second}

---

##### `StreamOrder`<sup>Optional</sup> <a name="StreamOrder" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection.property.streamOrder"></a>

```go
StreamOrder *string
```

- *Type:* *string

A directive that determines the order of streams in the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#stream_order MediapackagePackagingConfiguration#stream_order}

---

### MediapackagePackagingConfigurationDashPackageEncryption <a name="MediapackagePackagingConfigurationDashPackageEncryption" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryption.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackagingconfiguration"

&mediapackagepackagingconfiguration.MediapackagePackagingConfigurationDashPackageEncryption {
	SpekeKeyProvider: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryption.property.spekeKeyProvider">SpekeKeyProvider</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider</a></code> | A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys. |

---

##### `SpekeKeyProvider`<sup>Optional</sup> <a name="SpekeKeyProvider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryption.property.spekeKeyProvider"></a>

```go
SpekeKeyProvider MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider</a>

A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#speke_key_provider MediapackagePackagingConfiguration#speke_key_provider}

---

### MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider <a name="MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackagingconfiguration"

&mediapackagepackagingconfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider {
	EncryptionContractConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration,
	RoleArn: *string,
	SystemIds: *[]*string,
	Url: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider.property.encryptionContractConfiguration">EncryptionContractConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a></code> | The configuration to use for encrypting one or more content tracks separately for endpoints that use SPEKE 2.0. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider.property.roleArn">RoleArn</a></code> | <code>*string</code> | An Amazon Resource Name (ARN) of an IAM role that AWS Elemental MediaPackage will assume when accessing the key provider service. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider.property.systemIds">SystemIds</a></code> | <code>*[]*string</code> | The system IDs to include in key requests. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider.property.url">Url</a></code> | <code>*string</code> | The URL of the external key provider service. |

---

##### `EncryptionContractConfiguration`<sup>Optional</sup> <a name="EncryptionContractConfiguration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider.property.encryptionContractConfiguration"></a>

```go
EncryptionContractConfiguration MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a>

The configuration to use for encrypting one or more content tracks separately for endpoints that use SPEKE 2.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#encryption_contract_configuration MediapackagePackagingConfiguration#encryption_contract_configuration}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

An Amazon Resource Name (ARN) of an IAM role that AWS Elemental MediaPackage will assume when accessing the key provider service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#role_arn MediapackagePackagingConfiguration#role_arn}

---

##### `SystemIds`<sup>Optional</sup> <a name="SystemIds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider.property.systemIds"></a>

```go
SystemIds *[]*string
```

- *Type:* *[]*string

The system IDs to include in key requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#system_ids MediapackagePackagingConfiguration#system_ids}

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider.property.url"></a>

```go
Url *string
```

- *Type:* *string

The URL of the external key provider service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#url MediapackagePackagingConfiguration#url}

---

### MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration <a name="MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackagingconfiguration"

&mediapackagepackagingconfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration {
	PresetSpeke20Audio: *string,
	PresetSpeke20Video: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.property.presetSpeke20Audio">PresetSpeke20Audio</a></code> | <code>*string</code> | A collection of audio encryption presets. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.property.presetSpeke20Video">PresetSpeke20Video</a></code> | <code>*string</code> | A collection of video encryption presets. |

---

##### `PresetSpeke20Audio`<sup>Optional</sup> <a name="PresetSpeke20Audio" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.property.presetSpeke20Audio"></a>

```go
PresetSpeke20Audio *string
```

- *Type:* *string

A collection of audio encryption presets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#preset_speke_20_audio MediapackagePackagingConfiguration#preset_speke_20_audio}

---

##### `PresetSpeke20Video`<sup>Optional</sup> <a name="PresetSpeke20Video" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.property.presetSpeke20Video"></a>

```go
PresetSpeke20Video *string
```

- *Type:* *string

A collection of video encryption presets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#preset_speke_20_video MediapackagePackagingConfiguration#preset_speke_20_video}

---

### MediapackagePackagingConfigurationHlsPackage <a name="MediapackagePackagingConfigurationHlsPackage" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackage.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackagingconfiguration"

&mediapackagepackagingconfiguration.MediapackagePackagingConfigurationHlsPackage {
	Encryption: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryption,
	HlsManifests: interface{},
	IncludeDvbSubtitles: interface{},
	SegmentDurationSeconds: *f64,
	UseAudioRenditionGroup: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackage.property.encryption">Encryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryption">MediapackagePackagingConfigurationHlsPackageEncryption</a></code> | An HTTP Live Streaming (HLS) encryption configuration. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackage.property.hlsManifests">HlsManifests</a></code> | <code>interface{}</code> | A list of HLS manifest configurations. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackage.property.includeDvbSubtitles">IncludeDvbSubtitles</a></code> | <code>interface{}</code> | When enabled, MediaPackage passes through digital video broadcasting (DVB) subtitles into the output. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackage.property.segmentDurationSeconds">SegmentDurationSeconds</a></code> | <code>*f64</code> | Duration (in seconds) of each fragment. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackage.property.useAudioRenditionGroup">UseAudioRenditionGroup</a></code> | <code>interface{}</code> | When enabled, audio streams will be placed in rendition groups in the output. |

---

##### `Encryption`<sup>Optional</sup> <a name="Encryption" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackage.property.encryption"></a>

```go
Encryption MediapackagePackagingConfigurationHlsPackageEncryption
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryption">MediapackagePackagingConfigurationHlsPackageEncryption</a>

An HTTP Live Streaming (HLS) encryption configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#encryption MediapackagePackagingConfiguration#encryption}

---

##### `HlsManifests`<sup>Optional</sup> <a name="HlsManifests" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackage.property.hlsManifests"></a>

```go
HlsManifests interface{}
```

- *Type:* interface{}

A list of HLS manifest configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#hls_manifests MediapackagePackagingConfiguration#hls_manifests}

---

##### `IncludeDvbSubtitles`<sup>Optional</sup> <a name="IncludeDvbSubtitles" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackage.property.includeDvbSubtitles"></a>

```go
IncludeDvbSubtitles interface{}
```

- *Type:* interface{}

When enabled, MediaPackage passes through digital video broadcasting (DVB) subtitles into the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#include_dvb_subtitles MediapackagePackagingConfiguration#include_dvb_subtitles}

---

##### `SegmentDurationSeconds`<sup>Optional</sup> <a name="SegmentDurationSeconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackage.property.segmentDurationSeconds"></a>

```go
SegmentDurationSeconds *f64
```

- *Type:* *f64

Duration (in seconds) of each fragment.

Actual fragments will be rounded to the nearest multiple of the source fragment duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#segment_duration_seconds MediapackagePackagingConfiguration#segment_duration_seconds}

---

##### `UseAudioRenditionGroup`<sup>Optional</sup> <a name="UseAudioRenditionGroup" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackage.property.useAudioRenditionGroup"></a>

```go
UseAudioRenditionGroup interface{}
```

- *Type:* interface{}

When enabled, audio streams will be placed in rendition groups in the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#use_audio_rendition_group MediapackagePackagingConfiguration#use_audio_rendition_group}

---

### MediapackagePackagingConfigurationHlsPackageEncryption <a name="MediapackagePackagingConfigurationHlsPackageEncryption" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryption.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackagingconfiguration"

&mediapackagepackagingconfiguration.MediapackagePackagingConfigurationHlsPackageEncryption {
	ConstantInitializationVector: *string,
	EncryptionMethod: *string,
	SpekeKeyProvider: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryption.property.constantInitializationVector">ConstantInitializationVector</a></code> | <code>*string</code> | An HTTP Live Streaming (HLS) encryption configuration. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryption.property.encryptionMethod">EncryptionMethod</a></code> | <code>*string</code> | The encryption method to use. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryption.property.spekeKeyProvider">SpekeKeyProvider</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider</a></code> | A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys. |

---

##### `ConstantInitializationVector`<sup>Optional</sup> <a name="ConstantInitializationVector" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryption.property.constantInitializationVector"></a>

```go
ConstantInitializationVector *string
```

- *Type:* *string

An HTTP Live Streaming (HLS) encryption configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#constant_initialization_vector MediapackagePackagingConfiguration#constant_initialization_vector}

---

##### `EncryptionMethod`<sup>Optional</sup> <a name="EncryptionMethod" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryption.property.encryptionMethod"></a>

```go
EncryptionMethod *string
```

- *Type:* *string

The encryption method to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#encryption_method MediapackagePackagingConfiguration#encryption_method}

---

##### `SpekeKeyProvider`<sup>Optional</sup> <a name="SpekeKeyProvider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryption.property.spekeKeyProvider"></a>

```go
SpekeKeyProvider MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider</a>

A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#speke_key_provider MediapackagePackagingConfiguration#speke_key_provider}

---

### MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider <a name="MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackagingconfiguration"

&mediapackagepackagingconfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider {
	EncryptionContractConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration,
	RoleArn: *string,
	SystemIds: *[]*string,
	Url: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider.property.encryptionContractConfiguration">EncryptionContractConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a></code> | The configuration to use for encrypting one or more content tracks separately for endpoints that use SPEKE 2.0. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider.property.roleArn">RoleArn</a></code> | <code>*string</code> | An Amazon Resource Name (ARN) of an IAM role that AWS Elemental MediaPackage will assume when accessing the key provider service. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider.property.systemIds">SystemIds</a></code> | <code>*[]*string</code> | The system IDs to include in key requests. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider.property.url">Url</a></code> | <code>*string</code> | The URL of the external key provider service. |

---

##### `EncryptionContractConfiguration`<sup>Optional</sup> <a name="EncryptionContractConfiguration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider.property.encryptionContractConfiguration"></a>

```go
EncryptionContractConfiguration MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a>

The configuration to use for encrypting one or more content tracks separately for endpoints that use SPEKE 2.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#encryption_contract_configuration MediapackagePackagingConfiguration#encryption_contract_configuration}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

An Amazon Resource Name (ARN) of an IAM role that AWS Elemental MediaPackage will assume when accessing the key provider service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#role_arn MediapackagePackagingConfiguration#role_arn}

---

##### `SystemIds`<sup>Optional</sup> <a name="SystemIds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider.property.systemIds"></a>

```go
SystemIds *[]*string
```

- *Type:* *[]*string

The system IDs to include in key requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#system_ids MediapackagePackagingConfiguration#system_ids}

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider.property.url"></a>

```go
Url *string
```

- *Type:* *string

The URL of the external key provider service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#url MediapackagePackagingConfiguration#url}

---

### MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration <a name="MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackagingconfiguration"

&mediapackagepackagingconfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration {
	PresetSpeke20Audio: *string,
	PresetSpeke20Video: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.property.presetSpeke20Audio">PresetSpeke20Audio</a></code> | <code>*string</code> | A collection of audio encryption presets. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.property.presetSpeke20Video">PresetSpeke20Video</a></code> | <code>*string</code> | A collection of video encryption presets. |

---

##### `PresetSpeke20Audio`<sup>Optional</sup> <a name="PresetSpeke20Audio" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.property.presetSpeke20Audio"></a>

```go
PresetSpeke20Audio *string
```

- *Type:* *string

A collection of audio encryption presets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#preset_speke_20_audio MediapackagePackagingConfiguration#preset_speke_20_audio}

---

##### `PresetSpeke20Video`<sup>Optional</sup> <a name="PresetSpeke20Video" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.property.presetSpeke20Video"></a>

```go
PresetSpeke20Video *string
```

- *Type:* *string

A collection of video encryption presets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#preset_speke_20_video MediapackagePackagingConfiguration#preset_speke_20_video}

---

### MediapackagePackagingConfigurationHlsPackageHlsManifests <a name="MediapackagePackagingConfigurationHlsPackageHlsManifests" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifests.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackagingconfiguration"

&mediapackagepackagingconfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifests {
	AdMarkers: *string,
	IncludeIframeOnlyStream: interface{},
	ManifestName: *string,
	ProgramDateTimeIntervalSeconds: *f64,
	RepeatExtXKey: interface{},
	StreamSelection: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifests.property.adMarkers">AdMarkers</a></code> | <code>*string</code> | This setting controls how ad markers are included in the packaged OriginEndpoint. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifests.property.includeIframeOnlyStream">IncludeIframeOnlyStream</a></code> | <code>interface{}</code> | When enabled, an I-Frame only stream will be included in the output. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifests.property.manifestName">ManifestName</a></code> | <code>*string</code> | An optional string to include in the name of the manifest. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifests.property.programDateTimeIntervalSeconds">ProgramDateTimeIntervalSeconds</a></code> | <code>*f64</code> | The interval (in seconds) between each EXT-X-PROGRAM-DATE-TIME tag inserted into manifests. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifests.property.repeatExtXKey">RepeatExtXKey</a></code> | <code>interface{}</code> | When enabled, the EXT-X-KEY tag will be repeated in output manifests. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifests.property.streamSelection">StreamSelection</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection">MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection</a></code> | A StreamSelection configuration. |

---

##### `AdMarkers`<sup>Optional</sup> <a name="AdMarkers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifests.property.adMarkers"></a>

```go
AdMarkers *string
```

- *Type:* *string

This setting controls how ad markers are included in the packaged OriginEndpoint.

"NONE" will omit all SCTE-35 ad markers from the output. "PASSTHROUGH" causes the manifest to contain a copy of the SCTE-35 ad markers (comments) taken directly from the input HTTP Live Streaming (HLS) manifest. "SCTE35_ENHANCED" generates ad markers and blackout tags based on SCTE-35 messages in the input source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#ad_markers MediapackagePackagingConfiguration#ad_markers}

---

##### `IncludeIframeOnlyStream`<sup>Optional</sup> <a name="IncludeIframeOnlyStream" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifests.property.includeIframeOnlyStream"></a>

```go
IncludeIframeOnlyStream interface{}
```

- *Type:* interface{}

When enabled, an I-Frame only stream will be included in the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#include_iframe_only_stream MediapackagePackagingConfiguration#include_iframe_only_stream}

---

##### `ManifestName`<sup>Optional</sup> <a name="ManifestName" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifests.property.manifestName"></a>

```go
ManifestName *string
```

- *Type:* *string

An optional string to include in the name of the manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#manifest_name MediapackagePackagingConfiguration#manifest_name}

---

##### `ProgramDateTimeIntervalSeconds`<sup>Optional</sup> <a name="ProgramDateTimeIntervalSeconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifests.property.programDateTimeIntervalSeconds"></a>

```go
ProgramDateTimeIntervalSeconds *f64
```

- *Type:* *f64

The interval (in seconds) between each EXT-X-PROGRAM-DATE-TIME tag inserted into manifests.

Additionally, when an interval is specified ID3Timed Metadata messages will be generated every 5 seconds using the ingest time of the content. If the interval is not specified, or set to 0, then no EXT-X-PROGRAM-DATE-TIME tags will be inserted into manifests and no ID3Timed Metadata messages will be generated. Note that irrespective of this parameter, if any ID3 Timed Metadata is found in HTTP Live Streaming (HLS) input, it will be passed through to HLS output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#program_date_time_interval_seconds MediapackagePackagingConfiguration#program_date_time_interval_seconds}

---

##### `RepeatExtXKey`<sup>Optional</sup> <a name="RepeatExtXKey" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifests.property.repeatExtXKey"></a>

```go
RepeatExtXKey interface{}
```

- *Type:* interface{}

When enabled, the EXT-X-KEY tag will be repeated in output manifests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#repeat_ext_x_key MediapackagePackagingConfiguration#repeat_ext_x_key}

---

##### `StreamSelection`<sup>Optional</sup> <a name="StreamSelection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifests.property.streamSelection"></a>

```go
StreamSelection MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection">MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection</a>

A StreamSelection configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#stream_selection MediapackagePackagingConfiguration#stream_selection}

---

### MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection <a name="MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackagingconfiguration"

&mediapackagepackagingconfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection {
	MaxVideoBitsPerSecond: *f64,
	MinVideoBitsPerSecond: *f64,
	StreamOrder: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection.property.maxVideoBitsPerSecond">MaxVideoBitsPerSecond</a></code> | <code>*f64</code> | The maximum video bitrate (bps) to include in output. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection.property.minVideoBitsPerSecond">MinVideoBitsPerSecond</a></code> | <code>*f64</code> | The minimum video bitrate (bps) to include in output. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection.property.streamOrder">StreamOrder</a></code> | <code>*string</code> | A directive that determines the order of streams in the output. |

---

##### `MaxVideoBitsPerSecond`<sup>Optional</sup> <a name="MaxVideoBitsPerSecond" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection.property.maxVideoBitsPerSecond"></a>

```go
MaxVideoBitsPerSecond *f64
```

- *Type:* *f64

The maximum video bitrate (bps) to include in output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#max_video_bits_per_second MediapackagePackagingConfiguration#max_video_bits_per_second}

---

##### `MinVideoBitsPerSecond`<sup>Optional</sup> <a name="MinVideoBitsPerSecond" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection.property.minVideoBitsPerSecond"></a>

```go
MinVideoBitsPerSecond *f64
```

- *Type:* *f64

The minimum video bitrate (bps) to include in output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#min_video_bits_per_second MediapackagePackagingConfiguration#min_video_bits_per_second}

---

##### `StreamOrder`<sup>Optional</sup> <a name="StreamOrder" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection.property.streamOrder"></a>

```go
StreamOrder *string
```

- *Type:* *string

A directive that determines the order of streams in the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#stream_order MediapackagePackagingConfiguration#stream_order}

---

### MediapackagePackagingConfigurationMssPackage <a name="MediapackagePackagingConfigurationMssPackage" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackage.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackagingconfiguration"

&mediapackagepackagingconfiguration.MediapackagePackagingConfigurationMssPackage {
	Encryption: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryption,
	MssManifests: interface{},
	SegmentDurationSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackage.property.encryption">Encryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryption">MediapackagePackagingConfigurationMssPackageEncryption</a></code> | A CMAF encryption configuration. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackage.property.mssManifests">MssManifests</a></code> | <code>interface{}</code> | A list of MSS manifest configurations. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackage.property.segmentDurationSeconds">SegmentDurationSeconds</a></code> | <code>*f64</code> | Duration (in seconds) of each fragment. |

---

##### `Encryption`<sup>Optional</sup> <a name="Encryption" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackage.property.encryption"></a>

```go
Encryption MediapackagePackagingConfigurationMssPackageEncryption
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryption">MediapackagePackagingConfigurationMssPackageEncryption</a>

A CMAF encryption configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#encryption MediapackagePackagingConfiguration#encryption}

---

##### `MssManifests`<sup>Optional</sup> <a name="MssManifests" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackage.property.mssManifests"></a>

```go
MssManifests interface{}
```

- *Type:* interface{}

A list of MSS manifest configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#mss_manifests MediapackagePackagingConfiguration#mss_manifests}

---

##### `SegmentDurationSeconds`<sup>Optional</sup> <a name="SegmentDurationSeconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackage.property.segmentDurationSeconds"></a>

```go
SegmentDurationSeconds *f64
```

- *Type:* *f64

Duration (in seconds) of each fragment.

Actual fragments will be rounded to the nearest multiple of the source fragment duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#segment_duration_seconds MediapackagePackagingConfiguration#segment_duration_seconds}

---

### MediapackagePackagingConfigurationMssPackageEncryption <a name="MediapackagePackagingConfigurationMssPackageEncryption" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryption.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackagingconfiguration"

&mediapackagepackagingconfiguration.MediapackagePackagingConfigurationMssPackageEncryption {
	SpekeKeyProvider: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryption.property.spekeKeyProvider">SpekeKeyProvider</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider</a></code> | A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys. |

---

##### `SpekeKeyProvider`<sup>Optional</sup> <a name="SpekeKeyProvider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryption.property.spekeKeyProvider"></a>

```go
SpekeKeyProvider MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider</a>

A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#speke_key_provider MediapackagePackagingConfiguration#speke_key_provider}

---

### MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider <a name="MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackagingconfiguration"

&mediapackagepackagingconfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider {
	EncryptionContractConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration,
	RoleArn: *string,
	SystemIds: *[]*string,
	Url: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider.property.encryptionContractConfiguration">EncryptionContractConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a></code> | The configuration to use for encrypting one or more content tracks separately for endpoints that use SPEKE 2.0. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider.property.roleArn">RoleArn</a></code> | <code>*string</code> | An Amazon Resource Name (ARN) of an IAM role that AWS Elemental MediaPackage will assume when accessing the key provider service. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider.property.systemIds">SystemIds</a></code> | <code>*[]*string</code> | The system IDs to include in key requests. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider.property.url">Url</a></code> | <code>*string</code> | The URL of the external key provider service. |

---

##### `EncryptionContractConfiguration`<sup>Optional</sup> <a name="EncryptionContractConfiguration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider.property.encryptionContractConfiguration"></a>

```go
EncryptionContractConfiguration MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a>

The configuration to use for encrypting one or more content tracks separately for endpoints that use SPEKE 2.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#encryption_contract_configuration MediapackagePackagingConfiguration#encryption_contract_configuration}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

An Amazon Resource Name (ARN) of an IAM role that AWS Elemental MediaPackage will assume when accessing the key provider service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#role_arn MediapackagePackagingConfiguration#role_arn}

---

##### `SystemIds`<sup>Optional</sup> <a name="SystemIds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider.property.systemIds"></a>

```go
SystemIds *[]*string
```

- *Type:* *[]*string

The system IDs to include in key requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#system_ids MediapackagePackagingConfiguration#system_ids}

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider.property.url"></a>

```go
Url *string
```

- *Type:* *string

The URL of the external key provider service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#url MediapackagePackagingConfiguration#url}

---

### MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration <a name="MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackagingconfiguration"

&mediapackagepackagingconfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration {
	PresetSpeke20Audio: *string,
	PresetSpeke20Video: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.property.presetSpeke20Audio">PresetSpeke20Audio</a></code> | <code>*string</code> | A collection of audio encryption presets. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.property.presetSpeke20Video">PresetSpeke20Video</a></code> | <code>*string</code> | A collection of video encryption presets. |

---

##### `PresetSpeke20Audio`<sup>Optional</sup> <a name="PresetSpeke20Audio" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.property.presetSpeke20Audio"></a>

```go
PresetSpeke20Audio *string
```

- *Type:* *string

A collection of audio encryption presets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#preset_speke_20_audio MediapackagePackagingConfiguration#preset_speke_20_audio}

---

##### `PresetSpeke20Video`<sup>Optional</sup> <a name="PresetSpeke20Video" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.property.presetSpeke20Video"></a>

```go
PresetSpeke20Video *string
```

- *Type:* *string

A collection of video encryption presets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#preset_speke_20_video MediapackagePackagingConfiguration#preset_speke_20_video}

---

### MediapackagePackagingConfigurationMssPackageMssManifests <a name="MediapackagePackagingConfigurationMssPackageMssManifests" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifests.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackagingconfiguration"

&mediapackagepackagingconfiguration.MediapackagePackagingConfigurationMssPackageMssManifests {
	ManifestName: *string,
	StreamSelection: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifests.property.manifestName">ManifestName</a></code> | <code>*string</code> | An optional string to include in the name of the manifest. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifests.property.streamSelection">StreamSelection</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection">MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection</a></code> | A StreamSelection configuration. |

---

##### `ManifestName`<sup>Optional</sup> <a name="ManifestName" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifests.property.manifestName"></a>

```go
ManifestName *string
```

- *Type:* *string

An optional string to include in the name of the manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#manifest_name MediapackagePackagingConfiguration#manifest_name}

---

##### `StreamSelection`<sup>Optional</sup> <a name="StreamSelection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifests.property.streamSelection"></a>

```go
StreamSelection MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection">MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection</a>

A StreamSelection configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#stream_selection MediapackagePackagingConfiguration#stream_selection}

---

### MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection <a name="MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackagingconfiguration"

&mediapackagepackagingconfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection {
	MaxVideoBitsPerSecond: *f64,
	MinVideoBitsPerSecond: *f64,
	StreamOrder: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection.property.maxVideoBitsPerSecond">MaxVideoBitsPerSecond</a></code> | <code>*f64</code> | The maximum video bitrate (bps) to include in output. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection.property.minVideoBitsPerSecond">MinVideoBitsPerSecond</a></code> | <code>*f64</code> | The minimum video bitrate (bps) to include in output. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection.property.streamOrder">StreamOrder</a></code> | <code>*string</code> | A directive that determines the order of streams in the output. |

---

##### `MaxVideoBitsPerSecond`<sup>Optional</sup> <a name="MaxVideoBitsPerSecond" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection.property.maxVideoBitsPerSecond"></a>

```go
MaxVideoBitsPerSecond *f64
```

- *Type:* *f64

The maximum video bitrate (bps) to include in output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#max_video_bits_per_second MediapackagePackagingConfiguration#max_video_bits_per_second}

---

##### `MinVideoBitsPerSecond`<sup>Optional</sup> <a name="MinVideoBitsPerSecond" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection.property.minVideoBitsPerSecond"></a>

```go
MinVideoBitsPerSecond *f64
```

- *Type:* *f64

The minimum video bitrate (bps) to include in output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#min_video_bits_per_second MediapackagePackagingConfiguration#min_video_bits_per_second}

---

##### `StreamOrder`<sup>Optional</sup> <a name="StreamOrder" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection.property.streamOrder"></a>

```go
StreamOrder *string
```

- *Type:* *string

A directive that determines the order of streams in the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#stream_order MediapackagePackagingConfiguration#stream_order}

---

### MediapackagePackagingConfigurationTags <a name="MediapackagePackagingConfigurationTags" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackagingconfiguration"

&mediapackagepackagingconfiguration.MediapackagePackagingConfigurationTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#key MediapackagePackagingConfiguration#key}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#value MediapackagePackagingConfiguration#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#key MediapackagePackagingConfiguration#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_packaging_configuration#value MediapackagePackagingConfiguration#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference <a name="MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackagingconfiguration"

mediapackagepackagingconfiguration.NewMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.putSpekeKeyProvider">PutSpekeKeyProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.resetSpekeKeyProvider">ResetSpekeKeyProvider</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSpekeKeyProvider` <a name="PutSpekeKeyProvider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.putSpekeKeyProvider"></a>

```go
func PutSpekeKeyProvider(value MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.putSpekeKeyProvider.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider</a>

---

##### `ResetSpekeKeyProvider` <a name="ResetSpekeKeyProvider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.resetSpekeKeyProvider"></a>

```go
func ResetSpekeKeyProvider()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.property.spekeKeyProvider">SpekeKeyProvider</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference">MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.property.spekeKeyProviderInput">SpekeKeyProviderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SpekeKeyProvider`<sup>Required</sup> <a name="SpekeKeyProvider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.property.spekeKeyProvider"></a>

```go
func SpekeKeyProvider() MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference">MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference</a>

---

##### `SpekeKeyProviderInput`<sup>Optional</sup> <a name="SpekeKeyProviderInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.property.spekeKeyProviderInput"></a>

```go
func SpekeKeyProviderInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference <a name="MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackagingconfiguration"

mediapackagepackagingconfiguration.NewMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resetPresetSpeke20Audio">ResetPresetSpeke20Audio</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resetPresetSpeke20Video">ResetPresetSpeke20Video</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPresetSpeke20Audio` <a name="ResetPresetSpeke20Audio" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resetPresetSpeke20Audio"></a>

```go
func ResetPresetSpeke20Audio()
```

##### `ResetPresetSpeke20Video` <a name="ResetPresetSpeke20Video" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resetPresetSpeke20Video"></a>

```go
func ResetPresetSpeke20Video()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20AudioInput">PresetSpeke20AudioInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20VideoInput">PresetSpeke20VideoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Audio">PresetSpeke20Audio</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Video">PresetSpeke20Video</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PresetSpeke20AudioInput`<sup>Optional</sup> <a name="PresetSpeke20AudioInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20AudioInput"></a>

```go
func PresetSpeke20AudioInput() *string
```

- *Type:* *string

---

##### `PresetSpeke20VideoInput`<sup>Optional</sup> <a name="PresetSpeke20VideoInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20VideoInput"></a>

```go
func PresetSpeke20VideoInput() *string
```

- *Type:* *string

---

##### `PresetSpeke20Audio`<sup>Required</sup> <a name="PresetSpeke20Audio" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Audio"></a>

```go
func PresetSpeke20Audio() *string
```

- *Type:* *string

---

##### `PresetSpeke20Video`<sup>Required</sup> <a name="PresetSpeke20Video" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Video"></a>

```go
func PresetSpeke20Video() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference <a name="MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackagingconfiguration"

mediapackagepackagingconfiguration.NewMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.putEncryptionContractConfiguration">PutEncryptionContractConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.resetEncryptionContractConfiguration">ResetEncryptionContractConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.resetSystemIds">ResetSystemIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEncryptionContractConfiguration` <a name="PutEncryptionContractConfiguration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.putEncryptionContractConfiguration"></a>

```go
func PutEncryptionContractConfiguration(value MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.putEncryptionContractConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a>

---

##### `ResetEncryptionContractConfiguration` <a name="ResetEncryptionContractConfiguration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.resetEncryptionContractConfiguration"></a>

```go
func ResetEncryptionContractConfiguration()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.resetRoleArn"></a>

```go
func ResetRoleArn()
```

##### `ResetSystemIds` <a name="ResetSystemIds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.resetSystemIds"></a>

```go
func ResetSystemIds()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.resetUrl"></a>

```go
func ResetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfiguration">EncryptionContractConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference">MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfigurationInput">EncryptionContractConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.systemIdsInput">SystemIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.systemIds">SystemIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionContractConfiguration`<sup>Required</sup> <a name="EncryptionContractConfiguration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfiguration"></a>

```go
func EncryptionContractConfiguration() MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference">MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference</a>

---

##### `EncryptionContractConfigurationInput`<sup>Optional</sup> <a name="EncryptionContractConfigurationInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfigurationInput"></a>

```go
func EncryptionContractConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `SystemIdsInput`<sup>Optional</sup> <a name="SystemIdsInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.systemIdsInput"></a>

```go
func SystemIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `SystemIds`<sup>Required</sup> <a name="SystemIds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.systemIds"></a>

```go
func SystemIds() *[]*string
```

- *Type:* *[]*string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediapackagePackagingConfigurationCmafPackageHlsManifestsList <a name="MediapackagePackagingConfigurationCmafPackageHlsManifestsList" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackagingconfiguration"

mediapackagepackagingconfiguration.NewMediapackagePackagingConfigurationCmafPackageHlsManifestsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MediapackagePackagingConfigurationCmafPackageHlsManifestsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.get"></a>

```go
func Get(index *f64) MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference <a name="MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackagingconfiguration"

mediapackagepackagingconfiguration.NewMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.putStreamSelection">PutStreamSelection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.resetAdMarkers">ResetAdMarkers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.resetIncludeIframeOnlyStream">ResetIncludeIframeOnlyStream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.resetManifestName">ResetManifestName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.resetProgramDateTimeIntervalSeconds">ResetProgramDateTimeIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.resetRepeatExtXKey">ResetRepeatExtXKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.resetStreamSelection">ResetStreamSelection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStreamSelection` <a name="PutStreamSelection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.putStreamSelection"></a>

```go
func PutStreamSelection(value MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.putStreamSelection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection">MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection</a>

---

##### `ResetAdMarkers` <a name="ResetAdMarkers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.resetAdMarkers"></a>

```go
func ResetAdMarkers()
```

##### `ResetIncludeIframeOnlyStream` <a name="ResetIncludeIframeOnlyStream" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.resetIncludeIframeOnlyStream"></a>

```go
func ResetIncludeIframeOnlyStream()
```

##### `ResetManifestName` <a name="ResetManifestName" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.resetManifestName"></a>

```go
func ResetManifestName()
```

##### `ResetProgramDateTimeIntervalSeconds` <a name="ResetProgramDateTimeIntervalSeconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.resetProgramDateTimeIntervalSeconds"></a>

```go
func ResetProgramDateTimeIntervalSeconds()
```

##### `ResetRepeatExtXKey` <a name="ResetRepeatExtXKey" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.resetRepeatExtXKey"></a>

```go
func ResetRepeatExtXKey()
```

##### `ResetStreamSelection` <a name="ResetStreamSelection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.resetStreamSelection"></a>

```go
func ResetStreamSelection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.streamSelection">StreamSelection</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference">MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.adMarkersInput">AdMarkersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.includeIframeOnlyStreamInput">IncludeIframeOnlyStreamInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.manifestNameInput">ManifestNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.programDateTimeIntervalSecondsInput">ProgramDateTimeIntervalSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.repeatExtXKeyInput">RepeatExtXKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.streamSelectionInput">StreamSelectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.adMarkers">AdMarkers</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.includeIframeOnlyStream">IncludeIframeOnlyStream</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.manifestName">ManifestName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.programDateTimeIntervalSeconds">ProgramDateTimeIntervalSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.repeatExtXKey">RepeatExtXKey</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StreamSelection`<sup>Required</sup> <a name="StreamSelection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.streamSelection"></a>

```go
func StreamSelection() MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference">MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference</a>

---

##### `AdMarkersInput`<sup>Optional</sup> <a name="AdMarkersInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.adMarkersInput"></a>

```go
func AdMarkersInput() *string
```

- *Type:* *string

---

##### `IncludeIframeOnlyStreamInput`<sup>Optional</sup> <a name="IncludeIframeOnlyStreamInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.includeIframeOnlyStreamInput"></a>

```go
func IncludeIframeOnlyStreamInput() interface{}
```

- *Type:* interface{}

---

##### `ManifestNameInput`<sup>Optional</sup> <a name="ManifestNameInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.manifestNameInput"></a>

```go
func ManifestNameInput() *string
```

- *Type:* *string

---

##### `ProgramDateTimeIntervalSecondsInput`<sup>Optional</sup> <a name="ProgramDateTimeIntervalSecondsInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.programDateTimeIntervalSecondsInput"></a>

```go
func ProgramDateTimeIntervalSecondsInput() *f64
```

- *Type:* *f64

---

##### `RepeatExtXKeyInput`<sup>Optional</sup> <a name="RepeatExtXKeyInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.repeatExtXKeyInput"></a>

```go
func RepeatExtXKeyInput() interface{}
```

- *Type:* interface{}

---

##### `StreamSelectionInput`<sup>Optional</sup> <a name="StreamSelectionInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.streamSelectionInput"></a>

```go
func StreamSelectionInput() interface{}
```

- *Type:* interface{}

---

##### `AdMarkers`<sup>Required</sup> <a name="AdMarkers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.adMarkers"></a>

```go
func AdMarkers() *string
```

- *Type:* *string

---

##### `IncludeIframeOnlyStream`<sup>Required</sup> <a name="IncludeIframeOnlyStream" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.includeIframeOnlyStream"></a>

```go
func IncludeIframeOnlyStream() interface{}
```

- *Type:* interface{}

---

##### `ManifestName`<sup>Required</sup> <a name="ManifestName" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.manifestName"></a>

```go
func ManifestName() *string
```

- *Type:* *string

---

##### `ProgramDateTimeIntervalSeconds`<sup>Required</sup> <a name="ProgramDateTimeIntervalSeconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.programDateTimeIntervalSeconds"></a>

```go
func ProgramDateTimeIntervalSeconds() *f64
```

- *Type:* *f64

---

##### `RepeatExtXKey`<sup>Required</sup> <a name="RepeatExtXKey" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.repeatExtXKey"></a>

```go
func RepeatExtXKey() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference <a name="MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackagingconfiguration"

mediapackagepackagingconfiguration.NewMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.resetMaxVideoBitsPerSecond">ResetMaxVideoBitsPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.resetMinVideoBitsPerSecond">ResetMinVideoBitsPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.resetStreamOrder">ResetStreamOrder</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxVideoBitsPerSecond` <a name="ResetMaxVideoBitsPerSecond" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.resetMaxVideoBitsPerSecond"></a>

```go
func ResetMaxVideoBitsPerSecond()
```

##### `ResetMinVideoBitsPerSecond` <a name="ResetMinVideoBitsPerSecond" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.resetMinVideoBitsPerSecond"></a>

```go
func ResetMinVideoBitsPerSecond()
```

##### `ResetStreamOrder` <a name="ResetStreamOrder" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.resetStreamOrder"></a>

```go
func ResetStreamOrder()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecondInput">MaxVideoBitsPerSecondInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecondInput">MinVideoBitsPerSecondInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.streamOrderInput">StreamOrderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecond">MaxVideoBitsPerSecond</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecond">MinVideoBitsPerSecond</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.streamOrder">StreamOrder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxVideoBitsPerSecondInput`<sup>Optional</sup> <a name="MaxVideoBitsPerSecondInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecondInput"></a>

```go
func MaxVideoBitsPerSecondInput() *f64
```

- *Type:* *f64

---

##### `MinVideoBitsPerSecondInput`<sup>Optional</sup> <a name="MinVideoBitsPerSecondInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecondInput"></a>

```go
func MinVideoBitsPerSecondInput() *f64
```

- *Type:* *f64

---

##### `StreamOrderInput`<sup>Optional</sup> <a name="StreamOrderInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.streamOrderInput"></a>

```go
func StreamOrderInput() *string
```

- *Type:* *string

---

##### `MaxVideoBitsPerSecond`<sup>Required</sup> <a name="MaxVideoBitsPerSecond" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecond"></a>

```go
func MaxVideoBitsPerSecond() *f64
```

- *Type:* *f64

---

##### `MinVideoBitsPerSecond`<sup>Required</sup> <a name="MinVideoBitsPerSecond" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecond"></a>

```go
func MinVideoBitsPerSecond() *f64
```

- *Type:* *f64

---

##### `StreamOrder`<sup>Required</sup> <a name="StreamOrder" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.streamOrder"></a>

```go
func StreamOrder() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediapackagePackagingConfigurationCmafPackageOutputReference <a name="MediapackagePackagingConfigurationCmafPackageOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackagingconfiguration"

mediapackagepackagingconfiguration.NewMediapackagePackagingConfigurationCmafPackageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediapackagePackagingConfigurationCmafPackageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.putEncryption">PutEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.putHlsManifests">PutHlsManifests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.resetEncryption">ResetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.resetHlsManifests">ResetHlsManifests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.resetIncludeEncoderConfigurationInSegments">ResetIncludeEncoderConfigurationInSegments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.resetSegmentDurationSeconds">ResetSegmentDurationSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEncryption` <a name="PutEncryption" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.putEncryption"></a>

```go
func PutEncryption(value MediapackagePackagingConfigurationCmafPackageEncryption)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.putEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryption">MediapackagePackagingConfigurationCmafPackageEncryption</a>

---

##### `PutHlsManifests` <a name="PutHlsManifests" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.putHlsManifests"></a>

```go
func PutHlsManifests(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.putHlsManifests.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEncryption` <a name="ResetEncryption" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.resetEncryption"></a>

```go
func ResetEncryption()
```

##### `ResetHlsManifests` <a name="ResetHlsManifests" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.resetHlsManifests"></a>

```go
func ResetHlsManifests()
```

##### `ResetIncludeEncoderConfigurationInSegments` <a name="ResetIncludeEncoderConfigurationInSegments" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.resetIncludeEncoderConfigurationInSegments"></a>

```go
func ResetIncludeEncoderConfigurationInSegments()
```

##### `ResetSegmentDurationSeconds` <a name="ResetSegmentDurationSeconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.resetSegmentDurationSeconds"></a>

```go
func ResetSegmentDurationSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.property.encryption">Encryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference">MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.property.hlsManifests">HlsManifests</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList">MediapackagePackagingConfigurationCmafPackageHlsManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.property.encryptionInput">EncryptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.property.hlsManifestsInput">HlsManifestsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.property.includeEncoderConfigurationInSegmentsInput">IncludeEncoderConfigurationInSegmentsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.property.segmentDurationSecondsInput">SegmentDurationSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.property.includeEncoderConfigurationInSegments">IncludeEncoderConfigurationInSegments</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.property.segmentDurationSeconds">SegmentDurationSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Encryption`<sup>Required</sup> <a name="Encryption" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.property.encryption"></a>

```go
func Encryption() MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference">MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference</a>

---

##### `HlsManifests`<sup>Required</sup> <a name="HlsManifests" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.property.hlsManifests"></a>

```go
func HlsManifests() MediapackagePackagingConfigurationCmafPackageHlsManifestsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList">MediapackagePackagingConfigurationCmafPackageHlsManifestsList</a>

---

##### `EncryptionInput`<sup>Optional</sup> <a name="EncryptionInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.property.encryptionInput"></a>

```go
func EncryptionInput() interface{}
```

- *Type:* interface{}

---

##### `HlsManifestsInput`<sup>Optional</sup> <a name="HlsManifestsInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.property.hlsManifestsInput"></a>

```go
func HlsManifestsInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeEncoderConfigurationInSegmentsInput`<sup>Optional</sup> <a name="IncludeEncoderConfigurationInSegmentsInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.property.includeEncoderConfigurationInSegmentsInput"></a>

```go
func IncludeEncoderConfigurationInSegmentsInput() interface{}
```

- *Type:* interface{}

---

##### `SegmentDurationSecondsInput`<sup>Optional</sup> <a name="SegmentDurationSecondsInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.property.segmentDurationSecondsInput"></a>

```go
func SegmentDurationSecondsInput() *f64
```

- *Type:* *f64

---

##### `IncludeEncoderConfigurationInSegments`<sup>Required</sup> <a name="IncludeEncoderConfigurationInSegments" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.property.includeEncoderConfigurationInSegments"></a>

```go
func IncludeEncoderConfigurationInSegments() interface{}
```

- *Type:* interface{}

---

##### `SegmentDurationSeconds`<sup>Required</sup> <a name="SegmentDurationSeconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.property.segmentDurationSeconds"></a>

```go
func SegmentDurationSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediapackagePackagingConfigurationDashPackageDashManifestsList <a name="MediapackagePackagingConfigurationDashPackageDashManifestsList" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackagingconfiguration"

mediapackagepackagingconfiguration.NewMediapackagePackagingConfigurationDashPackageDashManifestsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MediapackagePackagingConfigurationDashPackageDashManifestsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.get"></a>

```go
func Get(index *f64) MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference <a name="MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackagingconfiguration"

mediapackagepackagingconfiguration.NewMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.putStreamSelection">PutStreamSelection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.resetManifestLayout">ResetManifestLayout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.resetManifestName">ResetManifestName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.resetMinBufferTimeSeconds">ResetMinBufferTimeSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.resetProfile">ResetProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.resetScteMarkersSource">ResetScteMarkersSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.resetStreamSelection">ResetStreamSelection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStreamSelection` <a name="PutStreamSelection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.putStreamSelection"></a>

```go
func PutStreamSelection(value MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.putStreamSelection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection">MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection</a>

---

##### `ResetManifestLayout` <a name="ResetManifestLayout" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.resetManifestLayout"></a>

```go
func ResetManifestLayout()
```

##### `ResetManifestName` <a name="ResetManifestName" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.resetManifestName"></a>

```go
func ResetManifestName()
```

##### `ResetMinBufferTimeSeconds` <a name="ResetMinBufferTimeSeconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.resetMinBufferTimeSeconds"></a>

```go
func ResetMinBufferTimeSeconds()
```

##### `ResetProfile` <a name="ResetProfile" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.resetProfile"></a>

```go
func ResetProfile()
```

##### `ResetScteMarkersSource` <a name="ResetScteMarkersSource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.resetScteMarkersSource"></a>

```go
func ResetScteMarkersSource()
```

##### `ResetStreamSelection` <a name="ResetStreamSelection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.resetStreamSelection"></a>

```go
func ResetStreamSelection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.streamSelection">StreamSelection</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference">MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.manifestLayoutInput">ManifestLayoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.manifestNameInput">ManifestNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.minBufferTimeSecondsInput">MinBufferTimeSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.profileInput">ProfileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.scteMarkersSourceInput">ScteMarkersSourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.streamSelectionInput">StreamSelectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.manifestLayout">ManifestLayout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.manifestName">ManifestName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.minBufferTimeSeconds">MinBufferTimeSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.profile">Profile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.scteMarkersSource">ScteMarkersSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StreamSelection`<sup>Required</sup> <a name="StreamSelection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.streamSelection"></a>

```go
func StreamSelection() MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference">MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference</a>

---

##### `ManifestLayoutInput`<sup>Optional</sup> <a name="ManifestLayoutInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.manifestLayoutInput"></a>

```go
func ManifestLayoutInput() *string
```

- *Type:* *string

---

##### `ManifestNameInput`<sup>Optional</sup> <a name="ManifestNameInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.manifestNameInput"></a>

```go
func ManifestNameInput() *string
```

- *Type:* *string

---

##### `MinBufferTimeSecondsInput`<sup>Optional</sup> <a name="MinBufferTimeSecondsInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.minBufferTimeSecondsInput"></a>

```go
func MinBufferTimeSecondsInput() *f64
```

- *Type:* *f64

---

##### `ProfileInput`<sup>Optional</sup> <a name="ProfileInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.profileInput"></a>

```go
func ProfileInput() *string
```

- *Type:* *string

---

##### `ScteMarkersSourceInput`<sup>Optional</sup> <a name="ScteMarkersSourceInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.scteMarkersSourceInput"></a>

```go
func ScteMarkersSourceInput() *string
```

- *Type:* *string

---

##### `StreamSelectionInput`<sup>Optional</sup> <a name="StreamSelectionInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.streamSelectionInput"></a>

```go
func StreamSelectionInput() interface{}
```

- *Type:* interface{}

---

##### `ManifestLayout`<sup>Required</sup> <a name="ManifestLayout" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.manifestLayout"></a>

```go
func ManifestLayout() *string
```

- *Type:* *string

---

##### `ManifestName`<sup>Required</sup> <a name="ManifestName" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.manifestName"></a>

```go
func ManifestName() *string
```

- *Type:* *string

---

##### `MinBufferTimeSeconds`<sup>Required</sup> <a name="MinBufferTimeSeconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.minBufferTimeSeconds"></a>

```go
func MinBufferTimeSeconds() *f64
```

- *Type:* *f64

---

##### `Profile`<sup>Required</sup> <a name="Profile" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.profile"></a>

```go
func Profile() *string
```

- *Type:* *string

---

##### `ScteMarkersSource`<sup>Required</sup> <a name="ScteMarkersSource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.scteMarkersSource"></a>

```go
func ScteMarkersSource() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference <a name="MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackagingconfiguration"

mediapackagepackagingconfiguration.NewMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.resetMaxVideoBitsPerSecond">ResetMaxVideoBitsPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.resetMinVideoBitsPerSecond">ResetMinVideoBitsPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.resetStreamOrder">ResetStreamOrder</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxVideoBitsPerSecond` <a name="ResetMaxVideoBitsPerSecond" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.resetMaxVideoBitsPerSecond"></a>

```go
func ResetMaxVideoBitsPerSecond()
```

##### `ResetMinVideoBitsPerSecond` <a name="ResetMinVideoBitsPerSecond" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.resetMinVideoBitsPerSecond"></a>

```go
func ResetMinVideoBitsPerSecond()
```

##### `ResetStreamOrder` <a name="ResetStreamOrder" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.resetStreamOrder"></a>

```go
func ResetStreamOrder()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecondInput">MaxVideoBitsPerSecondInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecondInput">MinVideoBitsPerSecondInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.streamOrderInput">StreamOrderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecond">MaxVideoBitsPerSecond</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecond">MinVideoBitsPerSecond</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.streamOrder">StreamOrder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxVideoBitsPerSecondInput`<sup>Optional</sup> <a name="MaxVideoBitsPerSecondInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecondInput"></a>

```go
func MaxVideoBitsPerSecondInput() *f64
```

- *Type:* *f64

---

##### `MinVideoBitsPerSecondInput`<sup>Optional</sup> <a name="MinVideoBitsPerSecondInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecondInput"></a>

```go
func MinVideoBitsPerSecondInput() *f64
```

- *Type:* *f64

---

##### `StreamOrderInput`<sup>Optional</sup> <a name="StreamOrderInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.streamOrderInput"></a>

```go
func StreamOrderInput() *string
```

- *Type:* *string

---

##### `MaxVideoBitsPerSecond`<sup>Required</sup> <a name="MaxVideoBitsPerSecond" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecond"></a>

```go
func MaxVideoBitsPerSecond() *f64
```

- *Type:* *f64

---

##### `MinVideoBitsPerSecond`<sup>Required</sup> <a name="MinVideoBitsPerSecond" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecond"></a>

```go
func MinVideoBitsPerSecond() *f64
```

- *Type:* *f64

---

##### `StreamOrder`<sup>Required</sup> <a name="StreamOrder" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.streamOrder"></a>

```go
func StreamOrder() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediapackagePackagingConfigurationDashPackageEncryptionOutputReference <a name="MediapackagePackagingConfigurationDashPackageEncryptionOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackagingconfiguration"

mediapackagepackagingconfiguration.NewMediapackagePackagingConfigurationDashPackageEncryptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediapackagePackagingConfigurationDashPackageEncryptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.putSpekeKeyProvider">PutSpekeKeyProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.resetSpekeKeyProvider">ResetSpekeKeyProvider</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSpekeKeyProvider` <a name="PutSpekeKeyProvider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.putSpekeKeyProvider"></a>

```go
func PutSpekeKeyProvider(value MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.putSpekeKeyProvider.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider</a>

---

##### `ResetSpekeKeyProvider` <a name="ResetSpekeKeyProvider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.resetSpekeKeyProvider"></a>

```go
func ResetSpekeKeyProvider()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.property.spekeKeyProvider">SpekeKeyProvider</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference">MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.property.spekeKeyProviderInput">SpekeKeyProviderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SpekeKeyProvider`<sup>Required</sup> <a name="SpekeKeyProvider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.property.spekeKeyProvider"></a>

```go
func SpekeKeyProvider() MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference">MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference</a>

---

##### `SpekeKeyProviderInput`<sup>Optional</sup> <a name="SpekeKeyProviderInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.property.spekeKeyProviderInput"></a>

```go
func SpekeKeyProviderInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference <a name="MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackagingconfiguration"

mediapackagepackagingconfiguration.NewMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resetPresetSpeke20Audio">ResetPresetSpeke20Audio</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resetPresetSpeke20Video">ResetPresetSpeke20Video</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPresetSpeke20Audio` <a name="ResetPresetSpeke20Audio" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resetPresetSpeke20Audio"></a>

```go
func ResetPresetSpeke20Audio()
```

##### `ResetPresetSpeke20Video` <a name="ResetPresetSpeke20Video" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resetPresetSpeke20Video"></a>

```go
func ResetPresetSpeke20Video()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20AudioInput">PresetSpeke20AudioInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20VideoInput">PresetSpeke20VideoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Audio">PresetSpeke20Audio</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Video">PresetSpeke20Video</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PresetSpeke20AudioInput`<sup>Optional</sup> <a name="PresetSpeke20AudioInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20AudioInput"></a>

```go
func PresetSpeke20AudioInput() *string
```

- *Type:* *string

---

##### `PresetSpeke20VideoInput`<sup>Optional</sup> <a name="PresetSpeke20VideoInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20VideoInput"></a>

```go
func PresetSpeke20VideoInput() *string
```

- *Type:* *string

---

##### `PresetSpeke20Audio`<sup>Required</sup> <a name="PresetSpeke20Audio" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Audio"></a>

```go
func PresetSpeke20Audio() *string
```

- *Type:* *string

---

##### `PresetSpeke20Video`<sup>Required</sup> <a name="PresetSpeke20Video" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Video"></a>

```go
func PresetSpeke20Video() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference <a name="MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackagingconfiguration"

mediapackagepackagingconfiguration.NewMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.putEncryptionContractConfiguration">PutEncryptionContractConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.resetEncryptionContractConfiguration">ResetEncryptionContractConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.resetSystemIds">ResetSystemIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEncryptionContractConfiguration` <a name="PutEncryptionContractConfiguration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.putEncryptionContractConfiguration"></a>

```go
func PutEncryptionContractConfiguration(value MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.putEncryptionContractConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a>

---

##### `ResetEncryptionContractConfiguration` <a name="ResetEncryptionContractConfiguration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.resetEncryptionContractConfiguration"></a>

```go
func ResetEncryptionContractConfiguration()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.resetRoleArn"></a>

```go
func ResetRoleArn()
```

##### `ResetSystemIds` <a name="ResetSystemIds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.resetSystemIds"></a>

```go
func ResetSystemIds()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.resetUrl"></a>

```go
func ResetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfiguration">EncryptionContractConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference">MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfigurationInput">EncryptionContractConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.systemIdsInput">SystemIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.systemIds">SystemIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionContractConfiguration`<sup>Required</sup> <a name="EncryptionContractConfiguration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfiguration"></a>

```go
func EncryptionContractConfiguration() MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference">MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference</a>

---

##### `EncryptionContractConfigurationInput`<sup>Optional</sup> <a name="EncryptionContractConfigurationInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfigurationInput"></a>

```go
func EncryptionContractConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `SystemIdsInput`<sup>Optional</sup> <a name="SystemIdsInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.systemIdsInput"></a>

```go
func SystemIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `SystemIds`<sup>Required</sup> <a name="SystemIds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.systemIds"></a>

```go
func SystemIds() *[]*string
```

- *Type:* *[]*string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediapackagePackagingConfigurationDashPackageOutputReference <a name="MediapackagePackagingConfigurationDashPackageOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackagingconfiguration"

mediapackagepackagingconfiguration.NewMediapackagePackagingConfigurationDashPackageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediapackagePackagingConfigurationDashPackageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.putDashManifests">PutDashManifests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.putEncryption">PutEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.resetDashManifests">ResetDashManifests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.resetEncryption">ResetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.resetIncludeEncoderConfigurationInSegments">ResetIncludeEncoderConfigurationInSegments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.resetIncludeIframeOnlyStream">ResetIncludeIframeOnlyStream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.resetPeriodTriggers">ResetPeriodTriggers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.resetSegmentDurationSeconds">ResetSegmentDurationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.resetSegmentTemplateFormat">ResetSegmentTemplateFormat</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDashManifests` <a name="PutDashManifests" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.putDashManifests"></a>

```go
func PutDashManifests(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.putDashManifests.parameter.value"></a>

- *Type:* interface{}

---

##### `PutEncryption` <a name="PutEncryption" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.putEncryption"></a>

```go
func PutEncryption(value MediapackagePackagingConfigurationDashPackageEncryption)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.putEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryption">MediapackagePackagingConfigurationDashPackageEncryption</a>

---

##### `ResetDashManifests` <a name="ResetDashManifests" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.resetDashManifests"></a>

```go
func ResetDashManifests()
```

##### `ResetEncryption` <a name="ResetEncryption" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.resetEncryption"></a>

```go
func ResetEncryption()
```

##### `ResetIncludeEncoderConfigurationInSegments` <a name="ResetIncludeEncoderConfigurationInSegments" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.resetIncludeEncoderConfigurationInSegments"></a>

```go
func ResetIncludeEncoderConfigurationInSegments()
```

##### `ResetIncludeIframeOnlyStream` <a name="ResetIncludeIframeOnlyStream" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.resetIncludeIframeOnlyStream"></a>

```go
func ResetIncludeIframeOnlyStream()
```

##### `ResetPeriodTriggers` <a name="ResetPeriodTriggers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.resetPeriodTriggers"></a>

```go
func ResetPeriodTriggers()
```

##### `ResetSegmentDurationSeconds` <a name="ResetSegmentDurationSeconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.resetSegmentDurationSeconds"></a>

```go
func ResetSegmentDurationSeconds()
```

##### `ResetSegmentTemplateFormat` <a name="ResetSegmentTemplateFormat" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.resetSegmentTemplateFormat"></a>

```go
func ResetSegmentTemplateFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.dashManifests">DashManifests</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList">MediapackagePackagingConfigurationDashPackageDashManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.encryption">Encryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference">MediapackagePackagingConfigurationDashPackageEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.dashManifestsInput">DashManifestsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.encryptionInput">EncryptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.includeEncoderConfigurationInSegmentsInput">IncludeEncoderConfigurationInSegmentsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.includeIframeOnlyStreamInput">IncludeIframeOnlyStreamInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.periodTriggersInput">PeriodTriggersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.segmentDurationSecondsInput">SegmentDurationSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.segmentTemplateFormatInput">SegmentTemplateFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.includeEncoderConfigurationInSegments">IncludeEncoderConfigurationInSegments</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.includeIframeOnlyStream">IncludeIframeOnlyStream</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.periodTriggers">PeriodTriggers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.segmentDurationSeconds">SegmentDurationSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.segmentTemplateFormat">SegmentTemplateFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DashManifests`<sup>Required</sup> <a name="DashManifests" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.dashManifests"></a>

```go
func DashManifests() MediapackagePackagingConfigurationDashPackageDashManifestsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList">MediapackagePackagingConfigurationDashPackageDashManifestsList</a>

---

##### `Encryption`<sup>Required</sup> <a name="Encryption" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.encryption"></a>

```go
func Encryption() MediapackagePackagingConfigurationDashPackageEncryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference">MediapackagePackagingConfigurationDashPackageEncryptionOutputReference</a>

---

##### `DashManifestsInput`<sup>Optional</sup> <a name="DashManifestsInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.dashManifestsInput"></a>

```go
func DashManifestsInput() interface{}
```

- *Type:* interface{}

---

##### `EncryptionInput`<sup>Optional</sup> <a name="EncryptionInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.encryptionInput"></a>

```go
func EncryptionInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeEncoderConfigurationInSegmentsInput`<sup>Optional</sup> <a name="IncludeEncoderConfigurationInSegmentsInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.includeEncoderConfigurationInSegmentsInput"></a>

```go
func IncludeEncoderConfigurationInSegmentsInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeIframeOnlyStreamInput`<sup>Optional</sup> <a name="IncludeIframeOnlyStreamInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.includeIframeOnlyStreamInput"></a>

```go
func IncludeIframeOnlyStreamInput() interface{}
```

- *Type:* interface{}

---

##### `PeriodTriggersInput`<sup>Optional</sup> <a name="PeriodTriggersInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.periodTriggersInput"></a>

```go
func PeriodTriggersInput() *[]*string
```

- *Type:* *[]*string

---

##### `SegmentDurationSecondsInput`<sup>Optional</sup> <a name="SegmentDurationSecondsInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.segmentDurationSecondsInput"></a>

```go
func SegmentDurationSecondsInput() *f64
```

- *Type:* *f64

---

##### `SegmentTemplateFormatInput`<sup>Optional</sup> <a name="SegmentTemplateFormatInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.segmentTemplateFormatInput"></a>

```go
func SegmentTemplateFormatInput() *string
```

- *Type:* *string

---

##### `IncludeEncoderConfigurationInSegments`<sup>Required</sup> <a name="IncludeEncoderConfigurationInSegments" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.includeEncoderConfigurationInSegments"></a>

```go
func IncludeEncoderConfigurationInSegments() interface{}
```

- *Type:* interface{}

---

##### `IncludeIframeOnlyStream`<sup>Required</sup> <a name="IncludeIframeOnlyStream" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.includeIframeOnlyStream"></a>

```go
func IncludeIframeOnlyStream() interface{}
```

- *Type:* interface{}

---

##### `PeriodTriggers`<sup>Required</sup> <a name="PeriodTriggers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.periodTriggers"></a>

```go
func PeriodTriggers() *[]*string
```

- *Type:* *[]*string

---

##### `SegmentDurationSeconds`<sup>Required</sup> <a name="SegmentDurationSeconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.segmentDurationSeconds"></a>

```go
func SegmentDurationSeconds() *f64
```

- *Type:* *f64

---

##### `SegmentTemplateFormat`<sup>Required</sup> <a name="SegmentTemplateFormat" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.segmentTemplateFormat"></a>

```go
func SegmentTemplateFormat() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference <a name="MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackagingconfiguration"

mediapackagepackagingconfiguration.NewMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.putSpekeKeyProvider">PutSpekeKeyProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.resetConstantInitializationVector">ResetConstantInitializationVector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.resetEncryptionMethod">ResetEncryptionMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.resetSpekeKeyProvider">ResetSpekeKeyProvider</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSpekeKeyProvider` <a name="PutSpekeKeyProvider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.putSpekeKeyProvider"></a>

```go
func PutSpekeKeyProvider(value MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.putSpekeKeyProvider.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider</a>

---

##### `ResetConstantInitializationVector` <a name="ResetConstantInitializationVector" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.resetConstantInitializationVector"></a>

```go
func ResetConstantInitializationVector()
```

##### `ResetEncryptionMethod` <a name="ResetEncryptionMethod" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.resetEncryptionMethod"></a>

```go
func ResetEncryptionMethod()
```

##### `ResetSpekeKeyProvider` <a name="ResetSpekeKeyProvider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.resetSpekeKeyProvider"></a>

```go
func ResetSpekeKeyProvider()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.spekeKeyProvider">SpekeKeyProvider</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference">MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.constantInitializationVectorInput">ConstantInitializationVectorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.encryptionMethodInput">EncryptionMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.spekeKeyProviderInput">SpekeKeyProviderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.constantInitializationVector">ConstantInitializationVector</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.encryptionMethod">EncryptionMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SpekeKeyProvider`<sup>Required</sup> <a name="SpekeKeyProvider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.spekeKeyProvider"></a>

```go
func SpekeKeyProvider() MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference">MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference</a>

---

##### `ConstantInitializationVectorInput`<sup>Optional</sup> <a name="ConstantInitializationVectorInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.constantInitializationVectorInput"></a>

```go
func ConstantInitializationVectorInput() *string
```

- *Type:* *string

---

##### `EncryptionMethodInput`<sup>Optional</sup> <a name="EncryptionMethodInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.encryptionMethodInput"></a>

```go
func EncryptionMethodInput() *string
```

- *Type:* *string

---

##### `SpekeKeyProviderInput`<sup>Optional</sup> <a name="SpekeKeyProviderInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.spekeKeyProviderInput"></a>

```go
func SpekeKeyProviderInput() interface{}
```

- *Type:* interface{}

---

##### `ConstantInitializationVector`<sup>Required</sup> <a name="ConstantInitializationVector" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.constantInitializationVector"></a>

```go
func ConstantInitializationVector() *string
```

- *Type:* *string

---

##### `EncryptionMethod`<sup>Required</sup> <a name="EncryptionMethod" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.encryptionMethod"></a>

```go
func EncryptionMethod() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference <a name="MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackagingconfiguration"

mediapackagepackagingconfiguration.NewMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resetPresetSpeke20Audio">ResetPresetSpeke20Audio</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resetPresetSpeke20Video">ResetPresetSpeke20Video</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPresetSpeke20Audio` <a name="ResetPresetSpeke20Audio" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resetPresetSpeke20Audio"></a>

```go
func ResetPresetSpeke20Audio()
```

##### `ResetPresetSpeke20Video` <a name="ResetPresetSpeke20Video" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resetPresetSpeke20Video"></a>

```go
func ResetPresetSpeke20Video()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20AudioInput">PresetSpeke20AudioInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20VideoInput">PresetSpeke20VideoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Audio">PresetSpeke20Audio</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Video">PresetSpeke20Video</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PresetSpeke20AudioInput`<sup>Optional</sup> <a name="PresetSpeke20AudioInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20AudioInput"></a>

```go
func PresetSpeke20AudioInput() *string
```

- *Type:* *string

---

##### `PresetSpeke20VideoInput`<sup>Optional</sup> <a name="PresetSpeke20VideoInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20VideoInput"></a>

```go
func PresetSpeke20VideoInput() *string
```

- *Type:* *string

---

##### `PresetSpeke20Audio`<sup>Required</sup> <a name="PresetSpeke20Audio" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Audio"></a>

```go
func PresetSpeke20Audio() *string
```

- *Type:* *string

---

##### `PresetSpeke20Video`<sup>Required</sup> <a name="PresetSpeke20Video" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Video"></a>

```go
func PresetSpeke20Video() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference <a name="MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackagingconfiguration"

mediapackagepackagingconfiguration.NewMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.putEncryptionContractConfiguration">PutEncryptionContractConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.resetEncryptionContractConfiguration">ResetEncryptionContractConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.resetSystemIds">ResetSystemIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEncryptionContractConfiguration` <a name="PutEncryptionContractConfiguration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.putEncryptionContractConfiguration"></a>

```go
func PutEncryptionContractConfiguration(value MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.putEncryptionContractConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a>

---

##### `ResetEncryptionContractConfiguration` <a name="ResetEncryptionContractConfiguration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.resetEncryptionContractConfiguration"></a>

```go
func ResetEncryptionContractConfiguration()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.resetRoleArn"></a>

```go
func ResetRoleArn()
```

##### `ResetSystemIds` <a name="ResetSystemIds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.resetSystemIds"></a>

```go
func ResetSystemIds()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.resetUrl"></a>

```go
func ResetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfiguration">EncryptionContractConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference">MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfigurationInput">EncryptionContractConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.systemIdsInput">SystemIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.systemIds">SystemIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionContractConfiguration`<sup>Required</sup> <a name="EncryptionContractConfiguration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfiguration"></a>

```go
func EncryptionContractConfiguration() MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference">MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference</a>

---

##### `EncryptionContractConfigurationInput`<sup>Optional</sup> <a name="EncryptionContractConfigurationInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfigurationInput"></a>

```go
func EncryptionContractConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `SystemIdsInput`<sup>Optional</sup> <a name="SystemIdsInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.systemIdsInput"></a>

```go
func SystemIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `SystemIds`<sup>Required</sup> <a name="SystemIds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.systemIds"></a>

```go
func SystemIds() *[]*string
```

- *Type:* *[]*string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediapackagePackagingConfigurationHlsPackageHlsManifestsList <a name="MediapackagePackagingConfigurationHlsPackageHlsManifestsList" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackagingconfiguration"

mediapackagepackagingconfiguration.NewMediapackagePackagingConfigurationHlsPackageHlsManifestsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MediapackagePackagingConfigurationHlsPackageHlsManifestsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.get"></a>

```go
func Get(index *f64) MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference <a name="MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackagingconfiguration"

mediapackagepackagingconfiguration.NewMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.putStreamSelection">PutStreamSelection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.resetAdMarkers">ResetAdMarkers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.resetIncludeIframeOnlyStream">ResetIncludeIframeOnlyStream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.resetManifestName">ResetManifestName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.resetProgramDateTimeIntervalSeconds">ResetProgramDateTimeIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.resetRepeatExtXKey">ResetRepeatExtXKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.resetStreamSelection">ResetStreamSelection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStreamSelection` <a name="PutStreamSelection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.putStreamSelection"></a>

```go
func PutStreamSelection(value MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.putStreamSelection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection">MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection</a>

---

##### `ResetAdMarkers` <a name="ResetAdMarkers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.resetAdMarkers"></a>

```go
func ResetAdMarkers()
```

##### `ResetIncludeIframeOnlyStream` <a name="ResetIncludeIframeOnlyStream" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.resetIncludeIframeOnlyStream"></a>

```go
func ResetIncludeIframeOnlyStream()
```

##### `ResetManifestName` <a name="ResetManifestName" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.resetManifestName"></a>

```go
func ResetManifestName()
```

##### `ResetProgramDateTimeIntervalSeconds` <a name="ResetProgramDateTimeIntervalSeconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.resetProgramDateTimeIntervalSeconds"></a>

```go
func ResetProgramDateTimeIntervalSeconds()
```

##### `ResetRepeatExtXKey` <a name="ResetRepeatExtXKey" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.resetRepeatExtXKey"></a>

```go
func ResetRepeatExtXKey()
```

##### `ResetStreamSelection` <a name="ResetStreamSelection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.resetStreamSelection"></a>

```go
func ResetStreamSelection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.streamSelection">StreamSelection</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference">MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.adMarkersInput">AdMarkersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.includeIframeOnlyStreamInput">IncludeIframeOnlyStreamInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.manifestNameInput">ManifestNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.programDateTimeIntervalSecondsInput">ProgramDateTimeIntervalSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.repeatExtXKeyInput">RepeatExtXKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.streamSelectionInput">StreamSelectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.adMarkers">AdMarkers</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.includeIframeOnlyStream">IncludeIframeOnlyStream</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.manifestName">ManifestName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.programDateTimeIntervalSeconds">ProgramDateTimeIntervalSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.repeatExtXKey">RepeatExtXKey</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StreamSelection`<sup>Required</sup> <a name="StreamSelection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.streamSelection"></a>

```go
func StreamSelection() MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference">MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference</a>

---

##### `AdMarkersInput`<sup>Optional</sup> <a name="AdMarkersInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.adMarkersInput"></a>

```go
func AdMarkersInput() *string
```

- *Type:* *string

---

##### `IncludeIframeOnlyStreamInput`<sup>Optional</sup> <a name="IncludeIframeOnlyStreamInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.includeIframeOnlyStreamInput"></a>

```go
func IncludeIframeOnlyStreamInput() interface{}
```

- *Type:* interface{}

---

##### `ManifestNameInput`<sup>Optional</sup> <a name="ManifestNameInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.manifestNameInput"></a>

```go
func ManifestNameInput() *string
```

- *Type:* *string

---

##### `ProgramDateTimeIntervalSecondsInput`<sup>Optional</sup> <a name="ProgramDateTimeIntervalSecondsInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.programDateTimeIntervalSecondsInput"></a>

```go
func ProgramDateTimeIntervalSecondsInput() *f64
```

- *Type:* *f64

---

##### `RepeatExtXKeyInput`<sup>Optional</sup> <a name="RepeatExtXKeyInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.repeatExtXKeyInput"></a>

```go
func RepeatExtXKeyInput() interface{}
```

- *Type:* interface{}

---

##### `StreamSelectionInput`<sup>Optional</sup> <a name="StreamSelectionInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.streamSelectionInput"></a>

```go
func StreamSelectionInput() interface{}
```

- *Type:* interface{}

---

##### `AdMarkers`<sup>Required</sup> <a name="AdMarkers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.adMarkers"></a>

```go
func AdMarkers() *string
```

- *Type:* *string

---

##### `IncludeIframeOnlyStream`<sup>Required</sup> <a name="IncludeIframeOnlyStream" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.includeIframeOnlyStream"></a>

```go
func IncludeIframeOnlyStream() interface{}
```

- *Type:* interface{}

---

##### `ManifestName`<sup>Required</sup> <a name="ManifestName" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.manifestName"></a>

```go
func ManifestName() *string
```

- *Type:* *string

---

##### `ProgramDateTimeIntervalSeconds`<sup>Required</sup> <a name="ProgramDateTimeIntervalSeconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.programDateTimeIntervalSeconds"></a>

```go
func ProgramDateTimeIntervalSeconds() *f64
```

- *Type:* *f64

---

##### `RepeatExtXKey`<sup>Required</sup> <a name="RepeatExtXKey" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.repeatExtXKey"></a>

```go
func RepeatExtXKey() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference <a name="MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackagingconfiguration"

mediapackagepackagingconfiguration.NewMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.resetMaxVideoBitsPerSecond">ResetMaxVideoBitsPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.resetMinVideoBitsPerSecond">ResetMinVideoBitsPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.resetStreamOrder">ResetStreamOrder</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxVideoBitsPerSecond` <a name="ResetMaxVideoBitsPerSecond" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.resetMaxVideoBitsPerSecond"></a>

```go
func ResetMaxVideoBitsPerSecond()
```

##### `ResetMinVideoBitsPerSecond` <a name="ResetMinVideoBitsPerSecond" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.resetMinVideoBitsPerSecond"></a>

```go
func ResetMinVideoBitsPerSecond()
```

##### `ResetStreamOrder` <a name="ResetStreamOrder" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.resetStreamOrder"></a>

```go
func ResetStreamOrder()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecondInput">MaxVideoBitsPerSecondInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecondInput">MinVideoBitsPerSecondInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.streamOrderInput">StreamOrderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecond">MaxVideoBitsPerSecond</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecond">MinVideoBitsPerSecond</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.streamOrder">StreamOrder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxVideoBitsPerSecondInput`<sup>Optional</sup> <a name="MaxVideoBitsPerSecondInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecondInput"></a>

```go
func MaxVideoBitsPerSecondInput() *f64
```

- *Type:* *f64

---

##### `MinVideoBitsPerSecondInput`<sup>Optional</sup> <a name="MinVideoBitsPerSecondInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecondInput"></a>

```go
func MinVideoBitsPerSecondInput() *f64
```

- *Type:* *f64

---

##### `StreamOrderInput`<sup>Optional</sup> <a name="StreamOrderInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.streamOrderInput"></a>

```go
func StreamOrderInput() *string
```

- *Type:* *string

---

##### `MaxVideoBitsPerSecond`<sup>Required</sup> <a name="MaxVideoBitsPerSecond" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecond"></a>

```go
func MaxVideoBitsPerSecond() *f64
```

- *Type:* *f64

---

##### `MinVideoBitsPerSecond`<sup>Required</sup> <a name="MinVideoBitsPerSecond" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecond"></a>

```go
func MinVideoBitsPerSecond() *f64
```

- *Type:* *f64

---

##### `StreamOrder`<sup>Required</sup> <a name="StreamOrder" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.streamOrder"></a>

```go
func StreamOrder() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediapackagePackagingConfigurationHlsPackageOutputReference <a name="MediapackagePackagingConfigurationHlsPackageOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackagingconfiguration"

mediapackagepackagingconfiguration.NewMediapackagePackagingConfigurationHlsPackageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediapackagePackagingConfigurationHlsPackageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.putEncryption">PutEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.putHlsManifests">PutHlsManifests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.resetEncryption">ResetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.resetHlsManifests">ResetHlsManifests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.resetIncludeDvbSubtitles">ResetIncludeDvbSubtitles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.resetSegmentDurationSeconds">ResetSegmentDurationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.resetUseAudioRenditionGroup">ResetUseAudioRenditionGroup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEncryption` <a name="PutEncryption" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.putEncryption"></a>

```go
func PutEncryption(value MediapackagePackagingConfigurationHlsPackageEncryption)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.putEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryption">MediapackagePackagingConfigurationHlsPackageEncryption</a>

---

##### `PutHlsManifests` <a name="PutHlsManifests" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.putHlsManifests"></a>

```go
func PutHlsManifests(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.putHlsManifests.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEncryption` <a name="ResetEncryption" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.resetEncryption"></a>

```go
func ResetEncryption()
```

##### `ResetHlsManifests` <a name="ResetHlsManifests" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.resetHlsManifests"></a>

```go
func ResetHlsManifests()
```

##### `ResetIncludeDvbSubtitles` <a name="ResetIncludeDvbSubtitles" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.resetIncludeDvbSubtitles"></a>

```go
func ResetIncludeDvbSubtitles()
```

##### `ResetSegmentDurationSeconds` <a name="ResetSegmentDurationSeconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.resetSegmentDurationSeconds"></a>

```go
func ResetSegmentDurationSeconds()
```

##### `ResetUseAudioRenditionGroup` <a name="ResetUseAudioRenditionGroup" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.resetUseAudioRenditionGroup"></a>

```go
func ResetUseAudioRenditionGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.encryption">Encryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference">MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.hlsManifests">HlsManifests</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList">MediapackagePackagingConfigurationHlsPackageHlsManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.encryptionInput">EncryptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.hlsManifestsInput">HlsManifestsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.includeDvbSubtitlesInput">IncludeDvbSubtitlesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.segmentDurationSecondsInput">SegmentDurationSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.useAudioRenditionGroupInput">UseAudioRenditionGroupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.includeDvbSubtitles">IncludeDvbSubtitles</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.segmentDurationSeconds">SegmentDurationSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.useAudioRenditionGroup">UseAudioRenditionGroup</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Encryption`<sup>Required</sup> <a name="Encryption" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.encryption"></a>

```go
func Encryption() MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference">MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference</a>

---

##### `HlsManifests`<sup>Required</sup> <a name="HlsManifests" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.hlsManifests"></a>

```go
func HlsManifests() MediapackagePackagingConfigurationHlsPackageHlsManifestsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList">MediapackagePackagingConfigurationHlsPackageHlsManifestsList</a>

---

##### `EncryptionInput`<sup>Optional</sup> <a name="EncryptionInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.encryptionInput"></a>

```go
func EncryptionInput() interface{}
```

- *Type:* interface{}

---

##### `HlsManifestsInput`<sup>Optional</sup> <a name="HlsManifestsInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.hlsManifestsInput"></a>

```go
func HlsManifestsInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeDvbSubtitlesInput`<sup>Optional</sup> <a name="IncludeDvbSubtitlesInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.includeDvbSubtitlesInput"></a>

```go
func IncludeDvbSubtitlesInput() interface{}
```

- *Type:* interface{}

---

##### `SegmentDurationSecondsInput`<sup>Optional</sup> <a name="SegmentDurationSecondsInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.segmentDurationSecondsInput"></a>

```go
func SegmentDurationSecondsInput() *f64
```

- *Type:* *f64

---

##### `UseAudioRenditionGroupInput`<sup>Optional</sup> <a name="UseAudioRenditionGroupInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.useAudioRenditionGroupInput"></a>

```go
func UseAudioRenditionGroupInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeDvbSubtitles`<sup>Required</sup> <a name="IncludeDvbSubtitles" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.includeDvbSubtitles"></a>

```go
func IncludeDvbSubtitles() interface{}
```

- *Type:* interface{}

---

##### `SegmentDurationSeconds`<sup>Required</sup> <a name="SegmentDurationSeconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.segmentDurationSeconds"></a>

```go
func SegmentDurationSeconds() *f64
```

- *Type:* *f64

---

##### `UseAudioRenditionGroup`<sup>Required</sup> <a name="UseAudioRenditionGroup" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.useAudioRenditionGroup"></a>

```go
func UseAudioRenditionGroup() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediapackagePackagingConfigurationMssPackageEncryptionOutputReference <a name="MediapackagePackagingConfigurationMssPackageEncryptionOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackagingconfiguration"

mediapackagepackagingconfiguration.NewMediapackagePackagingConfigurationMssPackageEncryptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediapackagePackagingConfigurationMssPackageEncryptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.putSpekeKeyProvider">PutSpekeKeyProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.resetSpekeKeyProvider">ResetSpekeKeyProvider</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSpekeKeyProvider` <a name="PutSpekeKeyProvider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.putSpekeKeyProvider"></a>

```go
func PutSpekeKeyProvider(value MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.putSpekeKeyProvider.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider</a>

---

##### `ResetSpekeKeyProvider` <a name="ResetSpekeKeyProvider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.resetSpekeKeyProvider"></a>

```go
func ResetSpekeKeyProvider()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.property.spekeKeyProvider">SpekeKeyProvider</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference">MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.property.spekeKeyProviderInput">SpekeKeyProviderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SpekeKeyProvider`<sup>Required</sup> <a name="SpekeKeyProvider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.property.spekeKeyProvider"></a>

```go
func SpekeKeyProvider() MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference">MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference</a>

---

##### `SpekeKeyProviderInput`<sup>Optional</sup> <a name="SpekeKeyProviderInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.property.spekeKeyProviderInput"></a>

```go
func SpekeKeyProviderInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference <a name="MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackagingconfiguration"

mediapackagepackagingconfiguration.NewMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resetPresetSpeke20Audio">ResetPresetSpeke20Audio</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resetPresetSpeke20Video">ResetPresetSpeke20Video</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPresetSpeke20Audio` <a name="ResetPresetSpeke20Audio" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resetPresetSpeke20Audio"></a>

```go
func ResetPresetSpeke20Audio()
```

##### `ResetPresetSpeke20Video` <a name="ResetPresetSpeke20Video" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resetPresetSpeke20Video"></a>

```go
func ResetPresetSpeke20Video()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20AudioInput">PresetSpeke20AudioInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20VideoInput">PresetSpeke20VideoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Audio">PresetSpeke20Audio</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Video">PresetSpeke20Video</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PresetSpeke20AudioInput`<sup>Optional</sup> <a name="PresetSpeke20AudioInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20AudioInput"></a>

```go
func PresetSpeke20AudioInput() *string
```

- *Type:* *string

---

##### `PresetSpeke20VideoInput`<sup>Optional</sup> <a name="PresetSpeke20VideoInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20VideoInput"></a>

```go
func PresetSpeke20VideoInput() *string
```

- *Type:* *string

---

##### `PresetSpeke20Audio`<sup>Required</sup> <a name="PresetSpeke20Audio" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Audio"></a>

```go
func PresetSpeke20Audio() *string
```

- *Type:* *string

---

##### `PresetSpeke20Video`<sup>Required</sup> <a name="PresetSpeke20Video" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Video"></a>

```go
func PresetSpeke20Video() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference <a name="MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackagingconfiguration"

mediapackagepackagingconfiguration.NewMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.putEncryptionContractConfiguration">PutEncryptionContractConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.resetEncryptionContractConfiguration">ResetEncryptionContractConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.resetSystemIds">ResetSystemIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEncryptionContractConfiguration` <a name="PutEncryptionContractConfiguration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.putEncryptionContractConfiguration"></a>

```go
func PutEncryptionContractConfiguration(value MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.putEncryptionContractConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a>

---

##### `ResetEncryptionContractConfiguration` <a name="ResetEncryptionContractConfiguration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.resetEncryptionContractConfiguration"></a>

```go
func ResetEncryptionContractConfiguration()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.resetRoleArn"></a>

```go
func ResetRoleArn()
```

##### `ResetSystemIds` <a name="ResetSystemIds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.resetSystemIds"></a>

```go
func ResetSystemIds()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.resetUrl"></a>

```go
func ResetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfiguration">EncryptionContractConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference">MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfigurationInput">EncryptionContractConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.systemIdsInput">SystemIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.systemIds">SystemIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionContractConfiguration`<sup>Required</sup> <a name="EncryptionContractConfiguration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfiguration"></a>

```go
func EncryptionContractConfiguration() MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference">MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference</a>

---

##### `EncryptionContractConfigurationInput`<sup>Optional</sup> <a name="EncryptionContractConfigurationInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfigurationInput"></a>

```go
func EncryptionContractConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `SystemIdsInput`<sup>Optional</sup> <a name="SystemIdsInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.systemIdsInput"></a>

```go
func SystemIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `SystemIds`<sup>Required</sup> <a name="SystemIds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.systemIds"></a>

```go
func SystemIds() *[]*string
```

- *Type:* *[]*string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediapackagePackagingConfigurationMssPackageMssManifestsList <a name="MediapackagePackagingConfigurationMssPackageMssManifestsList" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackagingconfiguration"

mediapackagepackagingconfiguration.NewMediapackagePackagingConfigurationMssPackageMssManifestsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MediapackagePackagingConfigurationMssPackageMssManifestsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.get"></a>

```go
func Get(index *f64) MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference <a name="MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackagingconfiguration"

mediapackagepackagingconfiguration.NewMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.putStreamSelection">PutStreamSelection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.resetManifestName">ResetManifestName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.resetStreamSelection">ResetStreamSelection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStreamSelection` <a name="PutStreamSelection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.putStreamSelection"></a>

```go
func PutStreamSelection(value MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.putStreamSelection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection">MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection</a>

---

##### `ResetManifestName` <a name="ResetManifestName" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.resetManifestName"></a>

```go
func ResetManifestName()
```

##### `ResetStreamSelection` <a name="ResetStreamSelection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.resetStreamSelection"></a>

```go
func ResetStreamSelection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.streamSelection">StreamSelection</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference">MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.manifestNameInput">ManifestNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.streamSelectionInput">StreamSelectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.manifestName">ManifestName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StreamSelection`<sup>Required</sup> <a name="StreamSelection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.streamSelection"></a>

```go
func StreamSelection() MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference">MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference</a>

---

##### `ManifestNameInput`<sup>Optional</sup> <a name="ManifestNameInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.manifestNameInput"></a>

```go
func ManifestNameInput() *string
```

- *Type:* *string

---

##### `StreamSelectionInput`<sup>Optional</sup> <a name="StreamSelectionInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.streamSelectionInput"></a>

```go
func StreamSelectionInput() interface{}
```

- *Type:* interface{}

---

##### `ManifestName`<sup>Required</sup> <a name="ManifestName" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.manifestName"></a>

```go
func ManifestName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference <a name="MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackagingconfiguration"

mediapackagepackagingconfiguration.NewMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.resetMaxVideoBitsPerSecond">ResetMaxVideoBitsPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.resetMinVideoBitsPerSecond">ResetMinVideoBitsPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.resetStreamOrder">ResetStreamOrder</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxVideoBitsPerSecond` <a name="ResetMaxVideoBitsPerSecond" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.resetMaxVideoBitsPerSecond"></a>

```go
func ResetMaxVideoBitsPerSecond()
```

##### `ResetMinVideoBitsPerSecond` <a name="ResetMinVideoBitsPerSecond" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.resetMinVideoBitsPerSecond"></a>

```go
func ResetMinVideoBitsPerSecond()
```

##### `ResetStreamOrder` <a name="ResetStreamOrder" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.resetStreamOrder"></a>

```go
func ResetStreamOrder()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecondInput">MaxVideoBitsPerSecondInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecondInput">MinVideoBitsPerSecondInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.streamOrderInput">StreamOrderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecond">MaxVideoBitsPerSecond</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecond">MinVideoBitsPerSecond</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.streamOrder">StreamOrder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxVideoBitsPerSecondInput`<sup>Optional</sup> <a name="MaxVideoBitsPerSecondInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecondInput"></a>

```go
func MaxVideoBitsPerSecondInput() *f64
```

- *Type:* *f64

---

##### `MinVideoBitsPerSecondInput`<sup>Optional</sup> <a name="MinVideoBitsPerSecondInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecondInput"></a>

```go
func MinVideoBitsPerSecondInput() *f64
```

- *Type:* *f64

---

##### `StreamOrderInput`<sup>Optional</sup> <a name="StreamOrderInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.streamOrderInput"></a>

```go
func StreamOrderInput() *string
```

- *Type:* *string

---

##### `MaxVideoBitsPerSecond`<sup>Required</sup> <a name="MaxVideoBitsPerSecond" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecond"></a>

```go
func MaxVideoBitsPerSecond() *f64
```

- *Type:* *f64

---

##### `MinVideoBitsPerSecond`<sup>Required</sup> <a name="MinVideoBitsPerSecond" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecond"></a>

```go
func MinVideoBitsPerSecond() *f64
```

- *Type:* *f64

---

##### `StreamOrder`<sup>Required</sup> <a name="StreamOrder" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.streamOrder"></a>

```go
func StreamOrder() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediapackagePackagingConfigurationMssPackageOutputReference <a name="MediapackagePackagingConfigurationMssPackageOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackagingconfiguration"

mediapackagepackagingconfiguration.NewMediapackagePackagingConfigurationMssPackageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediapackagePackagingConfigurationMssPackageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.putEncryption">PutEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.putMssManifests">PutMssManifests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.resetEncryption">ResetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.resetMssManifests">ResetMssManifests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.resetSegmentDurationSeconds">ResetSegmentDurationSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEncryption` <a name="PutEncryption" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.putEncryption"></a>

```go
func PutEncryption(value MediapackagePackagingConfigurationMssPackageEncryption)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.putEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryption">MediapackagePackagingConfigurationMssPackageEncryption</a>

---

##### `PutMssManifests` <a name="PutMssManifests" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.putMssManifests"></a>

```go
func PutMssManifests(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.putMssManifests.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEncryption` <a name="ResetEncryption" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.resetEncryption"></a>

```go
func ResetEncryption()
```

##### `ResetMssManifests` <a name="ResetMssManifests" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.resetMssManifests"></a>

```go
func ResetMssManifests()
```

##### `ResetSegmentDurationSeconds` <a name="ResetSegmentDurationSeconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.resetSegmentDurationSeconds"></a>

```go
func ResetSegmentDurationSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.property.encryption">Encryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference">MediapackagePackagingConfigurationMssPackageEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.property.mssManifests">MssManifests</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList">MediapackagePackagingConfigurationMssPackageMssManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.property.encryptionInput">EncryptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.property.mssManifestsInput">MssManifestsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.property.segmentDurationSecondsInput">SegmentDurationSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.property.segmentDurationSeconds">SegmentDurationSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Encryption`<sup>Required</sup> <a name="Encryption" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.property.encryption"></a>

```go
func Encryption() MediapackagePackagingConfigurationMssPackageEncryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference">MediapackagePackagingConfigurationMssPackageEncryptionOutputReference</a>

---

##### `MssManifests`<sup>Required</sup> <a name="MssManifests" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.property.mssManifests"></a>

```go
func MssManifests() MediapackagePackagingConfigurationMssPackageMssManifestsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList">MediapackagePackagingConfigurationMssPackageMssManifestsList</a>

---

##### `EncryptionInput`<sup>Optional</sup> <a name="EncryptionInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.property.encryptionInput"></a>

```go
func EncryptionInput() interface{}
```

- *Type:* interface{}

---

##### `MssManifestsInput`<sup>Optional</sup> <a name="MssManifestsInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.property.mssManifestsInput"></a>

```go
func MssManifestsInput() interface{}
```

- *Type:* interface{}

---

##### `SegmentDurationSecondsInput`<sup>Optional</sup> <a name="SegmentDurationSecondsInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.property.segmentDurationSecondsInput"></a>

```go
func SegmentDurationSecondsInput() *f64
```

- *Type:* *f64

---

##### `SegmentDurationSeconds`<sup>Required</sup> <a name="SegmentDurationSeconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.property.segmentDurationSeconds"></a>

```go
func SegmentDurationSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediapackagePackagingConfigurationTagsList <a name="MediapackagePackagingConfigurationTagsList" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackagingconfiguration"

mediapackagepackagingconfiguration.NewMediapackagePackagingConfigurationTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MediapackagePackagingConfigurationTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.get"></a>

```go
func Get(index *f64) MediapackagePackagingConfigurationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediapackagePackagingConfigurationTagsOutputReference <a name="MediapackagePackagingConfigurationTagsOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagepackagingconfiguration"

mediapackagepackagingconfiguration.NewMediapackagePackagingConfigurationTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MediapackagePackagingConfigurationTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



